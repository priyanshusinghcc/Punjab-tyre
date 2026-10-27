import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BulletCard, LandingShell, PhotoCard } from "@/components/landing/landing-shell";
import { STORE_PHOTOS } from "@/lib/store-photos";
import { alloyBrandPages, alloyOverview, carModelPages } from "@/lib/landing-pages";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: alloyOverview.metaTitle,
  description: alloyOverview.metaDescription,
  alternates: { canonical: "/alloy-wheels" },
  openGraph: { title: alloyOverview.metaTitle, description: alloyOverview.metaDescription, url: "/alloy-wheels" },
};

export default function AlloyWheelsIndex() {
  return (
    <LandingShell
      crumbs={[{ name: "Alloy wheels", path: "/alloy-wheels" }]}
      eyebrow="Authorised Advantec store · Rohtak"
      title={alloyOverview.h1}
      intro={alloyOverview.intro}
      whatsappMessage={alloyOverview.whatsappMessage}
      faqs={alloyOverview.faqs}
      related={carModelPages.slice(0, 10).map((c) => ({ label: `${c.displayName} tyre size`, href: `/car-tyres/${c.slug}` }))}
      relatedTitle="Tyre sizes for popular cars"
      extraSchema={[serviceSchema({ name: "Alloy wheels in Rohtak", description: alloyOverview.metaDescription, path: "/alloy-wheels" })]}
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell py-14">
          <h2 className="text-2xl font-black text-black md:text-3xl">Alloy wheel brands</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {alloyBrandPages.map((b) => (
              <Link
                key={b.slug}
                href={`/alloy-wheels/${b.slug}`}
                className="group relative flex flex-col items-start gap-4 rounded-3xl border border-black/[0.07] bg-white p-6 transition-shadow hover:shadow-md"
              >
                {b.authorised && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#E53935]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#E53935]">
                    Authorised
                  </span>
                )}
                <Image src={b.logo} alt={`${b.name} alloy wheels logo`} width={140} height={48} className="h-10 w-auto" />
                <span className="text-base font-bold text-black group-hover:text-[#E53935]">{b.name} alloys</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 grid items-start gap-5 md:grid-cols-[1fr_1fr_300px]">
            <BulletCard title={alloyOverview.signsTitle} items={alloyOverview.signs} />
            <BulletCard title={alloyOverview.howTitle} items={alloyOverview.how} />
            <PhotoCard
              src={STORE_PHOTOS.alloyDisplay.src}
              alt={STORE_PHOTOS.alloyDisplay.alt}
              caption="Our alloy wheel display wall"
            />
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
