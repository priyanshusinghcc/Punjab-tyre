"use client";

/* eslint-disable @next/next/no-img-element -- pre-compressed WebP thumbnails; plain <img> keeps the Vercel image quota free */

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { ONYX_DESIGNS, ONYX_IMG, ONYX_THUMB, type OnyxDesign, type OnyxFinish } from "@/lib/onyx-collection";
import { CAR_PCDS, CAR_PCD_BRANDS, findCarPcd, type CarPcd } from "@/lib/car-pcd";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export type AlloyBrandOption = { name: string; slug: string; logo: string; authorised?: boolean; hasCatalogue: boolean };

const INITIAL = 12;
const uniq = <T,>(a: T[]) => [...new Set(a)];

const designName = (d: OnyxDesign) => {
  if (d.code) return `Onyx ${d.code}`;
  const rims = uniq(d.finishes.flatMap((f) => f.fit.map((x) => x[0])));
  return `Onyx ${rims[0]}″ design`;
};
const matches = (f: OnyxFinish, rim: number | null, pcd: string | null) =>
  f.fit.some((x) => (rim === null || x[0] === rim) && (pcd === null || x[2] === pcd));

function priceLink(name: string, finish: string, rim: number | null, pcd: string | null, car: CarPcd | null) {
  const parts = [name];
  if (finish !== "As shown") parts.push(finish);
  if (rim) parts.push(`${rim} inch`);
  if (pcd && !car) parts.push(`PCD ${pcd}`);
  return buildWhatsAppLink(
    `Hi Punjab Tyre, please share the price and stock of ${parts.join(", ")} alloy wheels for ${car ? `my ${car.brand} ${car.model}` : "my car"}.`,
  );
}

function fitmentLines(f: OnyxFinish) {
  const map = new Map<string, string[]>();
  for (const [rim, width, pcd] of f.fit) {
    const k = `${rim}″${width ? ` × ${width}J` : ""}`;
    const list = map.get(k) ?? [];
    if (pcd && !list.includes(pcd)) list.push(pcd);
    map.set(k, list);
  }
  return [...map.entries()];
}

function Dropdown(props: { label: string; value: string; onChange: (v: string) => void; children: React.ReactNode; pill?: boolean }) {
  const cls = props.pill
    ? "h-11 w-full appearance-none rounded-full border border-black/10 bg-[#f3f4f6] px-4 pr-9 text-center text-sm font-medium text-black outline-none focus:border-black"
    : "h-12 w-full appearance-none rounded-xl border border-black/10 bg-white px-4 pr-10 text-[15px] text-black outline-none focus:border-black";
  return (
    <div className="relative w-full">
      <select aria-label={props.label} value={props.value} onChange={(e) => props.onChange(e.target.value)} className={cls}>
        {props.children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/60" />
    </div>
  );
}

/** Alloy wheel browser for /alloy-wheels: pick your car, size, PCD and brand; browse designs; ask the price on WhatsApp. */
export function AlloyBrowser({ brands }: { brands: AlloyBrandOption[] }) {
  const [car, setCar] = useState<CarPcd | null>(null);
  const [rim, setRim] = useState<number | null>(null);
  const [pcd, setPcd] = useState<string | null>(null);
  const [brand, setBrand] = useState("");
  const [chosen, setChosen] = useState<Record<number, string>>({});
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState<{ d: number; f: number } | null>(null);

  useEffect(() => {
    try {
      const found = findCarPcd(new URLSearchParams(window.location.search).get("car"));
      if (found) {
        setCar(found);
        setPcd(found.pcd);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const allFits = useMemo(() => ONYX_DESIGNS.flatMap((d) => d.finishes.flatMap((f) => f.fit)), []);
  const rims = useMemo(() => uniq(allFits.filter((x) => !pcd || x[2] === pcd).map((x) => x[0])).sort((a, b) => a - b), [allFits, pcd]);
  const pcds = useMemo(
    () =>
      uniq(allFits.filter((x) => !rim || x[0] === rim).map((x) => x[2]))
        .filter((x): x is string => !!x)
        .sort((a, b) => parseFloat(a) - parseFloat(b) || a.localeCompare(b)),
    [allFits, rim],
  );

  const selectedBrand = brands.find((b) => b.name === brand) ?? null;
  const showOnyx = !selectedBrand || selectedBrand.hasCatalogue;
  const visible = useMemo(
    () =>
      showOnyx
        ? ONYX_DESIGNS.map((d, i) => ({ d, i, finishes: d.finishes.filter((f) => matches(f, rim, pcd)) })).filter((x) => x.finishes.length)
        : [],
    [rim, pcd, showOnyx],
  );
  const shown = showAll ? visible : visible.slice(0, INITIAL);

  const pickCar = (slug: string) => {
    const found = findCarPcd(slug);
    setCar(found);
    setPcd(found ? found.pcd : null);
    setRim(null);
    setShowAll(false);
    if (found) trackEvent("alloy_car_select", { car: found.slug, pcd: found.pcd, brand_page: "alloy_wheels" });
  };

  const openFinishes = open ? ONYX_DESIGNS[open.d].finishes.filter((f) => matches(f, rim, pcd)) : [];
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step: number) => setOpen((o) => (o ? { d: o.d, f: (o.f + step + openFinishes.length) % openFinishes.length } : o)),
    [openFinishes.length],
  );
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);
  const lb = open ? openFinishes[open.f] : null;
  const lbDesign = open ? ONYX_DESIGNS[open.d] : null;

  return (
    <div data-track-location="alloy_browser" id="collection" className="scroll-mt-28">
      <div className="rounded-3xl bg-[#202125] p-4 sm:p-5">
        <h2 className="text-lg font-bold text-white sm:text-xl">Find alloys for your car</h2>
        <div className="mt-3">
          <Dropdown label="Select your car" value={car?.slug ?? ""} onChange={pickCar}>
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
          </Dropdown>
        </div>
        <p className="mt-2 text-xs text-white/70">
          {car ? (
            <>
              Your {car.model} uses a <strong className="text-white">{car.pcd}</strong> stud pattern (PCD). We confirm centre
              bore and offset for your exact variant before fitting.
            </>
          ) : (
            "Car not listed? Pick the rim size and PCD below, or WhatsApp us your car model."
          )}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Dropdown label="Rim size" pill value={rim ? String(rim) : ""} onChange={(v) => setRim(v ? Number(v) : null)}>
          <option value="">Rim Size</option>
          {rims.map((r) => (
            <option key={r} value={r}>
              {r} inch
            </option>
          ))}
        </Dropdown>
        <span className="text-black/40">/</span>
        <Dropdown
          label="PCD"
          pill
          value={pcd ?? ""}
          onChange={(v) => {
            setPcd(v || null);
            if (car && car.pcd !== v) setCar(null);
          }}
        >
          <option value="">PCD (bolt pattern)</option>
          {pcds.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Dropdown>
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by alloy brand">
        <button
          type="button"
          onClick={() => setBrand("")}
          className={`h-14 shrink-0 rounded-xl border-2 bg-white px-5 text-sm font-bold ${brand === "" ? "border-black" : "border-black/[0.08]"}`}
        >
          All Brands
        </button>
        {brands.map((b) => (
          <button
            key={b.slug}
            type="button"
            aria-label={b.name}
            onClick={() => setBrand(b.name)}
            className={`relative grid h-14 w-32 shrink-0 place-items-center rounded-xl border-2 bg-white px-4 ${
              brand === b.name ? "border-black" : "border-black/[0.08]"
            }`}
          >
            <Image src={b.logo} alt={b.name} width={96} height={30} className="h-7 w-auto max-w-[92px] object-contain" />
            {b.authorised && (
              <span className="absolute -top-2 right-1 rounded-full bg-[#E53935] px-1.5 py-px text-[9px] font-bold uppercase text-white">
                Authorised
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-5 border-t border-black/[0.08] pt-5">
        {!showOnyx && selectedBrand ? (
          <div className="grid items-center gap-5 rounded-3xl border border-black/[0.08] bg-white p-6 sm:grid-cols-[auto_1fr] sm:p-8">
            <Image src={selectedBrand.logo} alt={selectedBrand.name} width={160} height={56} className="h-12 w-auto" />
            <div>
              <h2 className="text-xl font-bold text-black">
                {selectedBrand.authorised ? `Authorised ${selectedBrand.name} store` : `${selectedBrand.name} alloy wheels`}
              </h2>
              <p className="mt-1 text-sm text-black/60">
                The {selectedBrand.name} design gallery is coming to the website soon. Until then, message us your car and we&apos;ll
                send current {selectedBrand.name} designs, sizes and prices that fit it — or see them on our display wall in
                store.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={buildWhatsAppLink(
                    `Hi Punjab Tyre, please send ${selectedBrand.name} alloy wheel designs and prices${car ? ` for my ${car.brand} ${car.model}` : ""}${rim ? ` in ${rim} inch` : ""}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1fb857]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get {selectedBrand.name} designs on WhatsApp
                </a>
                <Link
                  href={`/alloy-wheels/${selectedBrand.slug}`}
                  className="inline-flex items-center rounded-xl border border-black/15 px-5 py-3 text-sm font-bold text-black hover:border-black/40"
                >
                  About {selectedBrand.name}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              {visible.length} design{visible.length === 1 ? "" : "s"} found
              {car ? ` for ${car.model}` : ""}
              {rim ? ` in ${rim}″` : ""}
            </h2>
            {visible.length === 0 ? (
              <p className="mt-4 rounded-2xl border border-dashed border-black/15 p-6 text-sm text-black/60">
                No photos for this combination yet — stock changes often.{" "}
                <a
                  href={buildWhatsAppLink(
                    `Hi Punjab Tyre, do you have alloy wheels${rim ? ` in ${rim} inch` : ""} for ${car ? `my ${car.brand} ${car.model}` : `PCD ${pcd}`}?`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#128C7E] underline"
                >
                  Ask us on WhatsApp
                </a>
              </p>
            ) : (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                {shown.map(({ d, i, finishes }) => {
                  const fIdx = Math.max(0, finishes.findIndex((f) => f.name === chosen[i]));
                  const f = finishes[fIdx];
                  const sizes = uniq(f.fit.filter((x) => !pcd || x[2] === pcd).map((x) => x[0])).sort((a, b) => a - b);
                  return (
                    <article key={i} className="flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-[#f3f4f6]">
                      <button
                        type="button"
                        onClick={() => setOpen({ d: i, f: fIdx })}
                        className="group relative m-2 mb-0 aspect-square overflow-hidden rounded-2xl bg-white"
                        aria-label={`View ${designName(d)} ${f.name} photo and sizes`}
                      >
                        <img
                          src={ONYX_THUMB(f.img)}
                          alt={`${designName(d)} alloy wheel${f.name !== "As shown" ? ` in ${f.name} finish` : ""} at Punjab Tyre Rohtak`}
                          width={440}
                          height={440}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        {finishes.length > 1 && (
                          <span className="absolute right-2 top-2 rounded-full bg-[#fde3e3] px-2 py-0.5 text-[10px] font-semibold text-[#D32F2F]">
                            {finishes.length} finishes
                          </span>
                        )}
                      </button>
                      <div className="flex flex-1 flex-col p-3 sm:p-4">
                        <h3 className="text-base font-bold text-black sm:text-lg">{designName(d)}</h3>
                        <p className="text-xs text-black/55">{f.name !== "As shown" ? f.name : "Finish on request"}</p>
                        {finishes.length > 1 && (
                          <div className="mt-2 flex flex-wrap gap-1" role="group" aria-label="Finish">
                            {finishes.map((x, k) => (
                              <button
                                key={x.name}
                                type="button"
                                onClick={() => setChosen((c) => ({ ...c, [i]: x.name }))}
                                className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${
                                  k === fIdx ? "border-[#E53935] bg-white text-[#D32F2F]" : "border-black/10 bg-white text-black/55"
                                }`}
                              >
                                {x.name}
                              </button>
                            ))}
                          </div>
                        )}
                        <p className="mt-2 text-[11px] text-black/50">Sizes: {sizes.map((s) => `${s}″`).join(" · ")}</p>
                        <div className="mt-auto pt-3">
                          <a
                            href={priceLink(designName(d), f.name, rim, pcd, car)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-[#E53935] bg-white px-3 py-2 text-xs font-bold text-[#D32F2F] hover:bg-[#E53935] hover:text-white"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            Get price
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
            {!showAll && visible.length > INITIAL && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="rounded-full border border-black/15 bg-white px-6 py-2.5 text-sm font-bold text-black hover:border-black/40"
                >
                  Show all {visible.length} designs
                </button>
              </div>
            )}
            <p className="mt-4 text-xs text-black/45">
              Onyx product photos courtesy of Onyx Wheels. Advantec and Neo galleries coming soon.
            </p>
          </>
        )}
      </div>

      {open && lb && lbDesign && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${designName(lbDesign)} ${lb.name}`}
          onClick={close}
        >
          <div
            className="grid max-h-[92vh] w-full max-w-4xl gap-4 overflow-y-auto rounded-2xl bg-white p-4 md:grid-cols-[1.2fr_1fr] md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={ONYX_IMG(lb.img)} alt={`${designName(lbDesign)} alloy wheel`} className="mx-auto max-h-[60vh] w-full rounded-xl bg-[#f4f4f4] object-contain" />
              {openFinishes.length > 1 && (
                <>
                  <button type="button" onClick={() => move(-1)} aria-label="Previous finish" className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={() => move(1)} aria-label="Next finish" className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E53935]">Onyx Wheels</p>
              <h3 className="mt-1 text-2xl font-bold text-black">{designName(lbDesign)}</h3>
              <p className="mt-1 text-sm text-black/60">
                {lb.name !== "As shown" ? `${lb.name} finish` : "Finish on request"}
                {openFinishes.length > 1 ? ` · ${open.f + 1} of ${openFinishes.length}` : ""}
              </p>
              <h4 className="mt-5 text-xs font-bold uppercase tracking-wide text-black/45">Available sizes</h4>
              <ul className="mt-2 divide-y divide-black/[0.06] text-sm">
                {fitmentLines(lb).map(([size, list]) => (
                  <li key={size} className="flex justify-between gap-3 py-1.5">
                    <span className="font-semibold text-black">{size}</span>
                    <span className="text-right text-black/60">{list.length ? `PCD ${list.join(", ")}` : "PCD on request"}</span>
                  </li>
                ))}
              </ul>
              <a
                href={priceLink(designName(lbDesign), lb.name, rim, pcd, car)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1fb857]"
              >
                <MessageCircle className="h-4 w-4" />
                Get price on WhatsApp
              </a>
            </div>
          </div>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
