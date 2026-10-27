// /llms.txt — a plain-text summary for AI assistants (llmstxt.org convention).
import { BUSINESS, FULL_ADDRESS, SITE_URL } from "@/lib/business";
import { alloyBrandPages, brandPages, carModelPages, servicePages } from "@/lib/landing-pages";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${BUSINESS.name}`,
    "",
    `> Tyre and alloy wheel store in Rohtak, Haryana, India, serving drivers since ${BUSINESS.foundingYear}. Authorised Yokohama dealer (Yokohama Club Network) and authorised Advantec alloy wheel store. Sells genuine car, SUV and bike tyres from Yokohama, CEAT, Apollo, Goodyear, Michelin, TVS and BKT; alloy wheels from Advantec, Neo, Onyx, Incubus and Uno Minda; and car accessories, with same-day fitment. Rated ${BUSINESS.googleRating} on Google from ${BUSINESS.googleReviewCount}+ reviews.`,
    "",
    "## Contact",
    `- Address: ${FULL_ADDRESS}, India`,
    `- Phone / WhatsApp: ${BUSINESS.phoneDisplay}`,
    `- Hours: ${BUSINESS.hoursDisplay.map((h) => `${h.label} ${h.value}`).join("; ")}`,
    `- Google Maps: ${BUSINESS.mapsUrl}`,
    `- Instagram: ${BUSINESS.instagramUrl}`,
    `- Website: ${SITE_URL}`,
    "",
    "## How to buy",
    "- Send the car model or tyre size on WhatsApp for a price quote, then visit the Rohtak store for same-day fitment.",
    "- Wheel alignment, wheel balancing, tyre changing, nitrogen inflation and puncture repair are included with a tyre purchase.",
    "",
    "## Services",
    ...servicePages.map((s) => `- [${s.h1}](${SITE_URL}/services/${s.slug}): ${s.metaDescription}`),
    "",
    "## Tyre brands",
    ...brandPages.map((b) => `- [${b.name} tyres in Rohtak](${SITE_URL}/brands/${b.slug})${b.authorised ? " — authorised dealer" : ""}`),
    "",
    "## Alloy wheels",
    `- [Alloy wheels in Rohtak](${SITE_URL}/alloy-wheels)`,
    ...alloyBrandPages.map(
      (a) => `- [${a.authorised ? `Authorised ${a.name} store in Rohtak` : `${a.name} alloy wheels in Rohtak`}](${SITE_URL}/alloy-wheels/${a.slug})`,
    ),
    "",
    "## EV tyres",
    `- [EV tyres in Rohtak](${SITE_URL}/ev-tyres): Yokohama Geolandar X-CV in stock for Mahindra BE 6 and XEV 9e (245/55 R19) and XEV 9S (235/60 R18)`,
    "",
    "## Tyre size by car model",
    ...carModelPages.map(
      (c) => `- [${c.displayName}](${SITE_URL}/car-tyres/${c.slug}): ${c.sizes.map((s) => s.size).join(", ")}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
