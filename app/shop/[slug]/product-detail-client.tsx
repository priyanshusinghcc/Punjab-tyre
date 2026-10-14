"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart, PhoneCall, ChevronLeft, Wrench,
  Truck, CheckCircle, AlertTriangle, XCircle, Info
} from "lucide-react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/shop/product-card";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppLink, formatINR } from "@/lib/utils";
import type { StoreProduct, TyreStoreProduct } from "@/lib/store-catalog";

type StockStatus = {
  label: string;
  variant: "in-stock" | "low-stock" | "out-of-stock";
};

function buildWAMessage(product: StoreProduct): string {
  if (product.type === "tyre") {
    const p = product as TyreStoreProduct;
    return `Hi, I want to enquire about: ${p.tyreBrand} ${p.tyreModel} ${p.size}. Please confirm availability and fitment details.`;
  }
  return `Hi, I'm interested in ${product.name}. Please share availability and pricing.`;
}

export function ProductDetailClient({
  product,
  inStock,
  stockStatus,
  specs,
  related,
  deliveryNotice,
}: {
  product: StoreProduct;
  inStock: boolean;
  stockStatus: StockStatus;
  specs: { label: string; value: string }[];
  related: StoreProduct[];
  deliveryNotice: string;
}) {
  const { addItem, openDrawer } = useCart();
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  function handleAddToCart() {
    if (!inStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 5000);
  }

  const stockIcon =
    stockStatus.variant === "in-stock" ? (
      <CheckCircle className="h-4 w-4 text-emerald-500" />
    ) : stockStatus.variant === "low-stock" ? (
      <AlertTriangle className="h-4 w-4 text-amber-500" />
    ) : (
      <XCircle className="h-4 w-4 text-black/30" />
    );

  return (
    <main>
      {/* Breadcrumb */}
      <div className="border-b border-black/[0.06] bg-white">
        <div className="container-shell flex h-11 items-center gap-2 text-xs text-black/40">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <span>/</span>
          <span className="text-black/70 line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <div className="container-shell py-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Image panel ── */}
          <div>
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-black/[0.06] bg-[#F7F7F7]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[activeImage] ?? "/images/product-placeholder.png"}
                alt={product.name}
                className="h-full w-full object-contain p-8"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/product-placeholder.png";
                }}
              />
              {!inStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                  <span className="rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-semibold text-black/50">
                    Out of Stock
                  </span>
                </div>
              )}
            </motion.div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-16 w-16 overflow-hidden rounded-xl border-2 bg-[#F7F7F7] transition-colors ${
                      activeImage === i ? "border-black" : "border-black/[0.06]"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="h-full w-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
          >
            {/* Back link */}
            <Link
              href="/shop"
              className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-black/40 hover:text-black"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Back to Shop
            </Link>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {product.tags.includes("popular") && (
                <span className="rounded-full bg-[#E53935] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
              {product.tags.includes("new-arrival") && (
                <span className="rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  New Arrival
                </span>
              )}
              {product.tags.includes("same-day-fitment") && (
                <span className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-medium text-black/50">
                  <Wrench className="h-3 w-3" />
                  Same-day fitment available
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-2xl font-black leading-tight text-black md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-3 text-sm leading-7 text-black/55">{product.description}</p>

            {/* Stock status */}
            <div className="mt-5 flex items-center gap-2">
              {stockIcon}
              <span
                className={`text-sm font-semibold ${
                  stockStatus.variant === "in-stock"
                    ? "text-emerald-600"
                    : stockStatus.variant === "low-stock"
                    ? "text-amber-600"
                    : "text-black/35"
                }`}
              >
                {stockStatus.label}
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 rounded-2xl border border-black/[0.06] bg-[#F7F7F7] p-5">
              <div className="text-3xl font-black text-black">{formatINR(product.price)}</div>
              <div className="mt-1 text-xs text-black/40">
                {product.type === "alloy" ? "Per set of 4 wheels · " : ""}All prices inclusive of taxes
              </div>

              {/* Delivery notice for products that need fitment/shipping */}
              {product.fitmentRequired && (
                <div className="mt-3 flex gap-2 rounded-xl border border-black/[0.06] bg-white p-3">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-black/30" />
                  <p className="text-[11px] leading-relaxed text-black/50">
                    Delivery charges are not included. Actual charges vary by location and will be communicated after order placement.
                  </p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-col gap-2.5">
              {/* Add to Cart — primary */}
              <button
                id={`pdp-add-to-cart-${product.id}`}
                onClick={handleAddToCart}
                disabled={!inStock}
                className={`inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  inStock
                    ? added
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "bg-[#E53935] text-white shadow-md shadow-[#E53935]/15 hover:bg-[#c72f2b] hover:shadow-lg active:scale-[0.98]"
                    : "cursor-not-allowed bg-black/5 text-black/25"
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {!inStock ? "Out of Stock" : added ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              {/* Instant Cart Links (appears when added) */}
              {added && (
                <div className="grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <button
                    type="button"
                    onClick={openDrawer}
                    className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl bg-black text-xs font-semibold text-white hover:bg-black/85 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Open Cart
                  </button>
                  <Link
                    href="/cart"
                    className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-black/15 bg-white text-xs font-semibold text-black hover:bg-black/5 transition-colors"
                  >
                    View Cart Page →
                  </Link>
                </div>
              )}

              {/* WhatsApp — secondary, always visible */}
              <a
                id={`pdp-whatsapp-${product.id}`}
                href={buildWhatsAppLink(buildWAMessage(product))}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-black/10 text-sm font-semibold text-black/60 transition-colors hover:border-black/20 hover:text-black"
              >
                <PhoneCall className="h-4 w-4" />
                Get Best Price on WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-black/40">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                100% Genuine Product
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 shrink-0 text-black/30" />
                Expert fitment in Rohtak
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 shrink-0 text-black/30" />
                Nationwide delivery
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 shrink-0 text-black/30" />
                77+ years trusted
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <div className="mt-14">
          <h2 className="text-xl font-black text-black">Specifications</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.07]">
            {specs.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-start gap-4 px-5 py-3.5 text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"
                }`}
              >
                <span className="w-40 shrink-0 font-medium text-black/40">{row.label}</span>
                <span className="font-semibold text-black">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black text-black">You may also like</h2>
              <Link href="/shop" className="text-xs font-semibold text-[#E53935] hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
