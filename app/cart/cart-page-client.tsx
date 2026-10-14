"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  PhoneCall,
  Info,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { storeCatalog } from "@/lib/store-catalog";

export function CartPageClient() {
  const {
    items,
    itemCount,
    subtotal,
    updateQuantity,
    removeItem,
    clearCart,
    hydrated,
  } = useCart();

  const waCartSummary = items
    .map(
      (i) =>
        `• ${i.productName} (Qty: ${i.quantity}) — ₹${(
          i.price * i.quantity
        ).toLocaleString("en-IN")}`
    )
    .join("\n");

  const waMessage = `Hi Punjab Tyre, I would like to order the following items from my cart:\n\n${waCartSummary}\n\n*Cart Total:* ₹${subtotal.toLocaleString(
    "en-IN"
  )}\n\nPlease advise on order confirmation and fulfillment (Workshop Fitment / Nationwide Delivery).`;

  // Recommended accessories/add-ons
  const recommendedItems = storeCatalog
    .filter((p) => p.type === "accessory")
    .slice(0, 3);

  if (!hydrated) {
    return (
      <div className="container-shell py-20 text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent" />
        <p className="mt-4 text-xs text-black/50">Loading your cart...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-shell py-20">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-black/[0.04] text-black/25">
            <ShoppingBag className="h-12 w-12" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-black">Your Cart is Empty</h1>
          <p className="mt-2 text-sm text-black/60">
            Looks like you haven't added any tyres, alloy wheels, or accessories yet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#E53935] px-6 text-sm font-semibold text-white shadow-md shadow-[#E53935]/20 hover:bg-[#c72f2b] transition-all"
            >
              Browse Shop Catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 text-sm font-semibold text-black/70 hover:bg-black/5 hover:text-black transition-colors"
            >
              Find by Vehicle
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-shell py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-black/40">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-black">Shop</Link>
        <span>/</span>
        <span className="text-black/70">Shopping Cart</span>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
            Shopping Cart
          </h1>
          <p className="mt-1 text-xs text-black/50">
            {itemCount} item{itemCount !== 1 ? "s" : ""} in your cart
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-semibold text-black/40 hover:text-[#E53935] transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left Column — Items List */}
        <div className="lg:col-span-8 space-y-6">
          {/* Rohtak Workshop & Delivery Notice Banner */}
          <div className="flex flex-col gap-3 rounded-2xl border border-black/[0.06] bg-[#fbfbfb] p-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Wrench className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-black">Rohtak Store: Free Professional Fitment</p>
                <p className="text-black/50">Includes laser wheel alignment & 3D balancing</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-black/60">
              <Clock className="h-3.5 w-3.5 text-black/40" />
              <span>Mon–Sat 9:30am–8pm | Sun 10am–5pm</span>
            </div>
          </div>

          {/* Cart items */}
          <div className="divide-y divide-black/[0.08] rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm">
            {items.map((item) => (
              <div key={item.productId} className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-center">
                {/* Product Image */}
                <Link
                  href={`/shop/${item.slug}`}
                  className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f8f8f8]"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.productName}
                    fill
                    className="object-contain p-2"
                    sizes="112px"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/shop/${item.slug}`}
                      className="text-base font-bold text-black hover:text-[#E53935] transition-colors"
                    >
                      {item.productName}
                    </Link>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-black/30 hover:text-[#E53935] transition-colors p-1"
                      aria-label={`Remove ${item.productName}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-black/50">
                    <span className="capitalize">{item.productType}</span>
                    {item.fitmentRequired && (
                      <>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 font-medium text-emerald-600">
                          <CheckCircle className="h-3 w-3" />
                          Free Installation
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    {/* Stepper */}
                    <div className="flex items-center rounded-xl border border-black/10 bg-white">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="flex h-9 w-9 items-center justify-center text-black/50 hover:bg-black/5 hover:text-black rounded-l-xl transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm font-bold text-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        disabled={item.quantity >= item.maxQuantity}
                        className="flex h-9 w-9 items-center justify-center text-black/50 hover:bg-black/5 hover:text-black rounded-r-xl transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-lg font-extrabold text-black">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                      <p className="text-[11px] text-black/40">
                        ₹{item.price.toLocaleString("en-IN")} each (incl. GST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended Add-ons */}
          {recommendedItems.length > 0 && (
            <div className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-black mb-4">You Might Also Need</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {recommendedItems.map((rec) => (
                  <Link
                    key={rec.id}
                    href={`/shop/${rec.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-[#fbfbfb] p-3 hover:border-black/20 hover:bg-white transition-all"
                  >
                    <div className="relative h-24 w-full overflow-hidden rounded-xl bg-white mb-2">
                      <Image
                        src={rec.images[0]}
                        alt={rec.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="160px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-black group-hover:text-[#E53935] line-clamp-1 transition-colors">
                        {rec.name}
                      </h4>
                      <p className="text-xs font-bold text-[#E53935] mt-1">
                        ₹{rec.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column — Order Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl border border-black/[0.08] bg-white p-6 shadow-md">
            <h2 className="text-lg font-bold text-black border-b border-black/[0.08] pb-4">
              Order Summary
            </h2>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between text-black/60">
                <span>Items Subtotal ({itemCount})</span>
                <span className="font-semibold text-black">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Delivery notice */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-950">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <span className="font-bold">Delivery Notice:</span>
                    <p className="mt-0.5 text-amber-900/80 leading-relaxed">
                      Delivery charges will be extra and are not included in tyre price. Dispatch within 24–48 hours nationwide. Free in-store fitment in Rohtak.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-black/[0.08] pt-4 text-base">
                <div>
                  <p className="font-extrabold text-black">Total Amount</p>
                  <p className="text-[11px] text-black/40">Inclusive of all taxes</p>
                </div>
                <p className="text-xl font-extrabold text-[#E53935]">
                  ₹{subtotal.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3">
              {/* WhatsApp instant checkout/order CTA */}
              <a
                id="cart-whatsapp-order-btn"
                href={buildWhatsAppUrl(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#E53935] text-sm font-semibold text-white shadow-md shadow-[#E53935]/20 hover:bg-[#c72f2b] hover:shadow-lg active:scale-[0.98] transition-all"
              >
                <PhoneCall className="h-4 w-4" />
                Complete Order on WhatsApp
              </a>

              {/* Continue Shopping */}
              <Link
                href="/shop"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white text-xs font-semibold text-black/70 hover:bg-black/5 hover:text-black transition-colors"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="mt-6 space-y-2.5 border-t border-black/[0.08] pt-6 text-xs text-black/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>100% Genuine Tyres with Official Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#E53935]" />
                <span>Workshop: Jind Road, Rohtak (Est. 1949)</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 shrink-0 text-black/60" />
                <span>Safe packaging & reliable nationwide transport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
