import type { VehicleBrand } from "./data";

export const carVehicleCatalog: VehicleBrand[] = [
  {
    name: "Maruti Suzuki",
    models: [
      {
        name: "Swift",
        variants: [
          { name: "LXi", bodyType: "Hatchback" },
          { name: "VXi / VXi AMT / CNG", bodyType: "Hatchback" },
          { name: "ZXi / ZXi AMT / CNG", bodyType: "Hatchback" },
          { name: "ZXi Plus / AMT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Dzire",
        variants: [
          { name: "LXi", bodyType: "Sedan" },
          { name: "VXi / VXi AGS / CNG", bodyType: "Sedan" },
          { name: "ZXi / ZXi AGS / CNG", bodyType: "Sedan" },
          { name: "ZXi Plus / AGS", bodyType: "Sedan" },
        ],
      },
      {
        name: "Baleno",
        variants: [
          { name: "Sigma 1.2", bodyType: "Hatchback" },
          { name: "Delta 1.2 / AGS / CNG", bodyType: "Hatchback" },
          { name: "Zeta 1.2 / AGS / CNG", bodyType: "Hatchback" },
          { name: "Alpha 1.2 / AGS", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Brezza",
        variants: [
          { name: "LXi / LXi CNG", bodyType: "Compact SUV" },
          { name: "VXi / VXi AT / CNG", bodyType: "Compact SUV" },
          { name: "ZXi / ZXi AT / CNG", bodyType: "Compact SUV" },
          { name: "ZXi Plus / ZXi Plus AT", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Vitara Brezza (2016-2022)",
        variants: [
          { name: "LDi / LXi", bodyType: "Compact SUV" },
          { name: "VDi / VXi", bodyType: "Compact SUV" },
          { name: "ZDi / ZXi", bodyType: "Compact SUV" },
          { name: "ZDi Plus / ZXi Plus", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Fronx",
        variants: [
          { name: "Sigma 1.2 / CNG", bodyType: "Compact SUV" },
          { name: "Delta 1.2 / AGS / CNG", bodyType: "Compact SUV" },
          { name: "Delta+ 1.2 / 1.0 Turbo", bodyType: "Compact SUV" },
          { name: "Zeta 1.0 Turbo AT/MT", bodyType: "Compact SUV" },
          { name: "Alpha 1.0 Turbo AT/MT", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Grand Vitara",
        variants: [
          { name: "Sigma Mild Hybrid", bodyType: "Mid-size SUV" },
          { name: "Delta Mild Hybrid / CNG", bodyType: "Mid-size SUV" },
          { name: "Zeta Mild Hybrid / CNG", bodyType: "Mid-size SUV" },
          { name: "Alpha Mild Hybrid / AllGrip AWD", bodyType: "Mid-size SUV" },
          { name: "Zeta+ Strong Hybrid", bodyType: "Mid-size SUV" },
          { name: "Alpha+ Strong Hybrid", bodyType: "Mid-size SUV" },
        ],
      },
      {
        name: "Ertiga",
        variants: [
          { name: "LXi", bodyType: "MPV" },
          { name: "VXi / VXi AT / CNG", bodyType: "MPV" },
          { name: "ZXi / ZXi AT / CNG", bodyType: "MPV" },
          { name: "ZXi Plus / AT", bodyType: "MPV" },
        ],
      },
      {
        name: "XL6",
        variants: [
          { name: "Zeta MT/AT / CNG", bodyType: "MPV" },
          { name: "Alpha MT/AT", bodyType: "MPV" },
          { name: "Alpha Plus MT/AT", bodyType: "MPV" },
        ],
      },
      {
        name: "Invicto",
        variants: [
          { name: "Zeta Plus 7-Seater / 8-Seater", bodyType: "Premium MPV" },
          { name: "Alpha Plus 7-Seater", bodyType: "Premium MPV" },
        ],
      },
      {
        name: "Jimny",
        variants: [
          { name: "Zeta 4x4 MT/AT", bodyType: "Off-Roader SUV" },
          { name: "Alpha 4x4 MT/AT", bodyType: "Off-Roader SUV" },
        ],
      },
      {
        name: "Wagon R",
        variants: [
          { name: "LXi 1.0 / CNG", bodyType: "Hatchback" },
          { name: "VXi 1.0 / AGS / CNG", bodyType: "Hatchback" },
          { name: "ZXi 1.2 / AGS", bodyType: "Hatchback" },
          { name: "ZXi Plus 1.2 / AGS", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Alto K10",
        variants: [
          { name: "Std", bodyType: "Hatchback" },
          { name: "LXi / LXi CNG", bodyType: "Hatchback" },
          { name: "VXi / VXi AGS / CNG", bodyType: "Hatchback" },
          { name: "VXi Plus / AGS", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Alto 800",
        variants: [
          { name: "Std / LXi", bodyType: "Hatchback" },
          { name: "LXi CNG / VXi", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Maruti 800",
        variants: [
          { name: "Std / AC", bodyType: "Hatchback" },
          { name: "5 Speed / MPFI", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Celerio",
        variants: [
          { name: "LXi", bodyType: "Hatchback" },
          { name: "VXi / AGS / CNG", bodyType: "Hatchback" },
          { name: "ZXi / AGS", bodyType: "Hatchback" },
          { name: "ZXi Plus / AGS", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Celerio X",
        variants: [
          { name: "VXi / ZXi / ZXi Plus", bodyType: "Crossover Hatchback" },
        ],
      },
      {
        name: "S-Presso",
        variants: [
          { name: "Std / LXi / CNG", bodyType: "Micro SUV" },
          { name: "VXi / VXi AGS / CNG", bodyType: "Micro SUV" },
          { name: "VXi Plus / AGS", bodyType: "Micro SUV" },
        ],
      },
      {
        name: "Ignis",
        variants: [
          { name: "Sigma", bodyType: "Hatchback" },
          { name: "Delta / Delta AGS", bodyType: "Hatchback" },
          { name: "Zeta / Zeta AGS", bodyType: "Hatchback" },
          { name: "Alpha / Alpha AGS", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Ciaz",
        variants: [
          { name: "Sigma / Delta MT/AT", bodyType: "Sedan" },
          { name: "Zeta / Alpha MT/AT", bodyType: "Sedan" },
          { name: "S (Sports)", bodyType: "Sedan" },
        ],
      },
      {
        name: "S-Cross",
        variants: [
          { name: "Sigma / Delta 1.3 / 1.5", bodyType: "Crossover" },
          { name: "Zeta / Alpha 1.3 / 1.5 / 1.6", bodyType: "Crossover" },
        ],
      },
      {
        name: "Eeco",
        variants: [
          { name: "5-Seater Std / AC", bodyType: "Van" },
          { name: "7-Seater Std", bodyType: "Van" },
          { name: "CNG 5-Seater AC", bodyType: "Van" },
          { name: "Cargo / Ambulance", bodyType: "Van" },
        ],
      },
      {
        name: "Omni",
        variants: [
          { name: "5-Seater / 8-Seater", bodyType: "Van" },
          { name: "Cargo / LPG", bodyType: "Van" },
        ],
      },
      {
        name: "Ritz",
        variants: [
          { name: "LXi / LDi", bodyType: "Hatchback" },
          { name: "VXi / VDi / AT", bodyType: "Hatchback" },
          { name: "ZXi / ZDi", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Zen / Zen Estilo",
        variants: [
          { name: "LX / LXi / VXi", bodyType: "Hatchback" },
          { name: "Zen Carbon / Steel", bodyType: "Hatchback" },
          { name: "Zen Estilo LX / LXi / VXi", bodyType: "Hatchback" },
        ],
      },
      {
        name: "SX4",
        variants: [
          { name: "VXi / VDi", bodyType: "Sedan" },
          { name: "ZXi / ZDi / AT", bodyType: "Sedan" },
        ],
      },
      {
        name: "A-Star",
        variants: [
          { name: "LXi / VXi / AT", bodyType: "Hatchback" },
          { name: "ZXi", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Gypsy",
        variants: [
          { name: "King Hard Top / Soft Top 4x4", bodyType: "Off-Roader" },
        ],
      },
      {
        name: "Esteem",
        variants: [
          { name: "LX / LXi / VXi", bodyType: "Sedan" },
        ],
      },
      {
        name: "Stingray",
        variants: [
          { name: "LXi / VXi", bodyType: "Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Hyundai",
    models: [
      {
        name: "Creta",
        variants: [
          { name: "E 1.5 Petrol/Diesel", bodyType: "SUV" },
          { name: "EX 1.5 Petrol/Diesel", bodyType: "SUV" },
          { name: "S / S(O) Petrol/Diesel MT/AT", bodyType: "SUV" },
          { name: "SX / SX Tech Petrol/Diesel", bodyType: "SUV" },
          { name: "SX(O) 1.5 Turbo DCT / Diesel AT", bodyType: "SUV" },
          { name: "Knight Edition", bodyType: "SUV" },
        ],
      },
      {
        name: "Creta N Line",
        variants: [
          { name: "N8 1.5 Turbo MT/DCT", bodyType: "Performance SUV" },
          { name: "N10 1.5 Turbo MT/DCT", bodyType: "Performance SUV" },
        ],
      },
      {
        name: "Creta EV",
        variants: [
          { name: "Executive / Smart", bodyType: "Electric SUV" },
          { name: "Excellence Long Range", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Venue",
        variants: [
          { name: "E / S / S(O) 1.2 Petrol", bodyType: "Compact SUV" },
          { name: "S(O)+ / SX 1.2 Petrol / 1.5 CRDi", bodyType: "Compact SUV" },
          { name: "SX(O) 1.0 Turbo / 1.5 CRDi", bodyType: "Compact SUV" },
          { name: "Knight Edition", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Venue N Line",
        variants: [
          { name: "N6 1.0 Turbo MT/DCT", bodyType: "Performance Compact SUV" },
          { name: "N8 1.0 Turbo MT/DCT", bodyType: "Performance Compact SUV" },
        ],
      },
      {
        name: "Exter",
        variants: [
          { name: "EX / EX(O)", bodyType: "Micro SUV" },
          { name: "S / S(O) / S CNG", bodyType: "Micro SUV" },
          { name: "SX / SX(O) / SX CNG", bodyType: "Micro SUV" },
          { name: "Knight Edition / SX(O) Connect", bodyType: "Micro SUV" },
        ],
      },
      {
        name: "i20",
        variants: [
          { name: "Era / Magna 1.2 Petrol", bodyType: "Premium Hatchback" },
          { name: "Sportz / Sportz(O) MT/IVT", bodyType: "Premium Hatchback" },
          { name: "Asta / Asta(O) MT/IVT", bodyType: "Premium Hatchback" },
        ],
      },
      {
        name: "i20 N Line",
        variants: [
          { name: "N6 1.0 Turbo MT/DCT", bodyType: "Performance Hatchback" },
          { name: "N8 1.0 Turbo MT/DCT", bodyType: "Performance Hatchback" },
        ],
      },
      {
        name: "Elite i20 (Previous Gen)",
        variants: [
          { name: "Era / Magna Executive", bodyType: "Premium Hatchback" },
          { name: "Sportz / Sportz Plus", bodyType: "Premium Hatchback" },
          { name: "Asta / Asta(O) Petrol / Diesel", bodyType: "Premium Hatchback" },
        ],
      },
      {
        name: "Grand i10 Nios",
        variants: [
          { name: "Era / Magna Petrol / CNG", bodyType: "Hatchback" },
          { name: "Sportz / Corporate / CNG", bodyType: "Hatchback" },
          { name: "Asta MT/AMT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Grand i10 (Previous Gen)",
        variants: [
          { name: "Era / Magna 1.2 Petrol/Diesel", bodyType: "Hatchback" },
          { name: "Sportz / Asta 1.2 Petrol/Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "i10 (1st Gen)",
        variants: [
          { name: "D-Lite / Era 1.1", bodyType: "Hatchback" },
          { name: "Magna / Sportz 1.2 Kappa", bodyType: "Hatchback" },
          { name: "Asta 1.2 Kappa / AT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Santro / Santro Xing",
        variants: [
          { name: "ZipPlus / ZipDrive", bodyType: "Hatchback" },
          { name: "Xing XK / XL / XS / XP", bodyType: "Hatchback" },
          { name: "New Santro D-Lite / Era / Magna / Sportz / Asta", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Aura",
        variants: [
          { name: "E 1.2 Petrol / CNG", bodyType: "Compact Sedan" },
          { name: "S 1.2 Petrol / CNG", bodyType: "Compact Sedan" },
          { name: "SX / SX(O) Petrol / CNG", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Xcent",
        variants: [
          { name: "Base / S Petrol / Diesel", bodyType: "Compact Sedan" },
          { name: "SX / SX(O) Petrol / Diesel", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Verna",
        variants: [
          { name: "EX / S 1.5 MPi MT", bodyType: "Sedan" },
          { name: "SX / SX(O) 1.5 MPi MT/IVT", bodyType: "Sedan" },
          { name: "SX / SX(O) 1.5 Turbo GDi MT/DCT", bodyType: "Sedan" },
        ],
      },
      {
        name: "Verna Fluidic (Previous Gen)",
        variants: [
          { name: "1.4 / 1.6 VTVT Petrol", bodyType: "Sedan" },
          { name: "1.4 / 1.6 CRDi Diesel", bodyType: "Sedan" },
          { name: "SX / SX(O) AT/MT", bodyType: "Sedan" },
        ],
      },
      {
        name: "Alcazar",
        variants: [
          { name: "Executive / Prestige 1.5 Turbo / Diesel", bodyType: "6/7-Seater SUV" },
          { name: "Platinum / Platinum(O) MT/AT", bodyType: "6/7-Seater SUV" },
          { name: "Signature / Signature(O) Adventure", bodyType: "6/7-Seater SUV" },
        ],
      },
      {
        name: "Tucson",
        variants: [
          { name: "Platinum 2.0 Petrol/Diesel", bodyType: "Premium SUV" },
          { name: "Signature 2.0 Petrol/Diesel / 4WD", bodyType: "Premium SUV" },
        ],
      },
      {
        name: "Kona Electric",
        variants: [
          { name: "Premium 39.2 kWh", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Ioniq 5",
        variants: [
          { name: "RWD Long Range 72.6 kWh", bodyType: "Electric Flagship Crossover" },
        ],
      },
      {
        name: "Elantra",
        variants: [
          { name: "S / SX Petrol / Diesel", bodyType: "Executive Sedan" },
          { name: "SX(O) AT/MT", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Eon",
        variants: [
          { name: "D-Lite / Era / Magna 0.8", bodyType: "Hatchback" },
          { name: "Sportz 1.0 Kappa", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Accent",
        variants: [
          { name: "GLS / GLX / Executive", bodyType: "Sedan" },
          { name: "CRDi Diesel / Viva", bodyType: "Sedan" },
        ],
      },
      {
        name: "Getz / Getz Prime",
        variants: [
          { name: "1.1 GVS / 1.3 GL / GLS", bodyType: "Hatchback" },
          { name: "1.5 CRDi Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Santa Fe",
        variants: [
          { name: "2WD / 4WD 2.2 CRDi MT/AT", bodyType: "Luxury SUV" },
        ],
      },
      {
        name: "Sonata",
        variants: [
          { name: "Embera / Transform 2.4 Petrol", bodyType: "Luxury Sedan" },
          { name: "2.0 CRDi Diesel", bodyType: "Luxury Sedan" },
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
          { name: "Smart / Smart+ / Smart+ S", bodyType: "Compact SUV" },
          { name: "Pure / Pure S Petrol / Diesel", bodyType: "Compact SUV" },
          { name: "Creative / Creative+ / Creative+ S", bodyType: "Compact SUV" },
          { name: "Fearless / Fearless+ / Fearless+ S / Dark", bodyType: "Compact SUV" },
          { name: "Nexon iCNG", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Nexon EV",
        variants: [
          { name: "Creative+ 30 kWh", bodyType: "Electric SUV" },
          { name: "Fearless+ 40.5 kWh / 45 kWh", bodyType: "Electric SUV" },
          { name: "Empowered+ / Red Dark 45 kWh", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Punch",
        variants: [
          { name: "Pure / Pure Rhythm / CNG", bodyType: "Micro SUV" },
          { name: "Adventure / Adventure Rhythm / CNG", bodyType: "Micro SUV" },
          { name: "Accomplished / Accomplished Dazzle", bodyType: "Micro SUV" },
          { name: "Creative / Creative Flagship / Camo", bodyType: "Micro SUV" },
        ],
      },
      {
        name: "Punch EV",
        variants: [
          { name: "Smart / Smart+ 25 kWh", bodyType: "Electric SUV" },
          { name: "Adventure / Empowered 35 kWh", bodyType: "Electric SUV" },
          { name: "Empowered+ Long Range", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Curvv",
        variants: [
          { name: "Smart / Pure+ 1.2 Revotron / Diesel", bodyType: "Coupe SUV" },
          { name: "Creative / Creative+ S 1.2 Hyperion", bodyType: "Coupe SUV" },
          { name: "Accomplished / Accomplished+ A", bodyType: "Coupe SUV" },
        ],
      },
      {
        name: "Curvv EV",
        variants: [
          { name: "Creative 45 kWh", bodyType: "Coupe SUV Electric" },
          { name: "Accomplished / Accomplished+ S 45 / 55 kWh", bodyType: "Coupe SUV Electric" },
          { name: "Empowered+ / Empowered+ A 55 kWh", bodyType: "Coupe SUV Electric" },
        ],
      },
      {
        name: "Harrier",
        variants: [
          { name: "Smart / Smart(O) 2.0 Kryotec", bodyType: "SUV" },
          { name: "Pure / Pure+ / Pure+ S", bodyType: "SUV" },
          { name: "Adventure / Adventure+ / Dark", bodyType: "SUV" },
          { name: "Fearless / Fearless+ / Stealth Dark", bodyType: "SUV" },
        ],
      },
      {
        name: "Safari (New)",
        variants: [
          { name: "Smart / Smart(O) 2.0 Kryotec", bodyType: "3-Row SUV" },
          { name: "Pure / Pure+ / Pure+ S", bodyType: "3-Row SUV" },
          { name: "Adventure / Adventure+ Dark", bodyType: "3-Row SUV" },
          { name: "Accomplished / Accomplished+ / Red Dark", bodyType: "3-Row SUV" },
        ],
      },
      {
        name: "Safari Storme / Dicor",
        variants: [
          { name: "Dicor 2.2 / 3.0 4x2 / 4x4", bodyType: "SUV" },
          { name: "Storme LX / EX / VX 4x2 / 4x4", bodyType: "SUV" },
          { name: "Storme Varicor 400", bodyType: "SUV" },
        ],
      },
      {
        name: "Altroz",
        variants: [
          { name: "XE / XM / XM+ Petrol/Diesel/CNG", bodyType: "Premium Hatchback" },
          { name: "XT / XZ / XZ+ / Dark", bodyType: "Premium Hatchback" },
          { name: "i-Turbo / DCA Dual Clutch", bodyType: "Premium Hatchback" },
        ],
      },
      {
        name: "Altroz Racer",
        variants: [
          { name: "R1 1.2 Turbo", bodyType: "Hot Hatchback" },
          { name: "R2 / R3 1.2 Turbo", bodyType: "Hot Hatchback" },
        ],
      },
      {
        name: "Tiago",
        variants: [
          { name: "XE / XM Petrol / CNG", bodyType: "Hatchback" },
          { name: "XT / XT Rhythm / CNG", bodyType: "Hatchback" },
          { name: "XZ / XZ+ MT/AMT / CNG", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Tiago EV",
        variants: [
          { name: "XE / XT Medium Range 19.2 kWh", bodyType: "Electric Hatchback" },
          { name: "XT / XZ+ Long Range 24 kWh", bodyType: "Electric Hatchback" },
          { name: "XZ+ Tech LUX", bodyType: "Electric Hatchback" },
        ],
      },
      {
        name: "Tiago NRG",
        variants: [
          { name: "XT / XZ Petrol / CNG", bodyType: "Crossover Hatchback" },
        ],
      },
      {
        name: "Tigor",
        variants: [
          { name: "XE / XM Petrol / iCNG", bodyType: "Compact Sedan" },
          { name: "XZ / XZ+ MT/AMT / iCNG", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Tigor EV",
        variants: [
          { name: "XE / XT 26 kWh", bodyType: "Electric Sedan" },
          { name: "XZ+ / XZ+ LUX", bodyType: "Electric Sedan" },
        ],
      },
      {
        name: "Hexa",
        variants: [
          { name: "XE / XM / XM+ Varicor 320/400", bodyType: "Crossover MPV" },
          { name: "XT / XTA / XT 4x4", bodyType: "Crossover MPV" },
        ],
      },
      {
        name: "Aria",
        variants: [
          { name: "Pure / Pleasure / Prestige 4x2 / 4x4", bodyType: "MPV" },
          { name: "Pride 4x4", bodyType: "MPV" },
        ],
      },
      {
        name: "Zest",
        variants: [
          { name: "Revotron XE / XM / XT Petrol", bodyType: "Compact Sedan" },
          { name: "Quadrajet 75/90 XE / XM / XMA / XT Diesel", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Bolt",
        variants: [
          { name: "XE / XM / XMS / XT Petrol/Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Sumo / Sumo Gold / Victa",
        variants: [
          { name: "CX / LX / EX / GX", bodyType: "MUV" },
          { name: "Sumo Grande / Movus", bodyType: "MUV" },
        ],
      },
      {
        name: "Indica / Indica Vista",
        variants: [
          { name: "DLS / DLG / DLX Diesel", bodyType: "Hatchback" },
          { name: "Vista Aqua / Aura / Safire / Quadrajet", bodyType: "Hatchback" },
          { name: "Vista D90", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Indigo / Indigo eCS / Manza",
        variants: [
          { name: "Indigo Marina / XL / CS / eCS", bodyType: "Sedan" },
          { name: "Manza Aqua / Aura / Elan Quadrajet/Safire", bodyType: "Sedan" },
        ],
      },
      {
        name: "Nano",
        variants: [
          { name: "Std / CX / LX", bodyType: "Micro Hatchback" },
          { name: "GenX Nano XE / XM / XMA / XT", bodyType: "Micro Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Mahindra",
    models: [
      {
        name: "BE 6e (Electric)",
        variants: [
          { name: "Pack One 59 kWh (RWD)", bodyType: "Electric SUV Coupe" },
          { name: "Pack Two 59 kWh (RWD)", bodyType: "Electric SUV Coupe" },
          { name: "Pack Two 79 kWh (RWD)", bodyType: "Electric SUV Coupe" },
          { name: "Pack Three 79 kWh (RWD)", bodyType: "Electric SUV Coupe" },
        ],
      },
      {
        name: "XEV 9e (Electric)",
        variants: [
          { name: "Pack One 59 kWh (RWD)", bodyType: "Electric SUV Coupe" },
          { name: "Pack Two 79 kWh (RWD)", bodyType: "Electric SUV Coupe" },
          { name: "Pack Three 79 kWh (RWD)", bodyType: "Electric SUV Coupe" },
        ],
      },
      {
        name: "XUV400 EV",
        variants: [
          { name: "EC Pro 34.5 kWh", bodyType: "Electric SUV" },
          { name: "EL Pro 34.5 kWh", bodyType: "Electric SUV" },
          { name: "EL Pro 39.4 kWh", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "XUV 3XO EV",
        variants: [
          { name: "AX5L EV (34.5 kWh)", bodyType: "Electric SUV" },
          { name: "AX7L EV (39.4 kWh)", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Scorpio-N",
        variants: [
          { name: "Z2 2.0 Petrol / 2.2 Diesel", bodyType: "SUV" },
          { name: "Z4 2.0 Petrol / 2.2 Diesel MT/AT", bodyType: "SUV" },
          { name: "Z6 2.2 Diesel MT/AT", bodyType: "SUV" },
          { name: "Z8 / Z8 Select Petrol/Diesel MT/AT", bodyType: "SUV" },
          { name: "Z8L / Z8L 4x4 AT/MT", bodyType: "SUV" },
        ],
      },
      {
        name: "Scorpio Classic",
        variants: [
          { name: "S 2.2 mHawk", bodyType: "SUV" },
          { name: "S11 2.2 mHawk", bodyType: "SUV" },
        ],
      },
      {
        name: "Scorpio (mHawk / CRDe 2002-2021)",
        variants: [
          { name: "EX / LX / SLE / SLX", bodyType: "SUV" },
          { name: "VLX / S4 / S6 / S8", bodyType: "SUV" },
          { name: "S10 / S11 4x4", bodyType: "SUV" },
          { name: "Scorpio Getaway 4x4", bodyType: "Pickup Truck" },
        ],
      },
      {
        name: "Thar (2020+)",
        variants: [
          { name: "AX Opt 4x4 Petrol / Diesel", bodyType: "SUV 4x4" },
          { name: "LX 4x2 RWD Petrol / Diesel", bodyType: "SUV" },
          { name: "LX 4x4 Hard Top / Soft Top AT/MT", bodyType: "SUV 4x4" },
          { name: "Earth Edition 4x4", bodyType: "SUV 4x4" },
        ],
      },
      {
        name: "Thar Roxx (5-Door)",
        variants: [
          { name: "MX1 / MX3 RWD Petrol/Diesel", bodyType: "5-Door SUV" },
          { name: "MX5 / AX3L Petrol/Diesel", bodyType: "5-Door SUV" },
          { name: "AX5L / AX7L 4x2 / 4x4 AT", bodyType: "5-Door SUV 4x4" },
        ],
      },
      {
        name: "Thar (1st Gen CRDe / DI)",
        variants: [
          { name: "DI 2WD / 4WD", bodyType: "Off-Roader" },
          { name: "CRDe 4x4 2.5", bodyType: "Off-Roader" },
          { name: "Thar 700 Special Edition", bodyType: "Off-Roader" },
        ],
      },
      {
        name: "XUV700",
        variants: [
          { name: "MX 5-Seater Petrol / Diesel", bodyType: "SUV" },
          { name: "AX3 5/7-Seater Petrol / Diesel MT/AT", bodyType: "SUV" },
          { name: "AX5 / AX5 Select MT/AT", bodyType: "SUV" },
          { name: "AX7 / AX7 Luxury / AWD", bodyType: "SUV" },
          { name: "Blaze Edition / Ebony", bodyType: "SUV" },
        ],
      },
      {
        name: "XUV 3XO",
        variants: [
          { name: "MX1 / MX2 / MX2 Pro Petrol/Diesel", bodyType: "Compact SUV" },
          { name: "MX3 / MX3 Pro Petrol/Diesel MT/AT", bodyType: "Compact SUV" },
          { name: "AX5 / AX5L TGDi MT/AT", bodyType: "Compact SUV" },
          { name: "AX7 / AX7L TGDi MT/AT", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "XUV300",
        variants: [
          { name: "W4 / W6 Petrol / Diesel / AMT", bodyType: "Compact SUV" },
          { name: "W8 / W8(O) Petrol / Diesel / AMT", bodyType: "Compact SUV" },
          { name: "TurboSport TGDi", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "XUV500",
        variants: [
          { name: "W4 / W6 / W7 2.2 mHawk", bodyType: "SUV" },
          { name: "W8 / W9 / W10 MT/AT", bodyType: "SUV" },
          { name: "W11 / W11(O) AWD", bodyType: "SUV" },
          { name: "G AT Petrol", bodyType: "SUV" },
        ],
      },
      {
        name: "Bolero",
        variants: [
          { name: "B4 1.5 mHawk75", bodyType: "MUV" },
          { name: "B6 / B6(O) 1.5 mHawk75", bodyType: "MUV" },
          { name: "DI / Plus / SLX / ZLX 2.5", bodyType: "MUV" },
        ],
      },
      {
        name: "Bolero Neo",
        variants: [
          { name: "N4 / N8 1.5 mHawk100", bodyType: "Compact SUV" },
          { name: "N10 / N10(O) MLD Diff-Lock", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Bolero Neo Plus",
        variants: [
          { name: "P4 9-Seater 2.2 mHawk", bodyType: "9-Seater SUV" },
          { name: "P10 9-Seater 2.2 mHawk", bodyType: "9-Seater SUV" },
        ],
      },
      {
        name: "Bolero Camper / Maxi Truck",
        variants: [
          { name: "Camper 2WD / 4WD / Gold", bodyType: "Pickup Truck" },
          { name: "Maxi Truck Plus / Maxx Pik-Up", bodyType: "Pickup Truck" },
        ],
      },
      {
        name: "Marazzo",
        variants: [
          { name: "M2 7/8-Seater 1.5 Diesel", bodyType: "MPV" },
          { name: "M4+ / M6+ 7/8-Seater", bodyType: "MPV" },
        ],
      },
      {
        name: "TUV300 / TUV300 Plus",
        variants: [
          { name: "T4+ / T6+ / T8 / T10 mHawk100", bodyType: "SUV" },
          { name: "TUV300 Plus P4 / P6 / P8 2.2", bodyType: "9-Seater SUV" },
        ],
      },
      {
        name: "KUV100 / KUV100 NXT",
        variants: [
          { name: "K2+ / K4+ 1.2 Petrol/Diesel", bodyType: "Micro SUV" },
          { name: "K6+ / K8 1.2 Petrol/Diesel", bodyType: "Micro SUV" },
        ],
      },
      {
        name: "Xylo",
        variants: [
          { name: "D2 / D4 mDI CRDe", bodyType: "MPV" },
          { name: "E4 / E8 / H4 / H8 / H9 mHawk", bodyType: "MPV" },
        ],
      },
      {
        name: "Quanto",
        variants: [
          { name: "C2 / C4 / C6 / C8", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Alturas G4",
        variants: [
          { name: "2WD AT 2.2 Diesel", bodyType: "Luxury Full-size SUV" },
          { name: "4WD AT 2.2 Diesel", bodyType: "Luxury Full-size SUV" },
        ],
      },
      {
        name: "Verito / Verito Vibe",
        variants: [
          { name: "D2 / D4 / D6 1.5 dCi", bodyType: "Sedan" },
          { name: "Verito Vibe CS D2 / D4 / D6", bodyType: "Hatchback" },
        ],
      },
      {
        name: "e-Verito (Electric)",
        variants: [
          { name: "D2 / D4 / D6 Electric", bodyType: "Electric Sedan" },
        ],
      },
      {
        name: "e2o Plus (Electric)",
        variants: [
          { name: "P2 / P4 / P6 / P8 Electric", bodyType: "Electric Hatchback" },
        ],
      },
      {
        name: "Armada / Major / Commander",
        variants: [
          { name: "Major 4x4 / Commander / Classic", bodyType: "Off-Roader" },
        ],
      },
    ],
  },
  {
    name: "Toyota",
    models: [
      {
        name: "Innova Crysta",
        variants: [
          { name: "GX 2.4 Diesel 7/8-Seater", bodyType: "MPV" },
          { name: "VX 2.4 Diesel 7/8-Seater", bodyType: "MPV" },
          { name: "ZX 2.4 Diesel 7-Seater", bodyType: "MPV" },
          { name: "2.7 Petrol GX / VX / ZX AT", bodyType: "MPV" },
        ],
      },
      {
        name: "Innova Hycross",
        variants: [
          { name: "G / GX 2.0 Petrol CVT 7/8-Seater", bodyType: "MPV" },
          { name: "GX(O) 2.0 Petrol CVT", bodyType: "MPV" },
          { name: "VX / VX(O) Strong Hybrid e-CVT", bodyType: "MPV" },
          { name: "ZX / ZX(O) Ottoman Strong Hybrid", bodyType: "MPV" },
        ],
      },
      {
        name: "Innova (1st & 2nd Gen 2005-2016)",
        variants: [
          { name: "E / G 2.5 D-4D / 2.0 Petrol", bodyType: "MPV" },
          { name: "GX / VX 2.5 D-4D", bodyType: "MPV" },
          { name: "ZX 2.5 D-4D", bodyType: "MPV" },
        ],
      },
      {
        name: "Fortuner",
        variants: [
          { name: "4x2 2.7 Petrol MT/AT", bodyType: "Full-size SUV" },
          { name: "4x2 2.8 Diesel MT/AT", bodyType: "Full-size SUV" },
          { name: "4x4 2.8 Diesel MT/AT", bodyType: "Full-size SUV" },
        ],
      },
      {
        name: "Fortuner Legender / GR-S",
        variants: [
          { name: "Legender 4x2 AT 2.8 Diesel", bodyType: "Full-size SUV" },
          { name: "Legender 4x4 AT 2.8 Diesel", bodyType: "Full-size SUV" },
          { name: "GR-Sport 4x4 AT", bodyType: "Full-size SUV" },
        ],
      },
      {
        name: "Urban Cruiser Hyryder",
        variants: [
          { name: "E / S NeoDrive 1.5 MT / CNG", bodyType: "SUV" },
          { name: "G / V NeoDrive 1.5 MT/AT", bodyType: "SUV" },
          { name: "V AWD NeoDrive 1.5 MT", bodyType: "SUV" },
          { name: "S / G / V Strong Hybrid e-CVT", bodyType: "SUV" },
        ],
      },
      {
        name: "Urban Cruiser (2020-2022)",
        variants: [
          { name: "Mid / High / Premium 1.5 MT/AT", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Glanza",
        variants: [
          { name: "E 1.2 Petrol / CNG", bodyType: "Hatchback" },
          { name: "S 1.2 MT/AMT / CNG", bodyType: "Hatchback" },
          { name: "G 1.2 MT/AMT / CNG", bodyType: "Hatchback" },
          { name: "V 1.2 MT/AMT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Rumion",
        variants: [
          { name: "S 1.5 MT/AT / CNG", bodyType: "MPV" },
          { name: "G 1.5 MT", bodyType: "MPV" },
          { name: "V 1.5 MT/AT", bodyType: "MPV" },
        ],
      },
      {
        name: "Hilux",
        variants: [
          { name: "Standard 4x4 MT 2.8 Diesel", bodyType: "Lifestyle Pickup" },
          { name: "High 4x4 MT/AT 2.8 Diesel", bodyType: "Lifestyle Pickup" },
        ],
      },
      {
        name: "Camry Hybrid",
        variants: [
          { name: "2.5 Hybrid e-CVT", bodyType: "Luxury Sedan" },
        ],
      },
      {
        name: "Vellfire",
        variants: [
          { name: "Hi Grade 2.5 Hybrid", bodyType: "Ultra Luxury MPV" },
          { name: "VIP Grade Executive Lounge", bodyType: "Ultra Luxury MPV" },
        ],
      },
      {
        name: "Corolla Altis",
        variants: [
          { name: "1.8 G / GL / VL Petrol MT/CVT", bodyType: "Executive Sedan" },
          { name: "1.4 D-4D J / G / GL Diesel", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Corolla (9th Gen)",
        variants: [
          { name: "1.8 H1 / H2 / H5 Petrol", bodyType: "Sedan" },
        ],
      },
      {
        name: "Etios",
        variants: [
          { name: "GD / VD / VXD 1.4 Diesel", bodyType: "Sedan" },
          { name: "G / V / VX 1.5 Petrol", bodyType: "Sedan" },
          { name: "Platinum Etios", bodyType: "Sedan" },
        ],
      },
      {
        name: "Etios Liva",
        variants: [
          { name: "G / V / VX 1.2 Petrol", bodyType: "Hatchback" },
          { name: "GD / VD 1.4 Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Etios Cross",
        variants: [
          { name: "G / V 1.2 / 1.5 Petrol", bodyType: "Crossover" },
          { name: "GD / VD 1.4 Diesel", bodyType: "Crossover" },
        ],
      },
      {
        name: "Yaris",
        variants: [
          { name: "J / G / V / VX 1.5 MT/CVT", bodyType: "Sedan" },
        ],
      },
      {
        name: "Land Cruiser 300 / 200",
        variants: [
          { name: "LC200 4.5 V8 Diesel", bodyType: "Flagship Luxury SUV" },
          { name: "LC300 ZX 3.3 V6 Twin-Turbo", bodyType: "Flagship Luxury SUV" },
        ],
      },
      {
        name: "Land Cruiser Prado",
        variants: [
          { name: "TX / VX 3.0 D-4D", bodyType: "Luxury SUV" },
        ],
      },
      {
        name: "Qualis",
        variants: [
          { name: "FS / GS / GST 2.4 Diesel", bodyType: "MUV" },
        ],
      },
      {
        name: "Prius",
        variants: [
          { name: "Z6 / Z8 Hybrid", bodyType: "Hybrid Sedan" },
        ],
      },
    ],
  },
  {
    name: "Kia",
    models: [
      {
        name: "Seltos",
        variants: [
          { name: "HTE / HTK / HTK+ 1.5 Smartstream", bodyType: "SUV" },
          { name: "HTX / HTX+ 1.5 Petrol/Diesel", bodyType: "SUV" },
          { name: "GTX+ 1.5 Turbo DCT / Diesel AT", bodyType: "SUV" },
          { name: "X-Line 1.5 Turbo DCT / Diesel AT", bodyType: "SUV" },
        ],
      },
      {
        name: "Sonet",
        variants: [
          { name: "HTE / HTK / HTK+ 1.2 Petrol / 1.5 Diesel", bodyType: "Compact SUV" },
          { name: "HTX / HTX+ 1.0 Turbo / 1.5 Diesel", bodyType: "Compact SUV" },
          { name: "GTX+ 1.0 Turbo DCT / Diesel AT", bodyType: "Compact SUV" },
          { name: "X-Line 1.0 Turbo / Diesel AT", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Carens",
        variants: [
          { name: "Premium / Prestige 1.5 Petrol / Diesel", bodyType: "MPV" },
          { name: "Prestige+ / Luxury 1.5 Turbo / Diesel", bodyType: "MPV" },
          { name: "Luxury+ / X-Line 6/7-Seater", bodyType: "MPV" },
        ],
      },
      {
        name: "Carnival (4th Gen 2024+)",
        variants: [
          { name: "Limousine 2.2 Diesel AT", bodyType: "Luxury MPV" },
          { name: "Limousine Plus 2.2 Diesel AT", bodyType: "Luxury MPV" },
        ],
      },
      {
        name: "Carnival (3rd Gen 2020-2023)",
        variants: [
          { name: "Premium 7/8-Seater 2.2 Diesel", bodyType: "Luxury MPV" },
          { name: "Prestige 7/9-Seater 2.2 Diesel", bodyType: "Luxury MPV" },
          { name: "Limousine 7-Seater VIP Seats", bodyType: "Luxury MPV" },
        ],
      },
      {
        name: "EV6",
        variants: [
          { name: "GT Line RWD 77.4 kWh", bodyType: "Electric Crossover" },
          { name: "GT Line AWD 77.4 kWh", bodyType: "Electric Crossover" },
        ],
      },
      {
        name: "EV9",
        variants: [
          { name: "GT-Line AWD 99.8 kWh 6-Seater", bodyType: "Electric Luxury SUV" },
        ],
      },
      {
        name: "Syros / Clavis",
        variants: [
          { name: "HTE / HTK / HTX / GTX+", bodyType: "Compact SUV" },
        ],
      },
    ],
  },
  {
    name: "Honda",
    models: [
      {
        name: "City (5th Gen)",
        variants: [
          { name: "SV 1.5 i-VTEC MT", bodyType: "Sedan" },
          { name: "V 1.5 i-VTEC MT/CVT", bodyType: "Sedan" },
          { name: "VX 1.5 i-VTEC MT/CVT", bodyType: "Sedan" },
          { name: "ZX 1.5 i-VTEC MT/CVT", bodyType: "Sedan" },
          { name: "City e:HEV Strong Hybrid ZX", bodyType: "Hybrid Sedan" },
        ],
      },
      {
        name: "City (4th Gen)",
        variants: [
          { name: "SV / V 1.5 i-VTEC / i-DTEC", bodyType: "Sedan" },
          { name: "VX / ZX 1.5 i-VTEC / i-DTEC / CVT", bodyType: "Sedan" },
        ],
      },
      {
        name: "City (3rd Gen 2008-2013)",
        variants: [
          { name: "1.5 E / S / V MT/AT", bodyType: "Sedan" },
        ],
      },
      {
        name: "Elevate",
        variants: [
          { name: "SV 1.5 i-VTEC MT", bodyType: "Mid-size SUV" },
          { name: "V 1.5 i-VTEC MT/CVT", bodyType: "Mid-size SUV" },
          { name: "VX 1.5 i-VTEC MT/CVT", bodyType: "Mid-size SUV" },
          { name: "ZX 1.5 i-VTEC MT/CVT / Dual Tone", bodyType: "Mid-size SUV" },
        ],
      },
      {
        name: "Amaze (2nd & 3rd Gen)",
        variants: [
          { name: "E 1.2 i-VTEC MT", bodyType: "Compact Sedan" },
          { name: "S 1.2 i-VTEC MT/CVT", bodyType: "Compact Sedan" },
          { name: "VX 1.2 i-VTEC MT/CVT", bodyType: "Compact Sedan" },
          { name: "Elite Edition", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Amaze (1st Gen)",
        variants: [
          { name: "E / EX / S 1.2 Petrol / 1.5 i-DTEC", bodyType: "Compact Sedan" },
          { name: "SX / VX 1.2 Petrol / 1.5 i-DTEC / AT", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Civic (10th Gen 2019-2021)",
        variants: [
          { name: "V / VX / ZX 1.8 Petrol CVT", bodyType: "Executive Sedan" },
          { name: "VX / ZX 1.6 i-DTEC Diesel MT", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Civic (8th Gen)",
        variants: [
          { name: "1.8 S / V MT/AT", bodyType: "Executive Sedan" },
          { name: "Civic Hybrid", bodyType: "Hybrid Sedan" },
        ],
      },
      {
        name: "Jazz",
        variants: [
          { name: "V / VX / ZX 1.2 i-VTEC MT/CVT", bodyType: "Premium Hatchback" },
          { name: "1.5 i-DTEC Diesel SV / V / VX", bodyType: "Premium Hatchback" },
        ],
      },
      {
        name: "WR-V",
        variants: [
          { name: "SV / VX 1.2 i-VTEC Petrol", bodyType: "Crossover" },
          { name: "SV / VX 1.5 i-DTEC Diesel", bodyType: "Crossover" },
        ],
      },
      {
        name: "BR-V",
        variants: [
          { name: "E / S / V 1.5 Petrol / Diesel", bodyType: "7-Seater Crossover" },
          { name: "VX 1.5 Petrol / Diesel / CVT", bodyType: "7-Seater Crossover" },
        ],
      },
      {
        name: "CR-V",
        variants: [
          { name: "2.0 / 2.4 2WD / 4WD AT (3rd/4th Gen)", bodyType: "SUV" },
          { name: "2.0 Petrol 2WD CVT / 1.6 Diesel 9AT AWD (5th Gen)", bodyType: "SUV" },
        ],
      },
      {
        name: "Brio",
        variants: [
          { name: "E / EX / S 1.2 MT/AT", bodyType: "Hatchback" },
          { name: "V / VX 1.2 MT/AT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Mobilio",
        variants: [
          { name: "E / S / V 1.5 Petrol / Diesel", bodyType: "MPV" },
          { name: "RS 1.5 Diesel", bodyType: "MPV" },
        ],
      },
      {
        name: "Accord",
        variants: [
          { name: "2.4 / 3.0 V6 / 3.5 V6 MT/AT", bodyType: "Luxury Sedan" },
          { name: "Accord Hybrid 2.0 i-MMD", bodyType: "Luxury Sedan" },
        ],
      },
    ],
  },
  {
    name: "MG Motor",
    models: [
      {
        name: "Windsor EV",
        variants: [
          { name: "Excite 38 kWh", bodyType: "CUV Electric" },
          { name: "Exclusive 38 kWh", bodyType: "CUV Electric" },
          { name: "Essence 38 kWh", bodyType: "CUV Electric" },
        ],
      },
      {
        name: "Hector",
        variants: [
          { name: "Style / Shine Pro 1.5 Turbo / Diesel", bodyType: "SUV" },
          { name: "Select Pro / Smart Pro 1.5 Turbo CVT/Diesel", bodyType: "SUV" },
          { name: "Sharp Pro / Savvy Pro ADAS Level 2", bodyType: "SUV" },
        ],
      },
      {
        name: "Hector Plus",
        variants: [
          { name: "Shine Pro 6/7-Seater", bodyType: "SUV" },
          { name: "Select Pro / Sharp Pro 6/7-Seater", bodyType: "SUV" },
          { name: "Savvy Pro ADAS 6/7-Seater", bodyType: "SUV" },
        ],
      },
      {
        name: "Astor",
        variants: [
          { name: "Sprint / Shine 1.5 VTi-Tech", bodyType: "SUV" },
          { name: "Select / Smart 1.5 CVT", bodyType: "SUV" },
          { name: "Sharp Pro / Savvy Pro 1.3 Turbo AT ADAS", bodyType: "SUV" },
        ],
      },
      {
        name: "ZS EV",
        variants: [
          { name: "Executive / Excite 50.3 kWh", bodyType: "Electric SUV" },
          { name: "Exclusive Plus / Essence ADAS 50.3 kWh", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Comet EV",
        variants: [
          { name: "Executive / Pace 17.3 kWh", bodyType: "Urban Micro EV" },
          { name: "Play / Plush Fast Charge", bodyType: "Urban Micro EV" },
        ],
      },
      {
        name: "Gloster",
        variants: [
          { name: "Super / Smart 2.0 Turbo 4x2", bodyType: "Full-size SUV" },
          { name: "Sharp / Savvy 2.0 Twin-Turbo 4x4", bodyType: "Full-size SUV" },
          { name: "Blackstorm Edition 4x2 / 4x4", bodyType: "Full-size SUV" },
        ],
      },
      {
        name: "Cyberster",
        variants: [
          { name: "AWD Electric Roadster 77 kWh", bodyType: "Electric Sports Car" },
        ],
      },
    ],
  },
  {
    name: "BYD",
    models: [
      {
        name: "Atto 3",
        variants: [
          { name: "Dynamic 49.9 kWh", bodyType: "Electric SUV" },
          { name: "Premium 60.48 kWh", bodyType: "Electric SUV" },
          { name: "Superior 60.48 kWh ADAS", bodyType: "Electric SUV" },
        ],
      },
      {
        name: "Seal",
        variants: [
          { name: "Dynamic RWD 61.44 kWh", bodyType: "Electric Luxury Sedan" },
          { name: "Premium RWD 82.56 kWh", bodyType: "Electric Luxury Sedan" },
          { name: "Performance AWD 82.56 kWh (3.8s)", bodyType: "Electric Luxury Sedan" },
        ],
      },
      {
        name: "eMAX 7",
        variants: [
          { name: "Premium 55.4 kWh 6/7-Seater", bodyType: "Electric MPV" },
          { name: "Superior 71.8 kWh 6/7-Seater", bodyType: "Electric MPV" },
        ],
      },
      {
        name: "e6 Electric MPV",
        variants: [
          { name: "GL / GLX 71.7 kWh Blade Battery", bodyType: "Electric MPV" },
        ],
      },
      {
        name: "Sealion 7",
        variants: [
          { name: "Standard / Extended Range / AWD", bodyType: "Electric SUV" },
        ],
      },
    ],
  },
  {
    name: "BMW",
    models: [
      {
        name: "2 Series Gran Coupe",
        variants: [
          { name: "220i M Sport", bodyType: "Luxury Coupe" },
          { name: "220d M Sport", bodyType: "Luxury Coupe" },
          { name: "M Performance Edition", bodyType: "Luxury Coupe" },
        ],
      },
      {
        name: "3 Series Gran Limousine",
        variants: [
          { name: "330Li M Sport", bodyType: "Luxury Sedan" },
          { name: "320Ld M Sport", bodyType: "Luxury Sedan" },
        ],
      },
      {
        name: "3 Series / M340i",
        variants: [
          { name: "330i Sport / M Sport", bodyType: "Luxury Sedan" },
          { name: "320d Luxury Line", bodyType: "Luxury Sedan" },
          { name: "M340i xDrive 3.0 Turbo", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "5 Series",
        variants: [
          { name: "530Li M Sport (LWB)", bodyType: "Executive Luxury Sedan" },
          { name: "530i / 520d M Sport (G30)", bodyType: "Executive Luxury Sedan" },
        ],
      },
      {
        name: "6 Series Gran Turismo",
        variants: [
          { name: "630i M Sport", bodyType: "Grand Tourer" },
          { name: "620d / 630d M Sport", bodyType: "Grand Tourer" },
        ],
      },
      {
        name: "7 Series / i7",
        variants: [
          { name: "740i M Sport", bodyType: "Flagship Luxury Sedan" },
          { name: "740d M Sport", bodyType: "Flagship Luxury Sedan" },
          { name: "i7 eDrive50 / xDrive60 Electric", bodyType: "Electric Flagship Sedan" },
          { name: "i7 M70 xDrive", bodyType: "Electric Flagship Sedan" },
        ],
      },
      {
        name: "X1 / iX1",
        variants: [
          { name: "sDrive18i M Sport / xLine", bodyType: "Luxury Compact SUV" },
          { name: "sDrive18d M Sport / xLine", bodyType: "Luxury Compact SUV" },
          { name: "iX1 xDrive30 Electric", bodyType: "Electric Compact SUV" },
        ],
      },
      {
        name: "X3",
        variants: [
          { name: "xDrive20d xLine / M Sport", bodyType: "Luxury SUV" },
          { name: "xDrive30i / M40i xDrive", bodyType: "Performance Luxury SUV" },
        ],
      },
      {
        name: "X4",
        variants: [
          { name: "xDrive30i / 30d M Sport Silver Shadow", bodyType: "Coupe SUV" },
          { name: "M40i", bodyType: "Performance Coupe SUV" },
        ],
      },
      {
        name: "X5",
        variants: [
          { name: "xDrive40i xLine / M Sport", bodyType: "Luxury SUV" },
          { name: "xDrive30d xLine / M Sport", bodyType: "Luxury SUV" },
        ],
      },
      {
        name: "X6",
        variants: [
          { name: "xDrive40i M Sport", bodyType: "Coupe SUV" },
        ],
      },
      {
        name: "X7",
        variants: [
          { name: "xDrive40i M Sport", bodyType: "Luxury 3-Row SUV" },
          { name: "xDrive40d M Sport / Design Pure Excellence", bodyType: "Luxury 3-Row SUV" },
        ],
      },
      {
        name: "i4",
        variants: [
          { name: "eDrive35 / eDrive40 M Sport", bodyType: "Electric Luxury Sedan" },
        ],
      },
      {
        name: "iX",
        variants: [
          { name: "xDrive40 / xDrive50", bodyType: "Electric Flagship SUV" },
        ],
      },
      {
        name: "Z4 Roadster",
        variants: [
          { name: "sDrive20i / M40i 3.0 Turbo", bodyType: "Convertible Sports Car" },
        ],
      },
      {
        name: "M2 / M3 / M4 / M5",
        variants: [
          { name: "M2 Coupe Manual / Steptronic", bodyType: "High Performance" },
          { name: "M3 Competition xDrive", bodyType: "High Performance" },
          { name: "M4 Competition M xDrive", bodyType: "High Performance" },
          { name: "M5 Competition / M5 CS", bodyType: "High Performance" },
        ],
      },
      {
        name: "XM",
        variants: [
          { name: "4.4 V8 Hybrid 653 hp", bodyType: "Performance Luxury SUV" },
        ],
      },
    ],
  },
  {
    name: "Mercedes-Benz",
    models: [
      {
        name: "A-Class Limousine",
        variants: [
          { name: "A 200 Progressive Line", bodyType: "Luxury Compact Sedan" },
          { name: "A 200d Progressive Line", bodyType: "Luxury Compact Sedan" },
          { name: "AMG A 35 4MATIC", bodyType: "Performance Sedan" },
          { name: "AMG A 45 S 4MATIC+ 421 hp", bodyType: "Hot Hatchback" },
        ],
      },
      {
        name: "C-Class",
        variants: [
          { name: "C 200 Avantgarde", bodyType: "Executive Sedan" },
          { name: "C 220d Avantgarde", bodyType: "Executive Sedan" },
          { name: "C 300 AMG Line", bodyType: "Executive Sedan" },
          { name: "AMG C 43 4MATIC / C 63 S E Performance", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "E-Class",
        variants: [
          { name: "E 200 Exclusive (LWB)", bodyType: "Executive Sedan" },
          { name: "E 220d Exclusive / AMG Line (LWB)", bodyType: "Executive Sedan" },
          { name: "E 350d AMG Line 3.0 Inline-6", bodyType: "Executive Sedan" },
          { name: "AMG E 53 / E 63 S 4MATIC+", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "S-Class",
        variants: [
          { name: "S 350d 4MATIC", bodyType: "Flagship Luxury Sedan" },
          { name: "S 450 4MATIC", bodyType: "Flagship Luxury Sedan" },
        ],
      },
      {
        name: "Maybach S-Class",
        variants: [
          { name: "S 580 4MATIC 4.0 V8", bodyType: "Ultra Luxury Sedan" },
          { name: "S 680 4MATIC 6.0 V12", bodyType: "Ultra Luxury Sedan" },
        ],
      },
      {
        name: "CLA",
        variants: [
          { name: "CLA 200 / 200d", bodyType: "Coupe Sedan" },
          { name: "CLA 45 AMG", bodyType: "Performance Coupe" },
        ],
      },
      {
        name: "CLS",
        variants: [
          { name: "CLS 300d", bodyType: "4-Door Coupe" },
        ],
      },
      {
        name: "GLA",
        variants: [
          { name: "GLA 200 Progressive Line", bodyType: "Luxury Compact SUV" },
          { name: "GLA 220d 4MATIC AMG Line", bodyType: "Luxury Compact SUV" },
          { name: "AMG GLA 35 4MATIC", bodyType: "Performance Compact SUV" },
        ],
      },
      {
        name: "GLB",
        variants: [
          { name: "GLB 200 Progressive Line (7-Seater)", bodyType: "7-Seater Luxury SUV" },
          { name: "GLB 220d / 220d 4MATIC AMG Line", bodyType: "7-Seater Luxury SUV" },
        ],
      },
      {
        name: "GLC / GLC Coupe",
        variants: [
          { name: "GLC 300 4MATIC", bodyType: "Luxury SUV" },
          { name: "GLC 220d 4MATIC", bodyType: "Luxury SUV" },
          { name: "GLC 300d Coupe / AMG GLC 43 Coupe", bodyType: "Luxury SUV Coupe" },
        ],
      },
      {
        name: "GLE / GLE Coupe",
        variants: [
          { name: "GLE 300d 4MATIC", bodyType: "Luxury SUV" },
          { name: "GLE 450 4MATIC / 450d 4MATIC", bodyType: "Luxury SUV" },
          { name: "AMG GLE 53 4MATIC+ Coupe", bodyType: "Performance SUV" },
        ],
      },
      {
        name: "GLS",
        variants: [
          { name: "GLS 450 4MATIC", bodyType: "Flagship 7-Seater SUV" },
          { name: "GLS 450d 4MATIC", bodyType: "Flagship 7-Seater SUV" },
        ],
      },
      {
        name: "Maybach GLS 600",
        variants: [
          { name: "GLS 600 4MATIC 4.0 V8", bodyType: "Ultra Luxury SUV" },
        ],
      },
      {
        name: "G-Class",
        variants: [
          { name: "G 350d / G 400d / G 450d", bodyType: "Iconic Off-Roader" },
          { name: "AMG G 63 4.0 V8 Bi-Turbo", bodyType: "High Performance SUV" },
          { name: "G 580 with EQ Technology", bodyType: "Electric Off-Roader" },
        ],
      },
      {
        name: "EQA / EQB",
        variants: [
          { name: "EQA 250+ 70.5 kWh", bodyType: "Electric Compact SUV" },
          { name: "EQB 250+ / 350 4MATIC 7-Seater", bodyType: "Electric 7-Seater SUV" },
        ],
      },
      {
        name: "EQE",
        variants: [
          { name: "EQE 500 4MATIC SUV 90.6 kWh", bodyType: "Electric Luxury SUV" },
        ],
      },
      {
        name: "EQS",
        variants: [
          { name: "EQS 580 4MATIC Sedan 107.8 kWh", bodyType: "Electric Flagship Sedan" },
          { name: "Maybach EQS 680 SUV", bodyType: "Electric Ultra Luxury SUV" },
        ],
      },
      {
        name: "AMG GT",
        variants: [
          { name: "AMG GT R / GT S", bodyType: "Supercar" },
          { name: "AMG GT 63 S 4-Door Coupe 4MATIC+", bodyType: "Super Sedan" },
        ],
      },
    ],
  },
  {
    name: "Audi",
    models: [
      {
        name: "A3",
        variants: [
          { name: "35 TFSI Petrol / 35 TDI Diesel", bodyType: "Compact Luxury Sedan" },
          { name: "A3 Cabriolet", bodyType: "Convertible" },
        ],
      },
      {
        name: "A4",
        variants: [
          { name: "Premium 40 TFSI", bodyType: "Luxury Sedan" },
          { name: "Premium Plus 40 TFSI", bodyType: "Luxury Sedan" },
          { name: "Technology 40 TFSI", bodyType: "Luxury Sedan" },
        ],
      },
      {
        name: "A6",
        variants: [
          { name: "Premium Plus 45 TFSI", bodyType: "Executive Sedan" },
          { name: "Technology 45 TFSI", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "A8 L",
        variants: [
          { name: "Celebration Edition 55 TFSI", bodyType: "Flagship Luxury Sedan" },
          { name: "Technology 55 TFSI Quattro", bodyType: "Flagship Luxury Sedan" },
        ],
      },
      {
        name: "Q2",
        variants: [
          { name: "Standard / Premium / Technology 40 TFSI Quattro", bodyType: "Compact Luxury SUV" },
        ],
      },
      {
        name: "Q3",
        variants: [
          { name: "Premium 40 TFSI Quattro", bodyType: "Luxury SUV" },
          { name: "Premium Plus 40 TFSI Quattro", bodyType: "Luxury SUV" },
          { name: "Technology 40 TFSI Quattro", bodyType: "Luxury SUV" },
        ],
      },
      {
        name: "Q3 Sportback",
        variants: [
          { name: "Technology 40 TFSI Quattro", bodyType: "Coupe SUV" },
        ],
      },
      {
        name: "Q5",
        variants: [
          { name: "Premium Plus 45 TFSI Quattro", bodyType: "Luxury SUV" },
          { name: "Technology 45 TFSI Quattro", bodyType: "Luxury SUV" },
        ],
      },
      {
        name: "Q7",
        variants: [
          { name: "Premium Plus 55 TFSI Quattro", bodyType: "Luxury 7-Seater SUV" },
          { name: "Technology 55 TFSI Quattro", bodyType: "Luxury 7-Seater SUV" },
          { name: "Bold Edition", bodyType: "Luxury 7-Seater SUV" },
        ],
      },
      {
        name: "Q8",
        variants: [
          { name: "Celebration 55 TFSI Quattro", bodyType: "Flagship Coupe SUV" },
          { name: "Standard 55 TFSI Quattro", bodyType: "Flagship Coupe SUV" },
          { name: "RS Q8 4.0 Twin-Turbo 600 hp", bodyType: "Performance SUV" },
        ],
      },
      {
        name: "Q8 e-tron / Sportback",
        variants: [
          { name: "50 Quattro 95 kWh", bodyType: "Electric Luxury SUV" },
          { name: "55 Quattro 114 kWh", bodyType: "Electric Luxury SUV" },
          { name: "Sportback 55 Quattro", bodyType: "Electric Coupe SUV" },
        ],
      },
      {
        name: "e-tron GT",
        variants: [
          { name: "Quattro 93.4 kWh", bodyType: "Electric Grand Tourer" },
          { name: "RS e-tron GT 646 hp", bodyType: "Electric Super Sedan" },
        ],
      },
      {
        name: "S5 / RS5",
        variants: [
          { name: "S5 Sportback 3.0 TFSI 354 hp", bodyType: "Sports Sedan" },
          { name: "RS5 Sportback 2.9 Twin-Turbo 450 hp", bodyType: "High Performance Sedan" },
        ],
      },
      {
        name: "RS7 Sportback",
        variants: [
          { name: "Performance 4.0 Twin-Turbo 600 hp", bodyType: "Super Sedan" },
        ],
      },
      {
        name: "TT / R8",
        variants: [
          { name: "TT Coupe 2.0 TFSI Quattro", bodyType: "Sports Coupe" },
          { name: "R8 V10 Plus 5.2 FSI 610 hp", bodyType: "Supercar" },
        ],
      },
    ],
  },
  {
    name: "Nissan",
    models: [
      {
        name: "Magnite",
        variants: [
          { name: "Visia 1.0 Non-Turbo", bodyType: "Compact SUV" },
          { name: "Acenta 1.0 MT/AMT", bodyType: "Compact SUV" },
          { name: "N-Connecta 1.0 Turbo MT/CVT", bodyType: "Compact SUV" },
          { name: "Tekna / Tekna+ 1.0 Turbo MT/CVT", bodyType: "Compact SUV" },
          { name: "Geza Special Edition", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "X-Trail",
        variants: [
          { name: "1.5 VC-Turbo 3-Cylinder e-POWER CVT", bodyType: "Premium SUV" },
        ],
      },
      {
        name: "Sunny",
        variants: [
          { name: "XE / XL 1.5 Petrol / Diesel", bodyType: "Sedan" },
          { name: "XV / XV CVT / Special Edition", bodyType: "Sedan" },
        ],
      },
      {
        name: "Micra / Micra Active",
        variants: [
          { name: "Active XL / XV 1.2 Petrol", bodyType: "Hatchback" },
          { name: "XL / XV / XV CVT Petrol / 1.5 dCi Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Terrano",
        variants: [
          { name: "XE / XL / XL Plus 1.5 dCi 85/110", bodyType: "SUV" },
          { name: "XV / XV Premium / AMT", bodyType: "SUV" },
        ],
      },
      {
        name: "Kicks",
        variants: [
          { name: "XL / XV 1.5 Petrol / 1.5 dCi", bodyType: "SUV" },
          { name: "XV Premium / XV Pre(O) 1.3 Turbo MT/CVT", bodyType: "SUV" },
        ],
      },
      {
        name: "Teana",
        variants: [
          { name: "2.5 XL / XV V6 Petrol CVT", bodyType: "Luxury Sedan" },
        ],
      },
      {
        name: "Evalia",
        variants: [
          { name: "XE / XL / XV 1.5 dCi", bodyType: "MPV" },
        ],
      },
      {
        name: "GT-R",
        variants: [
          { name: "3.8 Twin-Turbo V6 570 hp Black Edition", bodyType: "Supercar" },
        ],
      },
    ],
  },
  {
    name: "Volkswagen",
    models: [
      {
        name: "Virtus",
        variants: [
          { name: "Comfortline 1.0 TSI MT", bodyType: "Sedan" },
          { name: "Highline 1.0 TSI MT/AT", bodyType: "Sedan" },
          { name: "Topline 1.0 TSI MT/AT", bodyType: "Sedan" },
          { name: "GT Plus 1.5 TSI MT/DSG", bodyType: "Performance Sedan" },
          { name: "GT Edge Black / Sound Edition", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "Taigun",
        variants: [
          { name: "Comfortline 1.0 TSI MT", bodyType: "Compact SUV" },
          { name: "Highline 1.0 TSI MT/AT", bodyType: "Compact SUV" },
          { name: "Topline 1.0 TSI MT/AT", bodyType: "Compact SUV" },
          { name: "GT / GT Plus 1.5 TSI MT/DSG", bodyType: "Performance SUV" },
          { name: "GT Edge Trail Edition", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Tiguan",
        variants: [
          { name: "Elegance 2.0 TSI 4MOTION DSG", bodyType: "Premium SUV" },
          { name: "Exclusive Edition", bodyType: "Premium SUV" },
        ],
      },
      {
        name: "Polo",
        variants: [
          { name: "Trendline 1.0 / 1.2 Petrol / 1.2 / 1.5 TDI", bodyType: "Hatchback" },
          { name: "Comfortline 1.0 / 1.2 Petrol / 1.5 TDI", bodyType: "Hatchback" },
          { name: "Highline / Highline Plus MT/AT", bodyType: "Hatchback" },
          { name: "GT TSI 1.2 / 1.0 Turbo DSG/MT", bodyType: "Hot Hatchback" },
          { name: "GT TDI 1.5 / 1.6", bodyType: "Hot Hatchback" },
          { name: "Polo GTI 1.8 TSI 192 hp", bodyType: "Hot Hatchback" },
        ],
      },
      {
        name: "Vento",
        variants: [
          { name: "Trendline 1.6 Petrol / 1.5 TDI", bodyType: "Sedan" },
          { name: "Comfortline / Highline MT/AT", bodyType: "Sedan" },
          { name: "Highline Plus 1.0 TSI / 1.2 TSI DSG", bodyType: "Sedan" },
        ],
      },
      {
        name: "Ameo",
        variants: [
          { name: "Trendline / Comfortline 1.2 / 1.0 Petrol", bodyType: "Compact Sedan" },
          { name: "Highline / Highline Plus 1.5 TDI DSG", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Jetta",
        variants: [
          { name: "Trendline / Comfortline 1.4 TSI / 2.0 TDI", bodyType: "Executive Sedan" },
          { name: "Highline 2.0 TDI DSG", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Passat",
        variants: [
          { name: "Comfortline / Highline 2.0 TDI DSG", bodyType: "Luxury Sedan" },
        ],
      },
      {
        name: "T-Roc",
        variants: [
          { name: "1.5 TSI EVO DSG", bodyType: "Imported Crossover" },
        ],
      },
      {
        name: "Tiguan Allspace",
        variants: [
          { name: "2.0 TSI 4MOTION 7-Seater", bodyType: "7-Seater Premium SUV" },
        ],
      },
      {
        name: "Beetle",
        variants: [
          { name: "1.4 TSI / 2.0 Petrol", bodyType: "Iconic Hatchback" },
        ],
      },
      {
        name: "Cross Polo",
        variants: [
          { name: "1.2 MPI / 1.5 TDI", bodyType: "Crossover Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Skoda",
    models: [
      {
        name: "Kylaq",
        variants: [
          { name: "Classic 1.0 TSI MT", bodyType: "Sub-Compact SUV" },
          { name: "Signature / Signature+ 1.0 TSI MT/AT", bodyType: "Sub-Compact SUV" },
          { name: "Prestige 1.0 TSI MT/AT", bodyType: "Sub-Compact SUV" },
        ],
      },
      {
        name: "Kushaq",
        variants: [
          { name: "Active / Classic 1.0 TSI MT", bodyType: "Compact SUV" },
          { name: "Ambition / Signature 1.0 TSI MT/AT", bodyType: "Compact SUV" },
          { name: "Style / Prestige 1.0 / 1.5 TSI MT/DSG", bodyType: "Compact SUV" },
          { name: "Monte Carlo 1.0 / 1.5 TSI MT/DSG", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Slavia",
        variants: [
          { name: "Active / Classic 1.0 TSI MT", bodyType: "Sedan" },
          { name: "Ambition / Signature 1.0 TSI MT/AT", bodyType: "Sedan" },
          { name: "Style / Prestige 1.0 / 1.5 TSI MT/DSG", bodyType: "Sedan" },
          { name: "Monte Carlo 1.5 TSI DSG", bodyType: "Sedan" },
        ],
      },
      {
        name: "Kodiaq",
        variants: [
          { name: "Style 2.0 TSI 4x4", bodyType: "Luxury 7-Seater SUV" },
          { name: "Sportline 2.0 TSI 4x4", bodyType: "Luxury 7-Seater SUV" },
          { name: "L&K (Laurin & Klement) 2.0 TSI 4x4", bodyType: "Luxury 7-Seater SUV" },
        ],
      },
      {
        name: "Superb",
        variants: [
          { name: "Style / Sportline 2.0 TSI", bodyType: "Executive Luxury Sedan" },
          { name: "L&K 2.0 TSI 190 hp DSG", bodyType: "Executive Luxury Sedan" },
        ],
      },
      {
        name: "Rapid",
        variants: [
          { name: "Active / Rider / Rider Plus 1.0 TSI / 1.6 MPI", bodyType: "Sedan" },
          { name: "Ambition / Style 1.0 TSI / 1.5 TDI DSG", bodyType: "Sedan" },
          { name: "Monte Carlo / Onyx Edition", bodyType: "Sedan" },
        ],
      },
      {
        name: "Octavia",
        variants: [
          { name: "Ambition / Style 1.4 / 1.8 / 2.0 TSI / 2.0 TDI", bodyType: "Executive Sedan" },
          { name: "L&K 2.0 TSI DSG", bodyType: "Executive Sedan" },
          { name: "Octavia vRS 230 / vRS 245", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "Laura",
        variants: [
          { name: "Classic / Ambiente 1.8 TSI / 2.0 TDI", bodyType: "Executive Sedan" },
          { name: "Elegance / L&K 2.0 TDI DSG", bodyType: "Executive Sedan" },
          { name: "Laura vRS 1.8 TSI", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "Fabia",
        variants: [
          { name: "Classic / Ambiente 1.2 MPI / 1.2 TDI", bodyType: "Hatchback" },
          { name: "Elegance 1.6 MPI / 1.6 TDI", bodyType: "Hatchback" },
          { name: "Scout Edition", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Yeti",
        variants: [
          { name: "Active 4x2 2.0 TDI 110 hp", bodyType: "Compact SUV" },
          { name: "Elegance 4x4 2.0 TDI 140 hp", bodyType: "Compact SUV 4x4" },
        ],
      },
      {
        name: "Karoq",
        variants: [
          { name: "1.5 TSI DSG", bodyType: "Imported SUV" },
        ],
      },
    ],
  },
  {
    name: "Renault",
    models: [
      {
        name: "Kwid",
        variants: [
          { name: "RXE 1.0", bodyType: "Hatchback" },
          { name: "RXL / RXL(O) 1.0 MT/AMT", bodyType: "Hatchback" },
          { name: "RXT 1.0 MT/AMT", bodyType: "Hatchback" },
          { name: "Climber MT/AMT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Triber",
        variants: [
          { name: "RXE 1.0 MT", bodyType: "Compact MPV" },
          { name: "RXL / RXT MT/AMT", bodyType: "Compact MPV" },
          { name: "RXZ MT/AMT Dual Tone", bodyType: "Compact MPV" },
        ],
      },
      {
        name: "Kiger",
        variants: [
          { name: "RXE / RXL 1.0 Energy MT", bodyType: "Compact SUV" },
          { name: "RXT / RXT(O) 1.0 MT/AMT", bodyType: "Compact SUV" },
          { name: "RXZ 1.0 Turbo MT/CVT", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Duster",
        variants: [
          { name: "RxE / RxL 1.5 dCi 85 hp", bodyType: "SUV" },
          { name: "RxZ 1.5 dCi 110 hp MT/AMT", bodyType: "SUV" },
          { name: "RxZ AWD 4x4 Independent Suspension", bodyType: "SUV 4x4" },
          { name: "RxS / RxZ 1.3 Turbo Petrol MT/CVT", bodyType: "SUV" },
        ],
      },
      {
        name: "Lodgy",
        variants: [
          { name: "Std / RxE / RxL 1.5 dCi 85 hp", bodyType: "MPV" },
          { name: "RxZ / Stepway Edition 110 hp", bodyType: "MPV" },
        ],
      },
      {
        name: "Captur",
        variants: [
          { name: "RXE / RXL 1.5 Petrol / 1.5 dCi", bodyType: "Crossover" },
          { name: "RXT / Platine 1.5 dCi", bodyType: "Crossover" },
        ],
      },
      {
        name: "Pulse",
        variants: [
          { name: "RxL / RxZ 1.2 Petrol / 1.5 dCi Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Scala",
        variants: [
          { name: "RxL / RxZ 1.5 Petrol / 1.5 dCi Diesel / CVT", bodyType: "Sedan" },
        ],
      },
      {
        name: "Fluence",
        variants: [
          { name: "E2 / E4 2.0 Petrol CVT / 1.5 dCi Diesel", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Koleos",
        variants: [
          { name: "2.0 dCi 4x2 / 4x4 AT", bodyType: "Luxury SUV" },
        ],
      },
    ],
  },
  {
    name: "Citroën",
    models: [
      {
        name: "Basalt",
        variants: [
          { name: "You 1.2 PureTech 82", bodyType: "Coupe SUV" },
          { name: "Plus 1.2 PureTech / Turbo", bodyType: "Coupe SUV" },
          { name: "Max 1.2 Turbo MT/AT", bodyType: "Coupe SUV" },
        ],
      },
      {
        name: "C3",
        variants: [
          { name: "Live 1.2 PureTech 82", bodyType: "Hatchback" },
          { name: "Feel 1.2 PureTech", bodyType: "Hatchback" },
          { name: "Shine 1.2 PureTech / Turbo 110 AT/MT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "C3 Aircross",
        variants: [
          { name: "You 1.2 Turbo 5-Seater", bodyType: "Mid-size SUV" },
          { name: "Plus 1.2 Turbo 5/7-Seater", bodyType: "Mid-size SUV" },
          { name: "Max 1.2 Turbo MT/AT 5/7-Seater", bodyType: "Mid-size SUV" },
        ],
      },
      {
        name: "eC3",
        variants: [
          { name: "Live 29.2 kWh Electric", bodyType: "Electric Hatchback" },
          { name: "Feel 29.2 kWh Electric", bodyType: "Electric Hatchback" },
          { name: "Shine 29.2 kWh Electric", bodyType: "Electric Hatchback" },
        ],
      },
      {
        name: "C5 Aircross",
        variants: [
          { name: "Feel 2.0 HDi Diesel AT", bodyType: "Premium SUV" },
          { name: "Shine 2.0 HDi Diesel AT", bodyType: "Premium SUV" },
        ],
      },
    ],
  },
  {
    name: "Jeep",
    models: [
      {
        name: "Compass",
        variants: [
          { name: "Sport 2.0 Diesel MT", bodyType: "SUV" },
          { name: "Longitude / Longitude+ 2.0 Diesel AT", bodyType: "SUV" },
          { name: "Limited 2.0 Diesel AT/MT", bodyType: "SUV" },
          { name: "Model S (4x2 / 4x4) 2.0 Diesel AT", bodyType: "SUV 4x4" },
          { name: "Trailhawk 4x4 Diesel AT", bodyType: "Trail-Rated SUV 4x4" },
          { name: "Night Eagle Edition", bodyType: "SUV" },
          { name: "1.4 MultiAir Petrol MT/DCT", bodyType: "SUV" },
        ],
      },
      {
        name: "Meridian",
        variants: [
          { name: "Limited / Limited(O) 2.0 Diesel MT/AT", bodyType: "3-Row SUV" },
          { name: "Overland 4x2 / 4x4 AT", bodyType: "3-Row SUV" },
          { name: "Track Edition", bodyType: "3-Row SUV" },
        ],
      },
      {
        name: "Wrangler",
        variants: [
          { name: "Unlimited 2.0 Turbo 4x4 AT", bodyType: "Iconic Off-Roader" },
          { name: "Rubicon 2.0 Turbo Rock-Trac 4x4", bodyType: "Heavy-Duty Off-Roader" },
        ],
      },
      {
        name: "Grand Cherokee",
        variants: [
          { name: "Limited 2.0 Turbo 4x4 8AT", bodyType: "Luxury Flagship SUV" },
          { name: "Summit Reserve 4x4", bodyType: "Luxury Flagship SUV" },
        ],
      },
      {
        name: "Cherokee",
        variants: [
          { name: "Trailhawk 4x4", bodyType: "SUV 4x4" },
        ],
      },
    ],
  },
  {
    name: "Force Motors",
    models: [
      {
        name: "Gurkha",
        variants: [
          { name: "3-Door 4x4 2.6 FM-CR", bodyType: "Off-Roader 4x4" },
          { name: "5-Door 4x4 2.6 FM-CR", bodyType: "Off-Roader 4x4" },
        ],
      },
      {
        name: "Trax Cruiser",
        variants: [
          { name: "Cruiser 9-Seater / 12-Seater", bodyType: "MUV" },
          { name: "Cruiser Deluxe AC", bodyType: "MUV" },
        ],
      },
      {
        name: "Trax Toofan",
        variants: [
          { name: "Toofan 11-Seater / 13-Seater", bodyType: "MUV" },
        ],
      },
      {
        name: "Trax Gama / Kargo King",
        variants: [
          { name: "Gama Classic / Kargo King Pickup", bodyType: "Utility" },
        ],
      },
      {
        name: "Urbania",
        variants: [
          { name: "Short Wheelbase (10-Seater)", bodyType: "Luxury Commuter" },
          { name: "Medium Wheelbase (13-Seater)", bodyType: "Luxury Commuter" },
          { name: "Long Wheelbase (17-Seater)", bodyType: "Luxury Commuter" },
        ],
      },
      {
        name: "Force One SUV",
        variants: [
          { name: "EX / SX 2.2 FM-Tech", bodyType: "SUV" },
          { name: "LX 4x4 2.2 FM-Tech", bodyType: "SUV 4x4" },
        ],
      },
    ],
  },
  {
    name: "Volvo",
    models: [
      {
        name: "EX40",
        variants: [
          { name: "Plus Single Motor 69 kWh", bodyType: "Electric Compact Luxury SUV" },
          { name: "Ultimate Twin Motor AWD 78 kWh", bodyType: "Electric Compact Luxury SUV" },
        ],
      },
      {
        name: "EC40 / C40 Recharge",
        variants: [
          { name: "Twin Motor AWD 78 kWh", bodyType: "Electric Luxury Coupe SUV" },
        ],
      },
      {
        name: "XC40",
        variants: [
          { name: "B4 Ultimate Mild Hybrid", bodyType: "Luxury Compact SUV" },
          { name: "D4 Momentum / Inscription Diesel", bodyType: "Luxury Compact SUV" },
          { name: "T4 R-Design Petrol", bodyType: "Luxury Compact SUV" },
        ],
      },
      {
        name: "XC60",
        variants: [
          { name: "B5 Ultimate Mild Hybrid AWD", bodyType: "Mid-size Luxury SUV" },
          { name: "D5 Inscription AWD Diesel", bodyType: "Mid-size Luxury SUV" },
        ],
      },
      {
        name: "XC90",
        variants: [
          { name: "B6 Ultimate Mild Hybrid AWD 7-Seater", bodyType: "Flagship Luxury 7-Seater SUV" },
          { name: "D5 Inscription AWD Diesel", bodyType: "Flagship Luxury 7-Seater SUV" },
          { name: "T8 Twin Engine Plug-in Hybrid", bodyType: "Flagship Luxury 7-Seater SUV" },
        ],
      },
      {
        name: "S90",
        variants: [
          { name: "B5 Ultimate Mild Hybrid", bodyType: "Luxury Executive Sedan" },
          { name: "D4 Inscription Diesel", bodyType: "Luxury Executive Sedan" },
        ],
      },
      {
        name: "S60",
        variants: [
          { name: "T4 Inscription Petrol", bodyType: "Compact Luxury Sedan" },
          { name: "D4 Momentum / Inscription Diesel", bodyType: "Compact Luxury Sedan" },
        ],
      },
      {
        name: "V40 / V40 Cross Country",
        variants: [
          { name: "D3 Kinetic / R-Design", bodyType: "Luxury Hatchback / Crossover" },
        ],
      },
    ],
  },
  {
    name: "Land Rover",
    models: [
      {
        name: "Defender",
        variants: [
          { name: "90 (3-Door) SE / HSE / X-Dynamic", bodyType: "Luxury Off-Roader" },
          { name: "110 (5-Door) SE / HSE / X / V8", bodyType: "Luxury Off-Roader" },
          { name: "130 (8-Seater) SE / HSE / Outbound", bodyType: "Luxury 8-Seater Off-Roader" },
        ],
      },
      {
        name: "Range Rover",
        variants: [
          { name: "SE / HSE 3.0 Petrol / Diesel", bodyType: "Ultra Luxury Flagship SUV" },
          { name: "Autobiography 3.0 / 4.4 V8 (SWB/LWB)", bodyType: "Ultra Luxury Flagship SUV" },
          { name: "SV (Special Vehicle Operations) 4.4 V8 530 hp", bodyType: "Ultra Luxury Flagship SUV" },
        ],
      },
      {
        name: "Range Rover Sport",
        variants: [
          { name: "Dynamic SE 3.0 Petrol / Diesel", bodyType: "Performance Luxury SUV" },
          { name: "Autobiography 3.0", bodyType: "Performance Luxury SUV" },
          { name: "SV Edition One 4.4 V8 635 hp", bodyType: "Performance Luxury SUV" },
        ],
      },
      {
        name: "Range Rover Velar",
        variants: [
          { name: "Dynamic HSE 2.0 Petrol 250 hp", bodyType: "Avant-Garde Luxury SUV" },
          { name: "Dynamic HSE 2.0 Diesel 204 hp", bodyType: "Avant-Garde Luxury SUV" },
        ],
      },
      {
        name: "Range Rover Evoque",
        variants: [
          { name: "Dynamic SE 2.0 Petrol", bodyType: "Compact Luxury SUV" },
          { name: "Dynamic SE 2.0 Diesel", bodyType: "Compact Luxury SUV" },
        ],
      },
      {
        name: "Discovery",
        variants: [
          { name: "S / Dynamic SE 2.0 / 3.0 Petrol", bodyType: "7-Seater Luxury SUV" },
          { name: "Dynamic HSE 3.0 Diesel", bodyType: "7-Seater Luxury SUV" },
        ],
      },
      {
        name: "Discovery Sport",
        variants: [
          { name: "Dynamic SE 2.0 Petrol AWD", bodyType: "Compact Luxury SUV" },
          { name: "Dynamic SE 2.0 Diesel AWD", bodyType: "Compact Luxury SUV" },
        ],
      },
      {
        name: "Freelander 2",
        variants: [
          { name: "S / SE / HSE 2.2 TD4 / SD4", bodyType: "Compact Luxury SUV" },
        ],
      },
    ],
  },
  {
    name: "Isuzu",
    models: [
      {
        name: "D-Max V-Cross",
        variants: [
          { name: "Z 4x2 AT 1.9 Diesel", bodyType: "Lifestyle Pickup" },
          { name: "Z 4x4 MT 1.9 Diesel", bodyType: "Lifestyle Pickup 4x4" },
          { name: "Z Prestige 4x4 AT 1.9 Diesel", bodyType: "Lifestyle Pickup 4x4" },
        ],
      },
      {
        name: "D-Max Hi-Lander",
        variants: [
          { name: "1.9 Diesel 4x2 MT", bodyType: "Pickup Truck" },
        ],
      },
      {
        name: "D-Max S-Cab",
        variants: [
          { name: "Standard / HR 2.5 Diesel", bodyType: "Commercial Crew Cab" },
        ],
      },
      {
        name: "MU-X",
        variants: [
          { name: "4x2 AT 1.9 Diesel 7-Seater", bodyType: "7-Seater SUV" },
          { name: "4x4 AT 1.9 Diesel 7-Seater", bodyType: "7-Seater SUV 4x4" },
        ],
      },
      {
        name: "MU-7",
        variants: [
          { name: "3.0 CRDi MT/AT", bodyType: "Full-size SUV" },
        ],
      },
    ],
  },
  {
    name: "Porsche",
    models: [
      {
        name: "Macan",
        variants: [
          { name: "Standard 2.0 Turbo 265 hp", bodyType: "Compact Luxury SUV" },
          { name: "Macan S 2.9 V6 380 hp", bodyType: "Compact Luxury SUV" },
          { name: "Macan GTS 2.9 V6 440 hp", bodyType: "Performance SUV" },
          { name: "Macan EV 4 / Turbo 100 kWh", bodyType: "Electric Performance SUV" },
        ],
      },
      {
        name: "Cayenne",
        variants: [
          { name: "Base 3.0 V6 Turbo 353 hp", bodyType: "Luxury Full-size SUV" },
          { name: "Cayenne Coupe 3.0 V6", bodyType: "Luxury Coupe SUV" },
          { name: "Cayenne E-Hybrid 470 hp", bodyType: "Plug-in Hybrid SUV" },
          { name: "Cayenne Turbo GT 4.0 V8 659 hp", bodyType: "Super SUV" },
        ],
      },
      {
        name: "718 Boxster / Cayman",
        variants: [
          { name: "718 Cayman / Boxster 2.0 Turbo", bodyType: "Sports Coupe / Roadster" },
          { name: "718 Cayman Style Edition", bodyType: "Sports Coupe" },
          { name: "718 Cayman GTS 4.0 Naturally Aspirated", bodyType: "Sports Coupe" },
          { name: "718 Cayman GT4 RS 500 hp", bodyType: "Track-Focused Sports Car" },
        ],
      },
      {
        name: "911",
        variants: [
          { name: "Carrera / Carrera T / Carrera S", bodyType: "Iconic Sports Car" },
          { name: "Carrera GTS / Targa 4 GTS", bodyType: "Sports Car" },
          { name: "911 Turbo S 650 hp", bodyType: "Supercar" },
          { name: "911 GT3 / GT3 RS 525 hp", bodyType: "Track Supercar" },
          { name: "911 Dakar Off-Road Edition", bodyType: "All-Terrain Sports Car" },
        ],
      },
      {
        name: "Panamera",
        variants: [
          { name: "Base 2.9 V6 Twin-Turbo", bodyType: "Luxury Sports Sedan" },
          { name: "Panamera 4 E-Hybrid", bodyType: "Hybrid Luxury Sedan" },
          { name: "Panamera Turbo E-Hybrid 680 hp", bodyType: "Super Sedan" },
        ],
      },
      {
        name: "Taycan",
        variants: [
          { name: "Standard RWD 89 kWh", bodyType: "Electric Sports Sedan" },
          { name: "Taycan 4S / GTS", bodyType: "Electric Sports Sedan" },
          { name: "Taycan Turbo / Turbo S 952 hp", bodyType: "Electric Super Sedan" },
          { name: "Cross Turismo 4S / Turbo", bodyType: "Electric Shooting Brake" },
        ],
      },
    ],
  },
  {
    name: "Lexus",
    models: [
      {
        name: "ES 300h",
        variants: [
          { name: "Exquisite 2.5 Hybrid", bodyType: "Executive Luxury Sedan" },
          { name: "Luxury 2.5 Hybrid", bodyType: "Executive Luxury Sedan" },
        ],
      },
      {
        name: "NX 350h",
        variants: [
          { name: "Exquisite AWD Hybrid", bodyType: "Compact Luxury SUV" },
          { name: "Luxury AWD Hybrid", bodyType: "Compact Luxury SUV" },
          { name: "F-Sport AWD Hybrid", bodyType: "Sport Luxury SUV" },
        ],
      },
      {
        name: "RX 350h / 500h",
        variants: [
          { name: "RX 350h Luxury AWD", bodyType: "Mid-size Luxury SUV" },
          { name: "RX 500h F-Sport Performance Direct4", bodyType: "Performance Luxury SUV" },
        ],
      },
      {
        name: "LX 500d / 600",
        variants: [
          { name: "Urban 3.3 Twin-Turbo V6 Diesel", bodyType: "Flagship Luxury SUV" },
          { name: "LX 600 3.5 Twin-Turbo V6 Petrol", bodyType: "Flagship Luxury SUV" },
        ],
      },
      {
        name: "LM 350h",
        variants: [
          { name: "4-Seater Ultra Luxury Lounge", bodyType: "Ultra Luxury MPV" },
          { name: "7-Seater VIP Lounge", bodyType: "Ultra Luxury MPV" },
        ],
      },
      {
        name: "LS 500h",
        variants: [
          { name: "Executive / Luxury 3.5 V6 Hybrid", bodyType: "Flagship Luxury Sedan" },
        ],
      },
      {
        name: "LC 500h",
        variants: [
          { name: "Coupe 3.5 V6 Multi-Stage Hybrid", bodyType: "Grand Tourer Coupe" },
        ],
      },
    ],
  },
  {
    name: "Mini",
    models: [
      {
        name: "Cooper 3-Door",
        variants: [
          { name: "Cooper C / Cooper S 2.0 Turbo", bodyType: "Premium Hatchback" },
          { name: "John Cooper Works (JCW) 231 hp", bodyType: "Hot Hatchback" },
        ],
      },
      {
        name: "Cooper 5-Door",
        variants: [
          { name: "Cooper C / Cooper S", bodyType: "Premium Hatchback" },
        ],
      },
      {
        name: "Cooper SE Electric",
        variants: [
          { name: "E / SE 54.2 kWh Electric", bodyType: "Electric Hatchback" },
        ],
      },
      {
        name: "Countryman",
        variants: [
          { name: "Countryman C / S ALL4", bodyType: "Luxury Crossover SUV" },
          { name: "Countryman JCW 300 hp", bodyType: "Performance Crossover SUV" },
          { name: "Countryman Electric E / SE", bodyType: "Electric Crossover SUV" },
        ],
      },
      {
        name: "Cooper Convertible",
        variants: [
          { name: "Cooper S Convertible", bodyType: "Open-Top Convertible" },
        ],
      },
      {
        name: "Clubman",
        variants: [
          { name: "Cooper S ALL4 Split Doors", bodyType: "Estate Wagon" },
        ],
      },
    ],
  },
  {
    name: "Jaguar",
    models: [
      {
        name: "F-Pace",
        variants: [
          { name: "R-Dynamic S 2.0 Petrol 250 hp", bodyType: "Performance Luxury SUV" },
          { name: "R-Dynamic S 2.0 Diesel 204 hp", bodyType: "Performance Luxury SUV" },
          { name: "SVR 5.0 Supercharged V8 550 hp", bodyType: "High Performance SUV" },
        ],
      },
      {
        name: "XE",
        variants: [
          { name: "Pure / Prestige 2.0 Petrol", bodyType: "Compact Luxury Sedan" },
          { name: "Portfolio 2.0 Diesel", bodyType: "Compact Luxury Sedan" },
        ],
      },
      {
        name: "XF",
        variants: [
          { name: "Prestige 2.0 Petrol/Diesel", bodyType: "Executive Luxury Sedan" },
          { name: "Portfolio / R-Sport", bodyType: "Executive Luxury Sedan" },
        ],
      },
      {
        name: "XJ / XJL",
        variants: [
          { name: "Premium Luxury 2.0 Petrol / 3.0 V6 Diesel", bodyType: "Flagship Luxury Sedan" },
          { name: "Portfolio 3.0 V6 Diesel (LWB)", bodyType: "Flagship Luxury Sedan" },
        ],
      },
      {
        name: "F-Type",
        variants: [
          { name: "Coupe / Convertible 2.0 Turbo", bodyType: "Sports Car" },
          { name: "R Dynamic 5.0 Supercharged V8 575 hp", bodyType: "Supercar" },
        ],
      },
      {
        name: "I-Pace",
        variants: [
          { name: "S / SE / HSE EV400 AWD 90 kWh", bodyType: "Electric Performance SUV" },
        ],
      },
    ],
  },
  {
    name: "Ford",
    models: [
      {
        name: "EcoSport",
        variants: [
          { name: "Ambiente / Trend 1.5 Ti-VCT / 1.5 TDCi", bodyType: "Compact SUV" },
          { name: "Titanium / Titanium+ 1.5 MT/AT", bodyType: "Compact SUV" },
          { name: "S / Thunder Edition 1.0 EcoBoost / 1.5 TDCi", bodyType: "Compact SUV" },
        ],
      },
      {
        name: "Endeavour",
        variants: [
          { name: "Trend 2.2 / 3.2 4x4 AT", bodyType: "Full-size SUV" },
          { name: "Titanium / Titanium+ 4x2 / 4x4 AT", bodyType: "Full-size SUV 4x4" },
          { name: "Sport Edition 2.0 Bi-Turbo 10AT 4x4", bodyType: "Full-size SUV 4x4" },
        ],
      },
      {
        name: "Figo",
        variants: [
          { name: "Base / Ambiente 1.2 Ti-VCT / 1.5 TDCi", bodyType: "Hatchback" },
          { name: "Titanium / Titanium Blu / 1.5 AT", bodyType: "Hatchback" },
          { name: "1st Gen EXi / ZXi / Titanium 1.4 TDCi", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Aspire",
        variants: [
          { name: "Ambiente / Trend 1.2 Petrol / 1.5 Diesel", bodyType: "Compact Sedan" },
          { name: "Titanium / Titanium+ MT/AT", bodyType: "Compact Sedan" },
        ],
      },
      {
        name: "Freestyle",
        variants: [
          { name: "Ambiente / Trend 1.2 Petrol / 1.5 TDCi", bodyType: "Crossover Hatchback" },
          { name: "Titanium / Titanium+ Flair Edition", bodyType: "Crossover Hatchback" },
        ],
      },
      {
        name: "Fiesta",
        variants: [
          { name: "Classic LXi / CLXi / SXi 1.4 TDCi / 1.6 Duratec", bodyType: "Sedan" },
          { name: "Kinetic Style / Titanium 1.5 TDCi", bodyType: "Sedan" },
          { name: "Fiesta 1.6 S Sports", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "Ikon",
        variants: [
          { name: "1.3 Endura / 1.6 Rocam Flair", bodyType: "Sedan" },
          { name: "1.4 TDCi DuraTorq", bodyType: "Sedan" },
        ],
      },
      {
        name: "Mondeo",
        variants: [
          { name: "2.0 Ghia Duratec Petrol / Duratorq Diesel", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Mustang GT",
        variants: [
          { name: "Fastback 5.0 V8 400 hp", bodyType: "Muscle Car" },
        ],
      },
    ],
  },
  {
    name: "Chevrolet",
    models: [
      {
        name: "Beat",
        variants: [
          { name: "PS / LS 1.2 Petrol / LPG", bodyType: "Hatchback" },
          { name: "LT / LT Option 1.2 Petrol / 1.0 XSDE Diesel", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Cruze",
        variants: [
          { name: "LT / LTZ 2.0 VCDi 166 hp MT/AT", bodyType: "Executive Diesel Sedan" },
        ],
      },
      {
        name: "Tavera",
        variants: [
          { name: "Neo 3 7/8/9/10-Seater", bodyType: "MUV" },
          { name: "Elite / Max 2.5 Turbo Diesel", bodyType: "MUV" },
        ],
      },
      {
        name: "Spark",
        variants: [
          { name: "1.0 PS / LS / LT", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Sail / Sail Hatchback",
        variants: [
          { name: "Base / LS / LT 1.2 Petrol / 1.3 SDE Diesel", bodyType: "Sedan / Hatchback" },
        ],
      },
      {
        name: "Enjoy",
        variants: [
          { name: "LS / LT / LTZ 1.4 Petrol / 1.3 MultiJet Diesel", bodyType: "MPV" },
        ],
      },
      {
        name: "Aveo / Aveo U-VA",
        variants: [
          { name: "1.4 / 1.6 E / LS / LT", bodyType: "Sedan / Hatchback" },
        ],
      },
      {
        name: "Optra / Optra Magnum",
        variants: [
          { name: "Elite / Royale 1.6 / 1.8 Petrol", bodyType: "Executive Sedan" },
          { name: "Optra Magnum 2.0 TCDi 120 hp Diesel", bodyType: "Executive Sedan" },
        ],
      },
      {
        name: "Captiva",
        variants: [
          { name: "LT 2.0 / 2.2 VCDi 2WD MT", bodyType: "SUV" },
          { name: "LTZ 2.2 VCDi AWD AT", bodyType: "SUV AWD" },
        ],
      },
      {
        name: "Trailblazer",
        variants: [
          { name: "LTZ 2.8 Duramax 200 hp AT", bodyType: "Full-size SUV" },
        ],
      },
    ],
  },
  {
    name: "Fiat",
    models: [
      {
        name: "Punto / Grande Punto",
        variants: [
          { name: "Active / Dynamic 1.2 FIRE / 1.3 MultiJet 75 hp", bodyType: "Hatchback" },
          { name: "Emotion / Sport 1.4 FIRE / 1.3 MultiJet 90 hp", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Punto Evo",
        variants: [
          { name: "Active / Dynamic / Emotion 1.3 MultiJet", bodyType: "Hatchback" },
          { name: "Punto Pure 1.2", bodyType: "Hatchback" },
        ],
      },
      {
        name: "Linea / Linea Classic",
        variants: [
          { name: "Active / Dynamic 1.4 Fire / 1.3 MultiJet", bodyType: "Sedan" },
          { name: "Emotion 1.3 MultiJet 93 hp", bodyType: "Sedan" },
          { name: "T-Jet 1.4 Turbo 114/125 hp", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "Avventura / Urban Cross",
        variants: [
          { name: "Active / Dynamic / Emotion 1.3 MultiJet", bodyType: "Crossover" },
          { name: "Powered by Abarth 1.4 T-Jet 140 hp", bodyType: "Performance Crossover" },
        ],
      },
      {
        name: "Abarth Punto",
        variants: [
          { name: "1.4 T-Jet 145 hp Scorpion", bodyType: "Hot Hatchback" },
        ],
      },
      {
        name: "Palio / Palio Stile",
        variants: [
          { name: "1.2 EL / ELX / 1.6 GTX 100 hp", bodyType: "Hatchback" },
          { name: "Palio D / 1.3 MultiJet Diesel", bodyType: "Hatchback" },
          { name: "Palio Adventure Estate 1.6", bodyType: "Station Wagon" },
          { name: "Palio S10 Limited Edition", bodyType: "Sports Hatchback" },
        ],
      },
      {
        name: "Fiat 500",
        variants: [
          { name: "1.3 MultiJet / Abarth 595 Competizione", bodyType: "Iconic Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Mitsubishi",
    models: [
      {
        name: "Pajero Sport",
        variants: [
          { name: "4x2 AT 2.5 DI-D", bodyType: "Full-size SUV" },
          { name: "4x4 MT 2.5 DI-D Super Select 4WD", bodyType: "Full-size SUV 4x4" },
          { name: "Select Plus Edition", bodyType: "Full-size SUV" },
        ],
      },
      {
        name: "Pajero SFX",
        variants: [
          { name: "2.8 Turbo Diesel Intercooler 4x4", bodyType: "Legendary Off-Roader" },
        ],
      },
      {
        name: "Lancer",
        variants: [
          { name: "GLXi 1.5 Petrol / Diesel", bodyType: "Sedan" },
          { name: "SFXi / Instyle 1.5", bodyType: "Sedan" },
          { name: "Lancer Evolution X (Evo 10)", bodyType: "Rally Performance Sedan" },
        ],
      },
      {
        name: "Outlander",
        variants: [
          { name: "2.4 MIVEC 4WD CVT (1st & 2nd Gen)", bodyType: "All-Wheel Drive SUV" },
        ],
      },
      {
        name: "Montero",
        variants: [
          { name: "3.2 DI-D 4x4 AT", bodyType: "Flagship Luxury Off-Roader" },
        ],
      },
      {
        name: "Cedia",
        variants: [
          { name: "Select / Elegance 2.0 Petrol", bodyType: "Sedan" },
          { name: "Sports 2.0 Petrol MOMO Steering", bodyType: "Sports Sedan" },
        ],
      },
    ],
  },
  {
    name: "Datsun",
    models: [
      {
        name: "GO",
        variants: [
          { name: "D / A / T 1.2 Petrol", bodyType: "Hatchback" },
          { name: "T Option / CVT Automatic", bodyType: "Hatchback" },
        ],
      },
      {
        name: "GO+",
        variants: [
          { name: "D / A / T 1.2 7-Seater", bodyType: "Compact MPV" },
          { name: "T Option / CVT Automatic 7-Seater", bodyType: "Compact MPV" },
        ],
      },
      {
        name: "redi-GO",
        variants: [
          { name: "D / A / T 0.8", bodyType: "Micro Hatchback" },
          { name: "S / 1.0 MT / 1.0 Smart Drive AMT", bodyType: "Micro Hatchback" },
        ],
      },
    ],
  },
  {
    name: "Rolls-Royce",
    models: [
      {
        name: "Ghost",
        variants: [
          { name: "V12 6.75 Twin-Turbo (SWB/EWB)", bodyType: "Ultra Luxury Sedan" },
          { name: "Black Badge Ghost", bodyType: "Ultra Luxury Performance Sedan" },
        ],
      },
      {
        name: "Phantom",
        variants: [
          { name: "Series II 6.75 V12 (SWB/Extended)", bodyType: "Pinnacle Luxury Sedan" },
        ],
      },
      {
        name: "Cullinan",
        variants: [
          { name: "Series II 6.75 V12 AWD", bodyType: "Ultra Luxury SUV" },
          { name: "Black Badge Cullinan 600 hp", bodyType: "Ultra Luxury Performance SUV" },
        ],
      },
      {
        name: "Spectre",
        variants: [
          { name: "Dual Motor Electric 584 hp 102 kWh", bodyType: "Ultra Luxury Electric Coupe" },
        ],
      },
      {
        name: "Wraith / Dawn",
        variants: [
          { name: "Wraith Black Badge V12 Coupe", bodyType: "Ultra Luxury Grand Tourer" },
          { name: "Dawn Drophead V12 Convertible", bodyType: "Ultra Luxury Convertible" },
        ],
      },
    ],
  },
  {
    name: "Bentley",
    models: [
      {
        name: "Continental GT",
        variants: [
          { name: "GT V8 4.0 Twin-Turbo 550 hp", bodyType: "Luxury Grand Tourer" },
          { name: "GT Speed 6.0 W12 659 hp", bodyType: "Luxury Grand Tourer" },
          { name: "GT Speed Hybrid 782 hp", bodyType: "Super Grand Tourer" },
        ],
      },
      {
        name: "Flying Spur",
        variants: [
          { name: "V8 / Hybrid 2.9 V6", bodyType: "Ultra Luxury Sedan" },
          { name: "Speed / Mulliner W12 / V8 Hybrid", bodyType: "Ultra Luxury Sedan" },
        ],
      },
      {
        name: "Bentayga",
        variants: [
          { name: "V8 4.0 Twin-Turbo (SWB/EWB)", bodyType: "Ultra Luxury SUV" },
          { name: "Bentayga Hybrid 3.0 V6", bodyType: "Ultra Luxury SUV" },
          { name: "Bentayga Speed 6.0 W12 / EWB Azure", bodyType: "Ultra Luxury SUV" },
        ],
      },
    ],
  },
  {
    name: "Ferrari",
    models: [
      {
        name: "296 GTB / GTS",
        variants: [
          { name: "2.9 Twin-Turbo V6 Hybrid 830 hp", bodyType: "Mid-Rear Hybrid Supercar" },
        ],
      },
      {
        name: "Roma / Roma Spider",
        variants: [
          { name: "3.9 Twin-Turbo V8 620 hp", bodyType: "Front-Mid Grand Tourer" },
        ],
      },
      {
        name: "Purosangue",
        variants: [
          { name: "6.5 Naturally Aspirated V12 725 hp AWD", bodyType: "Four-Door Four-Seater Supercar" },
        ],
      },
      {
        name: "F8 Tributo / Spider",
        variants: [
          { name: "3.9 Twin-Turbo V8 720 hp", bodyType: "Mid-Rear Supercar" },
        ],
      },
      {
        name: "812 Superfast / GTS",
        variants: [
          { name: "6.5 V12 800 hp", bodyType: "Front-Engine V12 Berlinetta" },
        ],
      },
      {
        name: "488 GTB / 458 Italia",
        variants: [
          { name: "488 GTB / Spider 3.9 V8", bodyType: "Mid-Rear Supercar" },
          { name: "458 Italia 4.5 Naturally Aspirated V8", bodyType: "Mid-Rear Supercar" },
        ],
      },
    ],
  },
  {
    name: "Lamborghini",
    models: [
      {
        name: "Urus",
        variants: [
          { name: "4.0 Twin-Turbo V8 650 hp", bodyType: "Super SUV" },
          { name: "Urus S 666 hp", bodyType: "Super SUV" },
          { name: "Urus Performante 666 hp Lightweight", bodyType: "Super SUV" },
          { name: "Urus SE Plug-in Hybrid 800 hp", bodyType: "Hybrid Super SUV" },
        ],
      },
      {
        name: "Huracán",
        variants: [
          { name: "EVO RWD / AWD 5.2 V10", bodyType: "Mid-Engine Supercar" },
          { name: "Tecnica 640 hp", bodyType: "Mid-Engine Supercar" },
          { name: "STO (Super Trofeo Omologata)", bodyType: "Track-Focused Supercar" },
          { name: "Sterrato All-Terrain Off-Road Edition", bodyType: "All-Terrain Supercar" },
        ],
      },
      {
        name: "Revuelto",
        variants: [
          { name: "6.5 V12 HPEV Hybrid 1015 hp", bodyType: "Flagship V12 Supercar" },
        ],
      },
      {
        name: "Aventador",
        variants: [
          { name: "LP 700-4 / S 6.5 V12", bodyType: "Flagship V12 Supercar" },
          { name: "SV / SVJ 770 hp", bodyType: "Track Flagship Supercar" },
        ],
      },
    ],
  },
  {
    name: "Aston Martin",
    models: [
      {
        name: "DBX",
        variants: [
          { name: "4.0 Twin-Turbo V8 550 hp", bodyType: "Luxury Super SUV" },
          { name: "DBX 707 (707 hp)", bodyType: "World's Fastest Luxury SUV" },
        ],
      },
      {
        name: "Vantage",
        variants: [
          { name: "V8 Coupe / Roadster 510 hp / 665 hp", bodyType: "Sports Coupe" },
          { name: "V12 Vantage Limited Edition", bodyType: "Sports Coupe" },
        ],
      },
      {
        name: "DB12 / DB11",
        variants: [
          { name: "DB12 4.0 Twin-Turbo V8 680 hp", bodyType: "Super Tourer" },
          { name: "DB11 V8 / V12 AMR", bodyType: "Grand Tourer" },
        ],
      },
    ],
  },
  {
    name: "Maserati",
    models: [
      {
        name: "Ghibli",
        variants: [
          { name: "Ghibli Hybrid 2.0 / V6 3.0", bodyType: "Sports Luxury Sedan" },
          { name: "Trofeo 3.8 Twin-Turbo V8 580 hp", bodyType: "Performance Sedan" },
        ],
      },
      {
        name: "Levante",
        variants: [
          { name: "Levante GT Hybrid / Modena V6", bodyType: "Luxury SUV" },
          { name: "Trofeo 3.8 Twin-Turbo V8 580 hp", bodyType: "Performance SUV" },
        ],
      },
      {
        name: "Grecale",
        variants: [
          { name: "GT / Modena 2.0 MHEV", bodyType: "Luxury Compact SUV" },
          { name: "Trofeo 3.0 Nettuno V6 530 hp", bodyType: "Performance Compact SUV" },
        ],
      },
      {
        name: "Quattroporte",
        variants: [
          { name: "Modena 3.0 V6", bodyType: "Flagship Luxury Sedan" },
          { name: "Trofeo 3.8 V8 580 hp", bodyType: "Performance Flagship Sedan" },
        ],
      },
      {
        name: "MC20",
        variants: [
          { name: "Cielo / Coupe 3.0 Nettuno V6 630 hp", bodyType: "Super Sports Car" },
        ],
      },
    ],
  },
];
