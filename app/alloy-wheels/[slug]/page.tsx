import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BulletCard, LandingShell, PhotoCard } from "@/components/landing/landing-shell";
import { STORE_PHOTOS } from "@/lib/store-photos";
import { alloyBrandPages, carModelPages } from "@/lib/landing-pages";
import { BUSINESS_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/business";

export const dynamicParams = false;

export function generateStaticParams() {
  return alloyBrandPages.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = alloyBrandPages.find((b) => b.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/alloy-wheels/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/alloy-wheels/${page.slug}` },
  };
}

export default async function AlloyBrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = alloyBrandPages.find((b) => b.slug === slug);
  if (!page) notFound();

  const title = page.authorised
    ? `Authorised ${page.name} Alloy Wheels Store in Rohtak`
    : `${page.name} Alloy Wheels in Rohtak`;

  const related = [
    { label: "All alloy wheels", href: "/alloy-wheels" },
    ...alloyBrandPages
      .filter((b) => b.slug !== page.slug)
      .map((b) => ({ label: `${b.name} alloys${b.authorised ? " (authorised)" : ""}`, href: `/alloy-wheels/${b.slug}` })),
    ...carModelPages.slice(0, 6).map((c) => ({ label: `${c.displayName} tyre size`, href: `/car-tyres/${c.slug}` })),
  ];

  return (
    <LandingShell
      crumbs={[
        { name: "Alloy wheels", path: "/alloy-wheels" },
        { name: page.name, path: `/alloy-wheels/${page.slug}` },
      ]}
      eyebrow={page.authorised ? `Authorised ${page.name} store · Rohtak` : `Genuine ${page.fullName}`}
      title={title}
      intro={page.intro}
      whatsappMessage={`Hi Punjab Tyre, I want ${page.fullName} for my car. Please share designs and prices.`}
      faqs={page.faqs}
      related={related}
      relatedTitle="Explore more"
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: title,
          description: page.metaDescription,
          url: `${SITE_URL}/alloy-wheels/${page.slug}`,
          provider: { "@id": BUSINESS_ID },
          areaServed: { "@type": "City", name: "Rohtak" },
          brand: { "@type": "Brand", name: page.name, logo: `${SITE_URL}${page.logo}` },
        },
      ]}
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid items-start gap-5 py-14 md:grid-cols-[1fr_280px]">
          <BulletCard title={`Why buy ${page.fullName} at Punjab Tyre`} items={page.points} />
          <PhotoCard
            src={STORE_PHOTOS.alloyDisplay.src}
            alt={STORE_PHOTOS.alloyDisplay.alt}
            caption="Alloy wheel display at our Rohtak store"
            logo={page.logo}
            logoAlt={`${page.name} alloy wheels logo`}
            badge={page.authorised ? "Authorised store" : undefined}
          />
        </div>
      </section>
    </LandingShell>
  );
}
