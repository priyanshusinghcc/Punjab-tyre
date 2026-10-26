import type { Metadata } from "next";
import { BUSINESS, FULL_ADDRESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Punjab Tyre, Rohtak collects and uses the contact details you share on punjabtyre.in.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const h2 = "mt-10 text-lg font-bold text-black";
  const p = "mt-3 text-sm leading-7 text-black/70";
  return (
    <main className="container-shell max-w-3xl py-16">
      <h1 className="text-3xl font-black text-black">Privacy Policy</h1>
      <p className="mt-2 text-xs text-black/45">Last updated: 26 October 2026</p>

      <p className={p}>
        This policy explains how {BUSINESS.name} (&quot;Punjab Tyre&quot;, &quot;we&quot;), {FULL_ADDRESS}, handles
        personal data collected through punjabtyre.in.
      </p>

      <h2 className={h2}>What we collect</h2>
      <p className={p}>
        Only what you choose to give us in an enquiry form: your mobile number, and optionally your name, vehicle
        model, tyre size, budget and message. We also note which page you used and how you reached our site (for
        example, Google or Instagram). If you message us on WhatsApp, WhatsApp shares your number with us as part of
        the chat.
      </p>
      <p className={p}>
        We use Google Analytics and Vercel Analytics to understand how the site is used (pages viewed, buttons
        clicked). These tools do not receive your phone number, name or email.
      </p>

      <h2 className={h2}>How we use it</h2>
      <p className={p}>
        To reply to your enquiry — by call or WhatsApp — with tyre options, prices and fitment details. If you tick
        &quot;send me tyre offers&quot;, we may also send you occasional offers on WhatsApp; you can stop these at any
        time by replying STOP or asking us.
      </p>
      <p className={p}>We do not sell or share your details with anyone for their own marketing.</p>

      <h2 className={h2}>Where it is stored and for how long</h2>
      <p className={p}>
        Enquiries are stored in a private Google Sheet accessible only to Punjab Tyre staff. We keep enquiry details
        for up to 12 months after your last contact with us, unless you ask us to delete them sooner.
      </p>

      <h2 className={h2}>Your choices</h2>
      <p className={p}>
        You can ask us to show, correct or delete your details, or withdraw consent, at any time by calling or
        WhatsApping {BUSINESS.phoneDisplay} or visiting our store.
      </p>
    </main>
  );
}
