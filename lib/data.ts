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

export { carVehicleCatalog } from "./car-catalog";


export const bikeVehicleCatalog: VehicleBrand[] = [
  {
    name: "Hero MotoCorp",
    models: [
      {
        name: "Splendor Plus",
        variants: [
          { name: "Drum Brake Self-Start", bodyType: "Commuter" },
          { name: "XTEC 2.0 / Disc", bodyType: "Commuter" },
        ],
      },
      {
        name: "HF Deluxe",
        variants: [
          { name: "Kick Start Drum", bodyType: "Commuter" },
          { name: "Self Start Drum / i3S", bodyType: "Commuter" },
        ],
      },
      {
        name: "Glamour",
        variants: [
          { name: "Drum / Disc", bodyType: "Commuter" },
          { name: "XTEC", bodyType: "Commuter" },
        ],
      },
      {
        name: "Passion Plus / Pro",
        variants: [
          { name: "Drum / Disc", bodyType: "Commuter" },
          { name: "XTEC", bodyType: "Commuter" },
        ],
      },
      {
        name: "Xpulse 200 4V",
        variants: [
          { name: "Standard 4V", bodyType: "Adventure Tourer" },
          { name: "Pro / Rally Edition", bodyType: "Adventure Tourer" },
        ],
      },
      {
        name: "Karizma XMR",
        variants: [
          { name: "Standard 210", bodyType: "Sports Tourer" },
        ],
      },
      {
        name: "Mavrick 440",
        variants: [
          { name: "Base / Mid / Top", bodyType: "Roadster" },
        ],
      },
      {
        name: "Destini 125",
        variants: [
          { name: "LX / VX / ZX", bodyType: "Scooter" },
        ],
      },
      {
        name: "Xoom 110",
        variants: [
          { name: "LX / VX / ZX", bodyType: "Scooter" },
        ],
      },
    ],
  },
  {
    name: "Honda",
    models: [
      {
        name: "Activa 6G / 110",
        variants: [
          { name: "Standard / Deluxe", bodyType: "Scooter" },
          { name: "H-Smart", bodyType: "Scooter" },
        ],
      },
      {
        name: "Activa 125",
        variants: [
          { name: "Drum / Disc", bodyType: "Scooter" },
          { name: "H-Smart", bodyType: "Scooter" },
        ],
      },
      {
        name: "Dio / Dio 125",
        variants: [
          { name: "Standard 110", bodyType: "Scooter" },
          { name: "Deluxe 125 / H-Smart", bodyType: "Scooter" },
        ],
      },
      {
        name: "Shine 100",
        variants: [
          { name: "Standard Drum", bodyType: "Commuter" },
        ],
      },
      {
        name: "Shine 125",
        variants: [
          { name: "Drum Brake", bodyType: "Commuter" },
          { name: "Disc Brake", bodyType: "Commuter" },
        ],
      },
      {
        name: "SP 125",
        variants: [
          { name: "Drum / Disc", bodyType: "Commuter" },
          { name: "Sports Edition", bodyType: "Commuter" },
        ],
      },
      {
        name: "Unicorn",
        variants: [
          { name: "160 Standard ABS", bodyType: "Commuter" },
        ],
      },
      {
        name: "Hornet 2.0",
        variants: [
          { name: "Standard ABS", bodyType: "Street Naked" },
        ],
      },
      {
        name: "CB350 / H'ness CB350",
        variants: [
          { name: "DLX / DLX Pro", bodyType: "Modern Classic" },
          { name: "CB350RS", bodyType: "Scrambler / Roadster" },
        ],
      },
      {
        name: "CB300R",
        variants: [
          { name: "Neo Sports Cafe", bodyType: "Naked Sport" },
        ],
      },
    ],
  },
  {
    name: "TVS",
    models: [
      {
        name: "Jupiter",
        variants: [
          { name: "110 Drum / Disc / SmartXonnect", bodyType: "Scooter" },
          { name: "125 Drum / Disc / SmartXonnect", bodyType: "Scooter" },
        ],
      },
      {
        name: "Ntorq 125",
        variants: [
          { name: "Drum / Disc", bodyType: "Sport Scooter" },
          { name: "Race Edition / Race XP / XT", bodyType: "Sport Scooter" },
        ],
      },
      {
        name: "Raider 125",
        variants: [
          { name: "Drum / Disc", bodyType: "Commuter" },
          { name: "SmartXonnect / Super Squad", bodyType: "Commuter" },
        ],
      },
      {
        name: "Apache RTR 160",
        variants: [
          { name: "2V Drum / Disc", bodyType: "Street Sport" },
          { name: "4V Drum / Disc / Special Edition", bodyType: "Street Sport" },
        ],
      },
      {
        name: "Apache RTR 200 4V",
        variants: [
          { name: "Single Channel ABS", bodyType: "Street Naked" },
          { name: "Dual Channel ABS / Ride Modes", bodyType: "Street Naked" },
        ],
      },
      {
        name: "Apache RTR 310",
        variants: [
          { name: "Standard / BTO Built To Order", bodyType: "Street Fighter" },
        ],
      },
      {
        name: "Apache RR 310",
        variants: [
          { name: "Standard / BTO Dynamic Kit", bodyType: "Super Sport" },
        ],
      },
      {
        name: "Ronin",
        variants: [
          { name: "SS / DS / TD", bodyType: "Modern Retro" },
        ],
      },
      {
        name: "iQube EV",
        variants: [
          { name: "Standard 2.2 kWh / 3.4 kWh", bodyType: "Electric Scooter" },
          { name: "S / ST 5.1 kWh", bodyType: "Electric Scooter" },
        ],
      },
      {
        name: "XL100",
        variants: [
          { name: "Heavy Duty / Comfort i-Touch", bodyType: "Moped" },
        ],
      },
    ],
  },
  {
    name: "Bajaj",
    models: [
      {
        name: "Pulsar 125 / 150",
        variants: [
          { name: "Pulsar 125 Neon / Carbon", bodyType: "Street Naked" },
          { name: "Pulsar 150 Single / Twin Disc", bodyType: "Street Naked" },
        ],
      },
      {
        name: "Pulsar N160 / N250",
        variants: [
          { name: "N160 Dual Channel ABS", bodyType: "Street Naked" },
          { name: "N250 USD Fork / ABS", bodyType: "Street Naked" },
        ],
      },
      {
        name: "Pulsar NS200 / NS400Z",
        variants: [
          { name: "NS200 USD Fork / Dual ABS", bodyType: "Street Fighter" },
          { name: "NS400Z Ride Modes", bodyType: "Street Fighter" },
        ],
      },
      {
        name: "Pulsar RS200",
        variants: [
          { name: "Dual Channel ABS", bodyType: "Sports" },
        ],
      },
      {
        name: "Platina",
        variants: [
          { name: "100 Drum", bodyType: "Commuter" },
          { name: "110 Drum / ABS Disc", bodyType: "Commuter" },
        ],
      },
      {
        name: "Avenger",
        variants: [
          { name: "Street 160 ABS", bodyType: "Cruiser" },
          { name: "Cruise 220 ABS", bodyType: "Cruiser" },
        ],
      },
      {
        name: "Dominar",
        variants: [
          { name: "250 Dual ABS", bodyType: "Power Cruiser" },
          { name: "400 Touring Edition", bodyType: "Power Cruiser" },
        ],
      },
      {
        name: "Freedom 125",
        variants: [
          { name: "NG04 Drum / Disc CNG", bodyType: "CNG Hybrid Bike" },
        ],
      },
      {
        name: "Chetak EV",
        variants: [
          { name: "2901 / Urbane", bodyType: "Electric Scooter" },
          { name: "Premium 3201", bodyType: "Electric Scooter" },
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
          { name: "Redditch / Halcyon", bodyType: "Classic Cruiser" },
          { name: "Signals / Dark / Chrome", bodyType: "Classic Cruiser" },
        ],
      },
      {
        name: "Hunter 350",
        variants: [
          { name: "Retro Factory", bodyType: "Roadster" },
          { name: "Metro Dapper / Rebel", bodyType: "Roadster" },
        ],
      },
      {
        name: "Bullet 350",
        variants: [
          { name: "Military / Standard", bodyType: "Vintage Classic" },
          { name: "Black Gold Dual Channel ABS", bodyType: "Vintage Classic" },
        ],
      },
      {
        name: "Meteor 350",
        variants: [
          { name: "Fireball / Stellar", bodyType: "Cruiser" },
          { name: "Supernova / Aurora", bodyType: "Cruiser" },
        ],
      },
      {
        name: "Guerrilla 450",
        variants: [
          { name: "Analogue / Dash", bodyType: "Roadster" },
          { name: "Flash", bodyType: "Roadster" },
        ],
      },
      {
        name: "Himalayan 450",
        variants: [
          { name: "Base / Pass", bodyType: "Adventure Tourer" },
          { name: "Summit / Tubeless Cross Spoke", bodyType: "Adventure Tourer" },
        ],
      },
      {
        name: "Interceptor 650",
        variants: [
          { name: "Canyon Red / Cali Green", bodyType: "Retro Roadster" },
          { name: "Mark 2 Chrome / Custom Alloys", bodyType: "Retro Roadster" },
        ],
      },
      {
        name: "Continental GT 650",
        variants: [
          { name: "Standard / Custom", bodyType: "Cafe Racer" },
          { name: "Mr Clean Chrome / Alloys", bodyType: "Cafe Racer" },
        ],
      },
      {
        name: "Super Meteor 650 / Shotgun 650",
        variants: [
          { name: "Astral / Interstellar / Celestial", bodyType: "Highway Cruiser" },
          { name: "Shotgun 650 Custom / Stencil", bodyType: "Custom Bobber" },
        ],
      },
    ],
  },
  {
    name: "Yamaha",
    models: [
      {
        name: "YZF R15",
        variants: [
          { name: "V4 Metallic Red / Dark Knight", bodyType: "Super Sport" },
          { name: "R15M / Racing Blue / Quickshifter", bodyType: "Super Sport" },
        ],
      },
      {
        name: "MT-15",
        variants: [
          { name: "V2 Standard / DLX", bodyType: "Hyper Naked" },
          { name: "Cyber Green / Metallic Black", bodyType: "Hyper Naked" },
        ],
      },
      {
        name: "FZ-S",
        variants: [
          { name: "FI V3", bodyType: "Street Naked" },
          { name: "FI V4 Deluxe", bodyType: "Street Naked" },
        ],
      },
      {
        name: "FZ-X",
        variants: [
          { name: "Standard / Matte Titan", bodyType: "Neo-Retro Roadster" },
          { name: "Chrome Edition", bodyType: "Neo-Retro Roadster" },
        ],
      },
      {
        name: "Aerox 155",
        variants: [
          { name: "Standard / MotoGP Edition", bodyType: "Maxi Sports Scooter" },
          { name: "Version S Smart Key", bodyType: "Maxi Sports Scooter" },
        ],
      },
      {
        name: "RayZR 125",
        variants: [
          { name: "Fi Hybrid Drum / Disc", bodyType: "Scooter" },
          { name: "Street Rally Edition", bodyType: "Scooter" },
        ],
      },
      {
        name: "Fascino 125",
        variants: [
          { name: "Fi Hybrid Drum / Disc", bodyType: "Scooter" },
          { name: "Special Edition", bodyType: "Scooter" },
        ],
      },
    ],
  },
  {
    name: "Suzuki",
    models: [
      {
        name: "Access 125",
        variants: [
          { name: "Standard Drum / Disc", bodyType: "Scooter" },
          { name: "Special Edition / Ride Connect", bodyType: "Scooter" },
        ],
      },
      {
        name: "Burgman Street 125",
        variants: [
          { name: "Standard / Ride Connect", bodyType: "Maxi Scooter" },
          { name: "EX Edition", bodyType: "Maxi Scooter" },
        ],
      },
      {
        name: "Avenis 125",
        variants: [
          { name: "Standard / Race Edition", bodyType: "Sport Scooter" },
        ],
      },
      {
        name: "Gixxer 150 / SF 150",
        variants: [
          { name: "Gixxer Naked Standard / Ride Connect", bodyType: "Street Naked" },
          { name: "Gixxer SF Faired / Special", bodyType: "Sports" },
        ],
      },
      {
        name: "Gixxer 250 / SF 250",
        variants: [
          { name: "Gixxer 250 Naked Dual ABS", bodyType: "Street Naked" },
          { name: "Gixxer SF 250 Dual ABS", bodyType: "Sports" },
        ],
      },
      {
        name: "V-Strom SX 250",
        variants: [
          { name: "Standard Dual Channel ABS", bodyType: "Adventure Tourer" },
        ],
      },
      {
        name: "Hayabusa",
        variants: [
          { name: "1340cc Gen 3", bodyType: "Hypersport" },
        ],
      },
    ],
  },
  {
    name: "KTM",
    models: [
      {
        name: "Duke 125 / 200",
        variants: [
          { name: "125 Duke ABS", bodyType: "Naked Sport" },
          { name: "200 Duke Dual Channel ABS", bodyType: "Naked Sport" },
        ],
      },
      {
        name: "Duke 250",
        variants: [
          { name: "Gen 3 Dual Channel ABS", bodyType: "Naked Sport" },
        ],
      },
      {
        name: "Duke 390",
        variants: [
          { name: "Gen 3 Quickshifter+ Launch Control", bodyType: "Naked Sport" },
        ],
      },
      {
        name: "RC 200 / RC 390",
        variants: [
          { name: "RC 200 GP / Standard", bodyType: "Track Sport" },
          { name: "RC 390 Cornering ABS / Quickshifter", bodyType: "Track Sport" },
        ],
      },
      {
        name: "Adventure 250 / 390",
        variants: [
          { name: "250 Adventure Off-Road ABS", bodyType: "Adventure" },
          { name: "390 Adventure X / Standard / Spoke Wheels", bodyType: "Adventure" },
        ],
      },
    ],
  },
  {
    name: "Kawasaki",
    models: [
      {
        name: "Ninja 300",
        variants: [
          { name: "Standard Dual Channel ABS", bodyType: "Twin Sport" },
        ],
      },
      {
        name: "Ninja 500",
        variants: [
          { name: "Standard ABS", bodyType: "Twin Sport" },
        ],
      },
      {
        name: "Ninja 650",
        variants: [
          { name: "KRT Edition", bodyType: "Sports Tourer" },
        ],
      },
      {
        name: "Z900",
        variants: [
          { name: "Standard / Metallic Spark Black", bodyType: "Super Naked" },
        ],
      },
      {
        name: "ZX-10R",
        variants: [
          { name: "Ninja ZX-10R KRT", bodyType: "Superbike" },
        ],
      },
    ],
  },
  {
    name: "BMW Motorrad",
    models: [
      {
        name: "G 310 R",
        variants: [
          { name: "Cosmic Black / Style Sport", bodyType: "Roadster" },
        ],
      },
      {
        name: "G 310 GS",
        variants: [
          { name: "Standard / Style Rallye", bodyType: "Adventure" },
        ],
      },
      {
        name: "G 310 RR",
        variants: [
          { name: "Standard / Style Motorsport", bodyType: "Super Sport" },
        ],
      },
      {
        name: "S 1000 RR",
        variants: [
          { name: "Standard / M Package", bodyType: "Superbike" },
        ],
      },
      {
        name: "R 1300 GS",
        variants: [
          { name: "Triple Black / GS Trophy / Option 719", bodyType: "Adventure" },
        ],
      },
    ],
  },
  {
    name: "Triumph",
    models: [
      {
        name: "Speed 400",
        variants: [
          { name: "Carnival Red / Caspian Blue / Phantom Black", bodyType: "Modern Classic Roadster" },
        ],
      },
      {
        name: "Scrambler 400 X",
        variants: [
          { name: "Matt Khaki Green / Carnival Red / Silver Ice", bodyType: "Scrambler" },
        ],
      },
      {
        name: "Street Triple 765",
        variants: [
          { name: "R / RS", bodyType: "Naked Sport" },
        ],
      },
      {
        name: "Tiger 900",
        variants: [
          { name: "GT / Rally Pro", bodyType: "Adventure Tourer" },
        ],
      },
      {
        name: "Bonneville T100 / T120",
        variants: [
          { name: "Standard / Black Edition", bodyType: "Heritage Classic" },
        ],
      },
    ],
  },
  {
    name: "Harley-Davidson",
    models: [
      {
        name: "X440",
        variants: [
          { name: "Denim / Vivid", bodyType: "Modern Roadster" },
          { name: "S Diamond-Cut Alloys / Connected", bodyType: "Modern Roadster" },
        ],
      },
      {
        name: "Nightster",
        variants: [
          { name: "Special 975T", bodyType: "Sportster" },
        ],
      },
      {
        name: "Fat Boy 114",
        variants: [
          { name: "Milwaukee-Eight 114", bodyType: "Cruiser" },
        ],
      },
    ],
  },
  {
    name: "Jawa / Yezdi",
    models: [
      {
        name: "Jawa 350",
        variants: [
          { name: "Spoke Wheel Dual Channel ABS", bodyType: "Classic" },
          { name: "Alloy Wheel Tubeless", bodyType: "Classic" },
        ],
      },
      {
        name: "Jawa 42 / 42 Bobber",
        variants: [
          { name: "42 2.1 Dual ABS", bodyType: "Modern Retro" },
          { name: "42 Bobber Single Seat", bodyType: "Custom Bobber" },
        ],
      },
      {
        name: "Yezdi Roadster",
        variants: [
          { name: "Dark / Chrome", bodyType: "Roadster" },
        ],
      },
      {
        name: "Yezdi Scrambler",
        variants: [
          { name: "Dual Channel ABS Off-Road Mode", bodyType: "Scrambler" },
        ],
      },
      {
        name: "Yezdi Adventure",
        variants: [
          { name: "Slick / Mountain Pack", bodyType: "Adventure" },
        ],
      },
    ],
  },
  {
    name: "Ather Energy",
    models: [
      {
        name: "450X",
        variants: [
          { name: "2.9 kWh", bodyType: "Electric Scooter" },
          { name: "3.7 kWh Pro Pack", bodyType: "Electric Scooter" },
        ],
      },
      {
        name: "450S",
        variants: [
          { name: "Standard 2.9 kWh", bodyType: "Electric Scooter" },
        ],
      },
      {
        name: "Rizta",
        variants: [
          { name: "S 2.9 kWh", bodyType: "Family Electric Scooter" },
          { name: "Z 2.9 kWh / 3.7 kWh", bodyType: "Family Electric Scooter" },
        ],
      },
    ],
  },
  {
    name: "Ola Electric",
    models: [
      {
        name: "S1 Pro",
        variants: [
          { name: "Gen 2 4 kWh", bodyType: "Electric Scooter" },
        ],
      },
      {
        name: "S1 Air",
        variants: [
          { name: "3 kWh", bodyType: "Electric Scooter" },
        ],
      },
      {
        name: "S1 X",
        variants: [
          { name: "2 kWh / 3 kWh", bodyType: "Electric Scooter" },
          { name: "4 kWh / X+", bodyType: "Electric Scooter" },
        ],
      },
    ],
  },
  {
    name: "Aprilia",
    models: [
      {
        name: "RS 457",
        variants: [
          { name: "Standard Quickshifter+", bodyType: "Twin Super Sport" },
        ],
      },
      {
        name: "SR 125 / SR 160",
        variants: [
          { name: "SR 125 CBS", bodyType: "Sport Scooter" },
          { name: "SR 160 Race / Carbon ABS", bodyType: "Sport Scooter" },
        ],
      },
      {
        name: "Storm 125",
        variants: [
          { name: "Disc CBS", bodyType: "Scooter" },
        ],
      },
    ],
  },
  {
    name: "Ducati",
    models: [
      {
        name: "Monster",
        variants: [
          { name: "Standard / Plus / SP", bodyType: "Naked Sport" },
        ],
      },
      {
        name: "Scrambler 800",
        variants: [
          { name: "Icon / Full Throttle / Nightshift", bodyType: "Scrambler" },
        ],
      },
      {
        name: "Panigale V2",
        variants: [
          { name: "Standard / Bayliss 1st Championship", bodyType: "Superbike" },
        ],
      },
      {
        name: "Multistrada V4",
        variants: [
          { name: "V4 S / Rally", bodyType: "Adventure Tourer" },
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

export type BrandItem = {
  name: string;
  logo?: string;
};

export const carTyreBrands: BrandItem[] = [
  { name: "CEAT", logo: "/logos/ceat.svg" },
  { name: "Yokohama", logo: "/logos/yokohama.svg" },
  { name: "Apollo", logo: "/logos/apollo.png" },
  { name: "Goodyear", logo: "/logos/goodyear.svg" },
  { name: "Michelin", logo: "/logos/michelin.svg" },
];

export const bikeTyreBrands: BrandItem[] = [
  { name: "CEAT", logo: "/logos/ceat.svg" },
  { name: "Apollo", logo: "/logos/apollo.png" },
  { name: "Michelin", logo: "/logos/michelin.svg" },
  { name: "TVS", logo: "/logos/tvs.png" },
  { name: "BKT", logo: "/logos/bkt.png" },
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

export type AlloyItem = {
  name: string;
  note: string;
  logo?: string;
};

export const alloyWheels: AlloyItem[] = [
  { name: "Neo", note: "Sporty designs for modern cars", logo: "/logos/neo.svg" },
  { name: "Advantec", note: "Flow-forged precision alloys", logo: "/logos/advantec.svg" },
  { name: "Onyx Wheels", note: "High performance custom alloys", logo: "/logos/onyx.svg" },
  { name: "Incubus Alloys", note: "Performance styling & rugged aesthetics", logo: "/logos/incubus.png" },
  { name: "Uno Minda", note: "Reliable aftermarket choice", logo: "/logos/unominda.png" },
  { name: "OEM Brands", note: "Factory-style replacement alloys", logo: "/logos/oem.svg" },
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
    name: "Manish Yadav",
    role: "Volkswagen Taigun Highline AT",
    date: "3 weeks ago",
    category: "yokohama",
    rating: 5,
    highlight: "Yokohama XEVG057",
    verified: true,
    quote:
      "I bought Yokohama XEVG057 tyre for my taigun highline AT. The tire has more thickness than other tyres in the market. It is the latest technology available in the market for the best price here. The service was also good and staff is cooperative.",
  },
  {
    name: "Amar Pannu",
    role: "Mahindra Scorpio-N Owner",
    date: "1 month ago",
    category: "suv",
    rating: 5,
    highlight: "Yokohama Geolandar",
    verified: true,
    quote:
      "Really satisfied with Yokohama geolander for my Scorpio N. Happy with owner knowledge nd behaviour. Buy Yokohama tyre for best price from Punjab tyre Rohtak.",
  },
  {
    name: "andy dhankhar",
    role: "Store Fitment Customer",
    date: "1 month ago",
    category: "service",
    rating: 5,
    highlight: "Cordia & Cooperative Staff",
    verified: true,
    quote:
      "I am pleasant to share this review Mr Shakti Singh ji and staff are very cordial cooperative and hospitality is good. Services are no doubt excellent.",
  },
  {
    name: "Madhusudan Khankhra",
    role: "Regular Customer",
    date: "1 month ago",
    category: "service",
    rating: 5,
    highlight: "Fresh Tyres & Fast Fitment",
    verified: true,
    quote:
      "My overall experience was good. Good Amenities were provided by them. Super fast service and gave me fresh tyres at very good price. Staff is very knowledgeable!",
  },
  {
    name: "Amit Ahlawat",
    role: "Car Owner",
    date: "2 months ago",
    category: "suv",
    rating: 5,
    highlight: "Exceptional Service 10/10",
    verified: true,
    quote:
      "Me and my brother went to get our new tyres and they gave us the crazy service and the experience was exceptional. They know their work and how it should be done. 10/10.",
  },
  {
    name: "ankit bhanwala",
    role: "Upgrade Buyer",
    date: "1 month ago",
    category: "yokohama",
    rating: 5,
    highlight: "Yokohama Tyre Experience",
    verified: true,
    quote:
      "Best experience with yokohama tyre. High quality fresh stock tyres and very smooth handling on Haryana highways.",
  },
  {
    name: "rahul pachar",
    role: "Customer",
    date: "2 months ago",
    category: "service",
    rating: 5,
    highlight: "Best Deal in Rohtak",
    verified: true,
    quote:
      "We really liked their services, gave us best deal and they know how to treat their customer. Would recommend everyone to visit them. 10/10.",
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
  mapsUrl:
    "https://www.google.com/maps/place/Yokohama+Club+Network+-+Punjab+Tyre/@28.8896109,76.6261038,17z/data=!4m16!1m9!3m8!1s0x390d8526fed9734f:0xb00c2486efdd348f!2sYokohama+Club+Network+-+Punjab+Tyre!8m2!3d28.8896109!4d76.6261038!9m1!1b1!16s%2Fg%2F11dzsx6mtc!3m5!1s0x390d8526fed9734f:0xb00c2486efdd348f!8m2!3d28.8896109!4d76.6261038!16s%2Fg%2F11dzsx6mtc?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Yokohama+Club+Network+-+Punjab+Tyre/@28.8896109,76.6261038,17z/data=!4m18!1m9!3m8!1s0x390d8526fed9734f:0xb00c2486efdd348f!2sYokohama+Club+Network+-+Punjab+Tyre!8m2!3d28.8896109!4d76.6261038!9m1!1b1!16s%2Fg%2F11dzsx6mtc!3m7!1s0x390d8526fed9734f:0xb00c2486efdd348f!8m2!3d28.8896109!4d76.6261038!9m1!1b1!16s%2Fg%2F11dzsx6mtc",
  writeReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJTxPZ_iaFDzkRjzTdr4YkDL4",
  googleRating: 4.8,
  googleReviewCount: 754,
  googleReviewCountFormatted: "750+ Google Reviews",
  heroTrust: [
    "77+ Years Experience",
    "Same-day fitment in Rohtak",
    "100% Genuine Products",
  ],
};
