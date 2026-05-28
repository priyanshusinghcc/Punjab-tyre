import type { Metadata } from "next";
// TypeScript may complain about side-effect CSS imports when no type
// declarations are present. Suppress that error for this import.
// @ts-ignore
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
