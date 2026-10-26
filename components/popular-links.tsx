import Link from "next/link";
import { alloyBrandPages, brandPages, carModelPages, servicePages } from "@/lib/landing-pages";

/** Internal links from the home page to the SEO landing pages. */
export function PopularLinks() {
  const groups = [
    {
      title: "Tyre size by car",
      href: "/car-tyres",
      links: carModelPages.slice(0, 18).map((c) => ({ label: `${c.displayName} tyres`, href: `/car-tyres/${c.slug}` })),
    },
    {
      title: "Tyre brands in Rohtak",
      href: "/brands",
      links: brandPages.map((b) => ({
        label: `${b.name} tyres${b.authorised ? " (authorised dealer)" : ""}`,
        href: `/brands/${b.slug}`,
      })),
    },
    {
      title: "Alloy wheels in Rohtak",
      href: "/alloy-wheels",
      links: alloyBrandPages.map((a) => ({
        label: a.authorised ? `Authorised ${a.name} store` : `${a.name} alloy wheels`,
        href: `/alloy-wheels/${a.slug}`,
      })),
    },
    {
      title: "Services",
      href: "/services",
      links: servicePages.map((s) => ({ label: s.h1, href: `/services/${s.slug}` })),
    },
  ];

  return (
    <section className="container-shell pb-16" id="popular-searches">
      <h2 className="text-xl font-bold text-black md:text-2xl">Popular in Rohtak</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.title}>
            <Link href={g.href} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E53935] hover:underline">
              {g.title}
            </Link>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[12px] text-black/65 transition-colors hover:border-[#E53935] hover:text-[#E53935]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
