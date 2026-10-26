import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, PhoneCall } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";
import { siteCopy } from "@/lib/data";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";
import { brandPages, carModelPages, servicePages } from "@/lib/landing-pages";

/**
 * SiteFooter — rendered once, from app/layout.tsx.
 * Shows the full business name, address, phone and hours as plain text
 * (search engines and AI assistants read these) plus links to every
 * service, brand and popular car-tyre page.
 */
export function SiteFooter() {
  const linkClass = "text-sm text-white/65 transition-colors hover:text-white";

  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E53935] p-[2.5px] shadow-md shadow-[#E53935]/20">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/ptlogo.png"
                  alt="Punjab Tyre Rohtak Logo"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain scale-[1.24]"
                />
              </div>
            </div>
            <div className="leading-none">
              <div className="text-sm font-bold tracking-widest text-white">PUNJAB TYRE</div>
              <div className="mt-0.5 text-[10px] tracking-wider text-white/60">ROHTAK · EST. 1949</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
            {BUSINESS.name} — authorised Yokohama dealer in Rohtak. Genuine tyres, alloy wheels and
            same-day fitment since {BUSINESS.foundingYear}.
          </p>
        </div>

        {/* Visit */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Visit Us</div>
          <address className="space-y-3 not-italic">
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <span>{FULL_ADDRESS}</span>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <a href={BUSINESS.phoneHref} className="hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <span>
                {BUSINESS.hoursDisplay.map((h) => (
                  <span key={h.label} className="block">
                    {h.label}: {h.value}
                  </span>
                ))}
              </span>
            </div>
          </address>
          <a
            href={siteCopy.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
          >
            Open in Google Maps →
          </a>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Get a Quote</div>
          <a
            href={buildWhatsAppLink(
              "Hi, I want the best price on tyres, alloys, and accessories from Punjab Tyre Rohtak.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E53935] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/15 transition-all hover:bg-[#c72f2b] hover:shadow-xl active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4" />
            Chat with us now
          </a>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-white/65 hover:text-white"
          >
            Instagram @punjabtyrerohtak
          </a>
          <p className="text-[11px] leading-relaxed text-white/65">
            Same-day fitment · Genuine products · Expert recommendations
          </p>
        </div>
      </div>

      {/* Link directory */}
      <nav aria-label="Footer" className="border-t border-white/[0.06]">
        <div className="container-shell grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <Link href="/services" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white">
              Services
            </Link>
            <ul className="mt-4 space-y-2">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>
                    {s.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href="/brands" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white">
              Tyre brands
            </Link>
            <ul className="mt-4 space-y-2">
              {brandPages.map((b) => (
                <li key={b.slug}>
                  <Link href={`/brands/${b.slug}`} className={linkClass}>
                    {b.name} tyres Rohtak{b.authorised ? " (authorised dealer)" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href="/car-tyres" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white">
              Tyre size by car
            </Link>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {carModelPages.slice(0, 16).map((c) => (
                <li key={c.slug}>
                  <Link href={`/car-tyres/${c.slug}`} className={linkClass}>
                    {c.shortName}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <Link href="/car-tyres" className="text-sm font-semibold text-[#E53935] hover:underline">
                  All cars →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="border-t border-white/[0.06] py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {BUSINESS.name}, Rohtak. All rights reserved.
      </div>
    </footer>
  );
}
