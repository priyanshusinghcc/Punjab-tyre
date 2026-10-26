import type { Metadata } from "next";
import Link from "next/link";
import { LandingShell } from "@/components/landing/landing-shell";
import { servicePages } from "@/lib/landing-pages";

export const metadata: Metadata = {
  title: "Tyre & Wheel Services in Rohtak",
  description:
    "Wheel alignment, balancing, same-day tyre fitting, nitrogen filling, puncture repair and alloy wheels at Punjab Tyre, Rohtak. Included free with new tyres.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <LandingShell
      crumbs={[{ name: "Services", path: "/services" }]}
      eyebrow="Services"
      title="Tyre & wheel services in Rohtak"
      intro="Everything your tyres and wheels need, under one roof. Alignment, balancing, fitting, nitrogen inflation and puncture repair are included when you buy tyres from us."
      whatsappMessage="Hi Punjab Tyre, I'd like to book a service for my car."
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-3xl border border-black/[0.07] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-black group-hover:text-[#E53935]">{s.h1}</h2>
              <p className="mt-2 text-sm leading-6 text-black/60">{s.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </LandingShell>
  );
}
