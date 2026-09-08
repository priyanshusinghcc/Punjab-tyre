/**
 * SeoSection — clean dark card, no changes to copy (SEO value preserved).
 * Removed the decorative red label since it was overused. Uses body copy hierarchy.
 */
export function SeoSection() {
  return (
    <section className="container-shell py-16">
      {/* 
        NOTE FOR OWNER:
        This block has been localized for Punjab Tyre, Rohtak to avoid generic SEO-filler copy.
        You can customize or supply alternative replacement copy here.
      */}
      <div className="rounded-3xl bg-[#0a0a0a] px-8 py-10 md:px-12">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          Why Rohtak drivers choose Punjab Tyre for fitment and advice
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-8 text-white/80">
          Serving Rohtak and surrounding Haryana districts since 1949, Punjab Tyre
          makes buying tyres straightforward and transparent. Instead of guessing sizes
          or dealing with uncertain showroom pricing, you get instant brand comparisons,
          clear quotations, and authentic manufacturer warranty on every set. Whether
          you need heavy-duty highway tyres, performance alloys, or reliable city treads,
          our team provides expert guidance and same-day in-store fitment, alignment,
          and balancing right here in Rohtak.
        </p>
      </div>
    </section>
  );
}
