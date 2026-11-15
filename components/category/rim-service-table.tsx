"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const RIMS = ["13", "14", "15", "16", "17", "18", "19", "20", "21+"];
const COLS = ["Alignment", "Balancing", "Alignment + Balancing"] as const;

/** Rim-size table: each row asks the price for that rim on WhatsApp (prices are not shown on the site). */
export function RimServiceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white" data-track-location="rim_table">
      <div className="grid grid-cols-[0.6fr_repeat(3,1fr)_auto] items-center gap-2 bg-[#f3f4f6] px-4 py-3 text-xs font-semibold text-black/70 sm:px-6 sm:text-sm">
        <span>Rim</span>
        {COLS.map((c) => (
          <span key={c} className="text-center">
            {c}
          </span>
        ))}
        <span className="w-[92px] sm:w-[110px]" />
      </div>
      {RIMS.map((r) => (
        <div
          key={r}
          className="grid grid-cols-[0.6fr_repeat(3,1fr)_auto] items-center gap-2 border-t border-black/[0.06] px-4 py-3 sm:px-6"
        >
          <span className="text-lg font-bold text-black">{r}&quot;</span>
          {COLS.map((c) => (
            <a
              key={c}
              href={buildWhatsAppLink(`Hi Punjab Tyre, what is the price of ${c.toLowerCase()} for a ${r}-inch rim?`)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("service_price_request", { service: c, rim: r })}
              className="text-center text-xs font-semibold text-[#b5651d] underline-offset-2 hover:underline sm:text-sm"
            >
              Ask price
            </a>
          ))}
          <a
            href={buildWhatsAppLink(
              `Hi Punjab Tyre, I want to book wheel alignment and balancing for my car (${r}-inch rims). Please share the price and a time.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-[92px] items-center justify-center gap-1 rounded-lg bg-[#e89b38] py-2 text-xs font-bold text-white hover:bg-[#cf8526] sm:w-[110px] sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Book
          </a>
        </div>
      ))}
    </div>
  );
}
