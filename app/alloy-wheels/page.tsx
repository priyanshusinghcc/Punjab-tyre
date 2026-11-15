import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryHero, FaqGrid, HelpBar, OutletCard } from "@/components/category/shared";
import { AlloyBrowser, type AlloyBrandOption } from "@/components/category/alloy-browser";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { alloyBrandPages, alloyOverview } from "@/lib/landing-pages";
import { STORE_PHOTOS } from "@/lib/store-photos";

export const metadata: Metadata = {
  title: alloyOverview.metaTitle,
  description: alloyOverview.metaDescription,
  alternates: { canonical: "/alloy-wheels" },
  openGraph: { title: alloyOverview.metaTitle, description: alloyOverview.metaDescription, url: "/alloy-wheels" },
};

const BRANDS: AlloyBrandOption[] = alloyBrandPages.map((b) => ({
  name: b.name,
  slug: b.slug,
  logo: b.logo,
  authorised: b.authorised,
  hasCatalogue: b.slug === "onyx",
}));

const h2 = "text-2xl font-bold tracking-tight text-black sm:text-[28px]";

export default function AlloyWheelsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Alloy wheels", path: "/alloy-wheels" }])} />
      <JsonLd data={faqSchema(alloyOverview.faqs)} />
      <JsonLd data={serviceSchema({ name: "Alloy wheels in Rohtak", description: alloyOverview.metaDescription, path: "/alloy-wheels" })} />
      <CategoryHero
        tone="dark"
        eyebrow="Alloy wheels"
        lines={["Designs that fit your car.", "Fitted with your tyres."]}
        sub="Authorised Advantec store · Neo, Onyx, Incubus & Uno Minda · 13 to 20 inch"
      />

      <section className="container-shell pt-5">
        <AlloyBrowser brands={BRANDS} />
      </section>

      <section className="container-shell pt-14">
        <h2 className={h2}>Alloy wheel brands</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {alloyBrandPages.map((b) => (
            <Link
              key={b.slug}
              href={`/alloy-wheels/${b.slug}`}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-black/[0.08] bg-white p-5 text-center transition hover:shadow-md"
            >
              <Image src={b.logo} alt={`${b.name} alloy wheels`} width={140} height={48} className="mt-2 h-10 w-auto" />
              <span className="text-sm font-semibold text-black group-hover:text-[#D32F2F]">{b.name} alloys</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-shell pt-14">
        <div className="grid overflow-hidden rounded-3xl bg-[#202125] text-white md:grid-cols-[1fr_1fr]">
          <div className="p-6 sm:p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff8a80]">How we fit alloys</p>
            <h2 className="mt-2 text-2xl font-bold">Checked for your car before fitting</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {alloyOverview.how.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E53935]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[240px]">
            <Image src={STORE_PHOTOS.alloyDisplay.src} alt={STORE_PHOTOS.alloyDisplay.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <OutletCard heading="See the alloys in store" intro="Our display wall has dozens of designs — come in opposite Pacific Mall, Rohtak, and see them on the wall." />
      <FaqGrid items={alloyOverview.faqs} />
      <HelpBar message="Hi Punjab Tyre, I need help choosing alloy wheels for my car." />
    </>
  );
}
