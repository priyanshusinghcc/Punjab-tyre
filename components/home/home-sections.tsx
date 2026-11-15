import Image from "next/image";
import { BadgeCheck, Check, Clock, MapPin, MessageCircle, Phone, ShieldCheck, Star, Timer, Wrench, X } from "lucide-react";
import { VehicleSelector } from "@/components/vehicle-selector";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";
import { STORE_PHOTOS } from "@/lib/store-photos";
import { buildWhatsAppLink } from "@/lib/utils";

const h2 = "text-2xl font-bold tracking-tight text-black sm:text-[28px]";

/** Page H1 with the tyre finder. */
export function HomeIntro() {
  return (
    <section className="container-shell scroll-mt-28 pt-12" id="find-tyres">
      <div className="grid items-center gap-8 rounded-3xl border border-black/[0.07] bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#E53935]">Rohtak · since 1949</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            Car tyres, alloy wheels &amp; wheel services in Rohtak
          </h1>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-black/60">
            Authorised Yokohama dealer and Advantec alloy wheel store. Pick your car to get the right tyre size and the
            best price on WhatsApp, then get it fitted the same day.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-black/70">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-[#f5a623] text-[#f5a623]" />
              <strong className="text-black">{BUSINESS.googleRating}</strong> on Google · {BUSINESS.googleReviewCount}+ reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-[#E53935]" />
              Genuine products
            </span>
          </div>
        </div>
        <VehicleSelector />
      </div>
    </section>
  );
}

const STEPS = [
  { title: "Tell us your car", text: "Pick your car or tyre size, or just WhatsApp us the model." },
  { title: "Get your price", text: "We reply with options, price and stock for your size." },
  { title: "Visit the store", text: "Walk in opposite Pacific Mall. Fitment is done the same day." },
  { title: "Drive out sorted", text: "Tyres fitted, balanced and aligned, with the bill and warranty details." },
];

export function HowItWorksSteps() {
  return (
    <section className="container-shell pt-14">
      <h2 className={h2}>How Punjab Tyre works</h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#E53935] text-sm font-bold text-white">{i + 1}</span>
            <h3 className="mt-3 text-base font-bold text-black">{s.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-black/60">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PROMISES = [
  { icon: ShieldCheck, title: "Genuine products only", text: "Tyres and alloys sourced through authorised channels, with the manufacturer's warranty." },
  { icon: BadgeCheck, title: "Authorised dealer", text: "Yokohama Club Network dealer and authorised Advantec alloy wheel store." },
  { icon: Wrench, title: "Fitment checked first", text: "Tyre size, PCD, centre bore and offset are checked for your exact car before fitting." },
  { icon: Timer, title: "Same-day fitment", text: "Most tyres and alloys are fitted, balanced and aligned on the day you visit." },
];

export function GuaranteeSection() {
  return (
    <section className="container-shell pt-14">
      <h2 className={h2}>The Punjab Tyre promise</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROMISES.map((p) => (
          <div key={p.title} className="rounded-2xl bg-[#fdf1f1] p-5">
            <p.icon className="h-7 w-7 text-[#D32F2F]" strokeWidth={1.75} />
            <h3 className="mt-3 text-base font-bold text-black">{p.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-black/65">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const COMPARE: [string, string][] = [
  ["Authorised Yokohama dealer", "Often a reseller"],
  ["Authorised Advantec alloy store", "Rarely"],
  ["Tyre size and alloy fitment checked for your car", "Depends on the shop"],
  ["Tyres, alloys, alignment and balancing in one visit", "Usually separate shops"],
  ["Price shared on WhatsApp before you come", "Visit to find out"],
  ["In Rohtak since 1949", "—"],
];

export function CompareSection() {
  return (
    <section className="container-shell pt-14">
      <h2 className={h2}>Punjab Tyre vs a regular tyre shop</h2>
      <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm">
        <div className="grid grid-cols-[1.4fr_0.6fr_1fr] bg-black px-4 py-3 text-xs font-bold uppercase tracking-wide text-white sm:px-6 sm:text-sm">
          <span>What you get</span>
          <span className="text-center">Punjab Tyre</span>
          <span className="text-center text-white/70">Regular shop</span>
        </div>
        {COMPARE.map(([label, other], i) => (
          <div
            key={label}
            className={`grid grid-cols-[1.4fr_0.6fr_1fr] items-center px-4 py-3 text-sm sm:px-6 ${i % 2 ? "bg-[#fafafa]" : ""}`}
          >
            <span className="font-medium text-black">{label}</span>
            <span className="grid place-items-center">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#E53935] text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
            </span>
            <span className="flex items-center justify-center gap-1.5 text-center text-black/50">
              {other !== "—" && <X className="hidden h-3.5 w-3.5 shrink-0 sm:block" />}
              {other}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OutletSection() {
  return (
    <section className="container-shell scroll-mt-28 pt-14" id="visit-store" data-track-location="outlet">
      <h2 className={h2}>Our outlet</h2>
      <div className="mt-5 grid overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[220px]">
          <Image
            src={STORE_PHOTOS.showroomYcn.src}
            alt={STORE_PHOTOS.showroomYcn.alt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-black">{BUSINESS.name}</h3>
          <ul className="mt-4 space-y-3 text-sm text-black/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              {FULL_ADDRESS}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <span>
                Mon – Sat: 9:30 AM – 8:00 PM
                <br />
                Sunday: 10:00 AM – 5:00 PM
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <a href={BUSINESS.phoneHref} className="font-semibold text-black">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white hover:bg-black/85"
            >
              <MapPin className="h-4 w-4" />
              Get directions
            </a>
            <a
              href={buildWhatsAppLink("Hi Punjab Tyre, I'd like to visit the store. Please confirm stock and price for my car.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1fb857]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
