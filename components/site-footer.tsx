import { MapPin, PhoneCall } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";
import { siteCopy } from "@/lib/data";

/**
 * SiteFooter
 *
 * IMPORTANT — DUPLICATE FOOTER FIX:
 * If the footer appears twice, it means this component is being imported
 * in BOTH layout.tsx and page.tsx. Remove it from page.tsx entirely.
 *
 * Correct pattern:
 *   app/layout.tsx  →  <SiteHeader /> + {children} + <SiteFooter />
 *   app/page.tsx    →  only page sections (HeroSection, TyreListing, etc.)
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#E53935] text-xs font-black text-white">
              PT
            </div>
            <div className="leading-none">
              <div className="text-sm font-bold tracking-widest text-white">
                PUNJAB TYRE
              </div>
              <div className="mt-0.5 text-[10px] tracking-wider text-white/35">
                ROHTAK · EST. 1949
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/45">
            Premium tyre and fitment experience. Genuine brands, expert advice, and
            quick WhatsApp inquiry handling.
          </p>
        </div>

        {/* Visit */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Visit Us
          </div>
          <div className="flex items-start gap-2.5 text-sm text-white/65">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
            <span>{siteCopy.locationLabel}</span>
          </div>
          <a
            href={siteCopy.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
          >
            Open in Google Maps →
          </a>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Get a Quote
          </div>
          <a
            href={buildWhatsAppLink(
              "Hi, I want the best price on tyres, alloys, and accessories from Punjab Tyre Rohtak."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E53935] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/15 transition-all hover:bg-[#c72f2b] hover:shadow-xl active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4" />
            Get Best Price on WhatsApp
          </a>
          <p className="text-[11px] leading-relaxed text-white/30">
            Same-day fitment · Genuine products · Expert recommendations
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-5 text-center text-xs text-white/25">
        © {new Date().getFullYear()} Punjab Tyre – Rohtak. All rights reserved.
      </div>
    </footer>
  );
}
