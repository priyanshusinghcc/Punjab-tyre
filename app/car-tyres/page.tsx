import type { Metadata } from "next";
import { CategoryHero, FaqGrid, HelpBar, OutletCard } from "@/components/category/shared";
import { TyreSizeBrowser, type BrandOption, type CarOption, type SizeEntry } from "@/components/category/tyre-size-browser";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { carModelPages } from "@/lib/landing-pages";

export const metadata: Metadata = {
  title: "Car Tyres in Rohtak — Find Tyres by Car or Size",
  description:
    "Find car tyres by car model or tyre size at Punjab Tyre, Rohtak — Yokohama (authorised dealer), CEAT, MRF, Apollo and Michelin. Price on WhatsApp, fitted the same day.",
  alternates: { canonical: "/car-tyres" },
};

const BRANDS: BrandOption[] = [
  { name: "Yokohama", logo: "/logos/yokohama.svg", authorised: true },
  { name: "CEAT", logo: "/logos/ceat.svg" },
  { name: "Apollo", logo: "/logos/apollo.png" },
  { name: "MRF", logo: "/logos/mrf.png" },
  { name: "Michelin", logo: "/logos/michelin.svg" },
];

function buildData() {
  const map = new Map<string, SizeEntry>();
  for (const c of carModelPages) {
    for (const g of c.sizes) {
      const m = g.size.match(/^(\d{3})\/(\d{2})\s*Z?R(\d{2})/i);
      if (!m) continue;
      const entry = map.get(g.size) ?? { size: g.size, width: m[1], aspect: m[2], rim: m[3], cars: [] };
      if (!entry.cars.some((x) => x.slug === c.slug)) entry.cars.push({ name: c.displayName, slug: c.slug });
      map.set(g.size, entry);
    }
  }
  const sizes = [...map.values()].sort(
    (a, b) => +a.rim - +b.rim || +a.width - +b.width || +a.aspect - +b.aspect,
  );
  const cars: CarOption[] = carModelPages.map((c) => ({
    brand: c.brand,
    model: c.shortName,
    slug: c.slug,
    sizes: c.sizes.map((g) => g.size).filter((s) => map.has(s)),
  }));
  return { sizes, cars };
}

const FAQS = [
  {
    question: "How do I find my car's tyre size?",
    answer:
      "Pick your car above, or read the size on your current tyre's sidewall — it looks like 195/55 R16. The first number is the width, the second is the aspect ratio and the number after R is the rim size.",
  },
  {
    question: "Why don't you show prices online?",
    answer:
      "Tyre prices change with stock and manufacturer revisions, so we confirm the latest price and availability on WhatsApp — usually within minutes during store hours.",
  },
  {
    question: "Are your tyres genuine and new?",
    answer:
      "Yes. We are an authorised Yokohama (Yokohama Club Network) dealer and stock genuine tyres from CEAT, MRF, Apollo and Michelin, with the manufacturer's warranty.",
  },
  {
    question: "Is fitting done the same day?",
    answer:
      "Most tyres are fitted the same day at our Rohtak store, opposite Pacific Mall. Send us a WhatsApp first so we can keep your size ready.",
  },
  {
    question: "Can I change to a different tyre size?",
    answer:
      "Often, yes — a slightly wider or bigger tyre can fit, but the overall diameter must stay close to stock. Tell us your car and we'll suggest sizes that are safe for it.",
  },
  {
    question: "When should I replace my tyres?",
    answer:
      "Replace tyres when the tread is close to the wear indicator (about 1.6 mm), if you see cracks or bulges on the sidewall, or when they are around 5–6 years old.",
  },
];

export default function CarTyresPage() {
  const { sizes, cars } = buildData();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Car tyres", path: "/car-tyres" }])} />
      <JsonLd data={faqSchema(FAQS)} />
      <CategoryHero
        eyebrow="Shop tyres"
        lines={["All top brands.", "Fitted the same day."]}
        sub="Authorised Yokohama dealer · CEAT, MRF, Apollo & Michelin · Rohtak"
      />
      <section className="container-shell pt-5">
        <TyreSizeBrowser sizes={sizes} cars={cars} brands={BRANDS} />
      </section>
      <OutletCard
        heading="Visit us for tyres"
        intro="Walk in opposite Pacific Mall, Rohtak. Fitting, balancing and alignment done the same day."
      />
      <FaqGrid items={FAQS} />
      <HelpBar message="Hi Punjab Tyre, I need help choosing tyres for my car." />
    </>
  );
}
