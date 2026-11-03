"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";
import { CAR_PCDS, CAR_PCD_BRANDS, findCarPcd } from "@/lib/car-pcd";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppLink } from "@/lib/utils";

/** "Select your car" box on the alloy overview: shows the car's PCD and links to the designs that fit. */
export function AlloyCarFinder() {
  const [slug, setSlug] = useState("");
  const car = findCarPcd(slug);

  return (
    <div className="rounded-3xl border border-black/[0.07] bg-white p-5 shadow-sm md:p-7" data-track-location="alloy_car_finder">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
        <Car className="h-4 w-4" />
        Find alloys for your car
      </div>
      <h2 className="mt-2 text-2xl font-black text-black md:text-3xl">Which alloys fit my car?</h2>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="alloy-car" className="sr-only">
          Select your car
        </label>
        <select
          id="alloy-car"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            const found = findCarPcd(e.target.value);
            if (found) trackEvent("alloy_car_select", { car: found.slug, pcd: found.pcd, brand_page: "overview" });
          }}
          className="w-full rounded-xl border border-black/15 bg-white px-3 py-3 text-sm text-black outline-none focus:border-black sm:max-w-sm"
        >
          <option value="">Select your car</option>
          {CAR_PCD_BRANDS.map((b) => (
            <optgroup key={b} label={b}>
              {CAR_PCDS.filter((x) => x.brand === b).map((x) => (
                <option key={x.slug} value={x.slug}>
                  {x.model}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {car && (
          <Link
            href={`/alloy-wheels/onyx?car=${car.slug}#collection`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white hover:bg-black/85"
          >
            See Onyx designs that fit
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-black/60">
        {car ? (
          <>
            Your {car.model} uses a <strong className="text-black">{car.pcd}</strong> stud pattern (PCD). For Advantec,
            Neo, Incubus and Uno Minda designs in this PCD,{" "}
            <a
              href={buildWhatsAppLink(
                `Hi Punjab Tyre, please share alloy wheel designs and prices for my ${car.brand} ${car.model} (PCD ${car.pcd}).`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#128C7E] underline"
            >
              ask us on WhatsApp
            </a>
            . We confirm centre bore and offset for your exact variant before fitting.
          </>
        ) : (
          <>
            Pick your car to see its stud pattern (PCD) — the one measurement an alloy must match to bolt on. Car not
            listed? WhatsApp us your model and we&apos;ll check.
          </>
        )}
      </p>
    </div>
  );
}
