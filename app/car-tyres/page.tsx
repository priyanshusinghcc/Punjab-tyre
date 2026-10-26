import type { Metadata } from "next";
import Link from "next/link";
import { LandingShell } from "@/components/landing/landing-shell";
import { carModelPages } from "@/lib/landing-pages";

export const metadata: Metadata = {
  title: "Car Tyre Sizes — Find Your Tyre Size by Car Model",
  description:
    "Tyre sizes for popular cars in India — Swift, Creta, Nexon, Scorpio-N, Thar, Fortuner and more — by variant. Buy the right tyres in Rohtak at Punjab Tyre.",
  alternates: { canonical: "/car-tyres" },
};

export default function CarTyresIndex() {
  const brands = Array.from(new Set(carModelPages.map((c) => c.brand)));

  return (
    <LandingShell
      crumbs={[{ name: "Car tyre sizes", path: "/car-tyres" }]}
      eyebrow="Tyre size finder"
      title="Tyre size for your car"
      intro="Pick your car to see the company (OEM) tyre size for every variant, then get the best price on WhatsApp. Don't see your car? Use the tyre finder on our home page or message us."
      whatsappMessage="Hi Punjab Tyre, I need help finding the right tyre size for my car."
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell space-y-10 py-14">
          {brands.map((brand) => (
            <div key={brand}>
              <h2 className="text-lg font-bold text-black">{brand}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {carModelPages
                  .filter((c) => c.brand === brand)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/car-tyres/${c.slug}`}
                        className="group block rounded-2xl border border-black/[0.07] bg-white px-5 py-4 transition-shadow hover:shadow-md"
                      >
                        <span className="block text-sm font-bold text-black group-hover:text-[#E53935]">
                          {c.displayName}
                        </span>
                        <span className="mt-1 block text-xs text-black/50">
                          {c.sizes.map((s) => s.size).join(" · ")}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </LandingShell>
  );
}
