"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export type SizeEntry = {
  size: string; // "195/55 R16"
  width: string;
  aspect: string;
  rim: string;
  cars: { name: string; slug: string }[];
};
export type CarOption = { brand: string; model: string; slug: string; sizes: string[] };
export type BrandOption = { name: string; logo: string; authorised?: boolean; /** logo has its own coloured background: show it larger */ boxed?: boolean };

const select =
  "h-12 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 pr-10 text-[15px] text-black outline-none focus:border-black disabled:bg-[#b9bbc1] disabled:text-black/50";

function Dropdown({
  value,
  onChange,
  children,
  label,
  disabled,
  className = select,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <div className="relative w-full">
      <select aria-label={label} value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} className={className}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/60" />
    </div>
  );
}

const uniq = (a: string[]) => [...new Set(a)].sort((x, y) => parseFloat(x) - parseFloat(y));

/** Tyre size browser: find by car or by width / aspect / rim, filter by brand, ask the price on WhatsApp. */
export function TyreSizeBrowser({ sizes, cars, brands }: { sizes: SizeEntry[]; cars: CarOption[]; brands: BrandOption[] }) {
  const [carBrand, setCarBrand] = useState("");
  const [carSlug, setCarSlug] = useState("");
  const [width, setWidth] = useState("");
  const [aspect, setAspect] = useState("");
  const [rim, setRim] = useState("");
  const [brand, setBrand] = useState("");

  const carBrands = useMemo(() => [...new Set(cars.map((c) => c.brand))], [cars]);
  const car = cars.find((c) => c.slug === carSlug) ?? null;

  const visible = sizes.filter(
    (s) =>
      (!car || car.sizes.includes(s.size)) &&
      (!width || s.width === width) &&
      (!aspect || s.aspect === aspect) &&
      (!rim || s.rim === rim),
  );
  const shownBrands = brand ? brands.filter((b) => b.name === brand) : brands;

  const pickCar = (slug: string) => {
    setCarSlug(slug);
    setWidth("");
    setAspect("");
    setRim("");
    const c = cars.find((x) => x.slug === slug);
    if (c) trackEvent("tyre_car_select", { car_brand: c.brand, car_model: c.model });
  };

  const ask = (s: SizeEntry, b: BrandOption) =>
    buildWhatsAppLink(
      `Hi Punjab Tyre, please share the price and stock of ${b.name} ${s.size} tyres${car ? ` for my ${car.brand} ${car.model}` : ""}.`,
    );

  return (
    <div data-track-location="tyre_browser">
      <div className="rounded-3xl bg-[#202125] p-4 sm:p-5">
        <h2 className="text-lg font-bold text-white sm:text-xl">Find tyres for your car</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Dropdown
            label="Car brand"
            value={carBrand}
            onChange={(v) => {
              setCarBrand(v);
              setCarSlug("");
            }}
          >
            <option value="">Car brand</option>
            {carBrands.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </Dropdown>
          <Dropdown label="Car model" value={carSlug} onChange={pickCar} disabled={!carBrand}>
            <option value="">Car model</option>
            {cars
              .filter((c) => c.brand === carBrand)
              .map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.model}
                </option>
              ))}
          </Dropdown>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {(
          [
            ["Width", width, setWidth, uniq(sizes.map((s) => s.width))],
            ["Aspect", aspect, setAspect, uniq(sizes.map((s) => s.aspect))],
            ["Rim Size", rim, setRim, uniq(sizes.map((s) => s.rim))],
          ] as const
        ).map(([label, value, set, opts], i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            {i > 0 && <span className="text-black/40">/</span>}
            <Dropdown
              label={label}
              value={value}
              onChange={(v) => {
                set(v);
                setCarSlug("");
                setCarBrand("");
              }}
              className="h-11 w-full appearance-none rounded-full border border-black/10 bg-[#f3f4f6] px-4 pr-9 text-center text-sm font-medium text-black outline-none focus:border-black"
            >
              <option value="">{label}</option>
              {opts.map((o) => (
                <option key={o} value={o}>
                  {label === "Rim Size" ? `R${o}` : o}
                </option>
              ))}
            </Dropdown>
          </div>
        ))}
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by tyre brand">
        <button
          type="button"
          onClick={() => setBrand("")}
          className={`h-14 shrink-0 rounded-xl border-2 bg-white px-5 text-sm font-bold ${brand === "" ? "border-black" : "border-black/[0.08]"}`}
        >
          All Brands
        </button>
        {brands.map((b) => (
          <button
            key={b.name}
            type="button"
            aria-label={b.name}
            onClick={() => setBrand(b.name)}
            className={`relative grid h-14 w-32 shrink-0 place-items-center rounded-xl border-2 bg-white px-4 ${
              brand === b.name ? "border-black" : "border-black/[0.08]"
            }`}
          >
            <Image
              src={b.logo}
              alt={b.name}
              width={96}
              height={40}
              className={`w-auto object-contain ${b.boxed ? "h-10 max-w-[100px] rounded" : "h-7 max-w-[88px]"}`}
            />
          </button>
        ))}
      </div>

      <div className="mt-5 border-t border-black/[0.08] pt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold text-black sm:text-2xl">
            {visible.length} tyre size{visible.length === 1 ? "" : "s"} found
            {car ? ` for ${car.brand} ${car.model}` : ""}
          </h2>
          {(car || width || aspect || rim || brand) && (
            <button
              type="button"
              onClick={() => {
                setCarBrand("");
                setCarSlug("");
                setWidth("");
                setAspect("");
                setRim("");
                setBrand("");
              }}
              className="text-sm font-semibold text-[#D32F2F] underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {visible.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-dashed border-black/15 p-6 text-sm text-black/60">
            No size matches these filters.{" "}
            <a
              href={buildWhatsAppLink(`Hi Punjab Tyre, do you have ${width || "?"}/${aspect || "?"} R${rim || "?"} tyres?`)}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#128C7E] underline"
            >
              Ask us on WhatsApp
            </a>
          </p>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((s) => (
              <article key={s.size} className="rounded-3xl border border-black/[0.06] bg-[#f3f4f6] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">{s.size.replace(" ", "")}</h3>
                    <span className="rounded-full bg-[#fde3e3] px-2.5 py-0.5 text-xs font-semibold text-[#D32F2F]">
                      {s.cars.length} car{s.cars.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <span className="text-xs text-black/55 sm:text-sm">Price on WhatsApp</span>
                </div>
                <p className="mt-1 line-clamp-1 text-xs text-black/50">
                  Fits{" "}
                  {s.cars.slice(0, 4).map((c, i) => (
                    <span key={c.slug}>
                      {i > 0 && ", "}
                      <Link href={`/car-tyres/${c.slug}`} className="hover:underline">
                        {c.name}
                      </Link>
                    </span>
                  ))}
                  {s.cars.length > 4 ? ` +${s.cars.length - 4} more` : ""}
                </p>
                <div className="mt-3 overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
                  <div className="grid grid-cols-[1fr_auto] bg-[#f8f9fa] px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-black/55">
                    <span>Brand</span>
                    <span>Price</span>
                  </div>
                  {shownBrands.map((b) => (
                    <div key={b.name} className="grid grid-cols-[1fr_auto] items-center border-t border-black/[0.05] px-4 py-2.5">
                      <span className="flex items-center gap-2">
                        <Image
                          src={b.logo}
                          alt={b.name}
                          width={84}
                          height={30}
                          className={`w-auto object-contain ${b.boxed ? "h-7 max-w-[60px] rounded-sm" : "h-5 max-w-[84px]"}`}
                        />
                        {b.authorised && (
                          <span className="rounded bg-[#E53935]/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#D32F2F]">
                            Authorised
                          </span>
                        )}
                      </span>
                      <a
                        href={ask(s, b)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border-2 border-[#E53935] px-3 py-1.5 text-xs font-bold text-[#D32F2F] hover:bg-[#E53935] hover:text-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Get price
                      </a>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
