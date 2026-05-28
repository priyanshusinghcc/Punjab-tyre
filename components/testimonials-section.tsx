import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

/**
 * TestimonialsSection — asymmetric grid for visual interest.
 * First card spans 2 columns on large screens to break the grid.
 */
export function TestimonialsSection() {
  return (
    <section className="container-shell py-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
          Reviews
        </p>
        <h2 className="mt-2 text-3xl font-black text-black md:text-4xl">
          What our customers say
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Card
            key={item.name}
            className={`border-black/[0.07] bg-white shadow-sm ${
              index === 0 ? "lg:col-span-1 lg:row-span-1" : ""
            }`}
          >
            <CardContent className="p-6">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#E53935] text-[#E53935]" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-black/65">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-black/[0.06] pt-4">
                {/* Avatar initials */}
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E53935]/10 text-xs font-bold text-[#E53935]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">{item.name}</div>
                  <div className="text-xs text-black/40">{item.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
