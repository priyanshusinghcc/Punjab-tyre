"use client";

import { useEffect } from "react";
import { rememberLeadSource, tagWhatsAppUrl, trackEvent } from "@/lib/analytics";

function linkLocation(el: Element): string {
  const tagged = el.closest("[data-track-location]") as HTMLElement | null;
  if (tagged?.dataset.trackLocation) return tagged.dataset.trackLocation;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section[id], main[id]") as HTMLElement | null;
  if (section?.id) return section.id;
  return window.location.pathname === "/" ? "home" : window.location.pathname;
}

/**
 * One document-level listener that turns every important outbound click into a
 * GA4 event — so no individual button needs tracking code.
 */
export function AnalyticsTracker() {
  useEffect(() => {
    rememberLeadSource();

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.href;
      const location = linkLocation(anchor);
      const linkText = (anchor.textContent || "").trim().slice(0, 60);

      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        const tagged = tagWhatsAppUrl(href);
        if (tagged !== href) anchor.href = tagged;
        trackEvent("whatsapp_click", { link_location: location, link_text: linkText });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_location: location });
      } else if (href.includes("writereview")) {
        trackEvent("review_click", { link_location: location });
      } else if (href.includes("google.com/maps") || href.includes("maps.google.") || href.includes("goo.gl/maps")) {
        trackEvent("map_click", { link_location: location });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
