"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

type Banner = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  external?: boolean;
  theme: "dark" | "red" | "light";
};

const BANNERS: Banner[] = [
  {
    eyebrow: "Neo Wheels · No-Cost EMI",
    title: "Get Neo Alloys on No-Cost EMI",
    text: "Upgrade your wheels now and pay in easy monthly instalments.",
    cta: "Enquire on WhatsApp",
    href: buildWhatsAppLink("Hi Punjab Tyre, I want Neo alloy wheels on no-cost EMI. Please share designs and EMI details for my car."),
    external: true,
    theme: "dark",
  },
  {
    eyebrow: "Yokohama · No-Cost EMI",
    title: "Yokohama tyres on No-Cost EMI",
    text: "Buy Yokohama tyres from an authorised dealer and pay in easy monthly instalments.",
    cta: "Shop Yokohama",
    href: "/brands/yokohama",
    theme: "red",
  },
  {
    eyebrow: "Alloy wheels · 13 to 20 inch",
    title: "Find alloys that fit your car",
    text: "Select your car and browse Onyx designs by size and finish. Authorised Advantec store.",
    cta: "Browse alloy wheels",
    href: "/alloy-wheels",
    theme: "light",
  },
];

const THEME = {
  dark: { card: "bg-gradient-to-br from-[#16171c] to-[#060607] text-white", eyebrow: "text-white/80", text: "text-white/85", blob: "bg-white/[0.09]", btn: "bg-white text-black" },
  red: { card: "bg-gradient-to-br from-[#d32f2f] to-[#8e1b1b] text-white", eyebrow: "text-white/85", text: "text-white/90", blob: "bg-white/[0.12]", btn: "bg-white text-black" },
  light: { card: "bg-gradient-to-br from-[#fdf1f1] to-[#f7dcdc] text-black", eyebrow: "text-[#B71C1C]", text: "text-black/70", blob: "bg-[#E53935]/10", btn: "bg-black text-white" },
} as const;

/** Offer banners: two side by side on desktop, swipeable on phones, auto-advancing. */
export function HomeBanners() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const w = (el.children[0] as HTMLElement).offsetWidth + 16;
      setIndex(Math.min(BANNERS.length - 1, Math.round(el.scrollLeft / w)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reduce
      ? null
      : setInterval(() => {
          if (paused.current || document.hidden) return;
          const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
          if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
          else el.scrollBy({ left: (el.children[0] as HTMLElement).offsetWidth + 16, behavior: "smooth" });
        }, 5000);
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section className="container-shell pt-5 sm:pt-6" aria-label="Offers" data-track-location="home_banner">
      <div
        ref={track}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto"
      >
        {BANNERS.map((b) => {
          const t = THEME[b.theme];
          const inner = (
            <>
              {b.cta} <ChevronRight className="h-4 w-4" />
            </>
          );
          const btn = `mt-6 inline-flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-bold sm:mt-10 ${t.btn}`;
          return (
            <article
              key={b.title}
              className={`relative flex min-h-[220px] w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl p-6 sm:min-h-[260px] sm:p-8 md:w-[calc(50%-8px)] ${t.card}`}
            >
              <span aria-hidden className={`absolute -bottom-16 -right-10 h-52 w-52 rounded-full ${t.blob}`} />
              <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.22em] ${t.eyebrow}`}>{b.eyebrow}</p>
              <h2 className="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight sm:text-[30px]">{b.title}</h2>
              <p className={`mt-2 max-w-md text-sm leading-relaxed sm:text-base ${t.text}`}>{b.text}</p>
              <div className="relative mt-auto">
                {b.external ? (
                  <a href={b.href} target="_blank" rel="noreferrer" className={btn}>
                    {inner}
                  </a>
                ) : (
                  <Link href={b.href} className={btn}>
                    {inner}
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {BANNERS.map((b, i) => (
          <button
            key={b.title}
            type="button"
            aria-label={`Show offer ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-[#E53935]" : "w-2 bg-black/15"}`}
          />
        ))}
      </div>
    </section>
  );
}
