import { faqs } from "@/lib/data";
import { FadeUp } from "@/components/animations";

/**
 * FAQSection — uses native <details>/<summary> for zero-JS accordion.
 * Falls back gracefully if the Accordion component isn't available.
 * Keeps the same data source (faqs from @/lib/data).
 */
export function FAQSection() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="container-shell py-20">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
            Questions before you buy?
          </h2>
        </FadeUp>

        <div className="mt-10 max-w-2xl space-y-2">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-black/[0.07] bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-black select-none">
                {item.question}
                {/* Animated chevron via CSS */}
                <span className="ml-auto shrink-0 text-black/30 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-black/[0.06] px-5 py-4 text-sm leading-7 text-black/60">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
