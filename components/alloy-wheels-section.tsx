"use client";

import { useState } from "react";
import { alloyWheels } from "@/lib/data";

function AlloyCard({
  item,
  className = "",
}: {
  item: { name: string; note?: string; logo?: string };
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`group flex h-20 items-center justify-center rounded-2xl border border-black/[0.08] bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md ${className}`}
      title={`${item.name} Alloy Wheels`}
    >
      {item.logo && !hasError ? (
        <img
          src={item.logo}
          alt={`${item.name} alloy wheels logo`}
          className="max-h-10 w-auto max-w-[130px] sm:max-w-[145px] object-contain transition-transform duration-200 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm font-bold tracking-tight text-black">
          {item.name}
        </span>
      )}

      {/* 
        INDICATIVE PRICING SLOT (TODO):
        When alloy starting price data is provided by owner, slot it in here:
        <span className="text-[11px] font-medium text-black/50">Starting ₹X,XXX / set</span>
        Currently omitted to avoid fabricating unverified price figures.
      */}
    </div>
  );
}

export function AlloyWheelsSection() {
  return (
    <section className="container-shell py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
          Alloy wheels
        </p>
        <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
          Premium alloy brands for upgrade buyers
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-black/50">
          Genuine certified alloy wheel brands available in custom finishes, PCDs, and sizes.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
        {alloyWheels.map((item) => (
          <AlloyCard
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
