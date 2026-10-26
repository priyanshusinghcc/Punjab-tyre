// lib/landing-pages.ts — content for the SEO landing pages
// (/services/*, /brands/*, /car-tyres/*). Edit copy here; pages rebuild from it.

import { carVehicleCatalog } from "./car-catalog";
import { getVehicleOemFitment } from "./oem-fitment";

export type FaqItem = { question: string; answer: string };

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export type ServicePage = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  signsTitle: string;
  signs: string[];
  howTitle: string;
  how: string[];
  faqs: FaqItem[];
  whatsappMessage: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    h1: "Wheel Alignment in Rohtak",
    metaTitle: "Wheel Alignment in Rohtak",
    metaDescription:
      "Car wheel alignment in Rohtak at Punjab Tyre (Yokohama Club Network). Fix steering pull and uneven tyre wear. Included free with new tyres. Open 7 days.",
    intro:
      "Wheel alignment resets the angles of your wheels to the carmaker's specification, so the car drives straight and the tyres wear evenly. At Punjab Tyre in Rohtak, alignment is done alongside tyre fitment — and it is included when you buy new tyres from us.",
    signsTitle: "When your car needs wheel alignment",
    signs: [
      "The car pulls to the left or right on a straight road",
      "The steering wheel is off-centre while driving straight",
      "Tyres are wearing faster on the inner or outer edge",
      "After hitting a pothole, kerb or speed breaker hard",
      "After fitting new tyres or replacing suspension or steering parts",
    ],
    howTitle: "How we do it",
    how: [
      "Inspect tyres, suspension and steering for wear before adjusting",
      "Measure and set the alignment angles to the manufacturer's specification",
      "Centre the steering wheel and road-check the car",
      "Advise you on tyre rotation and pressure to get the most life from your set",
    ],
    faqs: [
      {
        question: "How often should I get wheel alignment done?",
        answer:
          "A common guideline is every 5,000–10,000 km, at every tyre change, and any time the car starts pulling to one side or after a hard impact with a pothole or kerb.",
      },
      {
        question: "Is wheel alignment included with new tyres at Punjab Tyre?",
        answer:
          "Yes. Wheel alignment, balancing, tyre changing, nitrogen inflation and puncture repair are included when you buy tyres from Punjab Tyre, Rohtak.",
      },
      {
        question: "What is the difference between wheel alignment and wheel balancing?",
        answer:
          "Alignment corrects the angle of the wheels so the car tracks straight and tyres wear evenly. Balancing corrects uneven weight around the wheel so it spins smoothly without vibration. Most cars need both when new tyres are fitted.",
      },
    ],
    whatsappMessage: "Hi Punjab Tyre, I want wheel alignment for my car. When can I come in?",
  },
  {
    slug: "wheel-balancing",
    name: "Wheel Balancing",
    h1: "Wheel Balancing in Rohtak",
    metaTitle: "Wheel Balancing in Rohtak",
    metaDescription:
      "Wheel balancing in Rohtak for cars and SUVs at Punjab Tyre. Stop steering vibration at highway speed. Included free with new tyres. Visit or WhatsApp us.",
    intro:
      "Wheel balancing evens out the weight around each tyre and wheel so it spins smoothly. An unbalanced wheel causes vibration in the steering or seat — usually noticed on highways — and wears tyres and suspension faster.",
    signsTitle: "When your wheels need balancing",
    signs: [
      "Steering wheel or seat vibrates at highway speeds",
      "Patchy, uneven wear on the tyre tread",
      "Whenever a new tyre is fitted or a tyre is removed from the rim",
      "After a puncture repair that needed the tyre taken off",
      "After changing or refurbishing alloy wheels",
    ],
    howTitle: "How we do it",
    how: [
      "Mount each wheel on a computerised balancing machine",
      "Measure the imbalance and fix it with correctly placed balancing weights",
      "Re-spin to confirm the wheel runs true",
      "Refit with correct torque and tyre pressure",
    ],
    faqs: [
      {
        question: "How do I know if my wheels need balancing?",
        answer:
          "The most common sign is vibration in the steering wheel or seat that appears at a certain speed, often 80–100 km/h. Balancing is also recommended every time a tyre is fitted or removed from the rim.",
      },
      {
        question: "Is wheel balancing included with new tyres?",
        answer:
          "Yes. At Punjab Tyre, Rohtak, balancing is included when you buy tyres from us, together with alignment, fitting and nitrogen inflation.",
      },
    ],
    whatsappMessage: "Hi Punjab Tyre, I want wheel balancing for my car. When can I come in?",
  },
  {
    slug: "tyre-fitting",
    name: "Tyre Changing & Fitting",
    h1: "Tyre Changing & Fitting in Rohtak",
    metaTitle: "Same-Day Tyre Fitting in Rohtak",
    metaDescription:
      "Same-day tyre changing and fitting in Rohtak for cars, SUVs and bikes. Genuine Yokohama, CEAT, Michelin, Apollo & Goodyear tyres. Punjab Tyre, since 1949.",
    intro:
      "Buy and fit new tyres the same day at our Rohtak store. We stock genuine car, SUV and bike tyres from Yokohama, CEAT, Apollo, Goodyear and Michelin, and fit them with care so rims, valves and tyre beads aren't damaged.",
    signsTitle: "When it's time for new tyres",
    signs: [
      "Tread depth is near the wear indicator bars in the grooves",
      "Cracks, cuts or bulges on the sidewall",
      "Frequent punctures or slow air loss",
      "Tyres are more than about 5–6 years old, even with tread left",
      "Poor grip in rain or longer braking distances",
    ],
    howTitle: "What's included",
    how: [
      "Help choosing the right size, load and speed rating for your vehicle",
      "Careful removal and fitting on the rim, with a new valve where needed",
      "Wheel balancing and wheel alignment",
      "Nitrogen inflation to the recommended pressure",
    ],
    faqs: [
      {
        question: "Can I get tyres fitted the same day in Rohtak?",
        answer:
          "Yes. Punjab Tyre offers same-day fitment at our Rohtak store. Send your car model and tyre size on WhatsApp first so we can confirm stock before you come.",
      },
      {
        question: "How long do car tyres usually last?",
        answer:
          "It depends on driving style, roads, alignment and maintenance. Many owners replace them around 35,000–50,000 km, but visible wear, cracks or vibration should be checked earlier.",
      },
    ],
    whatsappMessage: "Hi Punjab Tyre, I need new tyres fitted. Please share prices and availability.",
  },
  {
    slug: "nitrogen-filling",
    name: "Nitrogen Inflation",
    h1: "Nitrogen Air Filling in Rohtak",
    metaTitle: "Nitrogen Filling for Tyres in Rohtak",
    metaDescription:
      "Nitrogen tyre inflation in Rohtak at Punjab Tyre. Steadier tyre pressure for cars and SUVs. Included free with every new tyre purchase.",
    intro:
      "Nitrogen leaks out of tyres more slowly than ordinary compressed air, so pressure stays closer to the recommended level for longer. Steady pressure helps tyre life, mileage and handling.",
    signsTitle: "Why drivers choose nitrogen",
    signs: [
      "Pressure stays stable for longer between top-ups",
      "Less pressure change on hot Haryana summer days",
      "Helps tyres wear evenly when kept at the right pressure",
      "Dry gas — less moisture inside the tyre and rim",
    ],
    howTitle: "How it works at our store",
    how: [
      "Check each tyre, including the spare, for damage and leaks",
      "Fill with nitrogen to your vehicle's recommended pressure",
      "Nitrogen inflation is included with every new tyre purchase",
    ],
    faqs: [
      {
        question: "Can I mix nitrogen and normal air in my tyres?",
        answer:
          "Yes. It's safe to top up with normal air if nitrogen isn't available. You just lose some of nitrogen's slower-leak benefit until the tyre is refilled with nitrogen.",
      },
      {
        question: "Is nitrogen filling free with new tyres?",
        answer: "Yes. Nitrogen inflation is included when you buy tyres from Punjab Tyre, Rohtak.",
      },
    ],
    whatsappMessage: "Hi Punjab Tyre, I want nitrogen filling for my tyres.",
  },
  {
    slug: "puncture-repair",
    name: "Puncture Repair",
    h1: "Tyre Puncture Repair in Rohtak",
    metaTitle: "Tyre Puncture Repair in Rohtak",
    metaDescription:
      "Quick tubeless tyre puncture repair in Rohtak at Punjab Tyre. Cars, SUVs and bikes. Honest advice on whether to repair or replace.",
    intro:
      "Got a puncture? We repair tubeless car, SUV and bike tyres at our Rohtak store, and tell you honestly when a tyre is safe to repair and when it should be replaced.",
    signsTitle: "Repair or replace?",
    signs: [
      "Small punctures in the tread area can usually be repaired",
      "Sidewall cuts, bulges or large holes mean the tyre should be replaced",
      "Driving long on a flat tyre can damage it beyond repair",
      "A tyre that keeps losing air needs a proper inspection",
    ],
    howTitle: "How we do it",
    how: [
      "Find the leak and check the inside of the tyre for hidden damage",
      "Repair the puncture properly and re-seal the tyre",
      "Re-inflate to the correct pressure and re-check for leaks",
    ],
    faqs: [
      {
        question: "Can a tubeless tyre be repaired?",
        answer:
          "Yes, most punctures in the tread area of a tubeless tyre can be repaired. Damage to the sidewall or very large holes cannot be repaired safely, and the tyre should be replaced.",
      },
      {
        question: "Do you repair bike tyre punctures too?",
        answer: "Yes, we repair punctures on car, SUV and bike tyres at our Rohtak store.",
      },
    ],
    whatsappMessage: "Hi Punjab Tyre, I have a tyre puncture. Can I bring my vehicle in now?",
  },
  {
    slug: "alloy-wheels",
    name: "Alloy Wheels",
    h1: "Alloy Wheels in Rohtak",
    metaTitle: "Alloy Wheels in Rohtak — Neo, Advantec, Onyx & More",
    metaDescription:
      "Buy alloy wheels in Rohtak: Neo, Advantec, Onyx, Incubus, Uno Minda and OEM-style alloys. Correct PCD and offset, fitted with tyres, same day.",
    intro:
      "Upgrade your car's look and handling with genuine alloy wheels from Neo, Advantec, Onyx Wheels, Incubus Alloys, Uno Minda and OEM-style replacements. We match the correct PCD, offset and size for your car and fit them with your tyres.",
    signsTitle: "What we help you choose",
    signs: [
      "The right size — stock size or a sensible upsize",
      "Correct PCD (bolt pattern), centre bore and offset for your car",
      "Finish and design: machined, black, gunmetal, silver and more",
      "Matching tyre size so the overall wheel diameter stays close to stock",
    ],
    howTitle: "Why buy alloys at Punjab Tyre",
    how: [
      "Genuine certified alloy brands in custom finishes, PCDs and sizes",
      "Fitted together with your tyres, then balanced and aligned",
      "Honest advice on upsizing so ride comfort and speedometer accuracy aren't lost",
    ],
    faqs: [
      {
        question: "Can I put bigger alloy wheels on my car?",
        answer:
          "Often yes. A common rule is to keep the overall wheel-and-tyre diameter within about 3% of the original so the speedometer, ABS and ride stay correct. Tell us your car and variant and we'll suggest sizes that fit.",
      },
      {
        question: "Which alloy wheel brands do you sell in Rohtak?",
        answer:
          "Neo, Advantec, Onyx Wheels, Incubus Alloys, Uno Minda and OEM-style replacement alloys, in a range of finishes, PCDs and sizes.",
      },
    ],
    whatsappMessage: "Hi Punjab Tyre, I want alloy wheels for my car. Please share designs and prices.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TYRE BRANDS
// ─────────────────────────────────────────────────────────────────────────────

export type BrandPage = {
  slug: string;
  name: string;
  logo: string;
  authorised: boolean;
  vehicles: string; // e.g. "car, SUV and bike"
  metaTitle: string;
  metaDescription: string;
  intro: string;
  points: string[];
  faqs: FaqItem[];
};

function standardBrandFaqs(name: string, vehicles: string): FaqItem[] {
  return [
    {
      question: `Where can I buy ${name} tyres in Rohtak?`,
      answer: `Punjab Tyre (Yokohama Club Network), 351/12 Gali No. 3, opposite Pacific Mall, Rohtak, stocks genuine ${name} ${vehicles} tyres with same-day fitment.`,
    },
    {
      question: `Do ${name} tyres come with warranty?`,
      answer: `Yes. Genuine ${name} tyres carry the manufacturer's warranty, which depends on the tyre model. We explain the warranty that applies before you buy.`,
    },
    {
      question: `What is the price of ${name} tyres in Rohtak?`,
      answer: `Prices depend on the tyre size and pattern. Send your vehicle model or tyre size on WhatsApp to +91 98960 53958 and we'll reply with current prices for the ${name} options in stock.`,
    },
  ];
}

export const brandPages: BrandPage[] = [
  {
    slug: "yokohama",
    name: "Yokohama",
    logo: "/logos/yokohama.svg",
    authorised: true,
    vehicles: "car and SUV",
    metaTitle: "Yokohama Tyres Rohtak — Authorised Dealer",
    metaDescription:
      "Authorised Yokohama tyre dealer in Rohtak — Yokohama Club Network store. Genuine BluEarth & Geolandar tyres for cars and SUVs with warranty and same-day fitment.",
    intro:
      "Punjab Tyre is an authorised Yokohama dealer and part of the Yokohama Club Network in Rohtak. Buy genuine, fresh-stock Yokohama tyres for hatchbacks, sedans and SUVs — with manufacturer warranty and same-day fitment.",
    points: [
      "Authorised Yokohama Club Network store — genuine tyres, manufacturer warranty",
      "Ranges for comfort, mileage and SUV use, including BluEarth and Geolandar",
      "Popular with Rohtak customers for Scorpio-N, Taigun, Creta and other SUVs",
      "Fitment, alignment, balancing and nitrogen inflation included",
    ],
    faqs: [
      {
        question: "Is Punjab Tyre an authorised Yokohama dealer?",
        answer:
          "Yes. Punjab Tyre in Rohtak is an authorised Yokohama dealer and a Yokohama Club Network store, selling genuine Yokohama tyres with manufacturer warranty.",
      },
      ...standardBrandFaqs("Yokohama", "car and SUV"),
    ],
  },
  {
    slug: "ceat",
    name: "CEAT",
    logo: "/logos/ceat.svg",
    authorised: false,
    vehicles: "car, SUV and bike",
    metaTitle: "CEAT Tyres in Rohtak — Car & Bike",
    metaDescription:
      "Genuine CEAT car, SUV and bike tyres in Rohtak at Punjab Tyre. Manufacturer warranty, same-day fitment, alignment and balancing included.",
    intro:
      "Buy genuine CEAT tyres for cars, SUVs and bikes at Punjab Tyre, Rohtak. CEAT is one of India's best-known tyre makers, with options for everyday mileage, comfort and sporty driving.",
    points: [
      "Car, SUV and two-wheeler tyres",
      "Genuine stock with manufacturer warranty",
      "Same-day fitment with alignment and balancing included",
    ],
    faqs: standardBrandFaqs("CEAT", "car, SUV and bike"),
  },
  {
    slug: "apollo",
    name: "Apollo",
    logo: "/logos/apollo.png",
    authorised: false,
    vehicles: "car, SUV and bike",
    metaTitle: "Apollo Tyres in Rohtak — Car & Bike",
    metaDescription:
      "Genuine Apollo car, SUV and bike tyres in Rohtak at Punjab Tyre. Warranty-backed, with same-day fitment, alignment and balancing.",
    intro:
      "Punjab Tyre stocks genuine Apollo tyres for cars, SUVs and bikes in Rohtak — a popular choice for long tread life and value on Indian roads.",
    points: [
      "Car, SUV and two-wheeler tyres",
      "Genuine stock with manufacturer warranty",
      "Same-day fitment with alignment and balancing included",
    ],
    faqs: standardBrandFaqs("Apollo", "car, SUV and bike"),
  },
  {
    slug: "goodyear",
    name: "Goodyear",
    logo: "/logos/goodyear.svg",
    authorised: false,
    vehicles: "car and SUV",
    metaTitle: "Goodyear Tyres in Rohtak",
    metaDescription:
      "Genuine Goodyear car and SUV tyres in Rohtak at Punjab Tyre. Manufacturer warranty, same-day fitment, alignment and balancing included.",
    intro:
      "Buy genuine Goodyear tyres for cars and SUVs at Punjab Tyre, Rohtak, with manufacturer warranty and same-day fitment.",
    points: [
      "Car and SUV tyres",
      "Genuine stock with manufacturer warranty",
      "Same-day fitment with alignment and balancing included",
    ],
    faqs: standardBrandFaqs("Goodyear", "car and SUV"),
  },
  {
    slug: "michelin",
    name: "Michelin",
    logo: "/logos/michelin.svg",
    authorised: false,
    vehicles: "car, SUV and bike",
    metaTitle: "Michelin Tyres in Rohtak",
    metaDescription:
      "Genuine Michelin car, SUV and bike tyres in Rohtak at Punjab Tyre. Premium comfort and grip, warranty-backed, with same-day fitment.",
    intro:
      "Punjab Tyre offers genuine Michelin tyres in Rohtak for cars, SUVs and bikes — a premium choice for comfort, grip and quiet running.",
    points: [
      "Premium car, SUV and two-wheeler tyres",
      "Genuine stock with manufacturer warranty",
      "Same-day fitment with alignment and balancing included",
    ],
    faqs: standardBrandFaqs("Michelin", "car, SUV and bike"),
  },
  {
    slug: "tvs",
    name: "TVS",
    logo: "/logos/tvs.png",
    authorised: false,
    vehicles: "bike and scooter",
    metaTitle: "TVS Bike Tyres in Rohtak",
    metaDescription:
      "Genuine TVS bike and scooter tyres in Rohtak at Punjab Tyre. Tubeless options, warranty-backed, fitted while you wait.",
    intro:
      "Buy genuine TVS tyres for motorcycles and scooters at Punjab Tyre, Rohtak, fitted at our store.",
    points: [
      "Motorcycle and scooter tyres, including tubeless",
      "Genuine stock with manufacturer warranty",
      "Fitting and puncture repair at our Rohtak store",
    ],
    faqs: standardBrandFaqs("TVS", "bike and scooter"),
  },
  {
    slug: "bkt",
    name: "BKT",
    logo: "/logos/bkt.png",
    authorised: false,
    vehicles: "bike",
    metaTitle: "BKT Tyres in Rohtak",
    metaDescription:
      "Genuine BKT tyres in Rohtak at Punjab Tyre, with manufacturer warranty and fitting at our store.",
    intro: "Punjab Tyre stocks genuine BKT tyres in Rohtak with manufacturer warranty and fitting at our store.",
    points: [
      "Genuine stock with manufacturer warranty",
      "Fitting at our Rohtak store",
    ],
    faqs: standardBrandFaqs("BKT", "bike"),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CAR MODEL TYRE-SIZE PAGES (generated from the OEM fitment database)
// ─────────────────────────────────────────────────────────────────────────────

// [catalog brand, catalog model, optional URL slug]
const POPULAR_CARS: [string, string, string?][] = [
  ["Maruti Suzuki", "Swift"],
  ["Maruti Suzuki", "Dzire"],
  ["Maruti Suzuki", "Baleno"],
  ["Maruti Suzuki", "Brezza"],
  ["Maruti Suzuki", "Fronx"],
  ["Maruti Suzuki", "Ertiga"],
  ["Maruti Suzuki", "Wagon R"],
  ["Maruti Suzuki", "Grand Vitara"],
  ["Hyundai", "Creta"],
  ["Hyundai", "Venue"],
  ["Hyundai", "i20"],
  ["Hyundai", "Verna"],
  ["Hyundai", "Grand i10 Nios"],
  ["Hyundai", "Exter"],
  ["Hyundai", "Alcazar"],
  ["Tata", "Nexon"],
  ["Tata", "Punch"],
  ["Tata", "Harrier"],
  ["Tata", "Safari (New)", "tata-safari"],
  ["Tata", "Altroz"],
  ["Tata", "Tiago"],
  ["Mahindra", "Scorpio-N"],
  ["Mahindra", "Scorpio Classic"],
  ["Mahindra", "Thar (2020+)", "mahindra-thar"],
  ["Mahindra", "Thar Roxx (5-Door)", "mahindra-thar-roxx"],
  ["Mahindra", "XUV700"],
  ["Mahindra", "XUV 3XO"],
  ["Mahindra", "Bolero"],
  ["Mahindra", "Bolero Neo"],
  ["Toyota", "Fortuner"],
  ["Toyota", "Innova Crysta"],
  ["Toyota", "Innova Hycross"],
  ["Toyota", "Urban Cruiser Hyryder"],
  ["Kia", "Seltos"],
  ["Kia", "Sonet"],
  ["Kia", "Carens"],
  ["Honda", "City (5th Gen)", "honda-city"],
  ["Honda", "Amaze (2nd & 3rd Gen)", "honda-amaze"],
  ["MG Motor", "Hector"],
  ["Volkswagen", "Taigun"],
  ["Volkswagen", "Virtus"],
  ["Skoda", "Kushaq"],
  ["Skoda", "Slavia"],
];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\(.*?\)/g, (m) => m.replace(/[()]/g, ""))
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type CarSizeGroup = { size: string; rim: string; variants: string[] };

export type CarModelPage = {
  slug: string;
  brand: string;
  model: string;
  displayName: string; // "Hyundai Creta"
  shortName: string; // "Creta"
  bodyType: string;
  sizes: CarSizeGroup[];
};

function buildCarPage(brandName: string, modelName: string, slug?: string): CarModelPage | null {
  const brand = carVehicleCatalog.find((b) => b.name === brandName);
  const model = brand?.models.find((m) => m.name === modelName);
  if (!brand || !model) return null;

  const groups: CarSizeGroup[] = [];
  for (const variant of model.variants) {
    const fit = getVehicleOemFitment("car", brand.name, model.name, variant.name);
    if (!fit?.size || fit.size === "Universal") continue;
    const existing = groups.find((g) => g.size === fit.size);
    if (existing) {
      existing.variants.push(variant.name);
    } else {
      groups.push({ size: fit.size, rim: fit.rim, variants: [variant.name] });
    }
  }
  if (groups.length === 0) return null;

  const shortName = model.name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  return {
    slug: slug ?? slugify(`${brand.name} ${model.name}`),
    brand: brand.name,
    model: model.name,
    displayName: `${brand.name} ${model.name}`,
    shortName,
    bodyType: model.variants[0]?.bodyType ?? "Car",
    sizes: groups,
  };
}

export const carModelPages: CarModelPage[] = POPULAR_CARS.map(([b, m, slug]) => buildCarPage(b, m, slug)).filter(
  (p): p is CarModelPage => p !== null,
);

export function carModelFaqs(page: CarModelPage): FaqItem[] {
  const sizeList = page.sizes.map((s) => s.size).join(", ");
  const single = page.sizes.length === 1;
  return [
    {
      question: `What is the tyre size of the ${page.displayName}?`,
      answer: single
        ? `The ${page.displayName} comes with ${page.sizes[0].size} tyres as company (OEM) fitment.`
        : `The ${page.displayName} comes with ${sizeList} tyres as company (OEM) fitment, depending on the variant. Check the table above for your variant, or read the size printed on your current tyre's sidewall.`,
    },
    {
      question: `What is the price of ${page.shortName} tyres in Rohtak?`,
      answer: `It depends on the brand and pattern you choose. Send your ${page.shortName} variant on WhatsApp to +91 98960 53958 and Punjab Tyre will reply with current prices for every brand in stock, including Yokohama, CEAT, Apollo, Goodyear and Michelin.`,
    },
    {
      question: `Which tyre brand is best for the ${page.shortName}?`,
      answer: `It depends on how you drive. For comfort and low noise, premium options like Yokohama and Michelin suit most drivers; for long tread life and value, CEAT and Apollo are popular. Tell us your daily running and budget and we'll recommend the best fit.`,
    },
    {
      question: `Can I upsize the tyres on my ${page.shortName}?`,
      answer: `Often yes, especially on alloy-wheel variants — as long as the overall wheel diameter stays close to stock (within about 3%). Ask us before buying so the speedometer, ABS and ride comfort aren't affected.`,
    },
  ];
}

export function carWhatsAppMessage(page: CarModelPage): string {
  return `Hi Punjab Tyre, I need tyres for my ${page.displayName}. Please share prices for size ${page.sizes[0].size}.`;
}
