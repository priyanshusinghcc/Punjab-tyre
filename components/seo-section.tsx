/**
 * SeoSection — clean dark card, no changes to copy (SEO value preserved).
 * Removed the decorative red label since it was overused. Uses body copy hierarchy.
 */
export function SeoSection() {
  return (
    <section className="container-shell py-16">
      <div className="rounded-3xl bg-[#0a0a0a] px-8 py-10 md:px-12">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          Why Indian buyers compare tyres online first
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-8 text-white/50">
          Buying tyres online in India has become a practical way to compare brands,
          sizes, and prices without wasting time on uncertain showroom visits.
          Customers usually want two things: the correct tyre for their vehicle and
          a quote that feels fair. A conversion-focused tyre marketplace should make
          that decision easier with simple vehicle selection, size-based search,
          clear pricing, and a fast WhatsApp handoff. For local buyers in Rohtak,
          same-day fitment, genuine brand availability, and expert guidance matter
          just as much as the lowest number on the screen.
        </p>
      </div>
    </section>
  );
}
