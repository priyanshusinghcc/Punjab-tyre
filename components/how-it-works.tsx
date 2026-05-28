import { Check, PackageCheck, Wrench } from "lucide-react";
import { FadeUp } from "@/components/animations";

const steps = [
  {
    title: "Select your tyre",
    description:
      "Pick by vehicle or by exact tyre size. Filter by brand, usage, and budget.",
    icon: Check,
  },
  {
    title: "Get an instant quote",
    description:
      "Share your requirement on WhatsApp. We respond with the best available deal.",
    icon: PackageCheck,
  },
  {
    title: "Fit it same day",
    description:
      "Visit our Rohtak store for same-day fitment by certified technicians.",
    icon: Wrench,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="container-shell py-20">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
            Three steps to fitted tyres
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeUp key={step.title} delay={index * 0.08}>
              <div className="relative flex gap-5">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[22px] top-12 hidden h-[calc(100%-3rem)] w-px bg-black/8 lg:block" />
                )}

                {/* Number circle */}
                <div className="relative shrink-0">
                  <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#E53935]/20 bg-[#E53935]/8">
                    <step.icon className="h-5 w-5 text-[#E53935]" />
                  </div>
                  <div className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#E53935] text-[9px] font-black text-white">
                    {index + 1}
                  </div>
                </div>

                <div className="pt-1">
                  <h3 className="text-base font-bold text-black">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-black/55">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
