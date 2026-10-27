import type { Metadata } from "next";
import Link from "next/link";
import { BulletCard, LandingShell } from "@/components/landing/landing-shell";
import { evModelPages, evTyrePoints, type FaqItem } from "@/lib/landing-pages";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "EV Tyres in Rohtak — Mahindra BE 6, XEV 9e & XEV 9S",
  description:
    "Tyres for electric cars in Rohtak: Mahindra BE 6, XEV 9e and XEV 9S tyres available at Punjab Tyre. Correct load rating, low rolling resistance, same-day fitment.",
  alternates: { canonical: "/ev-tyres" },
};

const faqs: FaqItem[] = [
  {
    question: "Where can I buy EV tyres in Rohtak?",
    answer:
      "Punjab Tyre (Yokohama Club Network), opposite Pacific Mall in Rohtak, has tyres for the Mahindra BE 6, XEV 9e and XEV 9S available at the store, with same-day fitment, alignment and balancing.",
  },
  {
    question: "Can I fit normal tyres on an electric car?",
    answer:
      "Only if they match the original size, load index and speed rating. EVs are heavier than petrol or diesel cars of the same size, so the load rating matters most. EV-ready tyres also reduce rolling resistance (more range) and road noise.",
  },
  {
    question: "How long do EV tyres last?",
    answer:
      "Usually a little less than on a comparable petrol car, because of the extra weight and instant torque. Keeping the correct pressure, rotating tyres and getting an alignment every 5,000–10,000 km makes a big difference.",
  },
];

export default function EvTyresPage() {
  const models = evModelPages();
  return (
    <LandingShell
      crumbs={[{ name: "EV tyres", path: "/ev-tyres" }]}
      eyebrow="Electric vehicles · In stock"
      title="EV Tyres in Rohtak"
      intro="Driving a Mahindra BE 6, XEV 9e or XEV 9S? Tyres for all three are available at our Rohtak store — with the correct load rating for your EV, fitted the same day with alignment and balancing."
      whatsappMessage="Hi Punjab Tyre, I need tyres for my electric car. Please share options and prices."
      faqs={faqs}
      extraSchema={[serviceSchema({ name: "EV tyres in Rohtak", description: "Tyres for Mahindra BE 6, XEV 9e and XEV 9S electric SUVs, fitted in Rohtak.", path: "/ev-tyres" })]}
    >
      <section className="bg-[#f7f7f7]">
        <div className="container-shell py-14">
          <h2 className="text-2xl font-black text-black md:text-3xl">Choose your EV</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {models.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/car-tyres/${c.slug}`}
                  className="group block h-full rounded-3xl border border-black/[0.07] bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    Available in store
                  </span>
                  <span className="mt-3 block text-lg font-bold text-black group-hover:text-[#E53935]">
                    {c.brand} {c.shortName}
                  </span>
                  <span className="mt-1 block text-sm text-black/55">
                    {c.sizes.map((s) => s.size).join(" · ")}
                  </span>
                  <span className="mt-4 block text-sm font-semibold text-[#E53935]">See sizes & prices →</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BulletCard title="What makes EV tyres different" items={evTyrePoints} />
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
