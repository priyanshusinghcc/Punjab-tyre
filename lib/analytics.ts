// lib/analytics.ts — GA4 event helpers (client-side only).
//
// Events sent to GA4 (mark the first five as Key events in GA4 → Admin → Events):
//   whatsapp_click   any click on a wa.me link        { link_location, link_text }
//   quote_request    quote tool submitted              { vehicle_type, search_mode, car_brand, car_model, car_variant, tyre_size, budget }
//   tyre_size_lead   "Find tyre size" popup submitted  { car_brand, car_model, tyre_size }
//   phone_click      click on a tel: link              { link_location }
//   map_click        click on a Google Maps link       { link_location }
//   review_click     click on "Write a review"         { link_location }
//
// Never send phone numbers, names or other personal data to GA.

export const GA_MEASUREMENT_ID = "G-FFZTR3DC5K";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  const clean: GtagParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") clean[key] = value;
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", name, clean);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...clean });
  }
}

// ── Traffic-source attribution for WhatsApp leads ─────────────────────────
// GA can't see what happens inside WhatsApp. So when a visitor arrives from a
// tagged link (?utm_source=instagram) or a known referrer, we remember the
// source for the session and append "(via instagram)" to the pre-filled
// WhatsApp message. The shop team then sees where each lead came from.

const SOURCE_KEY = "pt_lead_source";

function detectSource(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get("utm_source");
    if (utm) return utm.toLowerCase().slice(0, 30);
    const ref = document.referrer;
    if (!ref) return null;
    const host = new URL(ref).hostname;
    if (host.endsWith(window.location.hostname)) return null;
    if (host.includes("google.")) return "google";
    if (host.includes("bing.")) return "bing";
    if (host.includes("instagram.")) return "instagram";
    if (host.includes("facebook.") || host.includes("fb.")) return "facebook";
    if (host.includes("youtube.")) return "youtube";
    if (host.includes("chatgpt.") || host.includes("openai.")) return "chatgpt";
    if (host.includes("claude.ai")) return "claude";
    if (host.includes("perplexity.")) return "perplexity";
    return host.replace(/^www\./, "").slice(0, 30);
  } catch {
    return null;
  }
}

export function rememberLeadSource() {
  try {
    if (sessionStorage.getItem(SOURCE_KEY)) return;
    const source = detectSource();
    if (source) sessionStorage.setItem(SOURCE_KEY, source);
  } catch {
    // storage unavailable — ignore
  }
}

export function getLeadSource(): string | null {
  try {
    return sessionStorage.getItem(SOURCE_KEY);
  } catch {
    return null;
  }
}

/** Adds "(via <source>)" to the text of a wa.me URL, if a source is known. */
export function tagWhatsAppUrl(url: string): string {
  if (typeof window === "undefined") return url;
  const source = getLeadSource();
  if (!source) return url;
  try {
    const u = new URL(url);
    const text = u.searchParams.get("text") ?? "";
    if (text.includes("(via ")) return url;
    u.searchParams.set("text", `${text}${text ? " " : ""}(via ${source})`);
    return u.toString();
  } catch {
    return url;
  }
}
