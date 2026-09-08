"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { bikeTyreBrands, carTyreBrands } from "@/lib/data";
import { FadeUp } from "@/components/animations";

function BrandCard({
  item,
  className = "",
}: {
  item: { name: string; logo?: string };
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`group flex h-20 items-center justify-center rounded-2xl border border-black/[0.08] bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md ${className}`}
      title={`${item.name} Tyres`}
    >
      {item.logo && !hasError ? (
        <img
          src={item.logo}
          alt={`${item.name} tyre company logo`}
          className="max-h-9 sm:max-h-10 w-auto max-w-[135px] sm:max-w-[150px] object-contain transition-transform duration-200 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm font-bold tracking-tight text-black">
          {item.name}
        </span>
      )}

      {/* 
        INDICATIVE PRICING SLOT (TODO):
        When brand-level starting price data is provided by owner, slot it in here:
        <span className="text-[11px] font-medium text-black/50">Starting ₹X,XXX</span>
        Currently omitted to avoid fabricating unverified price figures.
      */}
    </div>
  );
}

function BrandGrid({
  title,
  items,
}: {
  title: string;
  items: { name: string; logo?: string }[];
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-sm font-bold text-black">{title}</h3>

        <Badge className="bg-black/8 text-[10px] text-black/50">
          {items.length} brands
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <BrandCard
            key={item.name}
            item={item}
            className="max-sm:last:col-span-2"
          />
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
