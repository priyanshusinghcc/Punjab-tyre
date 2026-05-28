import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Navigation } from "lucide-react";
import { siteCopy } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * SiteHeader — sticky, single-render.
 *
 * FIX: If your header was appearing twice, ensure this component is rendered
 * ONLY in app/layout.tsx (or your root layout), never also in page.tsx.
 *
 * Layout structure should be:
 *   layout.tsx → <SiteHeader /> + {children} + <SiteFooter />
 *   page.tsx   → sections only (no header/footer)
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-md">
      <div className="container-shell flex h-[60px] items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/ptlogo.png"
            alt="Punjab Tyre Rohtak"
            width={300}
            height={300}
            priority
            className="h-14 w-auto object-contain"
          />{" "}
          <div className="leading-none">
            <div className="text-[13px] font-bold tracking-widest text-black">
              PUNJAB TYRE
            </div>
            <div className="mt-0.5 text-[10px] tracking-wider text-black/40">
              ROHTAK · EST. 1949
            </div>
          </div>
        </Link>

        {/* Nav actions — desktop only */}
        <div className="hidden items-center gap-2 md:flex">
          <span className="rounded-full bg-black/[0.04] px-3 py-1.5 text-[11px] font-medium text-black/55">
            Same day fitment in Rohtak
          </span>

          <a
            href={siteCopy.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3.5 py-1.5 text-[11px] font-medium text-black/60 transition-colors hover:border-black/20 hover:text-black"
          >
            <Navigation className="h-3.5 w-3.5" />
            Location
          </a>

          <a
            href={buildWhatsAppLink(
              "Hi, I want the best price for tyres and fitment at Punjab Tyre Rohtak.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-[11px] font-semibold text-white shadow-sm shadow-[#E53935]/20 transition-all hover:bg-[#c72f2b] hover:shadow-md active:scale-[0.97]"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            WhatsApp Quote
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href={buildWhatsAppLink(
            "Hi, I want the best price for tyres at Punjab Tyre Rohtak.",
          )}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-xs font-semibold text-white md:hidden"
        >
          <PhoneCall className="h-3.5 w-3.5" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
