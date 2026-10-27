import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, PhoneCall, Star } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";
import { siteCopy } from "@/lib/data";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/landing-pages";
import { CallbackForm } from "@/components/callback-form";

type Crumb = { name: string; path: string };
type RelatedLink = { label: string; href: string };

export function LandingShell({
  crumbs,
  eyebrow,
  title,
  intro,
  whatsappMessage,
  faqs = [],
  related = [],
  relatedTitle = "Related",
  extraSchema = [],
  callbackCar = "",
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  intro: string;
  whatsappMessage: string;
  faqs?: FaqItem[];
  related?: RelatedLink[];
  relatedTitle?: string;
  extraSchema?: unknown[];
  callbackCar?: string;
  children?: React.ReactNode;
}) {
  const allCrumbs = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <main id="landing">
      <JsonLd data={breadcrumbSchema(allCrumbs)} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      {extraSchema.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white" data-track-location="landing_hero">
        <div className="container-shell py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/50">
            <ol className="flex flex-wrap items-center gap-1.5">
              {allCrumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i < allCrumbs.length - 1 ? (
                    <Link href={c.path} className="hover:text-white">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-white/75">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70">{intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#E53935] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/25 transition-all hover:bg-[#cf3330]"
            >
              Get Best Price on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-white/55">
            <Star className="h-3.5 w-3.5 fill-[#FBBC04] text-[#FBBC04]" />
            {BUSINESS.googleRating} on Google · {BUSINESS.googleReviewCount}+ reviews · Serving Rohtak since{" "}
            {BUSINESS.foundingYear}
          </p>
        </div>
      </section>

      {/* Page body */}
      {children}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-[#f7f7f7]" id="faq">
          <div className="container-shell py-14">
            <h2 className="text-2xl font-black text-black md:text-3xl">Frequently asked questions</h2>
            <div className="mt-8 max-w-3xl space-y-2">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-black/[0.07] bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-black">
                    <h3>{item.question}</h3>
                    <span className="ml-auto shrink-0 text-black/30 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t border-black/[0.06] px-5 py-4 text-sm leading-7 text-black/65">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visit us */}
      <section className="bg-white" id="visit">
        <div className="container-shell grid gap-8 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black text-black md:text-3xl">Visit {BUSINESS.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-black/60">
              Authorised Yokohama dealer and Advantec alloy wheel store in Rohtak since {BUSINESS.foundingYear}. Send your car
              model on WhatsApp first and we&apos;ll confirm stock and price before you come.
            </p>
            <div className="mt-6 max-w-md">
              <CallbackForm defaultCar={callbackCar} />
            </div>
          </div>
          <address className="space-y-3 not-italic">
            <div className="flex items-start gap-3 text-sm text-black/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <span>{FULL_ADDRESS}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-black/75">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <a href={BUSINESS.phoneHref} className="hover:text-black">
                {BUSINESS.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm text-black/75">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <span>
                {BUSINESS.hoursDisplay.map((h) => (
                  <span key={h.label} className="block">
                    {h.label}: {h.value}
                  </span>
                ))}
              </span>
            </div>
            <a
              href={siteCopy.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E53935] hover:underline"
            >
              Get directions on Google Maps →
            </a>
          </address>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-black/[0.06] bg-[#f7f7f7]">
          <div className="container-shell py-12">
            <h2 className="text-lg font-bold text-black">{relatedTitle}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-block rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] text-black/70 transition-colors hover:border-[#E53935] hover:text-[#E53935]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

export function BulletCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-black/[0.07] bg-white p-7">
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-black/70">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E53935]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Real store photo with an optional brand logo badge. */
export function PhotoCard({
  src,
  alt,
  caption,
  logo,
  logoAlt,
  badge,
}: {
  src: string;
  alt: string;
  caption?: string;
  logo?: string;
  logoAlt?: string;
  badge?: string;
}) {
  return (
    <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-black/[0.07] bg-black/5">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" />
      {(logo || badge) && (
        <div className="absolute left-3 top-3 flex items-center gap-2">
          {logo && (
            <span className="rounded-xl bg-white/95 px-3 py-2 shadow-sm">
              <Image src={logo} alt={logoAlt ?? ""} width={110} height={36} className="h-6 w-auto" />
            </span>
          )}
          {badge && (
            <span className="rounded-full bg-[#E53935] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
        </div>
      )}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-xs font-semibold text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
