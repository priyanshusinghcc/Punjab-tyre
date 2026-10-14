"use client";

/**
 * lib/cart-context.tsx
 * ─────────────────────────────────────────────────────────────────
 * React context for the shopping cart.
 * Uses localStorage for persistence across page refreshes.
 *
 * Usage:
 *   – Wrap layout with <CartProvider>
 *   – Call useCart() in any client component
 * ─────────────────────────────────────────────────────────────────
 */

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
  useState,
  type ReactNode,
} from "react";
import { type StoreProduct, getProductById } from "./store-catalog";

// ─── Cart item ────────────────────────────────────────────────────

export type CartLineItem = {
  productId: string;
  productName: string;
  productType: "tyre" | "alloy" | "accessory";
  slug: string;
  price: number;
  quantity: number;
  maxQuantity: number; // stock limit
  fitmentRequired: boolean;
  thumbnail: string;   // first image from product
};

// ─── State ────────────────────────────────────────────────────────

export type CartState = {
  items: CartLineItem[];
  /** true while localStorage is being hydrated on first render */
  hydrated: boolean;
};

// ─── Actions ─────────────────────────────────────────────────────

type CartAction =
  | { type: "ADD_ITEM"; item: CartLineItem }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QTY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; items: CartLineItem[] };

// ─── Reducer ─────────────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE": {
      const migrated = action.items.map((item) => {
        if (
          !item.thumbnail ||
          item.thumbnail.includes("placeholder") ||
          item.thumbnail.includes("ptlogo")
        ) {
          const prod = getProductById(item.productId);
          if (prod && prod.images && prod.images[0]) {
            return { ...item, thumbnail: prod.images[0] };
          }
        }
        return item;
      });
      return { items: migrated, hydrated: true };
    }

    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.productId === action.item.productId);
      if (existing) {
        // Increment quantity up to stock limit
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.item.productId
              ? { ...i, quantity: Math.min(i.quantity + 1, i.maxQuantity) }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    }

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.productId !== action.productId) };

    case "UPDATE_QTY": {
      if (action.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.productId !== action.productId) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.productId
            ? { ...i, quantity: Math.min(action.quantity, i.maxQuantity) }
            : i
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────

type CartContextValue = {
  items: CartLineItem[];
  hydrated: boolean;
  /** Total number of items (sum of quantities) */
  itemCount: number;
  /** Subtotal before delivery */
  subtotal: number;
  /** true if any item in cart requires fitment appointment */
  requiresFitment: boolean;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: StoreProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "pt_cart_v1";

// ─── Provider ─────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], hydrated: false });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: CartLineItem[] = JSON.parse(raw);
        dispatch({ type: "HYDRATE", items: parsed });
      } else {
        dispatch({ type: "HYDRATE", items: [] });
      }
    } catch {
      dispatch({ type: "HYDRATE", items: [] });
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (state.hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, state.hydrated]);

  const addItem = useCallback((product: StoreProduct) => {
    const item: CartLineItem = {
      productId: product.id,
      productName: product.name,
      productType: product.type,
      slug: product.slug,
      price: product.price,
      quantity: 1,
      maxQuantity: product.stock,
      fitmentRequired: product.fitmentRequired,
      thumbnail: product.images[0] ?? "/images/products/tyre-16-inch.jpg",
    };
    dispatch({ type: "ADD_ITEM", item });
    setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QTY", productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const requiresFitment = state.items.some((i) => i.fitmentRequired);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        hydrated: state.hydrated,
        itemCount,
        subtotal,
        requiresFitment,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
