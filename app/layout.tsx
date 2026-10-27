import type { Metadata, Viewport } from "next";
// @ts-ignore
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/shop/cart-drawer";
import { VehicleLeadPopup } from "@/components/vehicle-lead-popup";
import { ENABLE_STORE } from "@/lib/config";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { AnalyticsTracker } from "@/components/seo/analytics-tracker";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { BUSINESS, SITE_URL } from "@/lib/business";

const DEFAULT_TITLE =
  "Punjab Tyre Rohtak | Tyres, Alloy Wheels & Same-Day Fitment Since 1949";
const DEFAULT_DESCRIPTION =
  "Buy Yokohama, CEAT, Michelin, Apollo & Goodyear tyres in Rohtak. Authorised Yokohama dealer. Same-day fitment, wheel alignment & balancing. Trusted since 1949 — get a WhatsApp quote.";

const verification: Metadata["verification"] = {};
if (process.env.GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.GOOGLE_SITE_VERIFICATION;
}
if (process.env.BING_SITE_VERIFICATION) {
  verification.other = { "msvalidate.01": process.env.BING_SITE_VERIFICATION };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Punjab Tyre Rohtak",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Punjab Tyre Rohtak",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Punjab Tyre Rohtak",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/pt-front.jpg",
        alt: "Punjab Tyre (Yokohama Club Network) store in Rohtak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/pt-front.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": BUSINESS.address.locality,
    "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    ICBM: `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
  },
  verification,
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className="bg-[#F7F7F7] text-black">
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          {ENABLE_STORE && <CartDrawer />}
          <VehicleLeadPopup />
        </CartProvider>
        <AnalyticsTracker />
        <Analytics />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
