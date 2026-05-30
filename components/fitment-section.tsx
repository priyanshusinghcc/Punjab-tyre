"use client";

import Image from "next/image";
import { MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { siteCopy } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * FitmentSection — alternating layout break (dark BG) to vary page rhythm.
 * Uses a full-width split without Card wrappers for a magazine feel.
 */
export function FitmentSection() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="container-shell grid items-stretch gap-0 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[340px] overflow-hidden lg:min-h-[480px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80"
            alt="Punjab Tyre fitment workshop in Rohtak"
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Overlay pill */}
          <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-[#E53935]" />
            Same-day fitment in Rohtak
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-8 py-14 lg:px-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
            Visit Our Store
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
            Punjab Tyre,
            <br />
            Rohtak
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/50">
            77+ years of trusted service. Genuine tyre brands, expert advice,
            and fast same-day fitment at our Rohtak store.
          </p>

          {/* Info pills */}
          <div className="mt-7 space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <div>
                <div className="text-xs font-semibold text-white/80">
                  Location
                </div>
                <div className="mt-0.5 text-xs text-white/45">
                  Punjab Tyre, Rohtak, Haryana
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3.5">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#E53935]" />
              <div>
                <div className="text-xs font-semibold text-white/80">
                  WhatsApp Quote
                </div>
                <div className="mt-0.5 text-xs text-white/45">
                  Share car model, tyre size, and budget for an instant price.
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={siteCopy.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              View Location
            </a>
            <a
              href={buildWhatsAppLink(
                "Hi, I want the best price for tyres for my car. Please assist.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/20 transition-all hover:bg-[#c72f2b] hover:shadow-xl active:scale-[0.98]"
            >
              <PhoneCall className="h-4 w-4" />
              Get Best Price on WhatsApp
            </a>
          </div>

          <p className="mt-4 text-[11px] text-white/30">
            Genuine products · Same-day fitment · Trusted since 1949. Visit us
            at Rohtak for expert tyre solutions and unbeatable service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
