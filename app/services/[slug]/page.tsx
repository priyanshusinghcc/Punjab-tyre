import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BulletCard, LandingShell } from "@/components/landing/landing-shell";
import { servicePages, carModelPages } from "@/lib/landing-pages";
import { serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((s) => s.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/services/${page.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages.find((s) => s.slug === slug);
  if (!page) notFound();

  const path = `/services/${page.slug}`;
  const related = [
    ...servicePages.filter((s) => s.slug !== page.slug).map((s) => ({ label: `${s.name} in Rohtak`, href: `/services/${s.slug}` })),
    { label: "Alloy wheels in Rohtak", href: "/alloy-wheels" },
    ...carModelPages.slice(0, 6).map((c) => ({ label: `${c.displayName} tyre size`, href: `/car-tyres/${c.slug}` })),
  ];

  return (
    <LandingShell
      crumbs={[
        { name: "Services", path: "/services" },
        { name: page.name, path },
      ]}
      eyebrow="Punjab Tyre · Rohtak"
      title={page.h1}
      intro={page.intro}
      whatsappMessage={page.whatsappMessage}
      faqs={page.faqs}
      related={related}
      relatedTitle="More from Punjab Tyre"
      extraSchema={[serviceSchema({ name: page.h1, description: page.metaDescription, path })]}
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid gap-5 py-14 md:grid-cols-2">
          <BulletCard title={page.signsTitle} items={page.signs} />
          <BulletCard title={page.howTitle} items={page.how} />
        </div>
      </section>
    </LandingShell>
  );
}
