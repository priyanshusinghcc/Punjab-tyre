import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildWhatsAppLink } from "@/lib/utils";
import { CartBadge } from "@/components/shop/cart-badge";
import { ENABLE_STORE } from "@/lib/config";
import { CategoryTabs } from "@/components/category-tabs";

/** Site header: brand + hours, top links, address strip and the category tab bar. Rendered once in app/layout.tsx. */
export function SiteHeader() {
  return (
    <>
      <header className="bg-white">
        <div className="container-shell flex h-[62px] items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/images/ptlogo.png"
              alt="Punjab Tyre Rohtak"
              width={300}
              height={300}
              priority
              className="h-12 w-auto shrink-0 object-contain"
            />
            <div className="min-w-0 leading-tight">
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#E53935]">
                <Clock className="h-3 w-3" />
                Open 9:30–8:00
              </div>
              <div className="truncate text-[15px] font-bold text-black sm:text-[17px]">
                Punjab Tyre · Rohtak
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
            <Link
              href="/"
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-black/75 hover:text-black md:block"
            >
              Home
            </Link>
            <Link
              href="/#categories"
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-black/75 hover:text-black md:block"
            >
              Categories
            </Link>
            <Link
              href="/#callback"
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-black/75 hover:text-black md:block"
            >
              Talk to Team
            </Link>
            {ENABLE_STORE && <CartBadge />}
            <a
              href={buildWhatsAppLink(
                "Hi Punjab Tyre, I want the best price for tyres and fitment.",
              )}
              target="_blank"
              rel="noreferrer"
              data-track-location="header"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#E53935] px-4 py-2 text-xs font-bold text-white hover:bg-[#c72f2b] sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>
        </div>

        <div className="border-y border-[#E53935]/10 bg-[#fdf1f1]">
          <div className="container-shell flex items-center gap-2 py-2 text-xs text-black/70 sm:text-[13px]">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#E53935]" />
            <span className="truncate">
              Same-day fitment · Opp. Pacific Mall, next to Shangrila Hotel ·{" "}
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                data-track-location="header_strip"
                className="font-semibold underline underline-offset-2"
              >
                Get directions
              </a>
            </span>
          </div>
        </div>
      </header>
      {/* Only the category tabs stay pinned while scrolling, so the page keeps most of the screen. */}
      <div className="sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <CategoryTabs />
      </div>
    </>
  );
}
