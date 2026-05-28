# 🔴 CRITICAL: Fix Duplicate Header & Footer

## Root Cause

The screenshots show **two headers and two footers** rendering on the page.

This is a Next.js App Router layout structure bug — not a component bug.

It means `<SiteHeader />` and `<SiteFooter />` are being rendered in **both**:
- `app/layout.tsx` (correct)
- `app/page.tsx` (wrong — causes duplicates)

---

## The Fix

### ✅ Correct: `app/layout.tsx`

```tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
```

### ✅ Correct: `app/page.tsx`

```tsx
// NO SiteHeader or SiteFooter here — they come from layout.tsx

import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { TyreListing } from "@/components/tyre-listing";
// ...etc

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <TyreListing />
      {/* ... */}
    </>
  );
}
```

### ❌ Wrong: `app/page.tsx` (what you currently have)

```tsx
// DO NOT DO THIS — causes duplicate header + footer
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />    {/* ← REMOVE */}
      <HeroSection />
      {/* ... */}
      <SiteFooter />    {/* ← REMOVE */}
    </>
  );
}
```

---

## Page Section Order (Recommended)

```
SiteHeader          ← layout.tsx only
TrustStrip          ← thin bar, immediately below header
HeroSection         ← dark, full-width
HowItWorks          ← light, 3-column
TyreListing         ← main product section
ServicesSection     ← what we offer
BrandSection        ← brand grid
FitmentSection      ← dark split layout
TestimonialsSection ← social proof
FAQSection          ← objection handling
SeoSection          ← SEO content block
SiteFooter          ← layout.tsx only
```

---

## Animation Performance Budget

To maintain 60fps on mid-range Indian mobile devices (Redmi, Realme):

| Type | Budget |
|------|--------|
| Entrance animations | Max 1 per section |
| Hover transitions | CSS only (no JS springs) |
| Looping animations | 0 on content, max 1 decorative per page |
| Framer springs per page | Max 3 total |
| Animated DOM nodes | Max 5 simultaneous |

The old hero had **20 floating particles + 3 gradient orbs + shimmer loops** all running at once.
The refactored hero has **1 entrance stagger** and **1 static radial gradient**.

---

## Design Token Cheatsheet

```css
/* Colors */
--red:       #E53935;  /* Primary CTA only — not section labels, not icons */
--red-dark:  #c72f2b;  /* Hover state */
--black:     #0a0a0a;  /* Dark sections */
--surface:   #f7f7f7;  /* Alt light backgrounds */

/* Use red for: Primary CTA buttons, featured ribbons, 1 accent per card */
/* NOT for: Every section label, every icon, every underline */

/* Shadows */
--shadow-sm:  shadow-sm shadow-black/6
--shadow-md:  shadow-md shadow-black/8
--shadow-card: shadow-sm → hover:shadow-lg hover:shadow-black/8

/* Rounding */
--radius-card:   rounded-2xl (cards)
--radius-btn:    rounded-full (buttons)
--radius-badge:  rounded-xl (badges)
--radius-pill:   rounded-full (pills/tags)

/* Typography */
--label:  text-xs font-semibold uppercase tracking-[0.22em] text-black/40
--h2:     text-3xl md:text-4xl font-black leading-tight
--body:   text-sm leading-relaxed text-black/60
```
