"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TyreProduct } from "@/lib/data";
import { buildWhatsAppLink, formatINR } from "@/lib/utils";
import { Star, PhoneCall, Award } from "lucide-react";
import { motion } from "framer-motion";

/**
 * TyreCard — clean, honest, conversion-focused.
 *
 * REMOVED:
 * - Fake strikethrough "was" price (price * 1.2 was fabricated — damages trust)
 * - Animated stars (overkill on listing pages)
 * - Shimmer button loop
 * - Floating particles
 * - Animated underline width tracking
 * - isLoading state (added 600ms artificial delay — bad UX)
 * - TrendingUp icon (no data backing it)
 * - Pulsing green dot
 *
 * KEPT:
 * - Entrance animation (once, on scroll)
 * - Hover lift
 * - Featured ribbon
 * - WhatsApp link with full context
 * - Rating display
 * - All business logic
 */
export function TyreCard({
  product,
  vehicleSummary,
  budget,
}: {
  product: TyreProduct;
  vehicleSummary?: string;
  budget?: string;
}) {
  const message = `Hi, I want the best price for this tyre: ${product.brand} ${product.model} ${product.size}.${
    vehicleSummary ? ` Vehicle: ${vehicleSummary}.` : ""
  }${budget ? ` Budget: ₹${budget}.` : ""} Please share availability and fitment details.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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

        <CardContent className="flex-1 p-5">
          {/* Brand + stock badges */}
          <div className="flex items-center gap-2">
            <Badge className="bg-black text-white text-[10px] font-semibold tracking-wide">
              {product.brand}
            </Badge>
            {product.limited && (
              <Badge className="border border-amber-200 bg-amber-50 text-[10px] font-medium text-amber-700">
                Low stock
              </Badge>
            )}
          </div>

          {/* Name + size */}
          <h3 className="mt-3 text-lg font-bold leading-tight text-black">
            {product.model}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-black/40">{product.size}</p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`h-3.5 w-3.5 ${
                    idx < Math.round(product.rating)
                      ? "fill-[#E53935] text-[#E53935]"
                      : "fill-black/10 text-black/10"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-black/50">
              {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Price — real price only, no fake strikethrough */}
          <div className="mt-4 border-t border-black/[0.06] pt-4">
            <div className="text-2xl font-black text-black">
              {formatINR(product.price)}
            </div>
            <div className="mt-0.5 text-xs text-black/40">Best price guaranteed</div>
          </div>

          {/* Usage */}
          <div className="mt-4 rounded-xl bg-black/[0.03] px-3.5 py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-wider text-black/40">
              Best for
            </span>
            <div className="mt-0.5 text-sm font-semibold text-black">{product.usage}</div>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-[#E53935] text-sm font-semibold text-white shadow-sm shadow-[#E53935]/15 transition-all duration-200 hover:bg-[#c72f2b] hover:shadow-md active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4" />
            Get Best Price
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Named export alias for backwards compatibility
export { TyreCard as TyreCardEnhanced };
