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
          Add-on products that lift average order value
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {accessories.map((item) => (
          <Card key={item.name} className="border-black/5">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">{item.name}</h3>
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