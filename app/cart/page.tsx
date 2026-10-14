import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CartPageClient } from "./cart-page-client";
import { ENABLE_STORE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Your Shopping Cart | Punjab Tyre Rohtak",
  description:
    "Review items in your cart, select Rohtak workshop fitment or nationwide delivery, and complete your order with Punjab Tyre.",
};

export default function CartPage() {
  if (!ENABLE_STORE) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <CartPageClient />
    </main>
  );
}
