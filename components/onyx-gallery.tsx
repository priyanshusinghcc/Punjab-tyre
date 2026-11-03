"use client";

/* eslint-disable @next/next/no-img-element -- images are pre-compressed WebP thumbnails; plain <img> keeps Vercel image quota free */

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { ONYX_DESIGNS, ONYX_IMG, ONYX_THUMB, type OnyxDesign, type OnyxFinish } from "@/lib/onyx-collection";
import { buildWhatsAppLink } from "@/lib/utils";

const INITIAL = 12;

function designName(d: OnyxDesign, rimHint?: number) {
  if (d.code) return `Onyx ${d.code}`;
  const rims = [...new Set(d.finishes.flatMap((f) => f.fit.map((x) => x[0])))];
  return `Onyx ${rimHint ?? rims[0]}″ design`;
}

function matches(f: OnyxFinish, rim: number | null, pcd: string | null) {
  return f.fit.some((x) => (rim === null || x[0] === rim) && (pcd === null || x[2] === pcd));
}

function unique<T>(arr: T[]) {
  return [...new Set(arr)];
}

function whatsapp(d: OnyxDesign, finish: string, rim: number | null, pcd: string | null) {
  const parts = [designName(d)];
  if (finish !== "As shown") parts.push(finish);
  if (rim) parts.push(`${rim} inch`);
  if (pcd) parts.push(`PCD ${pcd}`);
  return buildWhatsAppLink(
    `Hi Punjab Tyre, I like the ${parts.join(", ")} alloy wheels on your website. Please share price and availability for my car.`,
  );
}

/** Groups fitment rows into "16″ × 7.0J — 4x100, 5x114.3" lines. */
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

export function OnyxGallery() {
  const [rim, setRim] = useState<number | null>(null);
  const [pcd, setPcd] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [chosen, setChosen] = useState<Record<number, string>>({});
  const [open, setOpen] = useState<{ d: number; f: number } | null>(null);

  const rims = useMemo(
    () => unique(ONYX_DESIGNS.flatMap((d) => d.finishes.flatMap((f) => f.fit.map((x) => x[0])))).sort((a, b) => a - b),
    [],
  );
  const pcds = useMemo(
    () =>
      unique(
        ONYX_DESIGNS.flatMap((d) =>
          d.finishes.flatMap((f) => f.fit.filter((x) => rim === null || x[0] === rim).map((x) => x[2])),
        ).filter((x): x is string => !!x),
      ).sort((a, b) => parseFloat(a) - parseFloat(b) || a.localeCompare(b)),
    [rim],
  );

  const visible = useMemo(
    () =>
      ONYX_DESIGNS.map((d, i) => ({ d, i, finishes: d.finishes.filter((f) => matches(f, rim, pcd)) })).filter(
        (x) => x.finishes.length > 0,
      ),
    [rim, pcd],
  );
  const shown = showAll ? visible : visible.slice(0, INITIAL);
  const totalPhotos = visible.reduce((n, x) => n + x.finishes.length, 0);

  const openFinishes = open ? ONYX_DESIGNS[open.d].finishes.filter((f) => matches(f, rim, pcd)) : [];
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step: number) =>
      setOpen((o) => (o === null ? o : { d: o.d, f: (o.f + step + openFinishes.length) % openFinishes.length })),
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

  const chip = (active: boolean) =>
    `shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
      active ? "border-black bg-black text-white" : "border-black/10 bg-white text-black/70 hover:border-black/30"
    }`;

  const lb = open ? openFinishes[open.f] : null;
  const lbDesign = open ? ONYX_DESIGNS[open.d] : null;

  return (
    <section className="bg-white" id="collection" data-track-location="onyx_collection">
      <div className="container-shell py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">Onyx collection</p>
          <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">Browse Onyx alloy designs</h2>
          <p className="mt-3 text-sm leading-relaxed text-black/55">
            Pick your rim size and bolt pattern (PCD) to see the Onyx designs that fit. Tap a photo for all sizes, or send
            us the design on WhatsApp for price and stock. Not sure of your PCD? Tell us your car and we&apos;ll check.
          </p>
        </div>

        <div className="mt-7 space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by rim size">
            <span className="w-12 shrink-0 text-[11px] font-bold uppercase tracking-wide text-black/40">Size</span>
            <button type="button" className={chip(rim === null)} onClick={() => { setRim(null); setPcd(null); }}>
              All
            </button>
            {rims.map((r) => (
              <button
                key={r}
                type="button"
                className={chip(rim === r)}
                onClick={() => {
                  setRim(r);
                  setPcd(null);
                }}
              >
                {r}″
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by PCD">
            <span className="w-12 shrink-0 text-[11px] font-bold uppercase tracking-wide text-black/40">PCD</span>
            <button type="button" className={chip(pcd === null)} onClick={() => setPcd(null)}>
              All
            </button>
            {pcds.map((p) => (
              <button key={p} type="button" className={chip(pcd === p)} onClick={() => setPcd(p)}>
                {p}
              </button>
            ))}
          </div>
          <p className="text-xs text-black/45">
            {visible.length} designs · {totalPhotos} finishes
            {rim ? ` in ${rim}″` : ""}
            {pcd ? ` · PCD ${pcd}` : ""}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shown.map(({ d, i, finishes }) => {
            const fIdx = Math.max(0, finishes.findIndex((f) => f.name === chosen[i]));
            const f = finishes[fIdx];
            const sizes = unique(f.fit.filter((x) => pcd === null || x[2] === pcd).map((x) => x[0])).sort((a, b) => a - b);
            return (
              <article key={i} className="flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen({ d: i, f: fIdx })}
                  className="group relative aspect-square overflow-hidden bg-[#f4f4f4]"
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
                    <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {finishes.length} finishes
                    </span>
                  )}
                </button>
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h3 className="text-sm font-black text-black sm:text-base">{designName(d, rim ?? undefined)}</h3>
                  <p className="mt-0.5 text-xs text-black/55">
                    {f.name !== "As shown" ? f.name : "Ask us for the finish name"}
                    {d.note ? ` · ${d.note}` : ""}
                  </p>
                  {finishes.length > 1 && (
                    <div className="mt-2 flex flex-wrap gap-1" role="group" aria-label="Finish">
                      {finishes.map((x, k) => (
                        <button
                          key={x.name}
                          type="button"
                          onClick={() => setChosen((c) => ({ ...c, [i]: x.name }))}
                          className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${
                            k === fIdx ? "border-[#E53935] bg-[#E53935]/10 text-[#E53935]" : "border-black/10 text-black/55"
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
                      href={whatsapp(d, f.name, rim, pcd)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-bold text-white hover:bg-[#1fb857]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Ask price
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && visible.length > INITIAL && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-bold text-black hover:border-black/40"
            >
              Show all {visible.length} designs
            </button>
          </div>
        )}
        <p className="mt-6 text-xs text-black/40">
          Product photos courtesy of Onyx Wheels. Stock changes often — message us to confirm your size before visiting.
        </p>
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
              <img
                src={ONYX_IMG(lb.img)}
                alt={`${designName(lbDesign)} alloy wheel${lb.name !== "As shown" ? ` in ${lb.name} finish` : ""}`}
                className="mx-auto max-h-[60vh] w-full rounded-xl bg-[#f4f4f4] object-contain"
              />
              {openFinishes.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous finish"
                    className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next finish"
                    className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">Onyx Wheels</p>
              <h3 className="mt-1 text-2xl font-black text-black">{designName(lbDesign)}</h3>
              <p className="mt-1 text-sm text-black/60">
                {lb.name !== "As shown" ? `${lb.name} finish` : "Finish name on request"}
                {openFinishes.length > 1 ? ` · ${open.f + 1} of ${openFinishes.length} finishes` : ""}
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
                href={whatsapp(lbDesign, lb.name, rim, pcd)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1fb857]"
              >
                <MessageCircle className="h-4 w-4" />
                Ask price on WhatsApp
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
