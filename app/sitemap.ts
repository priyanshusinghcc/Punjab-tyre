import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";
import { alloyBrandPages, brandPages, carModelPages, servicePages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.8),
    entry("/brands", 0.8),
    entry("/car-tyres", 0.8),
    entry("/alloy-wheels", 0.8),
    ...alloyBrandPages.map((a) => entry(`/alloy-wheels/${a.slug}`, a.authorised ? 0.8 : 0.7)),
    entry("/privacy", 0.2),
    ...servicePages.map((s) => entry(`/services/${s.slug}`, 0.7)),
    ...brandPages.map((b) => entry(`/brands/${b.slug}`, b.authorised ? 0.8 : 0.7)),
    ...carModelPages.map((c) => entry(`/car-tyres/${c.slug}`, 0.6)),
  ];
}
