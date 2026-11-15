"use client";

import type { ReactNode } from "react";

/** Opens the "Find tyre size" popup (rendered in the root layout) from anywhere on the page. */
export function OpenTyreFinderButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => document.getElementById("open-vehicle-lead-popup")?.click()}
    >
      {children}
    </button>
  );
}
