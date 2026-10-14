"use client";

/**
 * components/shop/product-card.tsx
 * Product card for the /shop catalog grid.
 * Design mirrors TyreCard exactly — same border radius, shadow,
 * badge style, and button pattern.
 * Shows both "Add to Cart" (primary) and "WhatsApp" (secondary).
 */

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, PhoneCall, Award, Truck, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { buildWhatsAppLink, formatINR } from "@/lib/utils";
import { isInStock, getStockStatus } from "@/lib/store-catalog";
import type { StoreProduct, TyreStoreProduct, AlloyStoreProduct } from "@/lib/store-catalog";

// ─── Helpers ──────────────────────────────────────────────────────

function productSubtitle(product: StoreProduct): string {
  if (product.type === "tyre") {
    const p = product as TyreStoreProduct;
    return `${p.size} · ${p.usage}`;
  }
  if (product.type === "alloy") {
    const p = product as AlloyStoreProduct;
    return `${p.rimSize}" · ${p.finish} · ${p.pcd}`;
  }
  return product.type === "accessory" ? product.category : "";
}

function buildWhatsAppMsg(product: StoreProduct): string {
  if (product.type === "tyre") {
    const p = product as TyreStoreProduct;
    return `Hi, I want the best price for: ${p.tyreBrand} ${p.tyreModel} ${p.size}. Please share availability and fitment details.`;
  }
  if (product.type === "alloy") {
    const p = product as AlloyStoreProduct;
    return `Hi, I'm interested in ${p.alloyBrand} ${p.rimSize}" ${p.finish} alloy wheels (${p.pcd}). Please share fitment details and pricing.`;
  }
  return `Hi, I'm interested in ${product.name}. Please share availability.`;
}

// ─── Component ────────────────────────────────────────────────────

export function ProductCard({
  product,
  index = 0,
}: {
  product: StoreProduct;
  index?: number;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const inStock = isInStock(product);
  const stockStatus = getStockStatus(product);

  function handleAddToCart() {
    if (!inStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -4 }}
    >
      <Card className="group relative flex h-full flex-col overflow-hidden border-black/[0.07] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/8">
        {/* Featured ribbon */}
        {product.featured && (
          <div className="absolute right-0 top-0 z-10">
            <div className="flex items-center gap-1 rounded-bl-2xl rounded-tr-[inherit] bg-[#E53935] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
              <Award className="h-3 w-3" />
              Popular
            </div>
          </div>
        )}

        {/* Product image */}
        <Link href={`/shop/${product.slug}`} className="block">
          <div className="relative h-44 overflow-hidden bg-[#F7F7F7]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0] ?? "/images/product-placeholder.png"}
              alt={product.name}
              className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/product-placeholder.png";
              }}
            />
            {/* Out of stock overlay */}
            {!inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px]">
                <span className="rounded-full border border-black/15 bg-white px-3 py-1.5 text-xs font-semibold text-black/50">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </Link>

        <CardContent className="flex flex-1 flex-col p-5">
          {/* Brand badge + stock */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge className="bg-black text-[10px] font-semibold tracking-wide text-white">
              {product.type === "tyre"
                ? (product as TyreStoreProduct).tyreBrand
                : product.type === "alloy"
                ? (product as AlloyStoreProduct).alloyBrand
                : product.type}
            </Badge>
            {stockStatus.variant === "low-stock" && (
              <Badge className="border border-amber-200 bg-amber-50 text-[10px] font-medium text-amber-700">
                {stockStatus.label}
              </Badge>
            )}
            {product.tags.includes("new-arrival") && (
              <Badge className="border border-blue-100 bg-blue-50 text-[10px] font-medium text-blue-700">
                New
              </Badge>
            )}
          </div>

          {/* Name */}
          <Link href={`/shop/${product.slug}`}>
            <h3 className="mt-3 text-base font-bold leading-snug text-black transition-colors hover:text-[#E53935]">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle */}
          <p className="mt-0.5 text-xs font-medium text-black/40">{productSubtitle(product)}</p>

          {/* Tags row */}
          <div className="mt-3 flex flex-wrap gap-2">
            {product.tags.includes("same-day-fitment") && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-black/40">
                <Wrench className="h-3 w-3" />
                Same-day fitment
              </span>
            )}
            {product.type === "alloy" && (
              <span className="text-[10px] font-medium text-black/40">
                Per set of 4
              </span>
            )}
            {product.type === "accessory" && !(product as { fitmentRequired: boolean }).fitmentRequired && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-black/40">
                <Truck className="h-3 w-3" />
                Ships nationwide
              </span>
            )}
          </div>

          {/* Price */}
          <div className="mt-auto border-t border-black/[0.06] pt-4 mt-4">
            <div className="text-2xl font-black text-black">{formatINR(product.price)}</div>
            <div className="mt-0.5 text-[10px] text-black/35">
              {product.type === "alloy" ? "Per set of 4 · " : ""}All prices inclusive of taxes
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 p-5 pt-0">
          {/* Add to Cart — primary */}
          <button
            id={`add-to-cart-${product.id}`}
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition-all duration-200 ${
              inStock
                ? added
                  ? "bg-black text-white"
                  : "bg-[#E53935] text-white shadow-sm shadow-[#E53935]/15 hover:bg-[#c72f2b] hover:shadow-md active:scale-[0.98]"
                : "cursor-not-allowed bg-black/5 text-black/25"
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            {!inStock ? "Out of Stock" : added ? "Added!" : "Add to Cart"}
          </button>

          {/* WhatsApp — secondary (always visible) */}
          <a
            href={buildWhatsAppLink(buildWhatsAppMsg(product))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-2xl border border-black/10 text-xs font-semibold text-black/55 transition-colors hover:border-black/20 hover:text-black"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            Get Best Price on WhatsApp
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
