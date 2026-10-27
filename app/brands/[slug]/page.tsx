import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BulletCard, LandingShell, PhotoCard } from "@/components/landing/landing-shell";
import { brandPages, carModelPages, servicePages } from "@/lib/landing-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return brandPages.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = brandPages.find((b) => b.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/brands/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/brands/${page.slug}` },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = brandPages.find((b) => b.slug === slug);
  if (!page) notFound();

  const title = page.authorised
    ? `${page.name} Tyres in Rohtak — Authorised Dealer`
    : `${page.name} Tyres in Rohtak`;

  const related = [
    ...brandPages.filter((b) => b.slug !== page.slug).map((b) => ({ label: `${b.name} tyres`, href: `/brands/${b.slug}` })),
    ...servicePages.slice(0, 3).map((s) => ({ label: s.h1, href: `/services/${s.slug}` })),
    { label: "Alloy wheels in Rohtak", href: "/alloy-wheels" },
    ...carModelPages.slice(0, 6).map((c) => ({ label: `${c.displayName} tyres`, href: `/car-tyres/${c.slug}` })),
  ];

  return (
    <LandingShell
      crumbs={[
        { name: "Tyre brands", path: "/brands" },
        { name: page.name, path: `/brands/${page.slug}` },
      ]}
      eyebrow={page.authorised ? "Authorised dealer · Yokohama Club Network" : `Genuine ${page.name} tyres`}
      title={title}
      intro={page.intro}
      whatsappMessage={`Hi Punjab Tyre, I want ${page.name} tyres. Please share prices for my vehicle.`}
      faqs={page.faqs}
      related={related}
      relatedTitle="Explore more"
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "Brand",
          name: page.name,
          logo: `https://www.punjabtyre.in${page.logo}`,
        },
      ]}
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid items-start gap-5 py-14 md:grid-cols-[1fr_280px]">
          <BulletCard title={`Why buy ${page.name} tyres at Punjab Tyre`} items={page.points} />
          {page.photo ? (
            <PhotoCard
              src={page.photo.src}
              alt={page.photo.alt}
              caption={`${page.photo.caption} at our Rohtak store`}
              logo={page.logo}
              logoAlt={`${page.name} logo`}
              badge={page.authorised ? "Authorised" : undefined}
            />
          ) : (
            <div className="flex h-full min-h-[180px] items-center justify-center rounded-3xl border border-black/[0.07] bg-white p-8">
              <Image src={page.logo} alt={`${page.name} tyres logo`} width={200} height={80} className="h-auto max-h-20 w-auto" />
            </div>
          )}
        </div>
      </section>
    </LandingShell>
  );
}
