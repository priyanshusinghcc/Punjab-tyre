/**
 * lib/store-catalog.ts
 * ─────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all purchasable products at Punjab Tyre.
 *
 * HOW TO UPDATE STOCK / PRICES:
 *   Edit the `stock` or `price` field on any product object below.
 *   Setting stock = 0 marks it "Out of Stock" in the UI automatically.
 *   Setting stock <= 3 shows "Only X left" warning badge.
 *
 * PRODUCT TYPES:
 *   - TyreStoreProduct   → links to vehicle catalog for fitment filtering
 *   - AlloyStoreProduct  → alloy wheels (always need fitment appointment)
 *   - AccessoryStoreProduct → no fitment needed (ships direct or counter pickup)
 *
 * DELIVERY PRICING:
 *   Configured in DELIVERY_CONFIG below — edit freely.
 *
 * FITMENT APPOINTMENT SLOTS:
 *   Configured in FITMENT_CONFIG below.
 * ─────────────────────────────────────────────────────────────────
 */

// ─── Base type shared by all products ───────────────────────────

export type StoreProductBase = {
  id: string;
  /** URL-safe slug → /shop/[slug] */
  slug: string;
  /** Display name shown in cards and detail pages */
  name: string;
  /** Short description for detail page */
  description: string;
  /** Array of /images/products/... paths; first image is the card thumbnail */
  images: string[];
  /** INR, tax-inclusive — the ONLY price shown anywhere on the site */
  price: number;
  /**
   * Current stock quantity.
   * 0          → Out of Stock (cannot add to cart)
   * 1–3        → "Only X left" amber warning badge
   * 4+         → In Stock (no badge)
   * 999        → use for unlimited / made-to-order items
   */
  stock: number;
  /** Tags drive filter facets and badges */
  tags: ("same-day-fitment" | "popular" | "new-arrival" | "free-delivery")[];
  featured?: boolean;
};

// ─── Tyre ────────────────────────────────────────────────────────

export type TyreStoreProduct = StoreProductBase & {
  type: "tyre";
  /** Tyre brand — matches carTyreBrands / bikeTyreBrands in data.ts */
  tyreBrand: string;
  /** Tyre model name */
  tyreModel: string;
  /** ISO size string e.g. "215/60 R17" or "90/90-12" */
  size: string;
  /** "car" or "bike" — used to filter vehicle selector */
  vehicleCategory: "car" | "bike";
  /**
   * Usage pattern — shown as "Best for" label on cards
   * and used as a filter facet
   */
  usage: "City" | "Highway" | "Premium" | "Mileage" | "Off-Road" | "Scooter" | "Commuter" | "Sport";
  /** 1–5 aggregate rating (use real reviews where available) */
  rating: number;
  /** Brands this size fits — used for vehicle-based filtering */
  compatibleCarBrands?: string[];
  /** Always requires fitment appointment (professional installation) */
  fitmentRequired: true;
};

// ─── Alloy Wheel ─────────────────────────────────────────────────

export type AlloyStoreProduct = StoreProductBase & {
  type: "alloy";
  /** Alloy brand (Neo, Advantec, Onyx, Incubus, Uno Minda, OEM Brands) */
  alloyBrand: string;
  /** Rim diameter e.g. "15", "16", "17" (inches, numeric string) */
  rimSize: string;
  /** Surface finish e.g. "Gloss Black", "Machined Silver & Black" */
  finish: string;
  /** Bolt pattern e.g. "4x100", "5x114.3" */
  pcd: string;
  /** Centre bore in mm e.g. "67.1" */
  cb?: string;
  /** Width e.g. "6.5J", "7J" */
  width?: string;
  /** ET (offset) e.g. "45", "38" */
  et?: string;
  /** Sold as a set of 4 */
  priceNote: "per set of 4";
  compatibleCarBrands?: string[];
  /** Always requires fitment appointment */
  fitmentRequired: true;
};

// ─── Accessory ───────────────────────────────────────────────────

export type AccessoryStoreProduct = StoreProductBase & {
  type: "accessory";
  /** Accessory category shown in filters */
  category: "Interior" | "Exterior" | "Safety" | "Utility";
  /**
   * Accessories do NOT need a fitment appointment.
   * They ship direct or are handed over the counter without installation.
   */
  fitmentRequired: false;
};

// ─── Union type ──────────────────────────────────────────────────

export type StoreProduct = TyreStoreProduct | AlloyStoreProduct | AccessoryStoreProduct;


// ─── Delivery config ──────────────────────────────────────────────

/**
 * Delivery notice shown throughout checkout and order confirmation.
 * We do NOT quote a fixed delivery price — actual freight cost varies by
 * location and weight. Punjab Tyre will communicate the exact delivery
 * charge to the customer after the order is placed.
 */
export const DELIVERY_NOTICE =
  "Delivery charges are not included in the product price. " +
  "Actual delivery charges vary by location and will be communicated " +
  "to you after your order is placed.";

export const DELIVERY_NOTICE_SHORT =
  "Delivery charges extra — will be confirmed after order placement.";



// ─── Fitment appointment config ──────────────────────────────────

export const FITMENT_CONFIG = {
  /** Number of future days available for booking (excluding today) */
  bookingWindowDays: 10,
  /**
   * Time slots per weekday (Mon–Sat)
   * Format: "HH:MM" 24h, each slot is 1 hour
   * Last slot ends 1 hour before closing.
   */
  weekdaySlots: [
    "09:30", "10:30", "11:30", "12:30",
    "14:00", "15:00", "16:00", "17:00", "18:30", "19:00",
  ],
  /**
   * Time slots for Sunday
   * 10:00 AM – 5:00 PM (last slot at 4:00 PM)
   */
  sundaySlots: [
    "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
  ],
  /** 0 = Sunday in JS Date.getDay() */
  sundayDayIndex: 0,
  /** Store is open every day (0=Sun through 6=Sat); no closed days */
  closedDays: [] as number[],
} as const;

/** Returns available fitment time slots for a given Date */
export function getFitmentSlots(date: Date): string[] {
  const day = date.getDay();
  if (FITMENT_CONFIG.closedDays.includes(day)) return [];
  return day === FITMENT_CONFIG.sundayDayIndex
    ? [...FITMENT_CONFIG.sundaySlots]
    : [...FITMENT_CONFIG.weekdaySlots];
}

/** Format a slot label for display: "09:30" → "9:30 AM" */
export function formatSlotLabel(slot: string): string {
  const [h, m] = slot.split(":").map(Number);
  const period = h < 12 ? "AM" : "PM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

// ─── Catalogue ───────────────────────────────────────────────────
//
// Every product must have a unique `id` and `slug`.
// slug format: brand-model-size-variant (lowercase, hyphenated, no spaces)
// id format:   tyr-NNN / aly-NNN / acc-NNN
//
// IMAGES: Place product images in /public/images/products/<id>/
//   e.g. /public/images/products/tyr-001/front.jpg
//   Until real photos are added, the placeholder at /images/product-placeholder.png is used.

const placeholder = "/images/product-placeholder.png";

export const tyreImagesBySize: Record<string, string> = {
  "165/80 R14": "/images/products/tyre-14-inch.jpg",
  "185/60 R15": "/images/products/tyre-15-inch.jpg",
  "185/65 R15": "/images/products/tyre-15-inch.jpg",
  "195/60 R15": "/images/products/tyre-15-inch.jpg",
  "195/55 R16": "/images/products/tyre-16-inch.jpg",
  "205/65 R16": "/images/products/tyre-16-inch.jpg",
  "215/60 R17": "/images/products/tyre-17-inch.jpg",
  "215/55 R17": "/images/products/tyre-17-inch.jpg",
  "225/45 R17": "/images/products/tyre-17-inch.jpg",
  "265/60 R18": "/images/products/tyre-18-allterrain.jpg",
  "225/40 R18": "/images/products/tyre-20-inch.jpg",
  "245/45 R20": "/images/products/tyre-20-inch.jpg",
  "90/90-12": "/images/products/tyre-scooter-12.jpg",
  "80/100-18": "/images/products/tyre-bike-17.jpg",
  "100/80-17": "/images/products/tyre-bike-17.jpg",
  "100/90-17": "/images/products/tyre-bike-17.jpg",
  "3.00-18": "/images/products/tyre-bike-17.jpg",
  "120/80-17": "/images/products/tyre-bike-17.jpg",
};

export const alloyImage = "/images/products/alloy-wheel-rim.jpg";
export const accessoryImage = "/images/products/accessory-inflator.jpg";

export function getProductImage(item: { type: string; size?: string }): string {
  if (item.type === "tyre" && item.size && tyreImagesBySize[item.size]) {
    return tyreImagesBySize[item.size];
  }
  if (item.type === "alloy") return alloyImage;
  if (item.type === "accessory") return accessoryImage;
  return "/images/products/tyre-16-inch.jpg";
}

const rawStoreCatalog: StoreProduct[] = [

  // ══════════════════════════════════════════════════════════════
  // CAR TYRES
  // ══════════════════════════════════════════════════════════════

  {
    type: "tyre",
    id: "tyr-001",
    slug: "ceat-secura-drive-195-55-r16",
    name: "CEAT SecuraDrive 195/55 R16",
    tyreBrand: "CEAT",
    tyreModel: "SecuraDrive",
    size: "195/55 R16",
    vehicleCategory: "car",
    usage: "City",
    rating: 4.3,
    price: 5200,
    stock: 8,
    description: "City-focused tyre with excellent wet braking and a comfortable, quiet ride. Ideal for hatchbacks and compact sedans driven primarily in urban conditions.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    featured: true,
    compatibleCarBrands: ["Hyundai", "Maruti Suzuki", "Honda", "Tata", "Volkswagen"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-002",
    slug: "ceat-sport-drive-205-65-r16",
    name: "CEAT SportDrive 205/65 R16",
    tyreBrand: "CEAT",
    tyreModel: "SportDrive",
    size: "205/65 R16",
    vehicleCategory: "car",
    usage: "Highway",
    rating: 4.4,
    price: 6800,
    stock: 5,
    description: "High-speed stability and low road noise for sedan and SUV owners who spend significant time on the highway. Good mileage-to-grip balance.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Honda", "Maruti Suzuki", "Hyundai", "Kia", "Skoda"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-003",
    slug: "yokohama-bluearth-gt-215-60-r17",
    name: "Yokohama BluEarth-GT 215/60 R17",
    tyreBrand: "Yokohama",
    tyreModel: "BluEarth-GT",
    size: "215/60 R17",
    vehicleCategory: "car",
    usage: "Premium",
    rating: 4.6,
    price: 8400,
    stock: 6,
    description: "Premium all-season tyre with orange-oil compound for superior wet grip. Fuel-efficient rolling resistance and sporty handling. Punjab Tyre is an authorised Yokohama dealer.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    featured: true,
    compatibleCarBrands: ["Volkswagen", "Skoda", "Hyundai", "Kia", "Honda", "Toyota"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-004",
    slug: "yokohama-geolandar-at-g015-265-60-r18",
    name: "Yokohama Geolandar A/T G015 265/60 R18",
    tyreBrand: "Yokohama",
    tyreModel: "Geolandar A/T G015",
    size: "265/60 R18",
    vehicleCategory: "car",
    usage: "Off-Road",
    rating: 4.7,
    price: 14500,
    stock: 4,
    description: "The Geolandar A/T G015 is the go-to all-terrain tyre for Scorpio-N, Thar, Fortuner, and Endeavour owners — aggressive sidewall, excellent mud traction, and highway stability in one tyre.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    featured: true,
    compatibleCarBrands: ["Mahindra", "Ford", "Toyota", "MG"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-005",
    slug: "apollo-amazer-4g-life-185-60-r15",
    name: "Apollo Amazer 4G Life 185/60 R15",
    tyreBrand: "Apollo",
    tyreModel: "Amazer 4G Life",
    size: "185/60 R15",
    vehicleCategory: "car",
    usage: "Mileage",
    rating: 4.1,
    price: 4450,
    stock: 3,
    description: "Extended tread life tyre designed for high-mileage Indian driving. The 4G compound delivers up to 20% more life vs. earlier generation Apollo tyres.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Maruti Suzuki", "Hyundai", "Honda", "Tata"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-006",
    slug: "apollo-aspire-xp-215-55-r17",
    name: "Apollo Aspire XP 215/55 R17",
    tyreBrand: "Apollo",
    tyreModel: "Aspire XP",
    size: "215/55 R17",
    vehicleCategory: "car",
    usage: "Premium",
    rating: 4.5,
    price: 7800,
    stock: 5,
    description: "Performance-oriented tyre for premium sedans and crossovers. Enhanced cornering stability and shorter wet braking distance. XP compound for all-weather confidence.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Hyundai", "Kia", "Volkswagen", "Skoda", "Toyota"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-007",
    slug: "goodyear-assurance-triplemax-195-60-r15",
    name: "Goodyear Assurance TripleMax 195/60 R15",
    tyreBrand: "Goodyear",
    tyreModel: "Assurance TripleMax",
    size: "195/60 R15",
    vehicleCategory: "car",
    usage: "City",
    rating: 4.2,
    price: 5600,
    stock: 2,
    description: "Goodyear's HydroTred technology evacuates water 3× faster for wet road safety. Excellent grip in monsoon conditions. Ideal for city commuters in Haryana.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Maruti Suzuki", "Honda", "Hyundai", "Tata"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-008",
    slug: "michelin-energy-xm2-plus-185-65-r15",
    name: "Michelin Energy XM2+ 185/65 R15",
    tyreBrand: "Michelin",
    tyreModel: "Energy XM2+",
    size: "185/65 R15",
    vehicleCategory: "car",
    usage: "Mileage",
    rating: 4.8,
    price: 6100,
    stock: 7,
    description: "Michelin's Energy XM2+ is engineered for maximum fuel savings without compromising wet safety. The silica compound delivers excellent mileage and a long tread life — one of the top picks for Indian roads.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    featured: true,
    compatibleCarBrands: ["Maruti Suzuki", "Hyundai", "Honda", "Tata", "Toyota"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-009",
    slug: "michelin-primacy-4-plus-225-45-r17",
    name: "Michelin Primacy 4+ 225/45 R17",
    tyreBrand: "Michelin",
    tyreModel: "Primacy 4+",
    size: "225/45 R17",
    vehicleCategory: "car",
    usage: "Premium",
    rating: 4.9,
    price: 11200,
    stock: 4,
    description: "The Primacy 4+ is Michelin's flagship touring tyre — exceptional wet grip that stays consistent as the tyre wears. Premium longevity for BMW, Audi, and luxury sedan owners.",
    images: [placeholder],
    tags: ["same-day-fitment", "new-arrival"],
    featured: true,
    compatibleCarBrands: ["BMW", "Audi", "Mercedes-Benz", "Volkswagen", "Skoda"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-010",
    slug: "ceat-milaze-x3-165-80-r14",
    name: "CEAT Milaze X3 165/80 R14",
    tyreBrand: "CEAT",
    tyreModel: "Milaze X3",
    size: "165/80 R14",
    vehicleCategory: "car",
    usage: "Mileage",
    rating: 4.0,
    price: 3650,
    stock: 10,
    description: "Budget-friendly mileage tyre for entry-level hatchbacks. The X3 compound delivers a smooth ride and extended tread life — the most affordable car tyre in our catalogue.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Maruti Suzuki", "Hyundai", "Tata"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-011",
    slug: "yokohama-advan-sport-v107-245-45-r20",
    name: "Yokohama Advan Sport V107 245/45 R20",
    tyreBrand: "Yokohama",
    tyreModel: "Advan Sport V107",
    size: "245/45 R20",
    vehicleCategory: "car",
    usage: "Sport",
    rating: 4.8,
    price: 22000,
    stock: 3,
    description: "OEM-grade ultra-high-performance tyre for luxury SUVs and sports sedans. The V107 is factory-fitted on BMW X5, Porsche Cayenne, and Audi Q7 — maximum lateral grip and high-speed stability.",
    images: [placeholder],
    tags: ["same-day-fitment", "new-arrival"],
    compatibleCarBrands: ["BMW", "Audi", "Porsche", "Mercedes-Benz", "Land Rover"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-012",
    slug: "apollo-tyrant-sport-225-40-r18",
    name: "Apollo Tyrant Sport 225/40 R18",
    tyreBrand: "Apollo",
    tyreModel: "Tyrant Sport",
    size: "225/40 R18",
    vehicleCategory: "car",
    usage: "Sport",
    rating: 4.4,
    price: 9500,
    stock: 5,
    description: "High-performance sport tyre with a wide contact patch and stiff sidewall for aggressive cornering. Popular with modified hatchback and performance sedan owners.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Volkswagen", "Skoda", "Hyundai", "Kia", "Honda"],
    fitmentRequired: true,
  },

  // ══════════════════════════════════════════════════════════════
  // BIKE TYRES
  // ══════════════════════════════════════════════════════════════

  {
    type: "tyre",
    id: "tyr-020",
    slug: "ceat-zoom-d-90-90-12",
    name: "CEAT Zoom D 90/90-12",
    tyreBrand: "CEAT",
    tyreModel: "Zoom D",
    size: "90/90-12",
    vehicleCategory: "bike",
    usage: "Scooter",
    rating: 4.2,
    price: 1450,
    stock: 12,
    description: "The standard scooter tyre for Honda Activa, TVS Jupiter, and similar 110–125cc scooters. Excellent wet grip on city roads and a comfortable ride.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    featured: true,
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-021",
    slug: "apollo-actigrip-80-100-18",
    name: "Apollo ActiGrip 80/100-18",
    tyreBrand: "Apollo",
    tyreModel: "ActiGrip",
    size: "80/100-18",
    vehicleCategory: "bike",
    usage: "Commuter",
    rating: 4.1,
    price: 1250,
    stock: 15,
    description: "Commuter bike tyre engineered for high-mileage use on Indian roads. Ideal for Hero Splendor, HF Deluxe, Bajaj Platina, and similar 100–125cc commuters.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-022",
    slug: "michelin-city-pro-100-80-17",
    name: "Michelin City Pro 100/80-17",
    tyreBrand: "Michelin",
    tyreModel: "City Pro",
    size: "100/80-17",
    vehicleCategory: "bike",
    usage: "City",
    rating: 4.7,
    price: 2150,
    stock: 2,
    description: "Premium city tyre for 150–200cc street bikes. Michelin's silica compound delivers 20% better wet grip than conventional bias tyres — for riders who want confidence in rain.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-023",
    slug: "tvs-duraplug-100-90-17",
    name: "TVS Duraplug 100/90-17",
    tyreBrand: "TVS",
    tyreModel: "Duraplug",
    size: "100/90-17",
    vehicleCategory: "bike",
    usage: "Commuter",
    rating: 4.0,
    price: 1600,
    stock: 8,
    description: "Anti-puncture DuraBead technology for everyday commuters. Excellent mileage and puncture resistance — TVS's most durable commuter tyre.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-024",
    slug: "bkt-motogrip-3-00-18",
    name: "BKT MotoGrip 3.00-18",
    tyreBrand: "BKT",
    tyreModel: "MotoGrip",
    size: "3.00-18",
    vehicleCategory: "bike",
    usage: "Commuter",
    rating: 4.1,
    price: 1350,
    stock: 10,
    description: "Utility-grade tyre for workhorse motorcycles and delivery bikes. Robust construction handles overloaded conditions and rough terrain.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    fitmentRequired: true,
  },

  {
    type: "tyre",
    id: "tyr-025",
    slug: "ceat-zoom-rad-120-80-17",
    name: "CEAT Zoom Rad 120/80-17",
    tyreBrand: "CEAT",
    tyreModel: "Zoom Rad",
    size: "120/80-17",
    vehicleCategory: "bike",
    usage: "Sport",
    rating: 4.3,
    price: 2400,
    stock: 6,
    description: "Radial sport tyre for 150–200cc performance bikes. Wider footprint for confident cornering and stable high-speed handling. Fits KTM Duke, TVS Apache, and Bajaj Pulsar NS variants.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    fitmentRequired: true,
  },

  // ══════════════════════════════════════════════════════════════
  // ALLOY WHEELS  (prices are per set of 4)
  // ══════════════════════════════════════════════════════════════

  {
    type: "alloy",
    id: "aly-001",
    slug: "neo-sport-15-gloss-black",
    name: "Neo Sport 15\" Gloss Black Alloys",
    alloyBrand: "Neo",
    rimSize: "15",
    finish: "Gloss Black",
    pcd: "4x100",
    cb: "60.1",
    width: "6J",
    et: "45",
    priceNote: "per set of 4",
    price: 28000,
    stock: 5,
    description: "Sporty 5-spoke design in high-gloss black. Perfect upgrade for hatchbacks — Honda Jazz, Hyundai i20, and Maruti Swift. Lightweight flow-formed construction for daily use.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    featured: true,
    compatibleCarBrands: ["Honda", "Hyundai", "Maruti Suzuki", "Toyota"],
    fitmentRequired: true,
  },

  {
    type: "alloy",
    id: "aly-002",
    slug: "neo-sport-15-machined-silver",
    name: "Neo Sport 15\" Machined Silver Alloys",
    alloyBrand: "Neo",
    rimSize: "15",
    finish: "Machined Silver",
    pcd: "4x100",
    cb: "60.1",
    width: "6J",
    et: "45",
    priceNote: "per set of 4",
    price: 26000,
    stock: 4,
    description: "Classic two-tone machined face with silver finish. The understated look that complements white, silver, and pearl vehicle colours.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Honda", "Hyundai", "Maruti Suzuki", "Toyota"],
    fitmentRequired: true,
  },

  {
    type: "alloy",
    id: "aly-003",
    slug: "advantec-flow-16-gun-metal",
    name: "Advantec Flow 16\" Gun Metal Alloys",
    alloyBrand: "Advantec",
    rimSize: "16",
    finish: "Gun Metal",
    pcd: "5x114.3",
    cb: "67.1",
    width: "6.5J",
    et: "45",
    priceNote: "per set of 4",
    price: 36000,
    stock: 3,
    description: "Flow-formed precision alloy in premium gun metal finish. Superior strength-to-weight ratio vs. gravity-cast alternatives. Ideal for mid-size sedans and crossovers.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    featured: true,
    compatibleCarBrands: ["Honda", "Hyundai", "Kia", "Mahindra", "Tata", "Toyota"],
    fitmentRequired: true,
  },

  {
    type: "alloy",
    id: "aly-004",
    slug: "onyx-performance-17-matte-black",
    name: "Onyx Performance 17\" Matte Black Alloys",
    alloyBrand: "Onyx Wheels",
    rimSize: "17",
    finish: "Matte Black",
    pcd: "5x114.3",
    cb: "67.1",
    width: "7J",
    et: "42",
    priceNote: "per set of 4",
    price: 52000,
    stock: 2,
    description: "High-performance custom alloy in stealth matte black. Wide 7J lip for a bold stance. Popular with Creta, Seltos, and Nexon SUV owners looking for an aggressive look.",
    images: [placeholder],
    tags: ["same-day-fitment", "new-arrival"],
    compatibleCarBrands: ["Hyundai", "Kia", "Tata", "Maruti Suzuki"],
    fitmentRequired: true,
  },

  {
    type: "alloy",
    id: "aly-005",
    slug: "incubus-alloys-18-chrome",
    name: "Incubus 18\" Chrome Finish Alloys",
    alloyBrand: "Incubus Alloys",
    rimSize: "18",
    finish: "Chrome",
    pcd: "5x130",
    cb: "71.6",
    width: "8J",
    et: "50",
    priceNote: "per set of 4",
    price: 88000,
    stock: 1,
    description: "Premium chrome-finished performance alloy for luxury SUVs. Bold multi-spoke design for Innova Crysta, Fortuner, and Endeavour owners. Professional fitment included.",
    images: [placeholder],
    tags: ["same-day-fitment"],
    compatibleCarBrands: ["Toyota", "Ford", "MG"],
    fitmentRequired: true,
  },

  {
    type: "alloy",
    id: "aly-006",
    slug: "uno-minda-15-silver",
    name: "Uno Minda OEM-Style 15\" Silver Alloys",
    alloyBrand: "Uno Minda",
    rimSize: "15",
    finish: "Silver",
    pcd: "4x100",
    cb: "60.1",
    width: "6J",
    et: "45",
    priceNote: "per set of 4",
    price: 18000,
    stock: 6,
    description: "OEM-quality replacement alloys at aftermarket prices. Uno Minda is a Tier-1 auto parts supplier — these wheels match factory tolerances and pass all OEM quality checks.",
    images: [placeholder],
    tags: ["same-day-fitment", "popular"],
    compatibleCarBrands: ["Maruti Suzuki", "Hyundai", "Honda", "Tata"],
    fitmentRequired: true,
  },

  // ══════════════════════════════════════════════════════════════
  // ACCESSORIES  (no fitment appointment needed)
  // ══════════════════════════════════════════════════════════════

  {
    type: "accessory",
    id: "acc-001",
    slug: "premium-car-sunshade-foldable",
    name: "Premium Foldable Car Sunshade",
    category: "Interior",
    price: 850,
    stock: 25,
    description: "Heavy-duty silver reflective sunshade for windshields. Reduces cabin temperature by up to 15°C. Fits all sedans and hatchbacks. Folds to a compact circle in 3 seconds.",
    images: [placeholder],
    tags: ["free-delivery"],
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-002",
    slug: "car-door-rain-visor-set",
    name: "Car Door Rain Visor Set (4 pcs)",
    category: "Exterior",
    price: 1200,
    stock: 18,
    description: "Universal-fit smoke-tinted door visors. Let fresh air in without getting wet during rain. Easy clip-on installation — no drilling required.",
    images: [placeholder],
    tags: [],
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-003",
    slug: "premium-seat-covers-leatherette",
    name: "Premium Leatherette Seat Covers (5-Seater)",
    category: "Interior",
    price: 4500,
    stock: 12,
    description: "Custom-stitched leatherette seat covers in black with red contrast stitching. Protects OEM fabric and adds a premium look. Includes headrest covers and rear bench cover.",
    images: [placeholder],
    tags: ["popular"],
    featured: true,
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-004",
    slug: "led-interior-ambient-light-kit",
    name: "LED Interior Ambient Light Kit",
    category: "Interior",
    price: 1800,
    stock: 20,
    description: "RGB LED strip kit for footwell and dashboard lighting. 12V USB-powered, app-controlled via Bluetooth. 16 million colours. Fitment takes under 20 minutes.",
    images: [placeholder],
    tags: [],
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-005",
    slug: "wooden-boot-organiser",
    name: "Wooden Boot Organiser / Cargo Tray",
    category: "Utility",
    price: 2800,
    stock: 8,
    description: "Custom wooden boot organiser with fabric lining. Organises groceries, tools, and luggage in the boot without sliding. Fits Creta, Seltos, Swift, City, and similar cars.",
    images: [placeholder],
    tags: [],
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-006",
    slug: "steering-wheel-cover-leather",
    name: "Leather Steering Wheel Cover",
    category: "Interior",
    price: 650,
    stock: 30,
    description: "Genuine leather feel steering wheel cover with anti-slip grip. Universal fit for 37–38cm diameter wheels. Keeps steering cool in summer and warm in winter.",
    images: [placeholder],
    tags: [],
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-007",
    slug: "tyre-pressure-gauge-digital",
    name: "Digital Tyre Pressure Gauge",
    category: "Safety",
    price: 550,
    stock: 40,
    description: "Accurate digital tyre pressure gauge with backlit display. Reads 0–100 PSI. Every driver should have one — low pressure is the single biggest cause of tyre damage.",
    images: [placeholder],
    tags: ["free-delivery"],
    fitmentRequired: false,
  },

  {
    type: "accessory",
    id: "acc-008",
    slug: "car-floor-mats-all-weather",
    name: "All-Weather Car Floor Mats (Set of 5)",
    category: "Interior",
    price: 1600,
    stock: 15,
    description: "Heavy-duty rubber floor mats with anti-slip backing. Protects carpet from dirt, water, and mud. Easy to wash. Fits most 5-seater cars.",
    images: [placeholder],
    tags: [],
    fitmentRequired: false,
  },
];

export const storeCatalog: StoreProduct[] = rawStoreCatalog.map((product) => ({
  ...product,
  images:
    product.images && product.images.length > 0 && product.images[0] !== placeholder
      ? product.images
      : [getProductImage(product as any)],
}));

// ─── Lookup helpers ───────────────────────────────────────────────

/** Find a product by its URL slug */
export function getProductBySlug(slug: string): StoreProduct | undefined {
  return storeCatalog.find((p) => p.slug === slug);
}

/** Find a product by its ID */
export function getProductById(id: string): StoreProduct | undefined {
  return storeCatalog.find((p) => p.id === id);
}

/** Get all products of a given type */
export function getProductsByType(type: StoreProduct["type"]): StoreProduct[] {
  return storeCatalog.filter((p) => p.type === type);
}

/** Get featured products (up to `limit`) */
export function getFeaturedProducts(limit = 6): StoreProduct[] {
  return storeCatalog.filter((p) => p.featured).slice(0, limit);
}

/** True if product is available to add to cart */
export function isInStock(product: StoreProduct): boolean {
  return product.stock > 0;
}

/** Returns the stock status label and colour class for badges */
export function getStockStatus(product: StoreProduct): {
  label: string;
  variant: "in-stock" | "low-stock" | "out-of-stock";
} {
  if (product.stock === 0) return { label: "Out of Stock", variant: "out-of-stock" };
  if (product.stock <= 3) return { label: `Only ${product.stock} left`, variant: "low-stock" };
  return { label: "In Stock", variant: "in-stock" };
}

/** All unique tyre brands in catalog */
export function getTyreBrands(): string[] {
  const brands = new Set<string>();
  storeCatalog.forEach((p) => {
    if (p.type === "tyre") brands.add(p.tyreBrand);
  });
  return [...brands].sort();
}

/** All unique alloy brands in catalog */
export function getAlloyBrands(): string[] {
  const brands = new Set<string>();
  storeCatalog.forEach((p) => {
    if (p.type === "alloy") brands.add(p.alloyBrand);
  });
  return [...brands].sort();
}

/** All unique tyre sizes in catalog */
export function getTyreSizes(): string[] {
  const sizes = new Set<string>();
  storeCatalog.forEach((p) => {
    if (p.type === "tyre") sizes.add(p.size);
  });
  return [...sizes].sort();
}
