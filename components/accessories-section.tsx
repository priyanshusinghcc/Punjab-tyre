import { Card, CardContent } from "@/components/ui/card";
import { accessories } from "@/lib/data";

export function AccessoriesSection() {
  return (
    <section className="container-shell py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E53935]">
          Car accessories
        </p>
        <h2 className="mt-2 text-3xl font-bold text-black">
          Complete your car
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {accessories.map((item) => (
          <Card
            key={item.name}
            className="group rounded-2xl border border-black/[0.08] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-md"
          >
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-black transition-colors duration-200 group-hover:text-[#E53935]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-7 text-black/65">
                {item.note}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}