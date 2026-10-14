import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PUNJAB TYRE ROHTAK | Tyres, Alloys & Fitment",
  description:
    "Conversion-focused tyre marketplace for car and bike tyres, alloy wheels, accessories, and same-day fitment in Rohtak.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F7F7] text-black">
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          {ENABLE_STORE && <CartDrawer />}
          <VehicleLeadPopup />
        </CartProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-FFZTR3DC5K" />
    </html>
  );
}
