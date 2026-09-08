import type { OemFitmentResult } from "./oem-fitment";
import { parseTyreDimension } from "./oem-fitment";

// Helper for exact word-token matching (prevents false substring matches like "s" matching "Standard")
function hasToken(str: string, tokens: string[]): boolean {
  const lower = str.toLowerCase();
  return tokens.some((token) => {
    const t = token.toLowerCase();
    if (t.includes(" ")) {
      return lower.includes(t);
    }
    const re = new RegExp(`(^|[^a-z0-9])${t}([^a-z0-9]|$)`, "i");
    return re.test(lower);
  });
}

const mk = (
  size: string,
  rim: string,
  note: string,
  width?: string,
  profile?: string,
  rimNum?: string
): OemFitmentResult => {
  let parsed = parseTyreDimension(size);
  if (!parsed && width && profile && rimNum) {
    parsed = { width, profile, rim: rimNum };
  }
  return {
    size,
    rim,
    category: "car",
    note,
    parsedSize: parsed,
  };
};

export function getCarOemFitment(
  brand: string,
  model: string,
  variant: string
): OemFitmentResult {
  const b = (brand || "").toLowerCase().trim();
  const m = (model || "").toLowerCase().trim();
  const v = (variant || "").toLowerCase().trim();

  // =============================================================
  // 1. MARUTI SUZUKI
  // =============================================================
  if (b.includes("maruti")) {
    if (m.includes("swift") || m.includes("dzire")) {
      if (hasToken(v, ["zxi", "plus", "zdi"])) {
        return mk("185/65 R15", "15\" Alloy", "Company OEM fitment on top ZXi/ZXi+ variants.");
      }
      return mk("165/80 R14", "14\" Steel", "Company OEM fitment on LXi/VXi standard variants.");
    }
    if (m.includes("baleno")) {
      if (hasToken(v, ["zeta", "alpha"])) {
        return mk("195/55 R16", "16\" Precision Alloy", "Company OEM factory precision alloy fitment on Baleno Zeta/Alpha.");
      }
      return mk("185/65 R15", "15\" Wheel", "Company OEM fitment on Baleno Sigma/Delta.");
    }
    if (m.includes("fronx")) {
      if (hasToken(v, ["turbo", "zeta", "alpha"])) {
        return mk("195/60 R16", "16\" Precision Cut Alloy", "Company OEM factory alloy fitment on Fronx Zeta/Alpha.");
      }
      return mk("195/60 R16", "16\" Steel", "Company OEM factory fitment on Fronx Sigma/Delta.");
    }
    if (m.includes("brezza")) {
      if (hasToken(v, ["zxi", "zdi"])) {
        return mk("215/60 R16", "16\" Geometric Alloy", "Company OEM factory precision alloy fitment on Brezza ZXi/ZXi+.");
      }
      return mk("215/60 R16", "16\" Steel", "Company OEM factory standard fitment on Brezza LXi/VXi.");
    }
    if (m.includes("grand vitara")) {
      return mk("215/60 R17", "17\" Precision Cut Alloy", "Company OEM factory high-profile SUV fitment.");
    }
    if (m.includes("ertiga")) {
      if (hasToken(v, ["zxi"])) {
        return mk("185/65 R15", "15\" Alloy", "Company OEM factory fitment on Ertiga ZXi/ZXi+.");
      }
      return mk("185/65 R15", "15\" Steel", "Company OEM standard MPV fitment on Ertiga LXi/VXi.");
    }
    if (m.includes("xl6")) {
      return mk("195/60 R16", "16\" Dual-Tone Alloy", "Company OEM premium fitment for Maruti XL6.");
    }
    if (m.includes("invicto")) {
      return mk("215/60 R17", "17\" Precision Alloy", "Company OEM luxury MPV specification for Invicto.");
    }
    if (m.includes("jimny")) {
      return mk("195/80 R15", "15\" All-Terrain Gunmetal", "Company OEM Bridgestone Dueler H/T factory fitment.");
    }
    if (m.includes("wagon r")) {
      if (hasToken(v, ["1.2", "zxi"])) {
        return mk("165/70 R14", "14\" Steel/Alloy", "Company OEM factory fitment on Wagon R 1.2L ZXi.");
      }
      return mk("155/80 R13", "13\" Steel", "Company OEM fuel-saving fitment on Wagon R 1.0L LXi/VXi.");
    }
    if (m.includes("alto k10")) {
      return mk("145/80 R13", "13\" Steel", "Company OEM factory specification for Alto K10.");
    }
    if (m.includes("alto 800")) {
      return mk("145/80 R12", "12\" Steel", "Company OEM tubeless factory fitment for Alto 800.");
    }
    if (m.includes("maruti 800")) {
      return mk("145/70 R12", "12\" Steel", "Official company OEM factory fitment for Maruti 800.");
    }
    if (m.includes("celerio x")) {
      return mk("175/60 R15", "15\" Black Alloy", "Company OEM factory fitment for Celerio X.");
    }
    if (m.includes("celerio")) {
      if (hasToken(v, ["zxi"])) {
        return mk("175/60 R15", "15\" Alloy", "Company OEM alloy fitment on Celerio ZXi+.");
      }
      return mk("165/70 R14", "14\" Steel", "Company OEM standard fitment on Celerio LXi/VXi.");
    }
    if (m.includes("s-presso")) {
      if (hasToken(v, ["vxi"])) {
        return mk("165/70 R14", "14\" Steel", "Company OEM factory fitment on S-Presso VXi/VXi+.");
      }
      return mk("145/80 R13", "13\" Steel", "Company OEM standard fitment on S-Presso Std/LXi.");
    }
    if (m.includes("ignis")) {
      return mk("175/65 R15", "15\" Trapezoid Alloy", "Company OEM factory high-profile fitment for Ignis.");
    }
    if (m.includes("ciaz")) {
      if (hasToken(v, ["alpha", "zeta"])) {
        return mk("195/55 R16", "16\" Multi-spoke Alloy", "Company OEM premium fitment on Ciaz Alpha/Zeta.");
      }
      return mk("185/65 R15", "15\" Wheel", "Company OEM standard fitment on Ciaz Sigma/Delta.");
    }
    if (m.includes("s-cross")) {
      if (hasToken(v, ["zeta", "alpha"])) {
        return mk("215/60 R16", "16\" Precision Alloy", "Company OEM crossover fitment on S-Cross Alpha.");
      }
      return mk("205/60 R16", "16\" Steel", "Company OEM factory crossover fitment on S-Cross Delta.");
    }
    if (m.includes("eeco")) {
      return mk("155 R13C", "13\" Commercial Heavy Duty", "Company OEM 8PR heavy duty tubeless fitment.", "155", "80", "13");
    }
    if (m.includes("omni")) {
      return mk("145/70 R12", "12\" Steel", "Company OEM factory van fitment for Maruti Omni.");
    }
    if (m.includes("ritz")) {
      if (hasToken(v, ["zxi", "zdi"])) {
        return mk("185/70 R14", "14\" Alloy", "Company OEM factory fitment on Ritz ZXi/ZDi.");
      }
      return mk("165/80 R14", "14\" Steel", "Company OEM factory fitment on Ritz LXi/VXi.");
    }
    if (m.includes("zen")) {
      if (m.includes("estilo")) {
        return mk("155/65 R13", "13\" Steel", "Company OEM factory fitment for Zen Estilo.");
      }
      return mk("145/70 R13", "13\" Steel", "Company OEM classic fitment for Maruti Zen.");
    }
    if (m.includes("sx4")) {
      if (hasToken(v, ["zxi", "zdi"])) {
        return mk("205/60 R16", "16\" Alloy", "Company OEM factory alloy fitment on SX4 ZXi/ZDi.");
      }
      return mk("195/65 R15", "15\" Steel", "Company OEM factory fitment on SX4 VXi/VDi.");
    }
    if (m.includes("a-star")) {
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for Maruti A-Star.");
    }
    if (m.includes("gypsy")) {
      return mk("205/70 R15", "15\" Rugged Steel", "Company OEM 4x4 rugged fitment for Maruti Gypsy King.");
    }
    if (m.includes("esteem")) {
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for Maruti Esteem.");
    }
    if (m.includes("stingray")) {
      return mk("155/65 R14", "14\" Gunmetal Alloy", "Company OEM factory alloy fitment for Wagon R Stingray.");
    }
  }

  // =============================================================
  // 2. HYUNDAI
  // =============================================================
  if (b.includes("hyundai")) {
    if (m.includes("creta n line")) {
      return mk("215/55 R18", "18\" N Line Diamond Cut", "Company OEM high-performance fitment for Creta N Line.");
    }
    if (m.includes("creta ev")) {
      return mk("215/55 R17", "17\" EV Aero Alloy", "Company OEM low rolling-resistance fitment for Creta EV.");
    }
    if (m.includes("creta")) {
      if (hasToken(v, ["sx", "knight"])) {
        return mk("215/60 R17", "17\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Creta SX/SX(O).");
      }
      return mk("205/65 R16", "16\" Wheel", "Company OEM factory fitment on Creta E/EX/S.");
    }
    if (m.includes("venue n line")) {
      return mk("215/60 R16", "16\" N Line Alloy", "Company OEM sports fitment for Venue N Line.");
    }
    if (m.includes("venue")) {
      if (hasToken(v, ["sx", "knight"])) {
        return mk("215/60 R16", "16\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Venue SX/SX(O).");
      }
      return mk("195/65 R15", "15\" Steel", "Company OEM factory standard fitment on Venue E/S.");
    }
    if (m.includes("exter")) {
      if (hasToken(v, ["sx"])) {
        return mk("175/65 R15", "15\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Exter SX/SX(O).");
      }
      return mk("165/70 R14", "14\" Steel", "Company OEM factory fitment on Exter EX/S.");
    }
    if (m.includes("i20 n line")) {
      return mk("195/55 R16", "16\" N Line Alloy", "Company OEM sporty handling fitment for i20 N Line.");
    }
    if (m.includes("i20")) {
      if (hasToken(v, ["asta"])) {
        return mk("195/55 R16", "16\" Diamond Cut Alloy", "Company OEM factory fitment on i20 Asta/Asta(O).");
      }
      return mk("185/65 R15", "15\" Wheel", "Company OEM standard fitment on i20 Magna/Sportz.");
    }
    if (m.includes("grand i10 nios") || m.includes("grand i10")) {
      if (hasToken(v, ["asta", "sportz"])) {
        return mk("175/60 R15", "15\" Diamond Cut Alloy", "Company OEM precision alloy fitment on Grand i10 Nios Asta.");
      }
      return mk("165/70 R14", "14\" Wheel", "Company OEM factory fitment on Grand i10 Magna/Era.");
    }
    if (m.includes("i10")) {
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for Hyundai i10 1st Gen.");
    }
    if (m.includes("santro")) {
      return mk("155/80 R13", "13\" Wheel", "Company OEM factory fitment for Hyundai Santro / Xing.");
    }
    if (m.includes("aura") || m.includes("xcent")) {
      if (hasToken(v, ["sx"])) {
        return mk("175/60 R15", "15\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Aura SX/SX(+).");
      }
      return mk("165/70 R14", "14\" Wheel", "Company OEM standard fitment on Aura E/S.");
    }
    if (m.includes("verna")) {
      if (hasToken(v, ["turbo", "sx"])) {
        return mk("205/55 R16", "16\" Diamond Cut Alloy", "Company OEM precision fitment on Verna SX/SX(O).");
      }
      return mk("185/65 R15", "15\" Steel", "Company OEM factory fitment on Verna EX/S.");
    }
    if (m.includes("alcazar")) {
      if (hasToken(v, ["signature", "platinum"])) {
        return mk("215/55 R18", "18\" Diamond Cut Alloy", "Company OEM precision fitment on Alcazar Platinum/Signature.");
      }
      return mk("215/60 R17", "17\" Alloy", "Company OEM standard fitment on Alcazar Prestige.");
    }
    if (m.includes("tucson")) {
      if (hasToken(v, ["signature"])) {
        return mk("235/55 R19", "19\" Dual-Tone Alloy", "Company OEM luxury SUV fitment on Tucson Signature.");
      }
      return mk("235/60 R18", "18\" Diamond Cut Alloy", "Company OEM factory fitment on Tucson Platinum.");
    }
    if (m.includes("kona")) {
      return mk("215/55 R17", "17\" Aero Alloy", "Company OEM EV low rolling-resistance factory fitment for Kona.");
    }
    if (m.includes("ioniq 5")) {
      return mk("255/45 R20", "20\" Parametric Pixel Alloy", "Company OEM Michelin EV factory fitment for Ioniq 5.");
    }
    if (m.includes("elantra")) {
      if (hasToken(v, ["sx(o)"])) {
        return mk("215/50 R17", "17\" Diamond Cut Alloy", "Company OEM factory fitment on Elantra SX(O).");
      }
      return mk("205/60 R16", "16\" Alloy", "Company OEM factory fitment on Elantra S/SX.");
    }
    if (m.includes("eon")) {
      return mk("155/70 R13", "13\" Steel", "Company OEM factory fitment for Hyundai Eon.");
    }
    if (m.includes("accent")) {
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for Hyundai Accent.");
    }
    if (m.includes("getz")) {
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for Hyundai Getz.");
    }
    if (m.includes("santa fe")) {
      return mk("235/65 R17", "17\" Alloy", "Company OEM factory SUV fitment for Hyundai Santa Fe.");
    }
    if (m.includes("sonata")) {
      return mk("215/60 R16", "16\" Alloy", "Company OEM factory executive fitment for Hyundai Sonata.");
    }
  }

  // =============================================================
  // 3. TATA
  // =============================================================
  if (b.includes("tata")) {
    if (m.includes("nexon ev")) {
      return mk("215/60 R16", "16\" Aero Alloy", "Company OEM EV low rolling-resistance fitment for Nexon EV.");
    }
    if (m.includes("nexon")) {
      if (hasToken(v, ["creative", "fearless"])) {
        return mk("215/60 R16", "16\" Alloy", "Company OEM precision alloy fitment on Nexon Creative/Fearless.");
      }
      return mk("195/60 R16", "16\" Steel", "Company OEM standard fitment on Nexon Smart/Pure.");
    }
    if (m.includes("punch ev")) {
      return mk("195/60 R16", "16\" Aero Alloy", "Company OEM EV fitment for Punch EV.");
    }
    if (m.includes("punch")) {
      if (hasToken(v, ["creative", "accomplished"])) {
        return mk("195/60 R16", "16\" Diamond Cut Alloy", "Company OEM precision alloy fitment on Punch Creative.");
      }
      return mk("185/70 R15", "15\" Steel", "Company OEM standard fitment on Punch Pure/Adventure.");
    }
    if (m.includes("curvv ev")) {
      return mk("215/55 R18", "18\" Aero Alloy", "Company OEM EV aerodynamic fitment for Curvv EV.");
    }
    if (m.includes("curvv")) {
      if (hasToken(v, ["accomplished", "creative"])) {
        return mk("215/55 R18", "18\" Alloy", "Company OEM precision fitment on Curvv Accomplished.");
      }
      return mk("215/60 R16", "16\" Wheel", "Company OEM standard fitment on Curvv Smart/Pure.");
    }
    if (m.includes("harrier") || m.includes("safari")) {
      if (hasToken(v, ["fearless", "dark", "accomplished"])) {
        return mk("245/55 R19", "19\" Dual-Tone Alloy", "Company OEM precision fitment on Fearless/Dark edition.");
      }
      if (hasToken(v, ["adventure"])) {
        return mk("235/60 R18", "18\" Diamond Cut Alloy", "Company OEM precision alloy fitment on Adventure.");
      }
      return mk("235/65 R17", "17\" Wheel", "Company OEM standard fitment on Smart/Pure.");
    }
    if (m.includes("altroz racer")) {
      return mk("185/60 R16", "16\" Performance Shadow Alloy", "Company OEM sporty handling fitment for Altroz Racer.");
    }
    if (m.includes("altroz")) {
      if (hasToken(v, ["xz", "xt"])) {
        return mk("185/60 R16", "16\" Laser Cut Alloy", "Company OEM precision alloy fitment on Altroz XZ/XZ+.");
      }
      return mk("165/80 R14", "14\" Steel", "Company OEM standard fitment on Altroz XE/XM.");
    }
    if (m.includes("tiago nrg")) {
      return mk("175/60 R15", "15\" Hyperstyle Alloy", "Company OEM rugged crossover fitment for Tiago NRG.");
    }
    if (m.includes("tiago") || m.includes("tigor")) {
      if (hasToken(v, ["xz", "plus"])) {
        return mk("175/65 R14", "14\" Dual-Tone Alloy", "Company OEM alloy fitment on XZ/XZ+.");
      }
      return mk("175/65 R14", "14\" Wheel", "Company OEM standard fitment on XE/XT.");
    }
    if (m.includes("hexa")) {
      if (hasToken(v, ["xt"])) {
        return mk("235/55 R19", "19\" Machined Alloy", "Company OEM factory alloy fitment on Hexa XT.");
      }
      return mk("235/70 R16", "16\" Steel", "Company OEM factory standard fitment on Hexa XE/XM.");
    }
    if (m.includes("aria")) {
      return mk("235/65 R17", "17\" Alloy", "Company OEM factory crossover fitment for Tata Aria.");
    }
    if (m.includes("zest") || m.includes("bolt")) {
      if (hasToken(v, ["xt"])) {
        return mk("185/60 R15", "15\" Alloy", "Company OEM factory alloy fitment on Zest/Bolt XT.");
      }
      return mk("175/65 R14", "14\" Steel", "Company OEM standard fitment on Zest/Bolt XE/XM.");
    }
    if (m.includes("sumo")) {
      return mk("215/75 R15", "15\" Heavy Duty Rugged", "Company OEM heavy duty rugged fitment for Tata Sumo.");
    }
    if (m.includes("indica")) {
      if (m.includes("vista")) {
        return mk("175/65 R14", "14\" Wheel", "Company OEM factory fitment for Indica Vista.");
      }
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for classic Tata Indica.");
    }
    if (m.includes("indigo")) {
      if (m.includes("manza")) {
        return mk("185/60 R15", "15\" Alloy", "Company OEM factory fitment for Tata Indigo Manza.");
      }
      return mk("175/65 R14", "14\" Wheel", "Company OEM factory fitment for Tata Indigo / eCS.");
    }
    if (m.includes("nano")) {
      return mk("Front: 135/70 R12 | Rear: 155/65 R12", "12\" Steel", "Company OEM factory staggered fitment for Tata Nano.", "135", "70", "12");
    }
  }

  // =============================================================
  // 4. MAHINDRA
  // =============================================================
  if (b.includes("mahindra")) {
    if (m.includes("be 6e") || m.includes("xev 9e")) {
      return mk("245/55 R19", "19\" Aero Alloy", "Company OEM electric flagship aero alloy fitment.");
    }
    if (m.includes("xuv400") || m.includes("xuv 3xo ev")) {
      return mk("205/65 R16", "16\" Diamond Cut Alloy", "Company OEM EV high efficiency fitment.");
    }
    if (m.includes("scorpio-n")) {
      if (hasToken(v, ["z8", "z6"])) {
        return mk("255/60 R18", "18\" Diamond Cut Alloy", "Company OEM precision alloy fitment on Scorpio-N Z8/Z8L.");
      }
      return mk("245/65 R17", "17\" Wheel", "Company OEM standard fitment on Scorpio-N Z2/Z4.");
    }
    if (m.includes("scorpio classic") || m.includes("scorpio")) {
      return mk("235/65 R17", "17\" Alloy", "Company OEM factory fitment for Scorpio Classic S/S11.");
    }
    if (m.includes("thar roxx")) {
      if (hasToken(v, ["ax7l", "ax5l"])) {
        return mk("255/60 R19", "19\" Dual-Tone Alloy", "Company OEM precision alloy fitment on Thar Roxx AX7L.");
      }
      return mk("255/65 R18", "18\" Alloy", "Company OEM factory all-terrain fitment on Thar Roxx MX/AX.");
    }
    if (m.includes("thar")) {
      if (hasToken(v, ["lx"])) {
        return mk("255/65 R18", "18\" Deep Silver Alloy", "Company OEM factory A/T fitment on Thar LX (CEAT/MRF).");
      }
      return mk("245/75 R16", "16\" Steel", "Company OEM rugged steel fitment on Thar AX/AX Opt.");
    }
    if (m.includes("xuv700")) {
      if (hasToken(v, ["ax7"])) {
        return mk("235/60 R18", "18\" Diamond Cut Alloy", "Company OEM precision alloy fitment on XUV700 AX7/AX7L.");
      }
      return mk("235/65 R17", "17\" Wheel", "Company OEM standard fitment on XUV700 MX/AX3/AX5.");
    }
    if (m.includes("xuv 3xo") || m.includes("xuv300")) {
      if (hasToken(v, ["ax7", "w8"])) {
        return mk("215/55 R17", "17\" Dual-Tone Alloy", "Company OEM precision alloy fitment on AX7/W8.");
      }
      return mk("205/65 R16", "16\" Wheel", "Company OEM standard fitment on MX/W4/W6.");
    }
    if (m.includes("xuv500")) {
      if (hasToken(v, ["w10", "w11"])) {
        return mk("235/60 R18", "18\" Alloy", "Company OEM diamond cut alloy fitment on XUV500 W10/W11.");
      }
      return mk("235/65 R17", "17\" Wheel", "Company OEM standard fitment on XUV500 W4/W6/W8.");
    }
    if (m.includes("bolero neo plus")) {
      return mk("215/75 R15", "15\" Rugged Steel/Alloy", "Company OEM rugged commercial fitment for Bolero Neo Plus.");
    }
    if (m.includes("bolero neo") || m.includes("bolero")) {
      return mk("215/75 R15", "15\" Rugged", "Company OEM factory standard rugged fitment for Bolero.");
    }
    if (m.includes("marazzo")) {
      if (hasToken(v, ["m6"])) {
        return mk("215/60 R17", "17\" Alloy", "Company OEM factory alloy fitment on Marazzo M6+.");
      }
      return mk("215/65 R16", "16\" Steel", "Company OEM standard fitment on Marazzo M2/M4+.");
    }
    if (m.includes("tuv300")) {
      if (m.includes("plus")) {
        return mk("215/70 R16", "16\" Steel", "Company OEM factory fitment for TUV300 Plus.");
      }
      return mk("215/75 R15", "15\" Rugged", "Company OEM factory fitment for TUV300.");
    }
    if (m.includes("kuv100")) {
      if (hasToken(v, ["k8", "k6"])) {
        return mk("185/60 R15", "15\" Alloy", "Company OEM factory alloy fitment on KUV100 K6/K8.");
      }
      return mk("185/65 R14", "14\" Steel", "Company OEM factory standard fitment on KUV100 K2/K4.");
    }
    if (m.includes("xylo")) {
      return mk("215/75 R15", "15\" Rugged", "Company OEM factory MPV fitment for Mahindra Xylo.");
    }
    if (m.includes("quanto")) {
      return mk("205/65 R15", "15\" Steel", "Company OEM factory fitment for Mahindra Quanto.");
    }
    if (m.includes("alturas g4")) {
      return mk("255/60 R18", "18\" Diamond Cut Alloy", "Company OEM factory luxury SUV fitment for Alturas G4.");
    }
    if (m.includes("verito")) {
      return mk("185/70 R14", "14\" Wheel", "Company OEM factory fitment for Mahindra Verito.");
    }
    if (m.includes("e2o")) {
      return mk("165/60 R14", "14\" Wheel", "Company OEM factory EV fitment for Mahindra e2o Plus.");
    }
    if (m.includes("e-verito") || m.includes("everito")) {
      return mk("185/65 R15", "15\" Steel", "Company OEM factory electric sedan fitment for Mahindra e-Verito.");
    }
    if (m.includes("armada") || m.includes("major") || m.includes("commander")) {
      return mk("215/75 R15", "15\" Heavy Duty", "Official company OEM rugged fitment for classic Mahindra UVs.");
    }
  }

  // =============================================================
  // 5. TOYOTA
  // =============================================================
  if (b.includes("toyota")) {
    if (m.includes("innova hycross")) {
      if (hasToken(v, ["zx"])) {
        return mk("225/50 R18", "18\" Super Chrome Metallic Alloy", "Company OEM high-profile hybrid fitment on Hycross ZX.");
      }
      if (hasToken(v, ["vx"])) {
        return mk("215/60 R17", "17\" Alloy", "Company OEM factory fitment on Hycross VX.");
      }
      return mk("205/65 R16", "16\" Wheel", "Company OEM standard fitment on Hycross G/GX.");
    }
    if (m.includes("innova crysta")) {
      if (hasToken(v, ["zx"])) {
        return mk("205/65 R16", "16\" Alloy", "Company OEM factory fitment on Crysta ZX (or 215/55 R17).");
      }
      return mk("205/65 R16", "16\" Wheel", "Company OEM standard fitment on Crysta GX/VX.");
    }
    if (m.includes("innova")) {
      return mk("205/65 R15", "15\" Wheel", "Company OEM factory specification for 1st & 2nd Gen Innova (2005-2016).");
    }
    if (m.includes("fortuner legender") || m.includes("gr-s")) {
      return mk("265/60 R18", "18\" Precision Dark Alloy", "Company OEM Bridgestone Dueler A/T fitment for Fortuner Legender.");
    }
    if (m.includes("fortuner")) {
      return mk("265/60 R18", "18\" Alloy", "Company OEM Bridgestone Dueler A/T fitment for Fortuner.");
    }
    if (m.includes("urban cruiser hyryder")) {
      return mk("215/60 R17", "17\" Alloy", "Company OEM factory fitment for Urban Cruiser Hyryder.");
    }
    if (m.includes("urban cruiser")) {
      if (hasToken(v, ["high", "premium"])) {
        return mk("215/60 R16", "16\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Urban Cruiser High/Premium.");
      }
      return mk("205/60 R16", "16\" Steel", "Company OEM factory fitment on Urban Cruiser Mid.");
    }
    if (m.includes("glanza")) {
      if (hasToken(v, ["g", "v"])) {
        return mk("195/55 R16", "16\" Alloy", "Company OEM precision alloy fitment on Glanza G/V.");
      }
      return mk("185/65 R15", "15\" Wheel", "Company OEM standard fitment on Glanza E/S.");
    }
    if (m.includes("rumion")) {
      if (hasToken(v, ["g", "v"])) {
        return mk("195/60 R16", "16\" Alloy", "Company OEM precision alloy fitment on Rumion G/V.");
      }
      return mk("185/65 R15", "15\" Wheel", "Company OEM standard fitment on Rumion S.");
    }
    if (m.includes("hilux")) {
      return mk("265/60 R18", "18\" Rugged A/T", "Company OEM heavy duty all-terrain fitment for Toyota Hilux.");
    }
    if (m.includes("camry")) {
      return mk("235/45 R18", "18\" Luxury", "Company OEM comfort-tuned luxury radial fitment for Camry Hybrid.");
    }
    if (m.includes("vellfire")) {
      return mk("225/60 R18", "18\" Ultra Luxury", "Company OEM ultra-comfort noise-cancelling fitment for Vellfire.");
    }
    if (m.includes("corolla altis")) {
      if (hasToken(v, ["vl", "gl"])) {
        return mk("205/55 R16", "16\" Alloy", "Company OEM factory alloy fitment on Corolla Altis GL/VL.");
      }
      return mk("195/65 R15", "15\" Steel", "Company OEM factory fitment on Corolla Altis J/G.");
    }
    if (m.includes("corolla")) {
      return mk("195/60 R15", "15\" Wheel", "Company OEM factory fitment for 9th Gen Toyota Corolla.");
    }
    if (m.includes("etios liva") || m.includes("etios cross") || m.includes("etios")) {
      if (hasToken(v, ["vx"]) || m.includes("cross")) {
        return mk("185/60 R15", "15\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Etios VX/Cross.");
      }
      return mk("175/65 R14", "14\" Wheel", "Company OEM standard factory fitment on Etios G/V.");
    }
    if (m.includes("yaris")) {
      return mk("185/60 R15", "15\" Alloy", "Company OEM factory fitment for Toyota Yaris.");
    }
    if (m.includes("land cruiser 300") || m.includes("land cruiser 200") || m.includes("land cruiser")) {
      if (m.includes("prado")) {
        return mk("265/65 R17", "17\" Alloy", "Company OEM all-terrain fitment for Land Cruiser Prado.");
      }
      return mk("265/55 R20", "20\" Luxury A/T", "Company OEM high-end all-terrain fitment for Land Cruiser.");
    }
    if (m.includes("qualis")) {
      return mk("195/70 R14", "14\" Heavy Duty Steel", "Company OEM factory fitment for Toyota Qualis.");
    }
    if (m.includes("prius")) {
      return mk("195/65 R15", "15\" Aero Wheel", "Company OEM low-rolling resistance fitment for Toyota Prius.");
    }
  }

  // =============================================================
  // 6. KIA
  // =============================================================
  if (b.includes("kia")) {
    if (m.includes("ev9")) {
      return mk("285/45 R21", "21\" GT-Line Aero Alloy", "Company OEM EV high-performance flagship fitment for Kia EV9.");
    }
    if (m.includes("ev6")) {
      return mk("255/45 R20", "20\" Crystal Cut Alloy", "Company OEM high-speed EV fitment for Kia EV6.");
    }
    if (m.includes("seltos")) {
      if (hasToken(v, ["gtx", "x-line"])) {
        return mk("215/55 R18", "18\" Crystal Cut Alloy", "Company OEM factory alloy fitment on Seltos GTX+/X-Line.");
      }
      if (hasToken(v, ["htx"])) {
        return mk("215/60 R17", "17\" Metallic Alloy", "Company OEM factory alloy fitment on Seltos HTX.");
      }
      return mk("205/65 R16", "16\" Wheel", "Company OEM factory fitment on Seltos HTE/HTK.");
    }
    if (m.includes("sonet")) {
      if (hasToken(v, ["gtx", "htx", "x-line"])) {
        return mk("215/60 R16", "16\" Crystal Cut Alloy", "Company OEM factory alloy fitment on Sonet HTX/GTX+.");
      }
      return mk("195/65 R15", "15\" Steel", "Company OEM factory standard fitment on Sonet HTE/HTK.");
    }
    if (m.includes("carens")) {
      if (hasToken(v, ["luxury", "prestige plus"])) {
        return mk("205/65 R16", "16\" Dual Tone Alloy", "Company OEM factory alloy fitment on Carens Luxury.");
      }
      return mk("195/65 R15", "15\" Steel", "Company OEM factory standard fitment on Carens Premium/Prestige.");
    }
    if (m.includes("carnival")) {
      return mk("235/60 R18", "18\" Diamond Cut Alloy", "Company OEM ultra-comfort MPV fitment for Kia Carnival.");
    }
    if (m.includes("syros") || m.includes("clavis")) {
      if (hasToken(v, ["gtx", "htx"])) {
        return mk("215/55 R17", "17\" Alloy", "Company OEM factory alloy fitment on Syros HTX/GTX.");
      }
      return mk("205/60 R16", "16\" Wheel", "Company OEM standard fitment on Syros HTE/HTK.");
    }
  }

  // =============================================================
  // 7. HONDA
  // =============================================================
  if (b.includes("honda")) {
    if (m.includes("city")) {
      if (hasToken(v, ["zx", "vx"])) {
        return mk("185/55 R16", "16\" Diamond Cut Alloy", "Company OEM factory alloy fitment on City VX/ZX.");
      }
      return mk("185/60 R15", "15\" Wheel", "Company OEM standard fitment on City V.");
    }
    if (m.includes("elevate")) {
      if (hasToken(v, ["zx", "vx"])) {
        return mk("215/55 R17", "17\" Dual-Tone Diamond Cut", "Company OEM factory alloy fitment on Elevate ZX.");
      }
      return mk("215/60 R16", "16\" Steel", "Company OEM standard fitment on Elevate SV/V.");
    }
    if (m.includes("amaze")) {
      if (hasToken(v, ["vx"])) {
        return mk("175/65 R15", "15\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Amaze VX.");
      }
      return mk("175/65 R14", "14\" Wheel", "Company OEM standard fitment on Amaze E/S.");
    }
    if (m.includes("civic")) {
      if (hasToken(v, ["zx"])) {
        return mk("215/50 R17", "17\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Civic ZX.");
      }
      return mk("215/55 R16", "16\" Alloy", "Company OEM factory fitment on Civic V/VX.");
    }
    if (m.includes("jazz")) {
      return mk("175/65 R15", "15\" Alloy", "Company OEM factory fitment for Honda Jazz.");
    }
    if (m.includes("wr-v") || m.includes("br-v")) {
      return mk("195/60 R16", "16\" Diamond Cut Alloy", "Company OEM factory crossover fitment for Honda WR-V / BR-V.");
    }
    if (m.includes("cr-v")) {
      return mk("235/60 R18", "18\" Alloy", "Company OEM factory SUV fitment for Honda CR-V.");
    }
    if (m.includes("brio")) {
      return mk("175/65 R14", "14\" Alloy", "Company OEM factory fitment for Honda Brio.");
    }
    if (m.includes("mobilio")) {
      return mk("185/65 R15", "15\" Alloy", "Company OEM factory fitment for Honda Mobilio.");
    }
    if (m.includes("accord")) {
      return mk("235/45 R18", "18\" Luxury Alloy", "Company OEM factory luxury fitment for Honda Accord.");
    }
  }

  // =============================================================
  // 8. MG MOTOR
  // =============================================================
  if (b.includes("mg")) {
    if (m.includes("windsor")) {
      if (hasToken(v, ["exclusive", "essence"])) {
        return mk("215/55 R18", "18\" Aero Alloy", "Company OEM precision EV alloy fitment on Windsor Essence.");
      }
      return mk("215/60 R17", "17\" Wheel", "Company OEM standard EV fitment on Windsor Excite.");
    }
    if (m.includes("hector")) {
      if (hasToken(v, ["sharp", "savvy"])) {
        return mk("215/55 R18", "18\" Dual Tone Alloy", "Company OEM factory alloy fitment on Hector Sharp/Savvy.");
      }
      return mk("215/60 R17", "17\" Wheel", "Company OEM standard fitment on Hector Style/Shine.");
    }
    if (m.includes("astor")) {
      if (hasToken(v, ["sharp", "savvy"])) {
        return mk("215/55 R17", "17\" Turbine Alloy", "Company OEM factory alloy fitment on Astor Sharp.");
      }
      return mk("215/60 R16", "16\" Steel", "Company OEM standard fitment on Astor Sprint/Shine.");
    }
    if (m.includes("zs ev")) {
      return mk("215/55 R17", "17\" Tomahawk Aero Alloy", "Company OEM EV low rolling resistance fitment for ZS EV.");
    }
    if (m.includes("comet")) {
      return mk("145/70 R12", "12\" Steel with Aero Cover", "Company OEM EV compact city fitment for MG Comet.");
    }
    if (m.includes("gloster")) {
      return mk("255/55 R19", "19\" Dual-Tone Alloy", "Company OEM flagship 4x4 SUV fitment for MG Gloster.");
    }
    if (m.includes("cyberster")) {
      return mk("Front: 245/45 R19 | Rear: 275/40 R19", "19\" Aero Sports Alloy", "Company OEM staggered electric roadster fitment.", "245", "45", "19");
    }
  }

  // =============================================================
  // 9. BYD
  // =============================================================
  if (b.includes("byd")) {
    if (m.includes("atto 3")) {
      return mk("215/55 R18", "18\" Dynamic Aero Alloy", "Company OEM EV low rolling-resistance factory fitment for BYD Atto 3.");
    }
    if (m.includes("seal")) {
      if (hasToken(v, ["performance", "awd"])) {
        return mk("Front: 235/45 R19 | Rear: 255/40 R19", "19\" Precision Aero Alloy", "Company OEM staggered sports fitment for BYD Seal Performance.", "235", "45", "19");
      }
      return mk("Front: 235/45 R19 | Rear: 235/45 R19", "19\" Aero Alloy", "Company OEM factory fitment for BYD Seal Dynamic/Premium.", "235", "45", "19");
    }
    if (m.includes("emax 7") || m.includes("e6")) {
      return mk("215/60 R17", "17\" Alloy", "Company OEM factory EV MPV fitment for BYD eMAX 7 / e6.");
    }
    if (m.includes("sealion")) {
      return mk("235/50 R19", "19\" Aero Alloy", "Company OEM factory EV SUV fitment for BYD Sealion 7.");
    }
  }

  // =============================================================
  // 10. BMW
  // =============================================================
  if (b.includes("bmw")) {
    if (m.includes("x3")) {
      if (hasToken(v, ["m40i", "30i"])) {
        return mk("Front: 245/45 R20 | Rear: 275/40 R20", "20\" M Sport", "BMW M Performance Star-Marked Run-Flat staggered fitment for X3.", "245", "45", "20");
      }
      return mk("245/50 R19", "19\" xLine / M Sport", "BMW Star-Marked Run-Flat (RSC) company OEM fitment for BMW X3.");
    }
    if (m.includes("x1") || m.includes("ix1")) {
      return mk("225/55 R18", "18\" M Sport / xLine", "BMW Star-Marked Run-Flat company OEM fitment for BMW X1.");
    }
    if (m.includes("x4")) {
      if (hasToken(v, ["m40i"])) {
        return mk("Front: 245/45 R20 | Rear: 275/40 R20", "20\" M Performance", "BMW M Performance Star-Marked staggered fitment for X4 M40i.", "245", "45", "20");
      }
      return mk("245/50 R19", "19\" M Sport", "BMW Star-Marked Run-Flat company OEM fitment for X4.");
    }
    if (m.includes("x5") || m.includes("x6")) {
      return mk("Front: 275/45 R20 | Rear: 305/40 R20", "20\" M Sport", "BMW Star-Marked staggered high-performance fitment for X5/X6.", "275", "45", "20");
    }
    if (m.includes("x7")) {
      return mk("Front: 275/40 R21 | Rear: 315/35 R21", "21\" M Sport", "BMW Star-Marked staggered luxury flagship fitment for X7.", "275", "40", "21");
    }
    if (m.includes("2 series")) {
      if (hasToken(v, ["m performance"])) {
        return mk("225/40 R18", "18\" M Sport", "BMW M Performance 18-inch fitment for 2 Series.");
      }
      return mk("225/45 R17", "17\" M Sport", "BMW Star-Marked Run-Flat company fitment for 2 Series Gran Coupe.");
    }
    if (m.includes("3 series gran limousine") || m.includes("330li") || m.includes("320ld")) {
      return mk("Front: 225/45 R18 | Rear: 255/40 R18", "18\" M Sport", "BMW Star-Marked Run-Flat Company OEM fitment for 3 Series LWB.", "225", "45", "18");
    }
    if (m.includes("3 series") || m.includes("m340i")) {
      if (hasToken(v, ["m340i"])) {
        return mk("Front: 225/40 R19 | Rear: 255/35 R19", "19\" M Performance", "BMW M340i xDrive staggered high-performance fitment.", "225", "40", "19");
      }
      if (hasToken(v, ["luxury"])) {
        return mk("225/50 R17", "17\" Luxury Line", "BMW Star-Marked comfort specification.");
      }
      return mk("Front: 225/45 R18 | Rear: 255/40 R18", "18\" M Sport", "BMW Star Marked Run-Flat Company OEM fitment.", "225", "45", "18");
    }
    if (m.includes("5 series")) {
      if (hasToken(v, ["lwb", "530li"])) {
        return mk("Front: 245/45 R19 | Rear: 275/40 R19", "19\" M Aero", "BMW Star-Marked staggered executive fitment for 5 Series LWB.", "245", "45", "19");
      }
      return mk("Front: 245/45 R18 | Rear: 275/40 R18", "18\" M Sport", "BMW Star-Marked Run-Flat executive sedan fitment.", "245", "45", "18");
    }
    if (m.includes("6 series")) {
      return mk("Front: 245/45 R19 | Rear: 275/40 R19", "19\" M Sport", "BMW Star-Marked staggered Gran Turismo fitment for 6 GT.", "245", "45", "19");
    }
    if (m.includes("7 series") || m.includes("i7")) {
      if (hasToken(v, ["m70"])) {
        return mk("Front: 255/40 R21 | Rear: 285/35 R21", "21\" M Star-Spoke", "BMW i7 M70 ultra high-performance staggered fitment.", "255", "40", "21");
      }
      return mk("Front: 255/45 R20 | Rear: 285/40 R20", "20\" M Aerodynamic", "BMW Star-Marked luxury flagship staggered fitment for 7 Series / i7.", "255", "45", "20");
    }
    if (m.includes("i4")) {
      return mk("Front: 245/45 R18 | Rear: 255/45 R18", "18\" M Aero", "BMW EV low rolling-resistance Star-Marked fitment for i4.", "245", "45", "18");
    }
    if (m.includes("ix") && !m.includes("ix1")) {
      return mk("255/50 R21", "21\" Aerodynamic", "BMW iX EV flagship aerodynamic fitment.");
    }
    if (m.includes("z4")) {
      return mk("Front: 255/35 R19 | Rear: 275/35 R19", "19\" M Sport", "BMW M Performance staggered roadster fitment for Z4.", "255", "35", "19");
    }
    if (m.includes("m2") || m.includes("m3") || m.includes("m4") || m.includes("m5")) {
      if (hasToken(v, ["m5"])) {
        return mk("Front: 275/35 R20 | Rear: 285/35 R20", "20\" M Light Alloy", "BMW M5 Competition factory high-speed fitment.", "275", "35", "20");
      }
      return mk("Front: 275/35 R19 | Rear: 285/30 R20", "19\" / 20\" M Forged", "BMW M Competition staggered track-ready fitment.", "275", "35", "19");
    }
    if (m.includes("xm")) {
      return mk("Front: 275/45 R21 | Rear: 315/40 R21", "21\" M Light Alloy", "BMW XM flagship high-performance staggered fitment.", "275", "45", "21");
    }
  }

  // =============================================================
  // 11. MERCEDES-BENZ
  // =============================================================
  if (b.includes("mercedes")) {
    if (m.includes("a-class")) {
      if (hasToken(v, ["a35", "a45", "amg"])) {
        return mk("245/35 R19", "19\" AMG Multi-Spoke", "Mercedes-AMG factory high-performance fitment for A35/A45 S.");
      }
      return mk("205/55 R17", "17\" Progressive Alloy", "Mercedes Original (MOExtended) Run-Flat factory fitment for A-Class.");
    }
    if (m.includes("c-class")) {
      if (hasToken(v, ["c43", "c63", "c 43", "c 63"])) {
        return mk("Front: 245/35 R19 | Rear: 265/35 R19", "19\" AMG Performance", "Mercedes-AMG factory high-performance staggered fitment.", "245", "35", "19");
      }
      return mk("Front: 225/45 R18 | Rear: 245/40 R18", "18\" AMG Line", "Mercedes Original (MOExtended) Run-Flat OEM specification.", "225", "45", "18");
    }
    if (m.includes("e-class")) {
      if (hasToken(v, ["e53", "e63", "e 53", "e 63"])) {
        return mk("Front: 245/35 R20 | Rear: 275/30 R20", "20\" AMG Forged", "Mercedes-AMG factory high-performance staggered fitment.", "245", "35", "20");
      }
      return mk("Front: 245/45 R18 | Rear: 275/40 R18", "18\" Luxury", "Mercedes Original (MO) factory comfort specification for E-Class.", "245", "45", "18");
    }
    if (m.includes("s-class")) {
      if (m.includes("maybach") || hasToken(v, ["maybach"])) {
        return mk("Front: 245/40 R20 | Rear: 275/35 R20", "20\" Maybach 5-Hole Forged", "Mercedes-Maybach factory ultra-luxury staggered fitment.", "245", "40", "20");
      }
      return mk("Front: 245/45 R19 | Rear: 275/40 R19", "19\" Multi-Spoke", "Mercedes Original (MO-Silent) flagship luxury fitment.", "245", "45", "19");
    }
    if (m.includes("cla") || m.includes("cls")) {
      if (m.includes("cls")) {
        return mk("Front: 245/40 R19 | Rear: 275/35 R19", "19\" AMG Multi-Spoke", "Mercedes-Benz CLS factory staggered coupe fitment.", "245", "40", "19");
      }
      return mk("225/45 R17", "17\" AMG 5-Spoke", "Mercedes Original (MO) factory fitment for CLA.");
    }
    if (m.includes("gla")) {
      if (hasToken(v, ["35", "amg"])) {
        return mk("235/45 R19", "19\" AMG 5-Twin-Spoke", "Mercedes-AMG factory sports fitment for GLA 35.");
      }
      return mk("235/50 R18", "18\" 5-Twin-Spoke", "Mercedes Original (MO) factory SUV fitment for GLA.");
    }
    if (m.includes("glb")) {
      return mk("235/50 R19", "19\" 10-Spoke", "Mercedes Original (MO) factory fitment for GLB.");
    }
    if (m.includes("glc")) {
      if (hasToken(v, ["43", "amg"])) {
        return mk("Front: 255/45 R20 | Rear: 285/40 R20", "20\" AMG Multi-Spoke", "Mercedes-AMG factory staggered performance fitment for GLC 43.", "255", "45", "20");
      }
      return mk("235/55 R19", "19\" 4MATIC", "Mercedes Original (MO) factory SUV fitment for GLC.");
    }
    if (m.includes("gle")) {
      if (hasToken(v, ["amg", "coupe", "53", "63"])) {
        return mk("Front: 275/45 R21 | Rear: 315/40 R21", "21\" AMG Multi-Spoke", "Mercedes-AMG factory staggered sports fitment for GLE Coupe.", "275", "45", "21");
      }
      return mk("275/50 R20", "20\" 5-Twin-Spoke", "Mercedes Original (MO) factory luxury SUV fitment for GLE.");
    }
    if (m.includes("gls")) {
      if (m.includes("maybach") || hasToken(v, ["maybach"])) {
        return mk("Front: 285/45 R22 | Rear: 325/40 R22", "22\" Maybach Multi-Spoke", "Mercedes-Maybach factory ultra-luxury staggered fitment for GLS 600.", "285", "45", "22");
      }
      return mk("Front: 275/50 R20 | Rear: 275/50 R20", "20\" / 21\" AMG Multi-Spoke", "Mercedes Original (MO) flagship luxury SUV fitment for GLS.");
    }
    if (m.includes("g-class")) {
      if (hasToken(v, ["amg", "63"])) {
        return mk("295/40 R22", "22\" AMG Cross-Spoke Forged", "Mercedes-AMG factory fitment for G 63.");
      }
      return mk("275/50 R20", "20\" 5-Twin-Spoke", "Mercedes Original (MO) factory fitment for G 400d.");
    }
    if (m.includes("eqa") || m.includes("eqb")) {
      return mk("235/55 R18", "18\" Aero Electric", "Mercedes-Benz EQ EV low rolling-resistance factory fitment.");
    }
    if (m.includes("eqe")) {
      return mk("255/45 R20", "20\" 5-Twin-Spoke Aero", "Mercedes-Benz EQ luxury electric SUV factory fitment for EQE.");
    }
    if (m.includes("eqs")) {
      return mk("265/40 R21", "21\" AMG Multi-Spoke Aero", "Mercedes-Benz flagship electric luxury fitment for EQS.");
    }
    if (m.includes("amg gt")) {
      return mk("Front: 265/35 R19 | Rear: 295/30 R20", "19\" / 20\" AMG Forged", "Mercedes-AMG GT factory staggered racetrack fitment.", "265", "35", "19");
    }
  }

  // =============================================================
  // 12. AUDI
  // =============================================================
  if (b.includes("audi")) {
    if (m.includes("a3")) {
      return mk("225/45 R17", "17\" Dynamic Alloy", "Audi Original (AO) factory specification for A3.");
    }
    if (m.includes("a4") || m.includes("a6")) {
      if (m.includes("a6")) {
        return mk("245/45 R18", "18\" Multi-Spoke Dynamic", "Audi Original (AO) executive factory fitment for A6.");
      }
      return mk("245/40 R18", "18\" Audi Sport", "Audi Original (AO) factory specification for A4.");
    }
    if (m.includes("a8")) {
      return mk("255/45 R19", "19\" 15-Spoke Turbine", "Audi Original (AO) flagship limousine factory fitment for A8 L.");
    }
    if (m.includes("q2")) {
      return mk("215/55 R17", "17\" Multi-Spoke", "Audi Original (AO) compact crossover factory fitment for Q2.");
    }
    if (m.includes("q3")) {
      return mk("235/55 R18", "18\" 5-Arm Alloy", "Audi Original (AO) Quattro all-weather fitment for Q3.");
    }
    if (m.includes("q5")) {
      return mk("235/55 R19", "19\" Quattro", "Audi Original (AO) Quattro all-weather fitment for Q5.");
    }
    if (m.includes("q7")) {
      return mk("255/55 R19", "19\" 5-Arm Star Design", "Audi Original (AO) luxury 7-seater SUV factory fitment for Q7.");
    }
    if (m.includes("q8 e-tron") || m.includes("e-tron gt")) {
      if (m.includes("e-tron gt")) {
        return mk("Front: 245/45 R20 | Rear: 285/40 R20", "20\" 5-Double-Spoke Aero", "Audi e-tron GT factory staggered electric sports fitment.", "245", "45", "20");
      }
      return mk("255/50 R20", "20\" 5-Arm Aero", "Audi Original (AO) EV aerodynamic factory fitment for Q8 e-tron.");
    }
    if (m.includes("q8")) {
      return mk("285/45 R21", "21\" 5-Segment-Spoke Graphite", "Audi Original (AO) flagship luxury SUV fitment for Q8.");
    }
    if (m.includes("s5") || m.includes("rs5") || m.includes("rs7")) {
      if (m.includes("rs7")) {
        return mk("275/35 R21", "21\" 10-Spoke Star Design", "Audi Sport high-performance factory fitment for RS7.");
      }
      return mk("255/35 R19", "19\" 5-Spoke Cavo Design", "Audi Sport factory high-performance fitment for S5/RS5.");
    }
    if (m.includes("tt") || m.includes("r8")) {
      if (m.includes("r8")) {
        return mk("Front: 245/30 R20 | Rear: 305/30 R20", "20\" 5-Twin-Spoke Forged", "Audi R8 supercar staggered factory fitment.", "245", "30", "20");
      }
      return mk("245/40 R18", "18\" Dynamic Alloy", "Audi TT sports coupe factory fitment.");
    }
  }

  // =============================================================
  // 13. NISSAN
  // =============================================================
  if (b.includes("nissan")) {
    if (m.includes("magnite")) {
      if (hasToken(v, ["xe"])) {
        return mk("165/80 R14", "14\" Steel", "Company OEM standard factory fitment on Magnite XE.");
      }
      return mk("195/60 R16", "16\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Magnite XL/XV.");
    }
    if (m.includes("x-trail")) {
      return mk("235/55 R20", "20\" Diamond Cut Alloy", "Company OEM factory SUV fitment for Nissan X-Trail.");
    }
    if (m.includes("sunny")) {
      if (hasToken(v, ["xe"])) {
        return mk("165/80 R14", "14\" Steel", "Company OEM factory fitment on Sunny XE.");
      }
      return mk("185/65 R15", "15\" Alloy", "Company OEM factory fitment on Sunny XL/XV.");
    }
    if (m.includes("micra")) {
      return mk("165/70 R14", "14\" Wheel", "Company OEM factory fitment for Nissan Micra.");
    }
    if (m.includes("terrano")) {
      return mk("215/65 R16", "16\" Machined Alloy", "Company OEM factory SUV fitment for Nissan Terrano.");
    }
    if (m.includes("kicks")) {
      if (hasToken(v, ["xv"])) {
        return mk("215/60 R17", "17\" Machined Alloy", "Company OEM factory alloy fitment on Kicks XV.");
      }
      return mk("215/65 R16", "16\" Steel", "Company OEM factory fitment on Kicks XL.");
    }
    if (m.includes("teana")) {
      return mk("215/55 R17", "17\" Alloy", "Company OEM executive sedan fitment for Nissan Teana.");
    }
    if (m.includes("evalia")) {
      return mk("165/80 R14", "14\" Steel", "Company OEM factory MPV fitment for Nissan Evalia.");
    }
    if (m.includes("gt-r")) {
      return mk("Front: 255/40 R20 | Rear: 285/35 R20", "20\" RAYS Forged Alloy", "Nissan GT-R supercar staggered factory fitment.", "255", "40", "20");
    }
  }

  // =============================================================
  // 14. VOLKSWAGEN & 15. SKODA
  // =============================================================
  if (b.includes("volkswagen") || b.includes("skoda")) {
    if (m.includes("virtus") || m.includes("slavia")) {
      return mk("205/55 R16", "16\" Razor / Scuba Alloy", "Company OEM factory precision alloy fitment for Virtus / Slavia.");
    }
    if (m.includes("taigun") || m.includes("kushaq") || m.includes("kylaq")) {
      if (hasToken(v, ["topline", "gt", "style", "monte", "prestige"])) {
        return mk("205/55 R17", "17\" Manila / Vega Alloy", "Company OEM factory alloy fitment on top variants.");
      }
      return mk("205/60 R16", "16\" Belmonte / Grus Wheel", "Company OEM factory standard fitment on mid/base variants.");
    }
    if (m.includes("tiguan") || m.includes("kodiaq")) {
      if (hasToken(v, ["allspace", "sportline", "l&k"])) {
        return mk("235/50 R19", "19\" Auckland / Crater Alloy", "Company OEM precision fitment for Tiguan Allspace / Kodiaq L&K.");
      }
      return mk("235/55 R18", "18\" Frankfurt / Elbrus Alloy", "Company OEM factory 4MOTION/4x4 SUV fitment.");
    }
    if (m.includes("superb") || m.includes("passat")) {
      return mk("215/55 R17", "17\" Stratos / Soho Alloy", "Company OEM executive luxury factory fitment.");
    }
    if (m.includes("octavia")) {
      if (hasToken(v, ["vrs"])) {
        return mk("225/40 R18", "18\" vRS Performance Alloy", "Skoda vRS factory high-performance fitment.");
      }
      if (hasToken(v, ["l&k"])) {
        return mk("225/45 R17", "17\" Pulsar Alloy", "Skoda factory alloy fitment on Octavia L&K.");
      }
      return mk("205/55 R16", "16\" Castor Alloy", "Company OEM factory fitment for Octavia Ambition/Style.");
    }
    if (m.includes("polo") || m.includes("vento") || m.includes("rapid") || m.includes("ameo")) {
      if (hasToken(v, ["gt", "highline", "style", "monte carlo"])) {
        return mk("195/55 R16", "16\" Portago / Club Alloy", "Company OEM precision alloy fitment on GT/Highline.");
      }
      if (hasToken(v, ["comfortline", "ambition"])) {
        return mk("185/60 R15", "15\" Estrada / Matone Alloy", "Company OEM factory alloy fitment on Comfortline/Ambition.");
      }
      return mk("175/70 R14", "14\" Steel", "Company OEM standard fitment on Trendline/Rider.");
    }
    if (m.includes("jetta") || m.includes("laura")) {
      return mk("205/55 R16", "16\" Alloy", "Company OEM factory fitment for Jetta / Laura.");
    }
    if (m.includes("t-roc") || m.includes("karoq")) {
      return mk("215/55 R17", "17\" Kulmbach / Castor Alloy", "Company OEM factory crossover fitment for T-Roc / Karoq.");
    }
    if (m.includes("beetle")) {
      return mk("205/55 R16", "16\" Classic Alloy", "Company OEM factory fitment for Volkswagen Beetle.");
    }
    if (m.includes("fabia")) {
      return mk("175/70 R14", "14\" Wheel", "Company OEM factory fitment for Skoda Fabia.");
    }
    if (m.includes("yeti")) {
      return mk("215/60 R16", "16\" Moon Alloy", "Company OEM 4x4 factory crossover fitment for Skoda Yeti.");
    }
  }

  // =============================================================
  // 16. RENAULT
  // =============================================================
  if (b.includes("renault")) {
    if (m.includes("kiger")) {
      return mk("195/60 R16", "16\" Diamond Cut Alloy", "Company OEM factory precision alloy fitment for Renault Kiger.");
    }
    if (m.includes("triber")) {
      if (hasToken(v, ["rxz"])) {
        return mk("185/65 R15", "15\" Dual-Tone Alloy", "Company OEM factory alloy fitment on Triber RXZ.");
      }
      return mk("165/80 R14", "14\" Steel", "Company OEM standard factory fitment on Triber RXE/RXL/RXT.");
    }
    if (m.includes("kwid")) {
      if (hasToken(v, ["climber", "rxt"])) {
        return mk("165/70 R14", "14\" Multi-Spoke", "Company OEM factory high-profile fitment on Kwid RXT/Climber.");
      }
      return mk("145/80 R12", "12\" Steel", "Company OEM standard factory fitment on Kwid RXE/RXL.");
    }
    if (m.includes("duster")) {
      if (hasToken(v, ["rxz"])) {
        return mk("215/60 R17", "17\" Machined Alloy", "Company OEM factory alloy fitment on Duster RxZ.");
      }
      return mk("215/65 R16", "16\" Wheel", "Company OEM standard factory SUV fitment on Duster RxE/RxL.");
    }
    if (m.includes("lodgy")) {
      if (hasToken(v, ["stepway"])) {
        return mk("195/55 R16", "16\" Alloy", "Company OEM factory alloy fitment on Lodgy Stepway.");
      }
      return mk("185/65 R15", "15\" Steel", "Company OEM standard factory fitment on Lodgy.");
    }
    if (m.includes("captur")) {
      return mk("215/60 R17", "17\" Crystal Cut Alloy", "Company OEM factory crossover fitment for Renault Captur.");
    }
    if (m.includes("pulse")) {
      return mk("165/70 R14", "14\" Wheel", "Company OEM factory fitment for Renault Pulse.");
    }
    if (m.includes("scala")) {
      return mk("185/65 R15", "15\" Alloy", "Company OEM factory sedan fitment for Renault Scala.");
    }
    if (m.includes("fluence")) {
      return mk("205/60 R16", "16\" Alloy", "Company OEM factory executive fitment for Renault Fluence.");
    }
    if (m.includes("koleos")) {
      return mk("225/60 R17", "17\" Alloy", "Company OEM factory SUV fitment for Renault Koleos.");
    }
  }

  // =============================================================
  // 17. CITROËN
  // =============================================================
  if (b.includes("citroën") || b.includes("citroen")) {
    if (m.includes("basalt")) {
      if (hasToken(v, ["plus", "max"])) {
        return mk("205/60 R16", "16\" Diamond Cut Alloy", "Company OEM factory precision alloy fitment on Basalt Plus/Max.");
      }
      return mk("195/65 R15", "15\" Steel", "Company OEM factory standard fitment on Basalt You.");
    }
    if (m.includes("c3 aircross")) {
      if (hasToken(v, ["plus", "max"])) {
        return mk("215/60 R17", "17\" Quadrastyle Alloy", "Company OEM factory alloy fitment on C3 Aircross Plus/Max.");
      }
      return mk("205/65 R16", "16\" Steel", "Company OEM factory standard fitment on C3 Aircross You.");
    }
    if (m.includes("c3") || m.includes("ec3")) {
      if (hasToken(v, ["feel", "shine"])) {
        return mk("195/65 R15", "15\" Diamond Cut Alloy", "Company OEM factory alloy fitment on C3 Feel/Shine.");
      }
      return mk("165/80 R14", "14\" Steel", "Company OEM factory standard fitment on C3 Live.");
    }
    if (m.includes("c5 aircross")) {
      return mk("235/55 R18", "18\" Swirl Two-Tone Diamond Cut", "Company OEM factory luxury SUV fitment for C5 Aircross.");
    }
  }

  // =============================================================
  // 18. JEEP
  // =============================================================
  if (b.includes("jeep")) {
    if (m.includes("compass")) {
      if (hasToken(v, ["limited", "model s"])) {
        return mk("225/55 R18", "18\" Alloy", "Company OEM fitment on Jeep Compass Limited/Model S.");
      }
      return mk("225/60 R17", "17\" Alloy", "Company OEM fitment on Jeep Compass Sport/Longitude.");
    }
    if (m.includes("meridian")) {
      return mk("235/55 R18", "18\" Diamond Cut", "Company OEM fitment on Jeep Meridian Overland.");
    }
    if (m.includes("wrangler")) {
      if (hasToken(v, ["rubicon"])) {
        return mk("255/75 R17", "17\" Heavy Duty Off-Road", "Company OEM BFGoodrich KM2 M/T factory fitment for Rubicon.");
      }
      return mk("255/70 R18", "18\" Granite Crystal Alloy", "Company OEM Bridgestone Dueler A/T factory fitment for Wrangler Unlimited.");
    }
    if (m.includes("grand cherokee")) {
      return mk("265/50 R20", "20\" Fully Polished Aluminum", "Company OEM luxury SUV factory fitment for Jeep Grand Cherokee.");
    }
    if (m.includes("cherokee")) {
      return mk("225/60 R18", "18\" Alloy", "Company OEM factory fitment for Jeep Cherokee.");
    }
  }

  // =============================================================
  // 19. FORCE MOTORS
  // =============================================================
  if (b.includes("force")) {
    if (m.includes("gurkha")) {
      if (hasToken(v, ["5-door", "18"])) {
        return mk("255/65 R18", "18\" Alloy All-Terrain", "Company OEM CEAT Czar A/T factory fitment for Force Gurkha 5-Door.");
      }
      return mk("245/75 R16", "16\" Heavy Duty Steel/Alloy", "Company OEM factory all-terrain fitment for Force Gurkha 3-Door.");
    }
    if (m.includes("cruiser") || m.includes("toofan") || m.includes("gama") || m.includes("kargo")) {
      return mk("215/75 R15", "15\" Heavy Duty Commercial", "Company OEM heavy duty rugged commercial fitment for Force Trax.");
    }
    if (m.includes("urbania")) {
      return mk("235/65 R16C", "16\" Commercial Radial", "Company OEM factory heavy duty commercial fitment for Force Urbania.", "235", "65", "16");
    }
    if (m.includes("one")) {
      return mk("235/70 R16", "16\" Alloy", "Company OEM factory SUV fitment for Force One.");
    }
  }

  // =============================================================
  // 20. VOLVO
  // =============================================================
  if (b.includes("volvo")) {
    if (m.includes("ex40") || m.includes("ec40") || m.includes("c40")) {
      return mk("Front: 235/50 R19 | Rear: 255/45 R19", "19\" 5-Spoke Aero", "Volvo Recharge electric flagship staggered factory fitment.", "235", "50", "19");
    }
    if (m.includes("xc40")) {
      if (hasToken(v, ["ultimate"])) {
        return mk("235/50 R19", "19\" 5-Y Spoke Matte Black", "Volvo factory luxury alloy fitment on XC40 Ultimate.");
      }
      return mk("235/55 R18", "18\" 5-Spoke Silver", "Volvo factory standard SUV fitment on XC40 Plus.");
    }
    if (m.includes("xc60")) {
      return mk("235/55 R19", "19\" 5-V Spoke Diamond Cut", "Volvo factory luxury all-weather SUV fitment on XC60.");
    }
    if (m.includes("xc90")) {
      return mk("275/45 R20", "20\" 10-Spoke Black Diamond Cut", "Volvo flagship luxury 7-seater SUV fitment on XC90.");
    }
    if (m.includes("s90")) {
      return mk("245/45 R18", "18\" 10-Spoke Turbine", "Volvo executive sedan factory fitment on S90.");
    }
    if (m.includes("s60")) {
      return mk("235/45 R18", "18\" Multi-Spoke Alloy", "Volvo sports sedan factory fitment on S60.");
    }
    if (m.includes("v40")) {
      return mk("225/50 R17", "17\" Spider Alloy", "Volvo crossover factory fitment for V40 Cross Country.");
    }
  }

  // =============================================================
  // 21. LAND ROVER
  // =============================================================
  if (b.includes("land rover") || b.includes("range rover")) {
    if (m.includes("defender")) {
      return mk("255/65 R19", "19\" Gloss Black Style 6010", "Land Rover factory heavy-duty all-terrain fitment for Defender.");
    }
    if (m.includes("range rover sport")) {
      return mk("275/50 R21", "21\" Style 5126 Diamond Turned", "Range Rover Sport factory high-performance luxury fitment.");
    }
    if (m.includes("range rover velar")) {
      return mk("255/55 R19", "19\" Style 5108 Gloss Sparkle Silver", "Range Rover Velar factory aerodynamic luxury fitment.");
    }
    if (m.includes("range rover evoque")) {
      return mk("235/60 R18", "18\" Style 5074 Gloss Sparkle Silver", "Range Rover Evoque factory luxury SUV fitment.");
    }
    if (m.includes("range rover")) {
      return mk("275/50 R21", "21\" Style 7021 Diamond Turned", "Flagship Range Rover factory ultra-luxury fitment.");
    }
    if (m.includes("discovery sport")) {
      return mk("235/60 R18", "18\" Style 5075 Gloss Sparkle Silver", "Land Rover Discovery Sport factory all-terrain fitment.");
    }
    if (m.includes("discovery")) {
      return mk("255/55 R20", "20\" Style 5011 Gloss Sparkle Silver", "Land Rover Discovery 7-seater factory luxury fitment.");
    }
    if (m.includes("freelander")) {
      return mk("235/65 R17", "17\" Alloy", "Land Rover Freelander 2 factory fitment.");
    }
  }

  // =============================================================
  // 22. ISUZU
  // =============================================================
  if (b.includes("isuzu")) {
    if (m.includes("v-cross")) {
      if (hasToken(v, ["prestige"])) {
        return mk("255/60 R18", "18\" Multi-Spoke Alloy", "Isuzu factory precision alloy fitment on V-Cross Z Prestige.");
      }
      return mk("245/70 R16", "16\" Heavy Duty Alloy", "Isuzu factory heavy-duty all-terrain fitment on V-Cross.");
    }
    if (m.includes("hi-lander") || m.includes("mu-7")) {
      return mk("245/70 R16", "16\" Heavy Duty Steel/Alloy", "Isuzu factory commercial/SUV heavy duty fitment.");
    }
    if (m.includes("s-cab")) {
      return mk("215/75 R15", "15\" Heavy Duty Commercial", "Isuzu factory commercial fleet fitment for S-Cab.");
    }
    if (m.includes("mu-x")) {
      return mk("255/60 R18", "18\" Diamond Cut Alloy", "Isuzu MU-X 7-seater luxury SUV factory fitment.");
    }
  }

  // =============================================================
  // 23. PORSCHE
  // =============================================================
  if (b.includes("porsche")) {
    if (m.includes("macan")) {
      if (hasToken(v, ["gts", "s", "macan s", "turbo"])) {
        return mk("Front: 265/45 R20 | Rear: 295/40 R20", "20\" Macan S Wheels", "Porsche N-Spec high-performance staggered fitment for Macan S/GTS.", "265", "45", "20");
      }
      return mk("Front: 235/55 R19 | Rear: 255/50 R19", "19\" Macan Wheels", "Porsche N-Spec factory staggered SUV fitment for Macan.", "235", "55", "19");
    }
    if (m.includes("cayenne")) {
      if (hasToken(v, ["turbo", "coupe", "gts"])) {
        return mk("Front: 285/45 R21 | Rear: 315/40 R21", "21\" RS Spyder Design", "Porsche N-Spec ultra high-performance staggered fitment for Cayenne.", "285", "45", "21");
      }
      return mk("Front: 255/55 R19 | Rear: 275/50 R19", "19\" Cayenne Wheels", "Porsche N-Spec factory luxury SUV staggered fitment.", "255", "55", "19");
    }
    if (m.includes("718") || m.includes("boxster") || m.includes("cayman")) {
      return mk("Front: 235/45 R18 | Rear: 265/45 R18", "18\" Cayman Wheels", "Porsche N-Spec sports mid-engine staggered fitment for 718.", "235", "45", "18");
    }
    if (m.includes("911")) {
      return mk("Front: 245/35 R20 | Rear: 305/30 R21", "20\" / 21\" Carrera S Wheels", "Porsche N-Spec track-tuned staggered supercar fitment for 911.", "245", "35", "20");
    }
    if (m.includes("panamera")) {
      return mk("Front: 265/45 R19 | Rear: 295/40 R19", "19\" Panamera Wheels", "Porsche N-Spec luxury sports sedan staggered fitment for Panamera.", "265", "45", "19");
    }
    if (m.includes("taycan")) {
      return mk("Front: 225/55 R19 | Rear: 275/45 R19", "19\" Taycan Aero Wheels", "Porsche N-Spec electric flagship staggered fitment for Taycan.", "225", "55", "19");
    }
  }

  // =============================================================
  // 24. LEXUS
  // =============================================================
  if (b.includes("lexus")) {
    if (m.includes("es 300h") || m.includes("es")) {
      if (hasToken(v, ["exquisite"])) {
        return mk("215/55 R17", "17\" Alloy", "Lexus factory comfort hybrid fitment for ES Exquisite.");
      }
      return mk("235/45 R18", "18\" Noise-Reducing Alloy", "Lexus factory ultra-quiet comfort hybrid fitment for ES 300h.");
    }
    if (m.includes("nx 350h") || m.includes("nx")) {
      return mk("235/50 R20", "20\" Dark Premium Metallic", "Lexus factory luxury crossover fitment for NX 350h.");
    }
    if (m.includes("rx")) {
      return mk("235/50 R21", "21\" Multi-Spoke Alloy", "Lexus factory flagship crossover fitment for RX.");
    }
    if (m.includes("lx")) {
      return mk("265/55 R20", "20\" Forged Aluminum", "Lexus factory flagship 4x4 SUV fitment for LX 500d/600.");
    }
    if (m.includes("lm")) {
      return mk("225/55 R19", "19\" Ultra Luxury Alloy", "Lexus factory flagship luxury MPV fitment for LM 350h.");
    }
    if (m.includes("ls") || m.includes("lc")) {
      return mk("Front: 245/45 R20 | Rear: 275/40 R20", "20\" Forged Alloy", "Lexus factory flagship staggered luxury coupe/sedan fitment.", "245", "45", "20");
    }
  }

  // =============================================================
  // 25. MINI
  // =============================================================
  if (b.includes("mini")) {
    if (m.includes("countryman")) {
      return mk("225/55 R17", "17\" Imprint Spoke", "MINI factory crossover fitment for Countryman.");
    }
    if (m.includes("clubman")) {
      return mk("225/45 R17", "17\" Net Spoke", "MINI factory fitment for Clubman.");
    }
    return mk("195/55 R16", "16\" Revolite Spoke", "MINI factory go-kart handling fitment for Cooper 3-Door/5-Door/Electric.");
  }

  // =============================================================
  // 26. JAGUAR
  // =============================================================
  if (b.includes("jaguar")) {
    if (m.includes("f-pace")) {
      return mk("255/55 R19", "19\" 5-Spoke Gloss Sparkle Silver", "Jaguar J-Marked factory luxury SUV fitment for F-Pace.");
    }
    if (m.includes("xe")) {
      return mk("225/45 R18", "18\" 10-Spoke Style 1049", "Jaguar J-Marked factory sports sedan fitment for XE.");
    }
    if (m.includes("xf")) {
      return mk("245/45 R18", "18\" 5-Spoke Style 5033", "Jaguar J-Marked factory executive sedan fitment for XF.");
    }
    if (m.includes("xj")) {
      return mk("Front: 245/45 R19 | Rear: 275/40 R19", "19\" Aleutian Alloy", "Jaguar J-Marked factory flagship limousine staggered fitment.", "245", "45", "19");
    }
    if (m.includes("f-type")) {
      return mk("Front: 245/40 R19 | Rear: 275/35 R19", "19\" 10-Spoke Style 1023", "Jaguar F-Type factory sports car staggered fitment.", "245", "40", "19");
    }
    if (m.includes("i-pace")) {
      return mk("245/50 R20", "20\" 5-Spoke Gloss Dark Grey", "Jaguar EV low rolling-resistance factory fitment for I-Pace.");
    }
  }

  // =============================================================
  // 27. FORD
  // =============================================================
  if (b.includes("ford")) {
    if (m.includes("ecosport")) {
      if (hasToken(v, ["s", "thunder"])) {
        return mk("205/50 R17", "17\" Smoke Alloy", "Ford factory low-profile alloy fitment on EcoSport S.");
      }
      if (hasToken(v, ["titanium"])) {
        return mk("205/60 R16", "16\" Diamond Cut Alloy", "Ford factory precision alloy fitment on EcoSport Titanium.");
      }
      return mk("195/65 R15", "15\" Steel", "Ford factory standard fitment on EcoSport Ambiente/Trend.");
    }
    if (m.includes("endeavour")) {
      if (hasToken(v, ["sport"])) {
        return mk("265/50 R20", "20\" Ebony Black Alloy", "Ford factory alloy fitment on Endeavour Sport.");
      }
      return mk("265/60 R18", "18\" Machined Alloy", "Ford factory all-terrain fitment on Endeavour Titanium.");
    }
    if (m.includes("figo") || m.includes("aspire")) {
      if (hasToken(v, ["titanium", "blu"])) {
        return mk("195/55 R15", "15\" Alloy", "Ford factory alloy fitment on Titanium/Blu.");
      }
      return mk("175/65 R14", "14\" Wheel", "Ford factory standard fitment on Ambiente/Trend.");
    }
    if (m.includes("freestyle")) {
      return mk("185/60 R15", "15\" Metallic Alloy", "Ford factory crossover fitment for Freestyle.");
    }
    if (m.includes("fiesta")) {
      return mk("195/60 R15", "15\" Alloy", "Ford factory precision fitment for Fiesta.");
    }
    if (m.includes("ikon")) {
      return mk("155/70 R13", "13\" Steel", "Ford factory fitment for classic Ford Ikon.");
    }
    if (m.includes("mondeo")) {
      return mk("205/55 R16", "16\" Alloy", "Ford factory executive fitment for Ford Mondeo.");
    }
    if (m.includes("mustang")) {
      return mk("Front: 255/40 R19 | Rear: 275/40 R19", "19\" Ebony Black Painted Aluminum", "Ford Mustang GT factory staggered high-performance fitment.", "255", "40", "19");
    }
  }

  // =============================================================
  // 28. CHEVROLET
  // =============================================================
  if (b.includes("chevrolet")) {
    if (m.includes("beat")) {
      if (hasToken(v, ["lt"])) {
        return mk("165/65 R14", "14\" Alloy", "Chevrolet factory alloy fitment on Beat LT/LTZ.");
      }
      return mk("155/70 R14", "14\" Steel", "Chevrolet factory standard fitment on Beat PS/LS.");
    }
    if (m.includes("cruze")) {
      return mk("205/60 R16", "16\" Machined Alloy", "Chevrolet factory high-speed fitment for Cruze.");
    }
    if (m.includes("tavera")) {
      return mk("205/65 R15", "15\" Steel", "Chevrolet factory heavy-duty UV fitment for Tavera.");
    }
    if (m.includes("spark")) {
      return mk("155/70 R13", "13\" Steel", "Chevrolet factory fitment for Spark.");
    }
    if (m.includes("sail") || m.includes("enjoy") || m.includes("aveo")) {
      return mk("175/70 R14", "14\" Wheel", "Chevrolet factory passenger fitment for Sail / Enjoy / Aveo.");
    }
    if (m.includes("optra")) {
      return mk("185/65 R14", "14\" Wheel", "Chevrolet factory fitment for Optra / Optra Magnum.");
    }
    if (m.includes("captiva")) {
      return mk("235/60 R17", "17\" Alloy", "Chevrolet factory SUV fitment for Captiva.");
    }
    if (m.includes("trailblazer")) {
      return mk("265/60 R18", "18\" Alloy", "Chevrolet factory 4x4 SUV fitment for Trailblazer.");
    }
  }

  // =============================================================
  // 29. FIAT
  // =============================================================
  if (b.includes("fiat")) {
    if (m.includes("abarth")) {
      return mk("205/55 R16", "16\" Scorpion Alloy", "Fiat Abarth high-performance factory fitment.");
    }
    if (m.includes("avventura") || m.includes("urban cross")) {
      return mk("205/60 R16", "16\" Diamond Cut Alloy", "Fiat factory rugged crossover fitment.");
    }
    if (m.includes("linea")) {
      return mk("205/55 R16", "16\" Turbine Alloy", "Fiat factory precision sedan fitment on Linea T-Jet/Emotion.");
    }
    if (m.includes("punto")) {
      if (hasToken(v, ["emotion", "dynamic"])) {
        return mk("195/60 R15", "15\" Alloy", "Fiat factory precision fitment on Punto Emotion.");
      }
      return mk("165/80 R14", "14\" Steel", "Fiat factory standard fitment on Punto Active.");
    }
    if (m.includes("palio")) {
      return mk("175/65 R14", "14\" Wheel", "Fiat factory fitment for classic Palio / Palio Stile.");
    }
    if (m.includes("500")) {
      return mk("185/55 R15", "15\" Retro Alloy", "Fiat factory fitment for Fiat 500.");
    }
  }

  // =============================================================
  // 30. MITSUBISHI
  // =============================================================
  if (b.includes("mitsubishi")) {
    if (m.includes("pajero sport")) {
      return mk("265/65 R17", "17\" Alloy", "Mitsubishi factory all-terrain fitment for Pajero Sport.");
    }
    if (m.includes("pajero sfx")) {
      return mk("265/70 R15", "15\" Rugged Steel", "Mitsubishi factory off-road fitment for classic Pajero SFX.");
    }
    if (m.includes("lancer")) {
      return mk("185/65 R14", "14\" Wheel", "Mitsubishi factory precision fitment for Lancer.");
    }
    if (m.includes("outlander")) {
      return mk("215/70 R16", "16\" Alloy", "Mitsubishi factory crossover fitment for Outlander.");
    }
    if (m.includes("montero")) {
      return mk("265/65 R17", "17\" Alloy", "Mitsubishi factory luxury 4x4 fitment for Montero.");
    }
    if (m.includes("cedia")) {
      return mk("195/60 R15", "15\" OZ Alloy", "Mitsubishi factory rally-bred fitment for Cedia.");
    }
  }

  // =============================================================
  // 31. DATSUN
  // =============================================================
  if (b.includes("datsun")) {
    if (m.includes("redi-go")) {
      return mk("155/80 R13", "13\" Steel", "Company OEM factory fitment for Datsun redi-GO.");
    }
    if (m.includes("go")) {
      if (hasToken(v, ["t"])) {
        return mk("165/70 R14", "14\" Diamond Cut Alloy", "Company OEM factory alloy fitment on Datsun GO/GO+ T Option.");
      }
      return mk("155/70 R13", "13\" Steel", "Company OEM factory standard fitment on Datsun GO/GO+ D/A.");
    }
  }

  // =============================================================
  // 32. ROLLS-ROYCE
  // =============================================================
  if (b.includes("rolls-royce") || b.includes("rolls royce")) {
    if (m.includes("phantom")) {
      return mk("Front: 255/45 R22 | Rear: 285/40 R22", "22\" Part-Polished Forged", "Rolls-Royce factory ultra-luxury staggered fitment for Phantom.", "255", "45", "22");
    }
    if (m.includes("cullinan")) {
      return mk("255/50 R21", "21\" Fully Polished", "Rolls-Royce factory all-terrain ultra-luxury fitment for Cullinan.");
    }
    if (m.includes("spectre")) {
      return mk("Front: 255/40 R23 | Rear: 285/35 R23", "23\" 7-Spoke Part Polished", "Rolls-Royce factory electric coupe staggered fitment for Spectre.", "255", "40", "23");
    }
    return mk("Front: 255/45 R21 | Rear: 285/40 R21", "21\" Twin 5-Spoke Alloy", "Rolls-Royce factory luxury staggered fitment for Ghost / Wraith / Dawn.", "255", "45", "21");
  }

  // =============================================================
  // 33. BENTLEY
  // =============================================================
  if (b.includes("bentley")) {
    if (m.includes("bentayga")) {
      return mk("285/45 R21", "21\" 5 Twin-Spoke Alloy", "Bentley factory ultra-luxury high-speed SUV fitment for Bentayga.");
    }
    return mk("Front: 265/40 R21 | Rear: 305/35 R21", "21\" 10-Spoke Alloy", "Bentley factory grand tourer staggered fitment for Continental GT / Flying Spur.", "265", "40", "21");
  }

  // =============================================================
  // 34. FERRARI
  // =============================================================
  if (b.includes("ferrari")) {
    if (m.includes("purosangue")) {
      return mk("Front: 255/35 R22 | Rear: 315/30 R23", "22\" / 23\" Forged Liquid Silver", "Ferrari factory staggered high-performance fitment for Purosangue.", "255", "35", "22");
    }
    if (m.includes("812")) {
      return mk("Front: 275/35 R20 | Rear: 315/35 R20", "20\" Forged Racing Wheels", "Ferrari 812 Superfast factory track staggered fitment.", "275", "35", "20");
    }
    return mk("Front: 245/35 R20 | Rear: 305/30 R20", "20\" Forged Diamond Rims", "Ferrari factory high-speed supercar staggered fitment.", "245", "35", "20");
  }

  // =============================================================
  // 35. LAMBORGHINI
  // =============================================================
  if (b.includes("lamborghini")) {
    if (m.includes("urus")) {
      return mk("Front: 285/40 R21 | Rear: 315/35 R21", "21\" Alcione Rims", "Lamborghini factory Super SUV staggered fitment for Urus.", "285", "40", "21");
    }
    if (m.includes("hurac") || m.includes("huracan")) {
      return mk("Front: 245/30 R20 | Rear: 305/30 R20", "20\" Giano Rims", "Lamborghini factory V10 supercar staggered fitment for Huracán.", "245", "30", "20");
    }
    if (m.includes("revuelto")) {
      return mk("Front: 265/35 R20 | Rear: 345/30 R21", "20\" / 21\" Altanero Forged", "Lamborghini factory V12 hybrid staggered fitment for Revuelto.", "265", "35", "20");
    }
    return mk("Front: 255/35 R19 | Rear: 335/30 R20", "19\" / 20\" Dione Forged", "Lamborghini factory V12 staggered fitment for Aventador.", "255", "35", "19");
  }

  // =============================================================
  // 36. ASTON MARTIN
  // =============================================================
  if (b.includes("aston martin")) {
    if (m.includes("dbx")) {
      return mk("Front: 285/40 R22 | Rear: 325/35 R22", "22\" Sport Ribbon Alloy", "Aston Martin factory ultra-luxury SUV staggered fitment for DBX.", "285", "40", "22");
    }
    if (m.includes("vantage")) {
      return mk("Front: 255/40 R20 | Rear: 295/35 R20", "20\" Cast Wheels", "Aston Martin factory sports coupe staggered fitment for Vantage.", "255", "40", "20");
    }
    return mk("Front: 275/35 R21 | Rear: 315/30 R21", "21\" Forged Alloy", "Aston Martin factory Super Tourer staggered fitment for DB12 / DB11.", "275", "35", "21");
  }

  // =============================================================
  // 37. MASERATI
  // =============================================================
  if (b.includes("maserati")) {
    if (m.includes("levante")) {
      return mk("265/50 R19", "19\" Zefiro Polished Alloy", "Maserati factory luxury performance SUV fitment for Levante.");
    }
    if (m.includes("grecale")) {
      return mk("Front: 255/45 R20 | Rear: 295/40 R20", "20\" Etere Forged Wheels", "Maserati factory staggered SUV fitment for Grecale.", "255", "45", "20");
    }
    if (m.includes("mc20")) {
      return mk("Front: 245/35 R20 | Rear: 305/30 R20", "20\" Birdcage Glossy Black", "Maserati factory carbon supercar staggered fitment for MC20.", "245", "35", "20");
    }
    return mk("Front: 245/45 R19 | Rear: 275/40 R19", "19\" Poseidone Alloy", "Maserati factory staggered luxury fitment for Ghibli / Quattroporte.", "245", "45", "19");
  }

  // Fallback for custom or unlisted models
  return mk("175/65 R14", "14\"", "Standard passenger car factory fitment.");
}
