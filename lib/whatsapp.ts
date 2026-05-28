// lib/whatsapp.ts

import { WHATSAPP_NUMBER } from "./config";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hi Punjab Tyre! I'd like to get the best price on tyres for my vehicle.";
