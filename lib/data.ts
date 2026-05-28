export type VehicleVariant = {
  name: string;
  bodyType: string;
  fuel?: string;
};

export type VehicleModel = {
  name: string;
  variants: VehicleVariant[];
};

export type VehicleBrand = {
  name: string;
  models: VehicleModel[];
};

export const carVehicleCatalog: VehicleBrand[] = [
  {
    name: "Hyundai",
    models: [
      {
        name: "Creta",
        variants: [
          { name: "E 1.5 Petrol", bodyType: "SUV" },
          { name: "S 1.5 Diesel", bodyType: "SUV" },
          { name: "SX(O) 1.5 Turbo", bodyType: "SUV" },
        ],
      },
      {
        name: "i20",
        variants: [
          { name: "Magna 1.2", bodyType: "Hatchback" },
          { name: "Sportz 1.2 IVT", bodyType: "Hatchback" },
          { name: "Asta (O) 1.0 Turbo", bodyType: "Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Maruti Suzuki",
    models: [
      {
        name: "Baleno",
        variants: [
          { name: "Sigma 1.2", bodyType: "Hatchback" },
          { name: "Delta 1.2", bodyType: "Hatchback" },
          { name: "Zeta 1.2", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Swift",
        variants: [
          { name: "LXi", bodyType: "Hatchback" },
          { name: "VXi", bodyType: "Hatchback" },
          { name: "ZXi Plus", bodyType: "Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Tata",
    models: [
      {
        name: "Nexon",
        variants: [
          { name: "Smart", bodyType: "SUV" },
          { name: "Pure", bodyType: "SUV" },
          { name: "Fearless+", bodyType: "SUV" },
        ],
      },
      {
        name: "Punch",
        variants: [
          { name: "Pure", bodyType: "SUV" },
          { name: "Adventure", bodyType: "SUV" },
          { name: "Creative", bodyType: "SUV" },
        ],
      },
    ],
  },
  {
    name: "Kia",
    models: [
      {
        name: "Sonet",
        variants: [
          { name: "HTE", bodyType: "SUV" },
          { name: "HTX", bodyType: "SUV" },
          { name: "GTX Plus", bodyType: "SUV" },
        ],
      },
    ],
  },
  {
    name: "Honda",
    models: [
      {
        name: "City",
        variants: [
          { name: "SV", bodyType: "Sedan" },
          { name: "V CVT", bodyType: "Sedan" },
          { name: "ZX CVT", bodyType: "Sedan" },
        ],
      },
    ],
  },
];

export const bikeVehicleCatalog: VehicleBrand[] = [
  {
    name: "Honda",
    models: [
      {
        name: "Shine",
        variants: [
          { name: "100", bodyType: "Commuter" },
          { name: "125", bodyType: "Commuter" },
        ],
      },
    ],
  },
  {
    name: "Hero",
    models: [
      {
        name: "Splendor Plus",
        variants: [
          { name: "Drum", bodyType: "Commuter" },
          { name: "Disc", bodyType: "Commuter" },
        ],
      },
    ],
  },
  {
    name: "TVS",
    models: [
      {
        name: "Apache RTR",
        variants: [
          { name: "160 4V", bodyType: "Performance" },
          { name: "200 4V", bodyType: "Performance" },
        ],
      },
    ],
  },
  {
    name: "Bajaj",
    models: [
      {
        name: "Pulsar",
        variants: [
          { name: "125", bodyType: "Performance" },
          { name: "NS200", bodyType: "Performance" },
        ],
      },
    ],
  },
  {
    name: "Royal Enfield",
    models: [
      {
        name: "Classic 350",
        variants: [
          { name: "Halcyon", bodyType: "Cruiser" },
          { name: "Signals", bodyType: "Cruiser" },
        ],
      },
    ],
  },
];

export type TyreProduct = {
  id: string;
  category: "car" | "bike";
  brand: string;
  model: string;
  size: string;
  price: number;
  rating: number;
  usage: string;
  featured?: boolean;
  limited?: boolean;
};

export const tyreInventory: TyreProduct[] = [
  {
    id: "car-1",
    category: "car",
    brand: "CEAT",
    model: "SecuraDrive",
    size: "195/55 R16",
    price: 5200,
    rating: 4.3,
    usage: "City",
    featured: true,
  },
  {
    id: "car-2",
    category: "car",
    brand: "CEAT",
    model: "SportDrive",
    size: "205/65 R16",
    price: 6800,
    rating: 4.4,
    usage: "Highway",
  },
  {
    id: "car-3",
    category: "car",
    brand: "Yokohama",
    model: "BluEarth-GT",
    size: "215/60 R17",
    price: 8400,
    rating: 4.6,
    usage: "Premium",
    featured: true,
  },
  {
    id: "car-4",
    category: "car",
    brand: "Apollo",
    model: "Amazer 4G Life",
    size: "185/60 R15",
    price: 4450,
    rating: 4.1,
    usage: "City",
    limited: true,
  },
  {
    id: "car-5",
    category: "car",
    brand: "Goodyear",
    model: "Assurance TripleMax",
    size: "195/60 R15",
    price: 5600,
    rating: 4.2,
    usage: "Comfort",
    limited: true,
  },
  {
    id: "car-6",
    category: "car",
    brand: "Michelin",
    model: "Energy XM2+",
    size: "185/65 R15",
    price: 6100,
    rating: 4.8,
    usage: "Mileage",
    featured: true,
    limited: true,
  },
  {
    id: "car-7",
    category: "car",
    brand: "CEAT",
    model: "Milaze X3",
    size: "165/80 R14",
    price: 3650,
    rating: 4.0,
    usage: "Mileage",
  },
  {
    id: "bike-1",
    category: "bike",
    brand: "CEAT",
    model: "Zoom D",
    size: "90/90-12",
    price: 1450,
    rating: 4.2,
    usage: "Scooter",
    featured: true,
  },
  {
    id: "bike-2",
    category: "bike",
    brand: "Apollo",
    model: "ActiGrip",
    size: "80/100-18",
    price: 1250,
    rating: 4.1,
    usage: "Commuter",
  },
  {
    id: "bike-3",
    category: "bike",
    brand: "Michelin",
    model: "City Pro",
    size: "100/80-17",
    price: 2150,
    rating: 4.7,
    usage: "Premium",
    limited: true,
  },
  {
    id: "bike-4",
    category: "bike",
    brand: "TVS",
    model: "Duraplug",
    size: "100/90-17",
    price: 1600,
    rating: 4.0,
    usage: "Commuter",
  },
  {
    id: "bike-5",
    category: "bike",
    brand: "BKT",
    model: "MotoGrip",
    size: "3.00-18",
    price: 1350,
    rating: 4.1,
    usage: "Utility",
  },
];

export const carTyreBrands = [
  { name: "CEAT" },
  { name: "Yokohama" },
  { name: "Apollo" },
  { name: "Goodyear" },
  { name: "Michelin" },
];

export const bikeTyreBrands = [
  { name: "CEAT" },
  { name: "Apollo" },
  { name: "Michelin" },
  { name: "TVS" },
  { name: "BKT" },
];

export const services = [
  {
    title: "Wheel Alignment",
    description: "Keep steering stable and reduce uneven tyre wear.",
    icon: "align",
  },
  {
    title: "Wheel Balancing",
    description: "Improve comfort, grip, and high-speed stability.",
    icon: "balance",
  },
  {
    title: "Tyre Changing",
    description: "Fast, clean replacement with expert fitment.",
    icon: "tyre",
  },
  {
    title: "Nitrogen Inflation",
    description: "Better pressure retention for smoother rides.",
    icon: "nitrogen",
  },
  {
    title: "Puncture Repair",
    description: "Quick roadside-style repair for everyday convenience.",
    icon: "repair",
  },
];

export const alloyWheels = [
  { name: "Neo", note: "Sporty designs for modern cars" },
  { name: "Advantec", note: "Sharp fitment-focused alloy options" },
  { name: "Plati", note: "Value-oriented premium looks" },
  { name: "Uno Minda", note: "Reliable aftermarket choice" },
  { name: "OEM Brands", note: "Factory-style replacement alloys" },
];

export const accessories = [
  { name: "Sunshade", note: "Heat reduction and cabin comfort" },
  { name: "Rain Visors", note: "Fresh-air driving during light rain" },
  { name: "Wooden Boot", note: "Practical cargo-space upgrade" },
  { name: "LED Lights", note: "Cleaner visibility and premium look" },
  { name: "Seat Covers", note: "Style, comfort, and protection" },
];

export const testimonials = [
  {
    name: "Aman Batra",
    role: "Hyundai Creta Owner",
    quote:
      "Got the right tyres at a better price than I expected. The team answered quickly on WhatsApp and fitment was done the same day.",
  },
  {
    name: "Nikita Sharma",
    role: "Maruti Baleno Owner",
    quote:
      "The selector is simple, the pricing feels transparent, and the staff suggested a better tyre size for my usage.",
  },
  {
    name: "Rahul Verma",
    role: "Bike Rider",
    quote:
      "I asked for a scooter tyre quote and got a reply fast. The process felt direct and easy, without unnecessary back and forth.",
  },
  {
    name: "Sandeep Singh",
    role: "Fleet Customer",
    quote:
      "Best part was same-day fitment in Rohtak and genuine brand options. No pushy upselling, just clear recommendations.",
  },
];

export const faqs = [
  {
    question: "How long do car tyres usually last?",
    answer:
      "Tyre life depends on driving style, road conditions, alignment, and maintenance. Many owners replace them around 35,000 to 50,000 km, but visible wear, cracks, or vibration should be checked earlier.",
  },
  {
    question: "Do the tyres come with warranty?",
    answer:
      "Yes, warranty depends on the tyre brand and model. We help you understand the applicable manufacturing warranty before you buy.",
  },
  {
    question: "How do I choose the right tyre?",
    answer:
      "Match the correct size, check load and speed rating, and choose a tread pattern based on city use, highway driving, mileage, or comfort.",
  },
  {
    question: "What payment options are available?",
    answer:
      "Orders are handled through WhatsApp inquiry first, and payment can be finalized at the store or through mutually agreed options after confirmation.",
  },
];

export const siteCopy = {
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919896053958",
  locationLabel: "Punjab Tyre, Rohtak",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=PUNJAB+TYRE+ROHTAK",
  heroTrust: [
    "77+ Years Experience",
    "Same-day fitment in Rohtak",
    "100% Genuine Products",
  ],
};
