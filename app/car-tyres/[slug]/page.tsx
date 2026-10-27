import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LandingShell } from "@/components/landing/landing-shell";
import { brandPages, carModelFaqs, carModelPages, carWhatsAppMessage, EV_TYRE, evTyrePoints } from "@/lib/landing-pages";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/utils";
import { BulletCard } from "@/components/landing/landing-shell";

export const dynamicParams = false;

export function generateStaticParams() {
  return carModelPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = carModelPages.find((c) => c.slug === slug);
  if (!page) return {};
  const sizes = page.sizes.map((s) => s.size).join(", ");
  const title = page.isEv
    ? `${page.brand} ${page.shortName} Tyres in Rohtak — EV Tyre Size & Price`
    : `${page.displayName} Tyre Size & Price in Rohtak`;
  const description = page.isEv
    ? `${page.brand} ${page.shortName} tyres in Rohtak: Yokohama Geolandar X-CV in ${sizes}, in stock. EV-ready, fitted the same day at Punjab Tyre (Yokohama Club Network).`
    : `${page.displayName} tyre size by variant: ${sizes}. Buy Yokohama, CEAT, Michelin, Apollo & Goodyear tyres for your ${page.shortName} in Rohtak with same-day fitment.`;
  return {
    title,
    description,
    alternates: { canonical: `/car-tyres/${page.slug}` },
    openGraph: { title, description, url: `/car-tyres/${page.slug}` },
  };
}

export default async function CarTyrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = carModelPages.find((c) => c.slug === slug);
  if (!page) notFound();

  const sizeList = page.sizes.map((s) => s.size).join(", ");
  const intro = page.isEv
    ? `The Yokohama Geolandar X-CV for the ${page.brand} ${page.shortName} is in stock at Punjab Tyre, Rohtak, in the company-fitment size ${sizeList}. As an electric SUV it needs tyres with the right load rating, low rolling resistance and low noise — fitted the same day with alignment and balancing.`
    : page.sizes.length === 1
      ? `The ${page.displayName} comes from the factory on ${page.sizes[0].size} tyres. Get genuine tyres in this size from Yokohama, CEAT, Apollo, Goodyear and Michelin at Punjab Tyre, Rohtak — fitted the same day.`
      : `The ${page.displayName} uses ${sizeList} tyres, depending on the variant. Find your variant below, then get genuine tyres in that size at Punjab Tyre, Rohtak — fitted the same day.`;

  const sameBrand = carModelPages.filter((c) => c.brand === page.brand && c.slug !== page.slug);
  const others = carModelPages.filter((c) => c.brand !== page.brand).slice(0, 8);
  const related = [...sameBrand, ...others].map((c) => ({
    label: `${c.displayName} tyre size`,
    href: `/car-tyres/${c.slug}`,
  }));

  return (
    <LandingShell
      crumbs={[
        { name: "Car tyre sizes", path: "/car-tyres" },
        { name: page.displayName, path: `/car-tyres/${page.slug}` },
      ]}
      eyebrow={page.isEv ? `${page.brand} · EV tyres in stock` : `${page.brand} · ${page.bodyType}`}
      title={page.isEv ? `${page.brand} ${page.shortName} Tyres in Rohtak — Size & Price` : `${page.displayName} Tyre Size & Price in Rohtak`}
      intro={intro}
      whatsappMessage={carWhatsAppMessage(page)}
      faqs={carModelFaqs(page)}
      related={related}
      relatedTitle="Tyre sizes for other cars"
      callbackCar={page.displayName}
    >
      <section className="bg-[#f7f7f7]" id="sizes">
        <div className="container-shell py-14">
          <h2 className="text-2xl font-black text-black md:text-3xl">
            {page.shortName} tyre size by variant
          </h2>
          <p className="mt-2 text-sm text-black/55">Company (OEM) fitment. Confirm against the size printed on your tyre&apos;s sidewall.</p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-black/[0.07] bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-black/[0.03] text-xs uppercase tracking-wide text-black/50">
                <tr>
                  <th className="px-5 py-3 font-semibold">Tyre size</th>
                  <th className="px-5 py-3 font-semibold">Wheel</th>
                  <th className="px-5 py-3 font-semibold">Variants</th>
                </tr>
              </thead>
              <tbody>
                {page.sizes.map((s) => (
                  <tr key={s.size} className="border-t border-black/[0.06] align-top">
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-black">{s.size}</td>
                    <td className="px-5 py-4 text-black/65">{s.rim}</td>
                    <td className="px-5 py-4 text-black/65">{s.variants.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {page.isEv && (
            <div className="mt-10 grid items-start gap-5 rounded-3xl border border-[#E53935]/20 bg-white p-7 md:grid-cols-[1fr_auto] md:p-9">
              <div>
                <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  In stock · {page.sizes[0].size}
                </span>
                <h2 className="mt-3 text-2xl font-black text-black">
                  Recommended for the {page.shortName}: {EV_TYRE.fullName}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {EV_TYRE.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-6 text-black/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E53935]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppLink(`Hi Punjab Tyre, I want the Yokohama Geolandar X-CV for my ${page.brand} ${page.shortName} (${page.sizes[0].size}). Please share the price.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E53935] px-5 py-3 text-sm font-semibold text-white hover:bg-[#cf3330]"
                >
                  Get Geolandar X-CV price on WhatsApp →
                </a>
              </div>
              <Image src={EV_TYRE.logo} alt="Yokohama logo" width={160} height={48} className="h-9 w-auto md:mt-2" />
            </div>
          )}

          {page.isEv && (
            <div className="mt-10">
              <BulletCard title={`What makes ${page.shortName} tyres different`} items={evTyrePoints} />
              <p className="mt-3 text-sm text-black/55">
                See all <Link href="/ev-tyres" className="font-semibold text-[#E53935] hover:underline">EV tyres in Rohtak</Link>.
              </p>
            </div>
          )}

          <div className="mt-10 rounded-3xl bg-[#0a0a0a] p-7 text-white md:p-9">
            <h2 className="text-xl font-bold">Best tyre options for your {page.shortName}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
              Tell us how you drive — mostly city, highway runs, or long mileage — and your budget. We&apos;ll
              compare options in your size from every brand in stock and send prices on WhatsApp. Fitment,
              wheel alignment, balancing and nitrogen inflation are included.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {brandPages
                .filter((b) => !["tvs", "bkt"].includes(b.slug))
                .map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/brands/${b.slug}`}
                      className="inline-block rounded-full border border-white/15 px-4 py-2 text-[13px] text-white/80 hover:border-white/40 hover:text-white"
                    >
                      {b.name}
                      {b.authorised ? " · authorised dealer" : ""}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
