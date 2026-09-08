export type OemFitmentResult = {
  size: string;
  rim: string;
  category: "car" | "bike";
  note?: string;
  parsedSize?: {
    width: string;
    profile: string;
    rim: string;
  };
};

export function parseTyreDimension(sizeStr: string): { width: string; profile: string; rim: string } | undefined {
  const match = sizeStr.match(/(\d{3})\/(\d{2,3})\s*R?(\d{2})/i);
  if (match) {
    return {
      width: match[1],
      profile: match[2],
      rim: match[3],
    };
  }
  return undefined;
}

// Rules engine for high-accuracy OEM tyre size lookup
export function getVehicleOemFitment(
  type: "car" | "bike",
  brand: string,
  model: string,
  variant: string
): OemFitmentResult {
  const b = (brand || "").toLowerCase().trim();
  const m = (model || "").toLowerCase().trim();
  const v = (variant || "").toLowerCase().trim();

  // -------------------------------------------------------------
  // TWO-WHEELERS (BIKES & SCOOTERS)
  // -------------------------------------------------------------
  if (type === "bike") {
    // Scooters
    if (m.includes("activa 6g") || m.includes("activa 110") || m.includes("activa 125") || m.includes("dio")) {
      return {
        size: "Front: 90/90-12 | Rear: 90/100-10",
        rim: "12\" / 10\"",
        category: "bike",
        note: "Company OEM factory specification for Honda scooters (Tubeless).",
        parsedSize: { width: "90", profile: "90", rim: "12" },
      };
    }
    if (m.includes("jupiter")) {
      return {
        size: "Front: 90/90-12 | Rear: 90/90-12",
        rim: "12\"",
        category: "bike",
        note: "Company OEM factory specification for TVS Jupiter (Tubeless).",
        parsedSize: { width: "90", profile: "90", rim: "12" },
      };
    }
    if (m.includes("ntorq")) {
      return {
        size: "Front: 100/80-12 | Rear: 110/80-12",
        rim: "12\"",
        category: "bike",
        note: "Company OEM sport tubeless tyres for TVS Ntorq 125.",
        parsedSize: { width: "100", profile: "80", rim: "12" },
      };
    }
    if (m.includes("access") || m.includes("burgman") || m.includes("avenis")) {
      return {
        size: "Front: 90/90-12 | Rear: 90/100-10",
        rim: "12\" / 10\"",
        category: "bike",
        note: "Company OEM factory fitment for Suzuki 125cc scooters.",
        parsedSize: { width: "90", profile: "90", rim: "12" },
      };
    }
    if (m.includes("aerox")) {
      return {
        size: "Front: 110/80-14 | Rear: 140/70-14",
        rim: "14\"",
        category: "bike",
        note: "Company OEM maxi-scooter wide radial tyres.",
        parsedSize: { width: "110", profile: "80", rim: "14" },
      };
    }
    if (m.includes("rayzr") || m.includes("fascino")) {
      return {
        size: "Front: 90/90-12 | Rear: 110/90-10",
        rim: "12\" / 10\"",
        category: "bike",
        note: "Company OEM tubeless tyres for Yamaha scooters.",
        parsedSize: { width: "90", profile: "90", rim: "12" },
      };
    }
    if (m.includes("destini") || m.includes("xoom") || m.includes("pleasure")) {
      return {
        size: "Front: 90/100-10 | Rear: 90/100-10",
        rim: "10\"",
        category: "bike",
        note: "Company OEM tubeless fitment for Hero scooters.",
        parsedSize: { width: "90", profile: "100", rim: "10" },
      };
    }
    if (b.includes("ather") || m.includes("450x") || m.includes("450s") || m.includes("rizta")) {
      return {
        size: "Front: 90/90-12 | Rear: 100/80-12",
        rim: "12\"",
        category: "bike",
        note: "Company OEM EV high-efficiency tubeless tyres.",
        parsedSize: { width: "90", profile: "90", rim: "12" },
      };
    }
    if (b.includes("ola") || m.includes("s1")) {
      return {
        size: "Front: 110/70-12 | Rear: 110/70-12",
        rim: "12\"",
        category: "bike",
        note: "Company OEM EV tubeless low rolling resistance tyres.",
        parsedSize: { width: "110", profile: "70", rim: "12" },
      };
    }
    if (m.includes("iqube") || m.includes("chetak")) {
      return {
        size: "Front: 90/90-12 | Rear: 90/90-12",
        rim: "12\"",
        category: "bike",
        note: "Company OEM electric scooter tubeless tyres.",
        parsedSize: { width: "90", profile: "90", rim: "12" },
      };
    }

    // Commuter Motorcycles
    if (m.includes("splendor") || m.includes("hf deluxe") || m.includes("glamour") || m.includes("passion")) {
      return {
        size: "Front: 80/100-18 | Rear: 80/100-18",
        rim: "18\"",
        category: "bike",
        note: "Standard Hero MotoCorp 18-inch company OEM fitment.",
        parsedSize: { width: "80", profile: "100", rim: "18" },
      };
    }
    if (m.includes("shine") || m.includes("sp 125")) {
      return {
        size: "Front: 80/100-18 | Rear: 80/100-18",
        rim: "18\"",
        category: "bike",
        note: "Standard Honda 18-inch commuter company OEM fitment.",
        parsedSize: { width: "80", profile: "100", rim: "18" },
      };
    }
    if (m.includes("platina")) {
      return {
        size: "Front: 2.75-17 | Rear: 3.00-17 (80/100-17)",
        rim: "17\"",
        category: "bike",
        note: "Bajaj Platina comfort commuter company OEM fitment.",
        parsedSize: { width: "80", profile: "100", rim: "17" },
      };
    }
    if (m.includes("unicorn")) {
      return {
        size: "Front: 80/100-18 | Rear: 100/90-18",
        rim: "18\"",
        category: "bike",
        note: "Honda Unicorn standard company OEM fitment.",
        parsedSize: { width: "100", profile: "90", rim: "18" },
      };
    }
    if (m.includes("raider")) {
      return {
        size: "Front: 80/100-17 | Rear: 100/90-17",
        rim: "17\"",
        category: "bike",
        note: "TVS Raider 125 company OEM sport-commuter fitment.",
        parsedSize: { width: "100", profile: "90", rim: "17" },
      };
    }

    // Performance / Street
    if (m.includes("pulsar")) {
      if (m.includes("125") || m.includes("150")) {
        return {
          size: "Front: 80/100-17 | Rear: 100/90-17",
          rim: "17\"",
          category: "bike",
          note: "Company OEM fitment for Bajaj Pulsar 125/150.",
          parsedSize: { width: "100", profile: "90", rim: "17" },
        };
      }
      return {
        size: "Front: 100/80-17 | Rear: 130/70-17",
        rim: "17\"",
        category: "bike",
        note: "Company OEM radial fitment for Pulsar NS/N/RS series.",
        parsedSize: { width: "130", profile: "70", rim: "17" },
      };
    }
    if (m.includes("apache")) {
      if (m.includes("310")) {
        return {
          size: "Front: 110/70 R17 | Rear: 150/60 R17",
          rim: "17\"",
          category: "bike",
          note: "Company OEM high-performance radial tyres for Apache RR/RTR 310.",
          parsedSize: { width: "150", profile: "60", rim: "17" },
        };
      }
      if (m.includes("200") || v.includes("4v") || v.includes("special")) {
        return {
          size: "Front: 90/90-17 | Rear: 130/70-17",
          rim: "17\"",
          category: "bike",
          note: "TVS Apache RTR Remora/Eurogrip company OEM fitment.",
          parsedSize: { width: "130", profile: "70", rim: "17" },
        };
      }
      return {
        size: "Front: 90/90-17 | Rear: 110/80-17",
        rim: "17\"",
        category: "bike",
        note: "TVS Apache RTR 160 2V company OEM fitment.",
        parsedSize: { width: "110", profile: "80", rim: "17" },
      };
    }
    if (m.includes("r15") || m.includes("mt-15")) {
      return {
        size: "Front: 100/80-17 | Rear: 140/70-17",
        rim: "17\"",
        category: "bike",
        note: "Yamaha official OEM radial specification for R15 & MT-15.",
        parsedSize: { width: "140", profile: "70", rim: "17" },
      };
    }
    if (m.includes("fz-s") || m.includes("fz-x") || m.includes("gixxer")) {
      return {
        size: "Front: 100/80-17 | Rear: 140/60 R17",
        rim: "17\"",
        category: "bike",
        note: "Company OEM radial rear tyre fitment for street naked.",
        parsedSize: { width: "140", profile: "60", rim: "17" },
      };
    }
    if (b.includes("ktm") || m.includes("duke") || m.includes("rc")) {
      return {
        size: "Front: 110/70 R17 | Rear: 150/60 R17",
        rim: "17\"",
        category: "bike",
        note: "KTM factory OEM Apollo Alpha H1 / Metzeler radial fitment.",
        parsedSize: { width: "150", profile: "60", rim: "17" },
      };
    }

    // Royal Enfield & Cruisers
    if (m.includes("classic 350") || m.includes("bullet 350")) {
      return {
        size: "Front: 100/90-19 | Rear: 120/80-18",
        rim: "19\" / 18\"",
        category: "bike",
        note: "Royal Enfield factory OEM fitment (CEAT Zoom Plus / MRF Zapper).",
        parsedSize: { width: "120", profile: "80", rim: "18" },
      };
    }
    if (m.includes("hunter 350")) {
      return {
        size: "Front: 110/70-17 | Rear: 140/70-17",
        rim: "17\"",
        category: "bike",
        note: "Royal Enfield Hunter 350 official 17-inch roadster OEM fitment.",
        parsedSize: { width: "140", profile: "70", rim: "17" },
      };
    }
    if (m.includes("meteor 350")) {
      return {
        size: "Front: 100/90-19 | Rear: 140/70-17",
        rim: "19\" / 17\"",
        category: "bike",
        note: "Royal Enfield Meteor 350 cruiser OEM fitment.",
        parsedSize: { width: "140", profile: "70", rim: "17" },
      };
    }
    if (m.includes("himalayan") || m.includes("xpulse")) {
      return {
        size: "Front: 90/90-21 | Rear: 140/80-17",
        rim: "21\" / 17\"",
        category: "bike",
        note: "Dual-sport adventure all-terrain company OEM fitment.",
        parsedSize: { width: "140", profile: "80", rim: "17" },
      };
    }
    if (m.includes("interceptor") || m.includes("continental gt")) {
      return {
        size: "Front: 100/90-18 | Rear: 130/70-18",
        rim: "18\"",
        category: "bike",
        note: "Royal Enfield 650 Twins factory Pirelli / Ceat Zoom Cruz OEM fitment.",
        parsedSize: { width: "130", profile: "70", rim: "18" },
      };
    }
    if (m.includes("speed 400") || m.includes("scrambler 400")) {
      return {
        size: "Front: 110/70 R17 | Rear: 150/60 R17",
        rim: "17\"",
        category: "bike",
        note: "Triumph modern classic factory radial fitment (Metzeler Sportec).",
        parsedSize: { width: "150", profile: "60", rim: "17" },
      };
    }
    if (m.includes("x440")) {
      return {
        size: "Front: 100/90-18 | Rear: 140/70-17",
        rim: "18\" / 17\"",
        category: "bike",
        note: "Harley-Davidson X440 official company OEM fitment.",
        parsedSize: { width: "140", profile: "70", rim: "17" },
      };
    }

    // Default Bike fallback
    return {
      size: "Front: 90/90-17 | Rear: 120/80-17",
      rim: "17\"",
      category: "bike",
      note: "Standard motorcycle factory fitment.",
      parsedSize: { width: "120", profile: "80", rim: "17" },
    };
  }

  // -------------------------------------------------------------
  // CARS & PASSENGER VEHICLES
  // -------------------------------------------------------------

  // --- MARUTI SUZUKI ---
  if (b.includes("maruti")) {
    if (m.includes("swift") || m.includes("dzire")) {
      if (v.includes("zxi") || v.includes("plus")) {
        return {
          size: "185/65 R15",
          rim: "15\" Alloy",
          category: "car",
          note: "Company OEM fitment on top ZXi/ZXi+ variants.",
          parsedSize: { width: "185", profile: "65", rim: "15" },
        };
      }
      return {
        size: "165/80 R14",
        rim: "14\" Steel",
        category: "car",
        note: "Company OEM fitment on LXi/VXi standard variants.",
        parsedSize: { width: "165", profile: "80", rim: "14" },
      };
    }
    if (m.includes("baleno")) {
      if (v.includes("zeta") || v.includes("alpha")) {
        return {
          size: "195/55 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM factory precision alloy fitment.",
          parsedSize: { width: "195", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/65 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM fitment for Baleno Sigma/Delta.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("brezza")) {
      return {
        size: "215/60 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM fitment across all Brezza models.",
        parsedSize: { width: "215", profile: "60", rim: "16" },
      };
    }
    if (m.includes("grand vitara") || m.includes("invicto")) {
      return {
        size: "215/60 R17",
        rim: "17\" Alloy",
        category: "car",
        note: "Company OEM factory specification for premium SUV.",
        parsedSize: { width: "215", profile: "60", rim: "17" },
      };
    }
    if (m.includes("fronx")) {
      return {
        size: "195/60 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM fitment across all Fronx trims.",
        parsedSize: { width: "195", profile: "60", rim: "16" },
      };
    }
    if (m.includes("ertiga") || m.includes("xl6")) {
      return {
        size: "185/65 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM specification for Maruti 7-Seater MPV.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("jimny")) {
      return {
        size: "195/80 R15",
        rim: "15\" All-Terrain",
        category: "car",
        note: "Company OEM factory fitment for Jimny 4x4 (Bridgestone Dueler).",
        parsedSize: { width: "195", profile: "80", rim: "15" },
      };
    }
    if (m.includes("wagon r")) {
      if (v.includes("zxi") || v.includes("1.2")) {
        return {
          size: "165/70 R14",
          rim: "14\" Wheel",
          category: "car",
          note: "Company OEM fitment on Wagon R 1.2 ZXi.",
          parsedSize: { width: "165", profile: "70", rim: "14" },
        };
      }
      return {
        size: "155/80 R13",
        rim: "13\" Steel",
        category: "car",
        note: "Company OEM fitment on Wagon R 1.0 LXi/VXi.",
        parsedSize: { width: "155", profile: "80", rim: "13" },
      };
    }
    if (m.includes("alto 800") || m.includes("maruti 800") || m.includes("omni")) {
      return {
        size: "145/80 R12",
        rim: "12\" Steel",
        category: "car",
        note: "Company OEM standard factory fitment.",
        parsedSize: { width: "145", profile: "80", rim: "12" },
      };
    }
    if (m.includes("alto k10") || m.includes("celerio") || m.includes("s-presso")) {
      if (v.includes("zxi") || v.includes("vxi+")) {
        return {
          size: "165/70 R14",
          rim: "14\" Wheel",
          category: "car",
          note: "Company OEM top-variant fitment.",
          parsedSize: { width: "165", profile: "70", rim: "14" },
        };
      }
      return {
        size: "145/80 R13",
        rim: "13\" Steel",
        category: "car",
        note: "Company OEM standard fitment.",
        parsedSize: { width: "145", profile: "80", rim: "13" },
      };
    }
    if (m.includes("ignis")) {
      return {
        size: "175/65 R15",
        rim: "15\" Alloy",
        category: "car",
        note: "Company OEM fitment for Maruti Ignis.",
        parsedSize: { width: "175", profile: "65", rim: "15" },
      };
    }
    if (m.includes("ciaz")) {
      if (v.includes("alpha") || v.includes("s")) {
        return {
          size: "195/55 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM 16-inch alloy fitment on Ciaz Alpha.",
          parsedSize: { width: "195", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/65 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM 15-inch fitment on Ciaz Sigma/Delta/Zeta.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("s-cross")) {
      return {
        size: "205/60 R16",
        rim: "16\" Alloy",
        category: "car",
        note: "Company OEM fitment for Maruti S-Cross.",
        parsedSize: { width: "205", profile: "60", rim: "16" },
      };
    }
    if (m.includes("eeco")) {
      return {
        size: "155 R13 LT",
        rim: "13\" Commercial Load",
        category: "car",
        note: "Company OEM high-load commercial specification.",
        parsedSize: { width: "155", profile: "80", rim: "13" },
      };
    }
  }

  // --- HYUNDAI ---
  if (b.includes("hyundai")) {
    if (m.includes("creta")) {
      if (v.includes("n line") || v.includes("18") || v.includes("knight")) {
        return {
          size: "215/55 R18",
          rim: "18\" Diamond Cut",
          category: "car",
          note: "Company OEM fitment for Creta N Line / 18-inch trim.",
          parsedSize: { width: "215", profile: "55", rim: "18" },
        };
      }
      if (v.includes("sx") || v.includes("s(o)")) {
        return {
          size: "215/60 R17",
          rim: "17\" Alloy",
          category: "car",
          note: "Company OEM fitment on SX/SX(O) trims (JK Royale / Apollo Apterra).",
          parsedSize: { width: "215", profile: "60", rim: "17" },
        };
      }
      return {
        size: "205/65 R16",
        rim: "16\" Steel",
        category: "car",
        note: "Company OEM fitment on Creta E / EX trims.",
        parsedSize: { width: "205", profile: "65", rim: "16" },
      };
    }
    if (m.includes("venue")) {
      if (v.includes("sx") || v.includes("n line")) {
        return {
          size: "215/60 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM fitment on Venue SX/SX(O).",
          parsedSize: { width: "215", profile: "60", rim: "16" },
        };
      }
      return {
        size: "195/65 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM fitment on Venue E / S trims.",
        parsedSize: { width: "195", profile: "65", rim: "15" },
      };
    }
    if (m.includes("i20")) {
      if (v.includes("sportz") || v.includes("asta") || v.includes("n line")) {
        return {
          size: "195/55 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM precision radial fitment.",
          parsedSize: { width: "195", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/65 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM fitment on i20 Era / Magna.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("exter")) {
      if (v.includes("sx")) {
        return {
          size: "175/65 R15",
          rim: "15\" Diamond Cut",
          category: "car",
          note: "Company OEM fitment on Exter SX / SX(O).",
          parsedSize: { width: "175", profile: "65", rim: "15" },
        };
      }
      return {
        size: "165/70 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM fitment on Exter EX / S.",
        parsedSize: { width: "165", profile: "70", rim: "14" },
      };
    }
    if (m.includes("grand i10") || m.includes("aura") || m.includes("xcent")) {
      if (v.includes("asta") || v.includes("sx")) {
        return {
          size: "175/60 R15",
          rim: "15\" Alloy",
          category: "car",
          note: "Company OEM 15-inch alloy fitment.",
          parsedSize: { width: "175", profile: "60", rim: "15" },
        };
      }
      return {
        size: "165/70 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM 14-inch fitment.",
        parsedSize: { width: "165", profile: "70", rim: "14" },
      };
    }
    if (m.includes("verna")) {
      if (v.includes("sx") || v.includes("turbo")) {
        return {
          size: "205/55 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM fitment on Verna SX / Turbo (MRF Ecotred / Goodyear).",
          parsedSize: { width: "205", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/65 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM fitment on Verna EX / S.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("alcazar")) {
      if (v.includes("platinum") || v.includes("signature")) {
        return {
          size: "215/55 R18",
          rim: "18\" Diamond Cut",
          category: "car",
          note: "Company OEM 18-inch fitment on Alcazar top trims.",
          parsedSize: { width: "215", profile: "55", rim: "18" },
        };
      }
      return {
        size: "215/60 R17",
        rim: "17\" Alloy",
        category: "car",
        note: "Company OEM 17-inch fitment on Alcazar Prestige.",
        parsedSize: { width: "215", profile: "60", rim: "17" },
      };
    }
    if (m.includes("tucson")) {
      return {
        size: "235/60 R18",
        rim: "18\" Alloy",
        category: "car",
        note: "Company OEM specification for Hyundai Tucson (Hankook Dynapro).",
        parsedSize: { width: "235", profile: "60", rim: "18" },
      };
    }
    if (m.includes("ioniq 5")) {
      return {
        size: "255/45 R20",
        rim: "20\" EV Aero",
        category: "car",
        note: "Company OEM EV Michelin Pilot Sport EV fitment.",
        parsedSize: { width: "255", profile: "45", rim: "20" },
      };
    }
    if (m.includes("santro")) {
      return {
        size: "155/80 R13",
        rim: "13\" Wheel",
        category: "car",
        note: "Company OEM specification for Hyundai Santro.",
        parsedSize: { width: "155", profile: "80", rim: "13" },
      };
    }
  }

  // --- TATA MOTORS ---
  if (b.includes("tata")) {
    if (m.includes("nexon")) {
      if (v.includes("creative") || v.includes("fearless") || v.includes("empowered")) {
        return {
          size: "215/60 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM fitment on Nexon Creative/Fearless/EV.",
          parsedSize: { width: "215", profile: "60", rim: "16" },
        };
      }
      return {
        size: "195/60 R16",
        rim: "16\" Steel",
        category: "car",
        note: "Company OEM fitment on Nexon Smart/Pure.",
        parsedSize: { width: "195", profile: "60", rim: "16" },
      };
    }
    if (m.includes("punch")) {
      if (v.includes("creative") || v.includes("accomplished")) {
        return {
          size: "195/60 R16",
          rim: "16\" Diamond Cut",
          category: "car",
          note: "Company OEM 16-inch alloy fitment on Punch.",
          parsedSize: { width: "195", profile: "60", rim: "16" },
        };
      }
      return {
        size: "185/70 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM 15-inch fitment on Punch Pure/Adventure.",
        parsedSize: { width: "185", profile: "70", rim: "15" },
      };
    }
    if (m.includes("curvv")) {
      if (v.includes("creative") || v.includes("accomplished") || v.includes("empowered")) {
        return {
          size: "215/55 R18",
          rim: "18\" Aero Alloy",
          category: "car",
          note: "Company OEM 18-inch fitment on Tata Curvv top trims.",
          parsedSize: { width: "215", profile: "55", rim: "18" },
        };
      }
      return {
        size: "215/60 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM 16-inch fitment on Curvv Smart/Pure.",
        parsedSize: { width: "215", profile: "60", rim: "16" },
      };
    }
    if (m.includes("harrier") || m.includes("safari (new)") || m.includes("safari")) {
      if (v.includes("dark") || v.includes("red dark") || v.includes("stealth") || v.includes("19")) {
        return {
          size: "245/55 R19",
          rim: "19\" Alloy",
          category: "car",
          note: "Company OEM fitment for Dark Edition 19-inch wheels.",
          parsedSize: { width: "245", profile: "55", rim: "19" },
        };
      }
      if (v.includes("adventure") || v.includes("fearless") || v.includes("accomplished")) {
        return {
          size: "235/60 R18",
          rim: "18\" Alloy",
          category: "car",
          note: "Company OEM 18-inch diamond-cut alloy fitment (Bridgestone Ecopia).",
          parsedSize: { width: "235", profile: "60", rim: "18" },
        };
      }
      return {
        size: "235/65 R17",
        rim: "17\" Wheel",
        category: "car",
        note: "Company OEM 17-inch fitment on Smart / Pure trims.",
        parsedSize: { width: "235", profile: "65", rim: "17" },
      };
    }
    if (m.includes("altroz")) {
      if (v.includes("xt") || v.includes("xz") || v.includes("racer")) {
        return {
          size: "185/60 R16",
          rim: "16\" Laser Cut",
          category: "car",
          note: "Company OEM fitment on Altroz top trims / Racer.",
          parsedSize: { width: "185", profile: "60", rim: "16" },
        };
      }
      return {
        size: "165/80 R14",
        rim: "14\" Steel",
        category: "car",
        note: "Company OEM fitment on Altroz XE / XM.",
        parsedSize: { width: "165", profile: "80", rim: "14" },
      };
    }
    if (m.includes("tiago") || m.includes("tigor")) {
      if (v.includes("xz") || v.includes("tech lux")) {
        return {
          size: "175/60 R15",
          rim: "15\" Alloy",
          category: "car",
          note: "Company OEM 15-inch fitment on XZ/XZ+.",
          parsedSize: { width: "175", profile: "60", rim: "15" },
        };
      }
      return {
        size: "175/65 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM 14-inch fitment on XE/XT.",
        parsedSize: { width: "175", profile: "65", rim: "14" },
      };
    }
  }

  // --- MAHINDRA ---
  if (b.includes("mahindra")) {
    if (m.includes("be 6e") || m.includes("be6e")) {
      if (v.includes("three") || v.includes("pack 3") || v.includes("79")) {
        return {
          size: "245/50 R20",
          rim: "20\" Aero Alloy",
          category: "car",
          note: "Company OEM 20-inch aero alloy fitment on Mahindra BE 6e Pack Three.",
          parsedSize: { width: "245", profile: "50", rim: "20" },
        };
      }
      return {
        size: "245/55 R19",
        rim: "19\" Aero Alloy",
        category: "car",
        note: "Company OEM 19-inch aero alloy fitment on Mahindra BE 6e Pack One / Pack Two.",
        parsedSize: { width: "245", profile: "55", rim: "19" },
      };
    }
    if (m.includes("xev 9e") || m.includes("xev9e")) {
      return {
        size: "245/55 R19",
        rim: "19\" Diamond Cut Aero",
        category: "car",
        note: "Company OEM 19-inch factory aero fitment on Mahindra XEV 9e (245/55 R19).",
        parsedSize: { width: "245", profile: "55", rim: "19" },
      };
    }
    if (m.includes("xuv400")) {
      return {
        size: "205/65 R16",
        rim: "16\" Diamond Cut Alloy",
        category: "car",
        note: "Company OEM factory EV specification for Mahindra XUV400 EV.",
        parsedSize: { width: "205", profile: "65", rim: "16" },
      };
    }
    if (m.includes("e-verito") || m.includes("everito")) {
      return {
        size: "185/65 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM fitment for Mahindra e-Verito.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("e2o")) {
      return {
        size: "165/60 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM fitment for Mahindra e2o Plus.",
        parsedSize: { width: "165", profile: "60", rim: "14" },
      };
    }
    if (m.includes("scorpio-n")) {
      if (v.includes("z8") || v.includes("z8l")) {
        return {
          size: "255/60 R18",
          rim: "18\" Diamond Cut",
          category: "car",
          note: "Company OEM 18-inch fitment on Scorpio-N Z8/Z8L AT (Apollo Apterra HT2).",
          parsedSize: { width: "255", profile: "60", rim: "18" },
        };
      }
      return {
        size: "245/65 R17",
        rim: "17\" Wheel",
        category: "car",
        note: "Company OEM 17-inch fitment on Scorpio-N Z2/Z4/Z6/Z8 MT.",
        parsedSize: { width: "245", profile: "65", rim: "17" },
      };
    }
    if (m.includes("scorpio classic") || m.includes("scorpio")) {
      return {
        size: "235/65 R17",
        rim: "17\" Alloy",
        category: "car",
        note: "Company OEM fitment on Scorpio Classic S/S11.",
        parsedSize: { width: "235", profile: "65", rim: "17" },
      };
    }
    if (m.includes("thar roxx")) {
      if (v.includes("ax5l") || v.includes("ax7l")) {
        return {
          size: "255/60 R19",
          rim: "19\" Alloy",
          category: "car",
          note: "Company OEM 19-inch fitment on Thar Roxx AX7L.",
          parsedSize: { width: "255", profile: "60", rim: "19" },
        };
      }
      return {
        size: "255/65 R18",
        rim: "18\" Alloy",
        category: "car",
        note: "Company OEM 18-inch All-Terrain fitment on Thar Roxx MX5/AX3L.",
        parsedSize: { width: "255", profile: "65", rim: "18" },
      };
    }
    if (m.includes("thar")) {
      if (v.includes("lx")) {
        return {
          size: "255/65 R18",
          rim: "18\" All-Terrain",
          category: "car",
          note: "Company OEM factory Ceat Czar A/T on Thar LX.",
          parsedSize: { width: "255", profile: "65", rim: "18" },
        };
      }
      return {
        size: "245/75 R16",
        rim: "16\" Steel",
        category: "car",
        note: "Company OEM factory fitment on Thar AX.",
        parsedSize: { width: "245", profile: "75", rim: "16" },
      };
    }
    if (m.includes("xuv700")) {
      if (v.includes("ax7")) {
        return {
          size: "235/60 R18",
          rim: "18\" Diamond Cut",
          category: "car",
          note: "Company OEM fitment on XUV700 AX7 / AX7L (MRF Wanderer / Apollo).",
          parsedSize: { width: "235", profile: "60", rim: "18" },
        };
      }
      return {
        size: "235/65 R17",
        rim: "17\" Wheel",
        category: "car",
        note: "Company OEM fitment on XUV700 MX, AX3, AX5.",
        parsedSize: { width: "235", profile: "65", rim: "17" },
      };
    }
    if (m.includes("xuv 3xo") || m.includes("xuv300")) {
      if (v.includes("ax7") || v.includes("w8")) {
        return {
          size: "215/55 R17",
          rim: "17\" Diamond Cut",
          category: "car",
          note: "Company OEM 17-inch alloy fitment.",
          parsedSize: { width: "215", profile: "55", rim: "17" },
        };
      }
      return {
        size: "205/65 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM 16-inch fitment on MX / AX5.",
        parsedSize: { width: "205", profile: "65", rim: "16" },
      };
    }
    if (m.includes("xuv500")) {
      if (v.includes("w10") || v.includes("w11")) {
        return {
          size: "235/60 R18",
          rim: "18\" Alloy",
          category: "car",
          note: "Company OEM fitment on XUV500 W10/W11.",
          parsedSize: { width: "235", profile: "60", rim: "18" },
        };
      }
      return {
        size: "235/65 R17",
        rim: "17\" Wheel",
        category: "car",
        note: "Company OEM fitment on XUV500 W4/W6/W8.",
        parsedSize: { width: "235", profile: "65", rim: "17" },
      };
    }
    if (m.includes("bolero") || m.includes("xylo")) {
      return {
        size: "215/75 R15",
        rim: "15\" Rugged",
        category: "car",
        note: "Company OEM robust commercial/utility fitment (Apollo Amazer / Ceat Steel Plus).",
        parsedSize: { width: "215", profile: "75", rim: "15" },
      };
    }
  }

  // --- TOYOTA ---
  if (b.includes("toyota")) {
    if (m.includes("innova crysta")) {
      if (v.includes("zx")) {
        return {
          size: "215/55 R17",
          rim: "17\" Alloy",
          category: "car",
          note: "Company OEM fitment on Innova Crysta ZX.",
          parsedSize: { width: "215", profile: "55", rim: "17" },
        };
      }
      return {
        size: "205/65 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM fitment on Innova Crysta GX / VX (Bridgestone B390).",
        parsedSize: { width: "205", profile: "65", rim: "16" },
      };
    }
    if (m.includes("innova hycross")) {
      if (v.includes("zx")) {
        return {
          size: "225/50 R18",
          rim: "18\" Multi-Spoke",
          category: "car",
          note: "Company OEM fitment on Hycross ZX / ZX(O).",
          parsedSize: { width: "225", profile: "50", rim: "18" },
        };
      }
      if (v.includes("vx")) {
        return {
          size: "215/60 R17",
          rim: "17\" Alloy",
          category: "car",
          note: "Company OEM fitment on Hycross VX.",
          parsedSize: { width: "215", profile: "60", rim: "17" },
        };
      }
      return {
        size: "205/65 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM fitment on Hycross G / GX.",
        parsedSize: { width: "205", profile: "65", rim: "16" },
      };
    }
    if (m.includes("fortuner")) {
      if (v.includes("legender") || v.includes("gr-s") || v.includes("4x4") || v.includes("at")) {
        return {
          size: "265/60 R18",
          rim: "18\" Alloy",
          category: "car",
          note: "Company OEM factory Bridgestone Dueler A/T on Fortuner 18-inch.",
          parsedSize: { width: "265", profile: "60", rim: "18" },
        };
      }
      return {
        size: "265/65 R17",
        rim: "17\" Wheel",
        category: "car",
        note: "Company OEM 17-inch fitment on Fortuner 4x2 MT.",
        parsedSize: { width: "265", profile: "65", rim: "17" },
      };
    }
    if (m.includes("hyryder")) {
      return {
        size: "215/60 R17",
        rim: "17\" Alloy",
        category: "car",
        note: "Company OEM specification across Toyota Hyryder trims.",
        parsedSize: { width: "215", profile: "60", rim: "17" },
      };
    }
    if (m.includes("glanza") || m.includes("rumion")) {
      if (v.includes("g") || v.includes("v")) {
        return {
          size: "195/55 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM 16-inch alloy fitment.",
          parsedSize: { width: "195", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/65 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM 15-inch standard fitment.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
    if (m.includes("hilux")) {
      return {
        size: "265/60 R18",
        rim: "18\" Rugged A/T",
        category: "car",
        note: "Company OEM heavy-duty all-terrain fitment.",
        parsedSize: { width: "265", profile: "60", rim: "18" },
      };
    }
    if (m.includes("camry")) {
      return {
        size: "235/45 R18",
        rim: "18\" Luxury",
        category: "car",
        note: "Company OEM low-noise luxury fitment (Bridgestone Turanza).",
        parsedSize: { width: "235", profile: "45", rim: "18" },
      };
    }
    if (m.includes("vellfire")) {
      return {
        size: "225/60 R18",
        rim: "18\" Ultra Luxury",
        category: "car",
        note: "Company OEM VIP fitment.",
        parsedSize: { width: "225", profile: "60", rim: "18" },
      };
    }
  }

  // --- KIA ---
  if (b.includes("kia")) {
    if (m.includes("seltos")) {
      if (v.includes("gtx+") || v.includes("x-line")) {
        return {
          size: "215/55 R18",
          rim: "18\" Crystal Cut",
          category: "car",
          note: "Company OEM 18-inch fitment on Seltos GTX+ / X-Line (JK UX Royale).",
          parsedSize: { width: "215", profile: "55", rim: "18" },
        };
      }
      if (v.includes("htx")) {
        return {
          size: "215/60 R17",
          rim: "17\" Alloy",
          category: "car",
          note: "Company OEM 17-inch fitment on Seltos HTX.",
          parsedSize: { width: "215", profile: "60", rim: "17" },
        };
      }
      return {
        size: "205/65 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM 16-inch fitment on Seltos HTE/HTK.",
        parsedSize: { width: "205", profile: "65", rim: "16" },
      };
    }
    if (m.includes("sonet")) {
      if (v.includes("htx") || v.includes("gtx+") || v.includes("x-line")) {
        return {
          size: "215/60 R16",
          rim: "16\" Crystal Cut",
          category: "car",
          note: "Company OEM 16-inch fitment on Sonet higher trims.",
          parsedSize: { width: "215", profile: "60", rim: "16" },
        };
      }
      return {
        size: "195/65 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM 15-inch fitment on Sonet HTE/HTK.",
        parsedSize: { width: "195", profile: "65", rim: "15" },
      };
    }
    if (m.includes("carens")) {
      if (v.includes("luxury") || v.includes("x-line") || v.includes("prestige+")) {
        return {
          size: "205/65 R16",
          rim: "16\" Dual Tone",
          category: "car",
          note: "Company OEM 16-inch fitment on Carens Luxury.",
          parsedSize: { width: "205", profile: "65", rim: "16" },
        };
      }
      return {
        size: "195/65 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM 15-inch fitment on Carens Premium.",
        parsedSize: { width: "195", profile: "65", rim: "15" },
      };
    }
    if (m.includes("carnival")) {
      return {
        size: "235/60 R18",
        rim: "18\" Luxury Alloy",
        category: "car",
        note: "Company OEM fitment for Kia Carnival Limousine.",
        parsedSize: { width: "235", profile: "60", rim: "18" },
      };
    }
    if (m.includes("ev6")) {
      return {
        size: "235/55 R19",
        rim: "19\" EV Aero",
        category: "car",
        note: "Company OEM Continental PremiumContact EV fitment.",
        parsedSize: { width: "235", profile: "55", rim: "19" },
      };
    }
  }

  // --- HONDA ---
  if (b.includes("honda")) {
    if (m.includes("city")) {
      if (v.includes("vx") || v.includes("zx") || v.includes("hybrid") || v.includes("e:hev")) {
        return {
          size: "185/55 R16",
          rim: "16\" Diamond Cut",
          category: "car",
          note: "Company OEM 16-inch alloy fitment on City VX / ZX (Bridgestone Ecopia).",
          parsedSize: { width: "185", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/60 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM 15-inch fitment on City SV / V.",
        parsedSize: { width: "185", profile: "60", rim: "15" },
      };
    }
    if (m.includes("elevate")) {
      if (v.includes("vx") || v.includes("zx")) {
        return {
          size: "215/55 R17",
          rim: "17\" Two-Tone Alloy",
          category: "car",
          note: "Company OEM 17-inch fitment on Elevate VX / ZX.",
          parsedSize: { width: "215", profile: "55", rim: "17" },
        };
      }
      return {
        size: "215/60 R16",
        rim: "16\" Steel",
        category: "car",
        note: "Company OEM 16-inch fitment on Elevate SV / V.",
        parsedSize: { width: "215", profile: "60", rim: "16" },
      };
    }
    if (m.includes("amaze")) {
      if (v.includes("vx")) {
        return {
          size: "175/65 R15",
          rim: "15\" Alloy",
          category: "car",
          note: "Company OEM 15-inch fitment on Amaze VX.",
          parsedSize: { width: "175", profile: "65", rim: "15" },
        };
      }
      return {
        size: "175/65 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM 14-inch fitment on Amaze E / S.",
        parsedSize: { width: "175", profile: "65", rim: "14" },
      };
    }
    if (m.includes("civic")) {
      return {
        size: "215/50 R17",
        rim: "17\" Alloy",
        category: "car",
        note: "Company OEM fitment for Honda Civic.",
        parsedSize: { width: "215", profile: "50", rim: "17" },
      };
    }
    if (m.includes("cr-v")) {
      return {
        size: "235/60 R18",
        rim: "18\" Alloy",
        category: "car",
        note: "Company OEM fitment for Honda CR-V.",
        parsedSize: { width: "235", profile: "60", rim: "18" },
      };
    }
  }

  // --- VOLKSWAGEN & SKODA ---
  if (b.includes("volkswagen") || b.includes("skoda")) {
    if (m.includes("virtus") || m.includes("taigun") || m.includes("slavia") || m.includes("kushaq") || m.includes("kylaq")) {
      if (v.includes("topline") || v.includes("gt") || v.includes("style") || v.includes("monte carlo") || v.includes("prestige")) {
        return {
          size: "205/55 R17",
          rim: "17\" Razor Alloy",
          category: "car",
          note: "Company OEM 17-inch alloy fitment on top TSI variants (Goodyear / MRF).",
          parsedSize: { width: "205", profile: "55", rim: "17" },
        };
      }
      return {
        size: "205/60 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM 16-inch fitment on Comfortline / Highline / Ambition.",
        parsedSize: { width: "205", profile: "60", rim: "16" },
      };
    }
    if (m.includes("polo") || m.includes("vento") || m.includes("rapid") || m.includes("ameo")) {
      if (v.includes("highline") || v.includes("gt") || v.includes("style") || v.includes("monte carlo")) {
        return {
          size: "195/55 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM 16-inch precision fitment (Apollo Alnac 4G).",
          parsedSize: { width: "195", profile: "55", rim: "16" },
        };
      }
      return {
        size: "185/60 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM 15-inch fitment on Comfortline / Trendline.",
        parsedSize: { width: "185", profile: "60", rim: "15" },
      };
    }
    if (m.includes("octavia") || m.includes("laura") || m.includes("jetta")) {
      return {
        size: "205/55 R16",
        rim: "16\" European Alloy",
        category: "car",
        note: "Company OEM European executive sedan fitment.",
        parsedSize: { width: "205", profile: "55", rim: "16" },
      };
    }
    if (m.includes("kodiaq") || m.includes("tiguan")) {
      return {
        size: "235/55 R18",
        rim: "18\" Alloy",
        category: "car",
        note: "Company OEM self-sealing Pirelli Scorpion / Hankook fitment.",
        parsedSize: { width: "235", profile: "55", rim: "18" },
      };
    }
    if (m.includes("superb") || m.includes("passat")) {
      return {
        size: "215/55 R17",
        rim: "17\" Stratos Alloy",
        category: "car",
        note: "Company OEM luxury touring fitment.",
        parsedSize: { width: "215", profile: "55", rim: "17" },
      };
    }
  }

  // --- FORD ---
  if (b.includes("ford")) {
    if (m.includes("ecosport")) {
      if (v.includes("s") || v.includes("thunder") || v.includes("17")) {
        return {
          size: "205/50 R17",
          rim: "17\" Smoked Alloy",
          category: "car",
          note: "Company OEM fitment on EcoSport S / Titanium 17\".",
          parsedSize: { width: "205", profile: "50", rim: "17" },
        };
      }
      if (v.includes("titanium")) {
        return {
          size: "205/60 R16",
          rim: "16\" Alloy",
          category: "car",
          note: "Company OEM fitment on EcoSport Titanium (MRF ZVTV).",
          parsedSize: { width: "205", profile: "60", rim: "16" },
        };
      }
      return {
        size: "195/65 R15",
        rim: "15\" Steel",
        category: "car",
        note: "Company OEM fitment on EcoSport Ambiente / Trend.",
        parsedSize: { width: "195", profile: "65", rim: "15" },
      };
    }
    if (m.includes("endeavour")) {
      return {
        size: "265/60 R18",
        rim: "18\" Heavy Duty",
        category: "car",
        note: "Company OEM factory MRF Wanderer A/T on Ford Endeavour.",
        parsedSize: { width: "265", profile: "60", rim: "18" },
      };
    }
    if (m.includes("figo") || m.includes("aspire") || m.includes("freestyle")) {
      if (v.includes("titanium") || v.includes("blu") || v.includes("flair")) {
        return {
          size: "185/60 R15",
          rim: "15\" Alloy",
          category: "car",
          note: "Company OEM fitment on Titanium / Freestyle.",
          parsedSize: { width: "185", profile: "60", rim: "15" },
        };
      }
      return {
        size: "175/65 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM fitment on Ambiente / Trend.",
        parsedSize: { width: "175", profile: "65", rim: "14" },
      };
    }
  }

  // --- MG MOTOR ---
  if (b.includes("mg")) {
    if (m.includes("hector") || m.includes("windsor")) {
      if (v.includes("sharp") || v.includes("savvy") || v.includes("essence")) {
        return {
          size: "215/55 R18",
          rim: "18\" Dual Tone",
          category: "car",
          note: "Company OEM 18-inch fitment on Hector / Windsor top variants.",
          parsedSize: { width: "215", profile: "55", rim: "18" },
        };
      }
      return {
        size: "215/60 R17",
        rim: "17\" Wheel",
        category: "car",
        note: "Company OEM 17-inch fitment on Hector Style / Shine.",
        parsedSize: { width: "215", profile: "60", rim: "17" },
      };
    }
    if (m.includes("gloster")) {
      return {
        size: "255/55 R19",
        rim: "19\" Alloy",
        category: "car",
        note: "Company OEM specification for MG Gloster SUV.",
        parsedSize: { width: "255", profile: "55", rim: "19" },
      };
    }
    if (m.includes("zs ev") || m.includes("astor")) {
      return {
        size: "215/55 R17",
        rim: "17\" Aero Alloy",
        category: "car",
        note: "Company OEM fitment on ZS EV / Astor.",
        parsedSize: { width: "215", profile: "55", rim: "17" },
      };
    }
    if (m.includes("comet")) {
      return {
        size: "145/70 R12",
        rim: "12\" Aero",
        category: "car",
        note: "Company OEM fitment on MG Comet EV.",
        parsedSize: { width: "145", profile: "70", rim: "12" },
      };
    }
  }

  // --- RENAULT & NISSAN ---
  if (b.includes("renault") || b.includes("nissan")) {
    if (m.includes("duster") || m.includes("terrano") || m.includes("kicks")) {
      if (v.includes("rxz") || v.includes("awd") || v.includes("xv")) {
        return {
          size: "215/60 R17",
          rim: "17\" Alloy",
          category: "car",
          note: "Company OEM 17-inch fitment on Duster / Terrano.",
          parsedSize: { width: "215", profile: "60", rim: "17" },
        };
      }
      return {
        size: "215/65 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM 16-inch fitment (MRF Wanderer Street).",
        parsedSize: { width: "215", profile: "65", rim: "16" },
      };
    }
    if (m.includes("magnite") || m.includes("kiger")) {
      return {
        size: "195/60 R16",
        rim: "16\" Wheel",
        category: "car",
        note: "Company OEM factory specification for compact SUV (Ceat SecuraDrive).",
        parsedSize: { width: "195", profile: "60", rim: "16" },
      };
    }
    if (m.includes("kwid")) {
      return {
        size: "165/70 R14",
        rim: "14\" Wheel",
        category: "car",
        note: "Company OEM fitment for Renault Kwid Climber/RXT.",
        parsedSize: { width: "165", profile: "70", rim: "14" },
      };
    }
    if (m.includes("triber")) {
      return {
        size: "185/65 R15",
        rim: "15\" Wheel",
        category: "car",
        note: "Company OEM fitment for Renault Triber.",
        parsedSize: { width: "185", profile: "65", rim: "15" },
      };
    }
  }

  // --- LUXURY BRANDS (BMW, MERCEDES, AUDI, JEEP, VOLVO, LAND ROVER) ---
  if (b.includes("bmw")) {
    if (m.includes("3 series") || m.includes("330li")) {
      return {
        size: "Front: 225/45 R18 | Rear: 255/40 R18",
        rim: "18\" M Sport",
        category: "car",
        note: "BMW Star Marked Run-Flat Company OEM fitment.",
        parsedSize: { width: "225", profile: "45", rim: "18" },
      };
    }
    if (m.includes("x1") || m.includes("ix1")) {
      return {
        size: "225/55 R18",
        rim: "18\" M Sport",
        category: "car",
        note: "BMW Star Marked Run-Flat Company OEM fitment.",
        parsedSize: { width: "225", profile: "55", rim: "18" },
      };
    }
    if (m.includes("x5") || m.includes("x7")) {
      return {
        size: "Front: 275/45 R20 | Rear: 305/40 R20",
        rim: "20\" / 21\"",
        category: "car",
        note: "BMW OEM staggered high-performance fitment.",
        parsedSize: { width: "275", profile: "45", rim: "20" },
      };
    }
  }

  if (b.includes("mercedes")) {
    if (m.includes("c-class")) {
      return {
        size: "Front: 225/45 R18 | Rear: 245/40 R18",
        rim: "18\" AMG Line",
        category: "car",
        note: "Mercedes Original (MOExtended) Run-Flat OEM specification.",
        parsedSize: { width: "225", profile: "45", rim: "18" },
      };
    }
    if (m.includes("e-class")) {
      return {
        size: "Front: 245/45 R18 | Rear: 275/40 R18",
        rim: "18\" Luxury",
        category: "car",
        note: "Mercedes Original (MO) factory comfort specification.",
        parsedSize: { width: "245", profile: "45", rim: "18" },
      };
    }
    if (m.includes("glc") || m.includes("gle")) {
      return {
        size: "235/55 R19",
        rim: "19\" 4MATIC",
        category: "car",
        note: "Mercedes Original (MO) factory SUV fitment.",
        parsedSize: { width: "235", profile: "55", rim: "19" },
      };
    }
  }

  if (b.includes("audi")) {
    if (m.includes("a4") || m.includes("a6")) {
      return {
        size: "245/40 R18",
        rim: "18\" Audi Sport",
        category: "car",
        note: "Audi Original (AO) factory specification.",
        parsedSize: { width: "245", profile: "40", rim: "18" },
      };
    }
    if (m.includes("q3") || m.includes("q5")) {
      return {
        size: "235/55 R19",
        rim: "19\" Quattro",
        category: "car",
        note: "Audi Original (AO) Quattro all-weather fitment.",
        parsedSize: { width: "235", profile: "55", rim: "19" },
      };
    }
  }

  if (b.includes("jeep")) {
    if (m.includes("compass")) {
      if (v.includes("limited") || v.includes("model s")) {
        return {
          size: "225/55 R18",
          rim: "18\" Alloy",
          category: "car",
          note: "Company OEM fitment on Jeep Compass Limited/Model S.",
          parsedSize: { width: "225", profile: "55", rim: "18" },
        };
      }
      return {
        size: "225/60 R17",
        rim: "17\" Alloy",
        category: "car",
        note: "Company OEM fitment on Jeep Compass Sport/Longitude.",
        parsedSize: { width: "225", profile: "60", rim: "17" },
      };
    }
    if (m.includes("meridian")) {
      return {
        size: "235/55 R18",
        rim: "18\" Diamond Cut",
        category: "car",
        note: "Company OEM fitment on Jeep Meridian Overland.",
        parsedSize: { width: "235", profile: "55", rim: "18" },
      };
    }
    if (m.includes("wrangler")) {
      return {
        size: "255/75 R17",
        rim: "17\" Heavy Duty Off-Road",
        category: "car",
        note: "Company OEM BFGoodrich KM2 M/T factory fitment.",
        parsedSize: { width: "255", profile: "75", rim: "17" },
      };
    }
  }

  // Generic intelligent fallback based on vehicle body type
  const bodyType = (variant || "").toLowerCase();
  if (bodyType.includes("suv") || bodyType.includes("off-roader")) {
    return {
      size: "215/65 R16",
      rim: "16\"",
      category: "car",
      note: "Standard SUV factory fitment.",
      parsedSize: { width: "215", profile: "65", rim: "16" },
    };
  }
  if (bodyType.includes("sedan")) {
    return {
      size: "185/65 R15",
      rim: "15\"",
      category: "car",
      note: "Standard sedan factory fitment.",
      parsedSize: { width: "185", profile: "65", rim: "15" },
    };
  }

  return {
    size: "175/65 R14",
    rim: "14\"",
    category: "car",
    note: "Standard passenger car factory fitment.",
    parsedSize: { width: "175", profile: "65", rim: "14" },
  };
}
