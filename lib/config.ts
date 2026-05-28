// lib/config.ts

export const BRAND_NAME = "Punjab Tyre";
export const BRAND_CITY = "Rohtak";

export const BRAND_ESTABLISHED_YEAR = 1949;

export const BRAND_TRUST_YEARS =
  new Date().getFullYear() - BRAND_ESTABLISHED_YEAR;

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919896053958";

export const PHONE_DISPLAY = "+91 989605 3958";

export const INSTAGRAM_HANDLE = "punjabtyrerohtak";

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Punjab+Tyre+Rohtak";
