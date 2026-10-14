/**
 * lib/orders.ts
 * ─────────────────────────────────────────────────────────────────
 * Order type definitions and a lightweight storage layer.
 *
 * In production (Vercel), orders are stored in Upstash Redis.
 * In local dev (no UPSTASH_REDIS_REST_URL set), orders are stored
 * in a local JSON file at data/orders.json (auto-created, gitignored).
 *
 * This abstraction means you never touch the DB directly — just call
 * saveOrder(), getOrder(), listOrders(), updateOrderStatus().
 * ─────────────────────────────────────────────────────────────────
 */

import type { StoreProduct } from "./store-catalog";

// ─── Types ───────────────────────────────────────────────────────

export type CartItem = {
  productId: string;
  productName: string;
  productType: "tyre" | "alloy" | "accessory";
  quantity: number;
  unitPrice: number;
  /** true if this line item requires a fitment appointment */
  fitmentRequired: boolean;
};

export type FulfillmentType = "delivery" | "pickup";

export type DeliveryDetails = {
  fulfillment: "delivery";
  name: string;
  phone: string;
  email?: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  /**
   * Delivery charge is NOT collected at checkout.
   * Punjab Tyre communicates the actual freight cost to the customer
   * after the order is placed. This field is always 0 in the order total.
   */
  deliveryCharge: 0;
};

export type PickupDetails = {
  fulfillment: "pickup";
  name: string;
  phone: string;
  email?: string;
  /** ISO date string "YYYY-MM-DD" */
  fitmentDate: string;
  /** "HH:MM" 24h format */
  fitmentSlot: string;
  /** Formatted label e.g. "9:30 AM" */
  fitmentSlotLabel: string;
};

export type FulfillmentDetails = DeliveryDetails | PickupDetails;

export type PaymentStatus =
  | "pending"          // order created, awaiting payment
  | "payment_confirmed" // Razorpay webhook confirmed success
  | "payment_failed";  // payment failed / abandoned

export type OrderStatus =
  | "new"             // confirmed, awaiting processing
  | "processing"      // being prepared / shipped
  | "fulfilled"       // delivered or fitment completed
  | "cancelled";      // cancelled (refund handled separately)

export type Order = {
  /** e.g. "PT-202409-0001" */
  orderId: string;
  /** Internal Razorpay order ID */
  razorpayOrderId: string;
  /** Razorpay payment ID (set after payment confirmation) */
  razorpayPaymentId?: string;
  items: CartItem[];
  subtotal: number;          // sum of all item prices
  deliveryCharge: number;    // 0 for pickup
  total: number;             // subtotal + deliveryCharge
  fulfillment: FulfillmentDetails;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  /** ISO timestamp */
  createdAt: string;
  /** ISO timestamp of last status update */
  updatedAt: string;
  /** Admin notes */
  notes?: string;
};

// ─── Order ID generator ───────────────────────────────────────────

export function generateOrderId(sequence: number): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const seq = String(sequence).padStart(4, "0");
  return `PT-${year}${month}-${seq}`;
}

// ─── Storage abstraction ──────────────────────────────────────────

/**
 * Gets the storage backend.
 * Returns a Redis client if UPSTASH_REDIS_REST_URL is set,
 * otherwise returns a local-file fallback.
 */
async function getStore(): Promise<RedisLikeStore> {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const { Redis } = await import("@upstash/redis");
    return new UpstashAdapter(new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }));
  }
  return new LocalFileStore();
}

interface RedisLikeStore {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: unknown): Promise<void>;
  incr(key: string): Promise<number>;
  lrange(key: string, start: number, stop: number): Promise<string[]>;
  rpush(key: string, ...values: string[]): Promise<void>;
}

// Upstash adapter
class UpstashAdapter implements RedisLikeStore {
  constructor(private redis: import("@upstash/redis").Redis) {}
  async get<T>(key: string): Promise<T | null> {
    return this.redis.get<T>(key);
  }
  async set(key: string, value: unknown): Promise<void> {
    await this.redis.set(key, value);
  }
  async incr(key: string): Promise<number> {
    return this.redis.incr(key);
  }
  async lrange(key: string, start: number, stop: number): Promise<string[]> {
    const items = await this.redis.lrange<string>(key, start, stop);
    return items;
  }
  async rpush(key: string, ...values: string[]): Promise<void> {
    await this.redis.rpush(key, ...values);
  }
}

// Local file adapter for dev / self-hosted
class LocalFileStore implements RedisLikeStore {
  private dataPath: string;
  private data: Record<string, unknown> = {};
  private loaded = false;

  constructor() {
    this.dataPath = process.cwd() + "/data/orders.json";
  }

  private async load() {
    if (this.loaded) return;
    const { existsSync, mkdirSync, readFileSync } = await import("fs");
    const { dirname } = await import("path");
    const dir = dirname(this.dataPath);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (existsSync(this.dataPath)) {
      try {
        this.data = JSON.parse(readFileSync(this.dataPath, "utf-8"));
      } catch {
        this.data = {};
      }
    }
    this.loaded = true;
  }

  private async save() {
    const { writeFileSync } = await import("fs");
    writeFileSync(this.dataPath, JSON.stringify(this.data, null, 2));
  }

  async get<T>(key: string): Promise<T | null> {
    await this.load();
    const val = this.data[key];
    if (val === undefined) return null;
    if (typeof val === "string") {
      try { return JSON.parse(val) as T; } catch { return val as unknown as T; }
    }
    return val as T;
  }

  async set(key: string, value: unknown): Promise<void> {
    await this.load();
    this.data[key] = typeof value === "string" ? value : JSON.stringify(value);
    await this.save();
  }

  async incr(key: string): Promise<number> {
    await this.load();
    const current = Number(this.data[key] ?? 0);
    this.data[key] = current + 1;
    await this.save();
    return current + 1;
  }

  async lrange(key: string, start: number, stop: number): Promise<string[]> {
    await this.load();
    const list = (this.data[key] as string[] | undefined) ?? [];
    return stop === -1 ? list.slice(start) : list.slice(start, stop + 1);
  }

  async rpush(key: string, ...values: string[]): Promise<void> {
    await this.load();
    const list = (this.data[key] as string[] | undefined) ?? [];
    list.push(...values);
    this.data[key] = list;
    await this.save();
  }
}

// ─── Public API ───────────────────────────────────────────────────

const ORDER_COUNTER_KEY = "pt:order:seq";
const ORDER_LIST_KEY = "pt:order:list";
const orderKey = (id: string) => `pt:order:${id}`;
const razorpayKey = (rzpId: string) => `pt:rzp:${rzpId}`;

/** Save a new order (called after Razorpay order creation) */
export async function saveOrder(order: Order): Promise<void> {
  const store = await getStore();
  await store.set(orderKey(order.orderId), order);
  await store.set(razorpayKey(order.razorpayOrderId), order.orderId);
  await store.rpush(ORDER_LIST_KEY, order.orderId);
}

/** Get an order by Punjab Tyre order ID */
export async function getOrder(orderId: string): Promise<Order | null> {
  const store = await getStore();
  return store.get<Order>(orderKey(orderId));
}

/** Get order ID from Razorpay order ID */
export async function getOrderIdByRazorpay(rzpOrderId: string): Promise<string | null> {
  const store = await getStore();
  return store.get<string>(razorpayKey(rzpOrderId));
}

/** Update an order (partial update — merges fields) */
export async function updateOrder(
  orderId: string,
  updates: Partial<Omit<Order, "orderId">>
): Promise<Order | null> {
  const store = await getStore();
  const existing = await store.get<Order>(orderKey(orderId));
  if (!existing) return null;
  const updated: Order = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await store.set(orderKey(orderId), updated);
  return updated;
}

/** List all orders (newest first, up to `limit`) */
export async function listOrders(limit = 100): Promise<Order[]> {
  const store = await getStore();
  const ids = await store.lrange(ORDER_LIST_KEY, 0, -1);
  const orders = await Promise.all(
    ids.reverse().slice(0, limit).map((id) => store.get<Order>(orderKey(id)))
  );
  return orders.filter((o): o is Order => o !== null);
}

/** Get next order sequence number */
export async function getNextOrderSequence(): Promise<number> {
  const store = await getStore();
  return store.incr(ORDER_COUNTER_KEY);
}
