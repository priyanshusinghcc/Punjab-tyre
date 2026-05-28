"use client";

import Image from "next/image";
import { type Variants } from "framer-motion";
import { motion } from "framer-motion";
import { VehicleSelector } from "@/components/vehicle-selector";
import { siteCopy } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";

// ── Framer Motion variants ────────────────────────────────────────────────
// ease must be typed `as const` so TS infers a readonly tuple, not number[].
// Framer expects [number, number, number, number], not number[].

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

// ── Component ─────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808]">
      {/*
        LAYER 1 — SVG fractal noise grain
        opacity 0.035 — invisible consciously, but removes the "flat screen"
        quality of a solid dark background. No repeating visible pattern.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/*
        LAYER 2 — Ambient glow stack (4 radials, 1 div)
        a) Cool grey bloom top-centre — depth / sky
        b) Red accent top-right — directional brand warmth, 8% opacity only
        c) Warm amber bottom-left — grounds the composition
        d) Faint centre lift — pulls eye inward toward content
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 55% 45% at 50% -5%,  rgba(255,255,255,0.045) 0%, transparent 100%)",
            "radial-gradient(ellipse 40% 50% at 88%  18%,  rgba(229,57,53,0.08)   0%, transparent 70%)",
            "radial-gradient(ellipse 50% 40% at 10%  92%,  rgba(180,100,60,0.055) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 60% at 50%  50%,  rgba(255,255,255,0.018) 0%, transparent 100%)",
          ].join(", "),
        }}
      />

      {/*
        LAYER 3 — Cinematic vignette
        Transparent centre → near-black edges.
        Frames content, adds depth, eliminates dead corners.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 38%, rgba(0,0,0,0.58) 100%)",
        }}
      />

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="container-shell relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Trust pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.05] px-4 py-1.5 text-xs font-medium tracking-wide text-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />
              Trusted in Rohtak for 77+ years
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="space-y-4">
            <h1 className="max-w-xl text-[2.6rem] font-black leading-[1.07] tracking-tight text-white md:text-[3.25rem] lg:text-[3rem] xl:text-[3.5rem]">
              Buy Car &amp; Bike Tyres at{" "}
              <span
                style={{
                  color: "#E53935",
                  textShadow: "0 0 48px rgba(229,57,53,0.3)",
                }}
              >
                Best Prices
              </span>
            </h1>
            <p className="max-w-md text-[15px] leading-[1.75] text-white/50">
              Genuine brands · Expert fitment · Same-day service in Rohtak. Get
              an instant quote on WhatsApp in seconds.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://wa.me/919896053958"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#E53935] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E53935]/25 transition-all duration-200 hover:bg-[#cf3330] hover:shadow-[#E53935]/40 hover:shadow-xl active:scale-[0.97]"
            >
              Get Best Price on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={siteCopy.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-6 py-3.5 text-sm font-medium text-white/55 transition-all duration-200 hover:border-white/[0.2] hover:text-white/85"
            >
              <MapPin className="h-4 w-4" />
              View Location
            </a>
          </motion.div>

          {/* Stat bar */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 divide-x divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03]"
          >
            {[
              { value: "77+", label: "Years of trust" },
              { value: "Same-day", label: "Fitment · Rohtak" },
              { value: "100%", label: "Genuine products" },
            ].map((stat) => (
              <div key={stat.label} className="px-5 py-4">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="mt-0.5 text-[11px] text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — product card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
          className="relative"
        >
          {/* Soft ambient bloom behind card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(229,57,53,0.09) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.04] p-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl">
            {/* Hero image */}
            <div className="relative overflow-hidden rounded-[26px]">
              <Image
                src="/images/pt-front.jpg"
                alt="Premium car — Punjab Tyre Rohtak"
                width={1200}
                height={700}
                className="h-52 w-full object-cover opacity-75 transition-transform duration-700 hover:scale-[1.04]"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
                }}
              />
              {/* Status bar */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black/65 px-4 py-2.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <p className="text-[13px] font-medium text-white/85">
                  Premium selection for Indian roads
                </p>
              </div>
            </div>

            {/* Vehicle selector */}
            <div className="mt-1.5">
              <VehicleSelector />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
