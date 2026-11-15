import Link from "next/link";
import { Car, ChevronRight, CircleDot, Disc3, Gauge, LifeBuoy, RefreshCw, Wind, Wrench, Zap } from "lucide-react";
import { OpenTyreFinderButton } from "@/components/home/open-tyre-finder";

const TILES = [
  { href: "/car-tyres", label: "Tyres", tag: "Authorised Yokohama", icon: CircleDot, tint: "bg-[#fde7e7]" },
  { href: "/alloy-wheels", label: "Alloy Wheels", tag: "13 to 20 inch", icon: Disc3, tint: "bg-[#fdf0dc]" },
  { href: "/services/wheel-alignment", label: "Wheel Alignment", tag: "Computerised", icon: Gauge, tint: "bg-[#e4ecfb]" },
  { href: "/services/wheel-balancing", label: "Wheel Balancing", tag: "Smooth ride", icon: RefreshCw, tint: "bg-[#e3f3f6]" },
  { href: "/services/tyre-fitting", label: "Tyre Fitting", tag: "Same day", icon: Wrench, tint: "bg-[#efe6fb]" },
  { href: "/services/nitrogen-filling", label: "Nitrogen Filling", tag: "Holds pressure", icon: Wind, tint: "bg-[#e2f5ec]" },
  { href: "/services/puncture-repair", label: "Puncture Repair", tag: "Tubeless", icon: LifeBuoy, tint: "bg-[#fbe9e2]" },
  { href: "/ev-tyres", label: "EV Tyres", tag: "BE 6 · XEV 9e", icon: Zap, tint: "bg-[#e6eefc]" },
];

/** "Shop by category" tiles plus the "Add your vehicle" row. */
export function CategoryGrid() {
  return (
    <section className="container-shell scroll-mt-28 pt-10" id="categories">
      <h2 className="text-2xl font-bold tracking-tight text-black sm:text-[28px]">Shop by category</h2>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {TILES.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`grid h-24 place-items-center ${t.tint}`}>
              <t.icon className="h-11 w-11 text-[#C62828] transition-transform group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <div className="px-2 py-2.5 text-center text-sm font-semibold text-black">{t.label}</div>
            <div className="mt-auto bg-[#D32F2F] px-2 py-1.5 text-center text-xs font-semibold text-white">{t.tag}</div>
          </Link>
        ))}
      </div>

      <OpenTyreFinderButton className="mt-5 flex w-full items-center gap-4 rounded-2xl border-2 border-dashed border-black/10 bg-white px-5 py-5 text-left transition hover:border-[#E53935]/40">
        <Car className="h-7 w-7 shrink-0 text-[#E53935]" strokeWidth={1.75} />
        <span className="min-w-0 flex-1">
          <span className="block text-base font-bold text-black sm:text-lg">Add your vehicle</span>
          <span className="block text-sm text-black/60">Get the right tyre size &amp; price for your car, automatically</span>
        </span>
        <ChevronRight className="h-5 w-5 shrink-0 text-[#E53935]" />
      </OpenTyreFinderButton>
    </section>
  );
}
