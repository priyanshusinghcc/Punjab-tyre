import { CallbackForm } from "@/components/callback-form";
import { BUSINESS } from "@/lib/business";

export function CallbackSection() {
  return (
    <section className="bg-[#0a0a0a]" id="callback">
      <div className="container-shell grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">Prefer a call?</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
            Leave your number — we&apos;ll call you back
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Not sure which tyre fits, or want prices for a full set? Leave your number and our team will call
            you with options and current prices. Or WhatsApp us directly on {BUSINESS.phoneDisplay}.
          </p>
        </div>
        <CallbackForm dark />
      </div>
    </section>
  );
}
