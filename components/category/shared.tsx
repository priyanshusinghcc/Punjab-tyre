import Image from "next/image";
import { ChevronDown, Clock, MessageCircle, Phone, Star } from "lucide-react";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";
import { STORE_PHOTOS } from "@/lib/store-photos";
import { buildWhatsAppLink } from "@/lib/utils";

/** Coloured page banner at the top of a category page. */
export function CategoryHero({
  eyebrow,
  lines,
  sub,
  tone = "red",
}: {
  eyebrow: string;
  lines: [string, string];
  sub: string;
  tone?: "red" | "amber";
}) {
  const bg =
    tone === "red" ? "bg-gradient-to-br from-[#d32f2f] to-[#8e1b1b]" : "bg-gradient-to-br from-[#e89b38] to-[#a8561f]";
  return (
    <section className="container-shell pt-5 sm:pt-6">
      <div className={`relative overflow-hidden rounded-3xl px-6 py-8 text-white sm:px-10 sm:py-10 ${bg}`}>
        <span aria-hidden className="absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-white/[0.12]" />
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-white/90">{eyebrow}</p>
        <h1 className="mt-3 text-[28px] font-bold leading-[1.1] tracking-tight sm:text-[40px]">
          {lines[0]}
          <br />
          {lines[1]}
        </h1>
        <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">{sub}</p>
      </div>
    </section>
  );
}

/** Store card with photos, Google rating, directions and call buttons. */
export function OutletCard({ heading, intro }: { heading: string; intro: string }) {
  const [main, ...side] = [STORE_PHOTOS.showroomYcn, STORE_PHOTOS.advantecWall, STORE_PHOTOS.tyreWall];
  return (
    <section className="container-shell pt-14" id="visit-store" data-track-location="outlet">
      <h2 className="text-2xl font-bold tracking-tight text-black sm:text-[28px]">{heading}</h2>
      <p className="mt-2 text-sm text-black/60 sm:text-base">{intro}</p>
      <div className="mt-5 overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-sm md:grid md:grid-cols-[1.1fr_1fr]">
        <div className="grid h-60 grid-cols-[1.6fr_1fr] gap-1 md:h-full md:min-h-[300px]">
          <div className="relative">
            <Image src={main.src} alt={main.alt} fill sizes="(max-width: 768px) 60vw, 35vw" className="object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-1">
            {side.map((p) => (
              <div key={p.src} className="relative">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 40vw, 20vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 sm:p-7">
          <h3 className="text-xl font-bold leading-snug text-black">Punjab Tyre (Yokohama Club Network) — Tyre &amp; Alloy Shop, Rohtak</h3>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm"
          >
            <strong className="text-black">{BUSINESS.googleRating}</strong>
            <span className="flex text-[#f5a623]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="font-semibold text-[#D32F2F]">{BUSINESS.googleReviewCount}+ Google reviews</span>
          </a>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black py-3 text-center text-sm font-bold text-white hover:bg-black/85"
            >
              Get Directions
            </a>
            <a href={BUSINESS.phoneHref} className="rounded-xl bg-[#E53935] py-3 text-center text-sm font-bold text-white hover:bg-[#c72f2b]">
              Call store
            </a>
          </div>
          <dl className="mt-4 space-y-2 text-sm text-black/75">
            <div>
              <dt className="inline font-bold text-black">Address: </dt>
              <dd className="inline">{FULL_ADDRESS}</dd>
            </div>
            <div>
              <dt className="inline font-bold text-black">Phone: </dt>
              <dd className="inline">
                <a href={BUSINESS.phoneHref} className="font-semibold text-[#D32F2F]">
                  {BUSINESS.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-black">Hours: </dt>
              <dd className="inline">Mon–Sat 9:30 AM – 8:00 PM · Sun 10:00 AM – 5:00 PM</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Two-column FAQ with native disclosure (works without JavaScript, readable by search engines). */
export function FaqGrid({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="container-shell pt-14" id="faq">
      <h2 className="text-2xl font-bold tracking-tight text-black sm:text-[28px]">Common questions</h2>
      <div className="mt-5 grid items-start gap-3 md:grid-cols-2">
        {items.map((f) => (
          <details key={f.question} open className="group rounded-2xl border border-black/[0.08] bg-white px-5 py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold text-black [&::-webkit-details-marker]:hidden">
              {f.question}
              <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-black/50 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Dark "Need help choosing?" contact bar. */
export function HelpBar({ message }: { message: string }) {
  return (
    <section className="container-shell py-14" data-track-location="help_bar">
      <div className="flex flex-col gap-4 rounded-3xl bg-[#17181c] p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold">Need help choosing?</h2>
          <p className="mt-1 flex items-center gap-2 text-sm text-white/70">
            <Clock className="h-4 w-4" />
            Mon–Sat 9:30 AM – 8:00 PM · Sun 10:00 AM – 5:00 PM
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold hover:bg-white/15"
          >
            <Phone className="h-4 w-4" />
            Call {BUSINESS.phoneDisplay}
          </a>
          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1fb857]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
