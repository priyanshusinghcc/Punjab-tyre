// lib/schema.ts — JSON-LD structured data builders (schema.org)
import { BUSINESS, SITE_URL } from "./business";
import { STORE_GALLERY } from "./store-photos";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TireShop", "AutoPartsStore"],
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateNames,
    description:
      "Authorised Yokohama tyre dealer (Yokohama Club Network) and authorised Advantec alloy wheel store in Rohtak, Haryana, serving drivers since 1949. Car and bike tyres from Yokohama, CEAT, Apollo, Goodyear and Michelin; alloy wheels from Advantec, Neo, Onyx, Incubus and Uno Minda; car accessories; and same-day fitment with wheel alignment, balancing and nitrogen inflation.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/ptlogo.png`,
    image: [`${SITE_URL}/images/pt-front.jpg`, ...STORE_GALLERY.map((p) => `${SITE_URL}${p.src}`)],
    telephone: BUSINESS.phone,
    foundingDate: String(BUSINESS.foundingYear),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: BUSINESS.mapsUrl,
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { "@type": "City", name: "Rohtak" },
      { "@type": "State", name: "Haryana" },
    ],
    brand: Array.from(
      new Set([...BUSINESS.carTyreBrands, ...BUSINESS.bikeTyreBrands, ...BUSINESS.alloyBrands]),
    ).map((name) => ({ "@type": "Brand", name })),
    knowsAbout: [
      "Car tyres",
      "Bike tyres",
      "SUV tyres",
      "Alloy wheels",
      "Wheel alignment",
      "Wheel balancing",
      "Nitrogen inflation",
      "Tyre size for Indian cars",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tyres, alloy wheels and fitment services",
      itemListElement: [
        "Car tyres",
        "Bike tyres",
        "Alloy wheels",
        "Wheel alignment",
        "Wheel balancing",
        "Tyre fitting",
        "Nitrogen inflation",
        "Puncture repair",
        "Car accessories",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [BUSINESS.mapsUrl, BUSINESS.instagramUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Punjab Tyre Rohtak",
    alternateName: BUSINESS.name,
    inLanguage: "en-IN",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Rohtak" },
  };
}
