"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    hydrated,
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeDrawer();
    }
    if (isDrawerOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  const waCartSummary = items
    .map((i) => `• ${i.productName} (x${i.quantity}) - ₹${(i.price * i.quantity).toLocaleString("en-IN")}`)
    .join("\n");
  const waCartMessage = `Hi Punjab Tyre, I would like to order the following items from my cart:\n\n${waCartSummary}\n\n*Total:* ₹${subtotal.toLocaleString("en-IN")}\nPlease let me know the availability and dispatch details.`;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Drawer panel */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 animate-in slide-in-from-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/[0.08] px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#E53935]" />
            <h2 className="text-base font-bold tracking-tight text-black">
              Your Cart {hydrated && itemCount > 0 ? `(${itemCount})` : ""}
            </h2>
          </div>
          <button
            onClick={closeDrawer}
            className="flex h-8 w-8 items-center justify-center rounded-full text-black/40 hover:bg-black/5 hover:text-black transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Workshop Fitment banner */}
        <div className="bg-[#E53935]/[0.06] border-b border-[#E53935]/15 px-6 py-2.5 flex items-center gap-2 text-xs font-medium text-[#c72f2b]">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#E53935]" />
          <span>Free fitment & wheel balancing in Rohtak store</span>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!hydrated || items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/[0.04] text-black/30 mb-4">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="text-base font-semibold text-black">Your cart is empty</h3>
              <p className="mt-1 text-xs text-black/50 max-w-[220px]">
                Explore our tyres, alloy wheels, and premium car accessories.
              </p>
              <Link
                href="/shop"
                onClick={closeDrawer}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-xs font-semibold text-white hover:bg-black/90 transition-colors"
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-black/[0.06]">
              {items.map((item) => (
                <div key={item.productId} className="flex gap-4 py-4">
                  {/* Thumbnail */}
                  <Link
                    href={`/shop/${item.slug}`}
                    onClick={closeDrawer}
                    className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-black/[0.06] bg-[#f9f9f9]"
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.productName}
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/shop/${item.slug}`}
                          onClick={closeDrawer}
                          className="text-xs font-bold text-black hover:text-[#E53935] line-clamp-2 transition-colors"
                        >
                          {item.productName}
                        </Link>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-black/30 hover:text-[#E53935] transition-colors p-1"
                          aria-label={`Remove ${item.productName}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="mt-0.5 text-xs font-semibold text-[#E53935]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-black/10 bg-white">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-black/50 hover:bg-black/5 hover:text-black rounded-l-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          disabled={item.quantity >= item.maxQuantity}
                          className="flex h-7 w-7 items-center justify-center text-black/50 hover:bg-black/5 hover:text-black rounded-r-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-black">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer (only if cart has items) */}
        {hydrated && items.length > 0 && (
          <div className="border-t border-black/[0.08] bg-[#fafafa] px-6 py-4">
            <div className="mb-3 space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-black/60 font-medium">Subtotal</span>
                <span className="text-base font-bold text-black">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-[11px] text-black/40">
                All prices inclusive of applicable taxes. Delivery charges extra (communicated at dispatch).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#E53935] text-xs font-semibold text-white shadow-md shadow-[#E53935]/20 hover:bg-[#c72f2b] transition-all"
              >
                View Full Cart & Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={buildWhatsAppUrl(waCartMessage)}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white text-xs font-semibold text-black/70 hover:bg-black/5 hover:text-black transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                Order via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
