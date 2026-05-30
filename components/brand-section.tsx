// FILE: components/brand-section.tsx
// Drop this into your project at: components/brand-section.tsx

import { Badge } from "@/components/ui/badge";
import { bikeTyreBrands, carTyreBrands } from "@/lib/data";
import { FadeUp } from "@/components/animations";

function BrandGrid({
  title,
  items,
}: {
  title: string;
  items: { name: string }[];
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-sm font-bold text-black">{title}</h3>

        <Badge className="bg-black/8 text-[10px] text-black/50">
          {items.length} brands
        </Badge>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 transition-shadow hover:shadow-sm"
          >
            <div className="text-sm font-semibold text-black">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandSection() {
  return (
    <section className="container-shell py-20">
      <FadeUp>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
          Brands
        </p>

        <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
          Inventory-backed brand selection
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-black/50">
          We stock genuine tyres from India&apos;s most trusted manufacturers —
          for every vehicle type, usage, and budget.
        </p>
      </FadeUp>

      <div className="mt-12 space-y-10">
        <FadeUp delay={0.1}>
          <BrandGrid title="Car Tyre Brands" items={carTyreBrands} />
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="h-px bg-black/[0.06]" />

          <BrandGrid title="Bike Tyre Brands" items={bikeTyreBrands} />
        </FadeUp>
      </div>
    </section>
  );
}
