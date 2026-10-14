"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartBadge() {
  const { itemCount, hydrated, openDrawer } = useCart();

  return (
    <button
      type="button"
      onClick={openDrawer}
      id="cart-icon-link"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-colors hover:border-black/20 hover:bg-black/[0.03]"
      aria-label={`Cart — ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
    >
      <ShoppingCart className="h-4 w-4" />
      {hydrated && itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E53935] text-[9px] font-bold text-white">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </button>
  );
}
