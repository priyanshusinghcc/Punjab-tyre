import { CheckCircle2 } from "lucide-react";

const items = [
  "Unbeatable Prices",
  "Wide Range of Tyres",
  "100% Genuine Products",
  "Same-day Fitment · Rohtak",
];

/**
 * TrustStrip — single horizontal bar, no animation, no clutter.
 * Appears once, directly under the header or hero.
 */
export function TrustStrip() {
  return (
    <div className="border-b border-black/[0.06] bg-black">
      <div className="container-shell grid gap-x-4 gap-y-2 py-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#E53935]" />
            <span className="text-[11px] font-medium tracking-wide text-white/70">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
