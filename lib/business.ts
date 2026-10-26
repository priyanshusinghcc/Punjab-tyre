// lib/business.ts
// Single source of truth for Punjab Tyre's business details (NAP = name, address, phone).
// Keep these identical to the Google Business Profile and every directory listing.

export const SITE_URL = "https://www.punjabtyre.in";

export const BUSINESS = {
  name: "Punjab Tyre (Yokohama Club Network)",
  shortName: "Punjab Tyre",
  alternateNames: [
    "Punjab Tyre Rohtak",
    "Yokohama Club Network - Punjab Tyre",
    "Punjab Tyre",
  ],
  tagline: "Tyres, alloy wheels & same-day fitment in Rohtak since 1949",
  foundingYear: 1949,
  phone: "+91-9896053958",
  phoneDisplay: "+91 98960 53958",
  phoneHref: "tel:+919896053958",
  whatsappNumber: "919896053958",
  email: undefined as string | undefined,
  address: {
    street: "351/12, Gali No. 3, Opp. Pacific Mall, Next to Shangrila Hotel",
    locality: "Rohtak",
    region: "Haryana",
    postalCode: "124001",
    country: "IN",
  },
  geo: { latitude: 28.8896109, longitude: 76.6261038 },
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "20:00",
    },
    { days: ["Sunday"], opens: "10:00", closes: "17:00" },
  ],
  hoursDisplay: [
    { label: "Mon – Sat", value: "9:30 AM – 8:00 PM" },
    { label: "Sunday", value: "10:00 AM – 5:00 PM" },
  ],
  mapsUrl: "https://maps.google.com/?cid=12685554412364313743",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Yokohama+Club+Network+-+Punjab+Tyre,+Rohtak&destination_place_id=ChIJT3PZ_iaFDTkRjzTd74YkDLA",
  writeReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJT3PZ_iaFDTkRjzTd74YkDLA",
  instagramUrl: "https://www.instagram.com/punjabtyrerohtak/",
  googleRating: 4.8,
  googleReviewCount: 754,
  authorisedBrands: ["Yokohama"],
  carTyreBrands: ["Yokohama", "CEAT", "Apollo", "Goodyear", "Michelin"],
  bikeTyreBrands: ["CEAT", "Apollo", "Michelin", "TVS", "BKT"],
  alloyBrands: ["Neo", "Advantec", "Onyx Wheels", "Incubus Alloys", "Uno Minda"],
};

export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;

export const YEARS_IN_BUSINESS = new Date().getFullYear() - BUSINESS.foundingYear;
