"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BadgeCheck, CircleDot, Disc3, Home, Wrench, Zap } from "lucide-react";

const TABS = [
  { href: "/", label: "Home", icon: Home, match: (p: string) => p === "/" },
  { href: "/car-tyres", label: "Tyres", icon: CircleDot, match: (p: string) => p.startsWith("/car-tyres") },
  { href: "/alloy-wheels", label: "Alloy Wheels", icon: Disc3, match: (p: string) => p.startsWith("/alloy-wheels") },
  { href: "/services", label: "Wheel Service", icon: Wrench, match: (p: string) => p.startsWith("/services") },
  { href: "/brands", label: "Tyre Brands", icon: BadgeCheck, match: (p: string) => p.startsWith("/brands") },
  { href: "/ev-tyres", label: "EV Tyres", icon: Zap, match: (p: string) => p.startsWith("/ev-tyres") },
];

/** Category tab bar under the header. The active tab gets a red outlined "folder tab". */
export function CategoryTabs() {
  const pathname = usePathname() ?? "/";
  return (
    <div className="border-b border-black/[0.07] bg-white">
      <div className="container-shell no-scrollbar flex gap-1 overflow-x-auto pt-2 sm:gap-2" role="tablist" aria-label="Categories">
        {TABS.map((t) => {
          const active = t.match(pathname);
          return (
            <Link
              key={t.href}
              href={t.href}
              role="tab"
              aria-selected={active}
              className={`flex min-w-[84px] shrink-0 flex-col items-center gap-1 rounded-t-2xl border-2 border-b-0 px-3 pb-2.5 pt-2 text-[13px] font-medium transition-colors sm:min-w-[112px] sm:px-5 sm:text-sm ${
                active ? "border-[#E53935] text-[#E53935]" : "border-transparent text-black/65 hover:text-black"
              }`}
            >
              <t.icon className="h-6 w-6" strokeWidth={1.75} />
              <span className="whitespace-nowrap">{t.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
