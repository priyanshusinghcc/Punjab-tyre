import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandingShell } from "@/components/landing/landing-shell";
import { brandPages } from "@/lib/landing-pages";

export const metadata: Metadata = {
  title: "Tyre Brands in Rohtak — Yokohama, CEAT, Apollo, Goodyear, Michelin",
  description:
    "Genuine car, SUV and bike tyres in Rohtak from Yokohama (authorised dealer), CEAT, Apollo, Goodyear, Michelin, TVS and BKT at Punjab Tyre.",
  alternates: { canonical: "/brands" },
};

export default function BrandsIndex() {
  return (
    <LandingShell
      crumbs={[{ name: "Tyre brands", path: "/brands" }]}
      eyebrow="Tyre brands"
      title="Genuine tyre brands in Rohtak"
      intro="Authorised Yokohama dealer, plus genuine CEAT, Apollo, Goodyear, Michelin, TVS and BKT tyres — all with manufacturer warranty and same-day fitment."
      whatsappMessage="Hi Punjab Tyre, please share tyre options and prices for my vehicle."
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {brandPages.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="group flex flex-col items-start gap-4 rounded-3xl border border-black/[0.07] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <Image src={b.logo} alt={`${b.name} logo`} width={140} height={48} className="h-10 w-auto" />
              <div>
                <h2 className="text-base font-bold text-black group-hover:text-[#E53935]">{b.name} tyres</h2>
                <p className="mt-1 text-xs text-black/55">
                  {b.authorised ? "Authorised dealer · " : ""}
                  {b.vehicles}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </LandingShell>
  );
}
