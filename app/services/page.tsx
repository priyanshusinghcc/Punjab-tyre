import type { Metadata } from "next";
import Link from "next/link";
import { Check, Gauge, LifeBuoy, MessageCircle, RefreshCw, Wind, Wrench } from "lucide-react";
import { CategoryHero, FaqGrid, HelpBar, OutletCard } from "@/components/category/shared";
import { RimServiceTable } from "@/components/category/rim-service-table";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Wheel Alignment, Balancing & Tyre Services in Rohtak",
  description:
    "Computerised wheel alignment, wheel balancing, tyre fitting, nitrogen filling and puncture repair at Punjab Tyre, Rohtak. Price by rim size on WhatsApp, done the same day.",
  alternates: { canonical: "/services" },
};

const INCLUDED = [
  { icon: Gauge, label: "Wheel Alignment" },
  { icon: RefreshCw, label: "Wheel Balancing" },
  { icon: Wind, label: "Nitrogen Top-up" },
  { icon: Wrench, label: "Tyre Fitting" },
];

const OTHER = [
  { name: "Tyre changing & fitting (per tyre)", slug: "tyre-fitting" },
  { name: "Nitrogen filling", slug: "nitrogen-filling" },
  { name: "Tubeless puncture repair", slug: "puncture-repair" },
  { name: "Wheel alignment (SUV / MUV)", slug: "wheel-alignment" },
];

const SERVICES = [
  {
    slug: "wheel-alignment",
    title: "Wheel Alignment",
    text: "Resets the wheel angles to your car's factory specification so it tracks straight and tyres wear evenly.",
    when: "Every 5,000–10,000 km",
  },
  {
    slug: "wheel-balancing",
    title: "Wheel Balancing",
    text: "Corrects uneven weight around each wheel to remove steering and seat vibration at higher speeds.",
    when: "With new tyres or after a puncture",
  },
  {
    slug: "tyre-fitting",
    title: "Tyre Changing & Fitting",
    text: "Old tyres off, new tyres on with machine fitment that protects your rims, then balanced.",
    when: "Same day",
  },
  {
    slug: "nitrogen-filling",
    title: "Nitrogen Filling",
    text: "Nitrogen escapes slower than air, so pressure stays right for longer and tyres run cooler.",
    when: "With every new tyre",
  },
  {
    slug: "puncture-repair",
    title: "Puncture Repair",
    text: "We locate the leak and repair tubeless tyres properly, so you can keep using the tyre safely.",
    when: "Walk in",
  },
];

const FAQS = [
  {
    question: "How much does wheel alignment cost?",
    answer:
      "It depends on your car and rim size. Tap 'Ask price' for your rim size in the table above and we'll reply on WhatsApp with the exact price.",
  },
  {
    question: "How often should I get wheel alignment done?",
    answer:
      "Every 5,000–10,000 km, whenever you fit new tyres, after a hard pothole or kerb hit, or as soon as the car starts pulling to one side.",
  },
  {
    question: "What is the difference between alignment and balancing?",
    answer:
      "Alignment sets the angles of the wheels so the car drives straight. Balancing evens out the weight of each wheel so it doesn't vibrate. Most cars benefit from both together.",
  },
  {
    question: "How long does it take?",
    answer:
      "Alignment and balancing together usually take about an hour. You can wait at the store while it's done.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No, you can walk in during store hours. A WhatsApp message before you come helps us keep a bay free for you.",
  },
  {
    question: "Is nitrogen better than normal air?",
    answer:
      "Nitrogen leaks out more slowly than normal air, so tyre pressure stays correct for longer — which helps tyre life, grip and mileage.",
  },
];

const h2 = "text-2xl font-bold tracking-tight text-black sm:text-[28px]";

export default function WheelServicePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Wheel service", path: "/services" }])} />
      <JsonLd data={faqSchema(FAQS)} />
      <CategoryHero
        tone="blue"
        eyebrow="Wheel service"
        lines={["Alignment, balancing", "& everything wheels."]}
        sub="Tyre fitting, nitrogen and puncture repair too — done the same day in Rohtak."
      />

      <section className="container-shell pt-10">
        <h2 className={h2}>Wheel care by rim size</h2>
        <p className="mt-2 text-sm text-black/65 sm:text-base">
          <strong className="text-black">Prices depend on your rim size</strong> — it&apos;s the number after
          &quot;R&quot; on your tyre (195/55 R16 is a 16-inch rim). Tap &quot;Ask price&quot; and we&apos;ll reply on
          WhatsApp.
        </p>

        <div className="mt-5 rounded-3xl border-2 border-[#bfd3fb] bg-[#eef4ff] p-4 sm:p-6">
          <h3 className="text-lg font-bold text-[#1e3a8a]">Alignment + Balancing combo</h3>
          <p className="mt-1 text-sm text-black/65">The service most cars need together — done in one visit.</p>
          <div className="my-4 border-t border-dashed border-[#93b4f5]" />
          <p className="text-xs font-bold uppercase tracking-wide text-[#1e3a8a]">Goes well with</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {INCLUDED.map((i) => (
              <div key={i.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center">
                <i.icon className="h-10 w-10 text-[#1d4ed8]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-black">{i.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <RimServiceTable />
          </div>
        </div>
      </section>

      <section className="container-shell pt-14">
        <h2 className={h2}>Other tyre services</h2>
        <ul className="mt-4 grid gap-x-10 md:grid-cols-2">
          {OTHER.map((o) => (
            <li key={o.name} className="flex items-center justify-between gap-3 border-b border-black/[0.07] py-4">
              <Link href={`/services/${o.slug}`} className="font-semibold text-black hover:text-[#1d4ed8]">
                {o.name}
              </Link>
              <a
                href={buildWhatsAppLink(`Hi Punjab Tyre, what is the price of ${o.name.toLowerCase()} for my car?`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-[#2563eb] px-4 py-1.5 text-sm font-bold text-[#1d4ed8] hover:bg-[#2563eb] hover:text-white"
              >
                Ask price
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-shell pt-14" data-track-location="alignment_check">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6a3fc6] to-[#22205a] p-6 text-white sm:p-8">
          <span aria-hidden className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/[0.08]" />
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/80">Alignment check</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Car pulling to one side?</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
            Bring it in and we&apos;ll read the wheel angles on our alignment machine and show you the readings before any
            work is done.
          </p>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {["Camber, caster & toe readings", "Tyre wear & pressure check", "You decide what to fix"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppLink("Hi Punjab Tyre, my car is pulling to one side. I want to book an alignment check.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-black hover:bg-white/90"
          >
            <MessageCircle className="h-4 w-4" />
            Book alignment check
          </a>
          <p className="mt-3 text-center text-xs text-white/70">Walk in Mon–Sat 9:30 AM – 8:00 PM · Opp. Pacific Mall, Rohtak</p>
        </div>
      </section>

      <section className="container-shell pt-14">
        <h2 className={h2}>Our wheel services</h2>
        <p className="mt-2 text-sm text-black/60 sm:text-base">
          Computerised alignment and balancing at our Rohtak store, done the same day.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl border border-black/[0.08] bg-white p-5 transition hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-black">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-black/60">{s.text}</p>
              <p className="mt-3 text-sm font-semibold text-[#1d4ed8]">{s.when}</p>
            </Link>
          ))}
          <Link href="/alloy-wheels" className="rounded-2xl border border-black/[0.08] bg-white p-5 transition hover:shadow-md">
            <h3 className="text-lg font-bold text-black">Alloy Wheels</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-black/60">
              Authorised Advantec store plus Neo, Onyx, Incubus and Uno Minda alloys, fitted with your tyres.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1d4ed8]">13 to 20 inch</p>
          </Link>
        </div>
      </section>

      <OutletCard
        heading="Visit us for wheel care"
        intro="Walk in opposite Pacific Mall, Rohtak. Most cars are ready in about an hour."
      />
      <FaqGrid items={FAQS} />
      <HelpBar message="Hi Punjab Tyre, I need help with wheel alignment / balancing for my car." />
    </>
  );
}
