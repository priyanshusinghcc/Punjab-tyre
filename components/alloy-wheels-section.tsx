"use client";

import { useState } from "react";
import Link from "next/link";
import { alloyWheels, type AlloyItem } from "@/lib/data";

function AlloyCard({ item }: { item: AlloyItem }) {
  const [hasError, setHasError] = useState(false);
  const href = item.slug ? `/alloy-wheels/${item.slug}` : "/alloy-wheels";

  return (
    <Link
      href={href}
      className="group relative flex h-20 items-center justify-center rounded-2xl border border-black/[0.08] bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md"
      title={`${item.name} alloy wheels in Rohtak`}
    >
      {item.authorised && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#E53935] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          Authorised
        </span>
      )}
      {item.logo && !hasError ? (
        <img
          src={item.logo}
          alt={`${item.name} alloy wheels logo`}
          className="max-h-10 w-auto max-w-[130px] sm:max-w-[145px] object-contain transition-transform duration-200 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm font-bold tracking-tight text-black">{item.name}</span>
      )}
    </Link>
  );
}

export function AlloyWheelsSection() {
  return (
    <section className="container-shell py-16" id="alloy-wheels">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">Alloy wheels</p>
          <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">Premium alloy brands for upgrade buyers</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-black/50">
            Authorised Advantec store in Rohtak, plus genuine Neo, Onyx, Incubus and Uno Minda alloys in custom
            finishes, PCDs and sizes.
          </p>
        </div>
        <Link href="/alloy-wheels" className="text-sm font-semibold text-[#E53935] hover:underline">
          View all alloy wheels →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3.5 pt-2 sm:grid-cols-3 lg:grid-cols-6">
        {alloyWheels.map((item) => (
          <AlloyCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
