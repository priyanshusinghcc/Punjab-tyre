"use client";

import {
  BadgeIndianRupee,
  CircleGauge,
  Drill,
  Wrench,
  CircleDot,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { motion, Variants } from "framer-motion";

/**
 * ServicesSection — premium but performant.
 *
 * REMOVED:
 * - Per-card 3D mouse tracking (useSpring per card × 5 = heavy)
 * - Animated glow border loop
 * - Per-card floating particles (3 × 5 = 15 animated divs)
 * - translateZ layering (causes stacking context issues on mobile)
 *
 * KEPT:
 * - Staggered scroll entrance
 * - Hover lift (CSS transition, not JS)
 * - Icon accent on hover
 * - Strong typography hierarchy
 */

const icons: Record<string, React.ElementType> = {
  align: CircleGauge,
  balance: CircleDot,
  tyre: Wrench,
  nitrogen: BadgeIndianRupee,
  repair: Drill,
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ServicesSection() {
  return (
    <section className="container-shell py-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
          Services
        </p>
        <h2 className="mt-2 text-2xl font-bold leading-[1.1] text-black md:text-3xl">
          Comprehensive Services which are included with tyre purchase
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
      >
        {services.map((service, index) => {
          const Icon = icons[service.icon] || Wrench;
          return (
            <motion.div key={service.title} variants={cardVariant}>
              <Card className="group h-full border-black/[0.07] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-black/8">
                <CardContent className="p-5">
                  {/* Icon */}
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E53935]/8 text-[#E53935] transition-colors duration-200 group-hover:bg-[#E53935]/15">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Step number */}
                  <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/25">
                    0{index + 1}
                  </div>

                  <h3 className="mt-1.5 text-base font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

// Alias for backwards compatibility
export { ServicesSection as ServicesSectionEnhanced };
