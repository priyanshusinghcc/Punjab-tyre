"use client";

import { useState, useEffect } from "react";
import { testimonials as initialTestimonials, siteCopy } from "@/lib/data";
import { Star, ExternalLink, PenLine } from "lucide-react";
import { ReviewsCarousel } from "@/components/reviews-carousel";

/**
 * TestimonialsSection — Google review highlights for Punjab Tyre, Rohtak.
 * Connects directly to verified Google Maps listing (Yokohama Club Network - Punjab Tyre).
 */

const categories = [
  { id: "all", label: "All Reviews (754+)" },
  { id: "yokohama", label: "Yokohama Tyres" },
  { id: "suv", label: "SUV & Sedan Fitment" },
  { id: "service", label: "Store Service & Staff" },
];

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [reviews, setReviews] = useState(initialTestimonials);
  const [liveData, setLiveData] = useState({
    rating: siteCopy.googleRating,
    reviewCount: siteCopy.googleReviewCount,
    reviewCountFormatted: siteCopy.googleReviewCountFormatted,
    placeUrl: siteCopy.googleReviewsUrl,
    writeReviewUrl: siteCopy.writeReviewUrl,
  });

  // Attempt to hydrate with any live updates from /api/google-reviews
  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLiveData({
            rating: data.rating || siteCopy.googleRating,
            reviewCount: data.reviewCount || siteCopy.googleReviewCount,
            reviewCountFormatted:
              data.reviewCountFormatted || siteCopy.googleReviewCountFormatted,
            placeUrl: data.placeUrl || siteCopy.googleReviewsUrl,
            writeReviewUrl: data.writeReviewUrl || siteCopy.writeReviewUrl,
          });
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews);
          }
        }
      })
      .catch(() => {
        // Fall back gracefully to bundled high-fidelity data
      });
  }, []);

  const filteredReviews = reviews.filter((r) => {
    if (activeCategory === "all") return true;
    return r.category === activeCategory;
  });

  return (
    <section id="reviews" className="container-shell py-20">
      {/* Header with Google rating summary card */}
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
              Customer Reviews
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[11px] font-semibold text-black/60">
              From Google Maps
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-black md:text-4xl">
            What our customers say
          </h2>
          <p className="mt-2 text-sm text-black/60 md:text-base">
            Real feedback from verified car owners, SUV drivers, and motorists
            serviced at Punjab Tyre, Rohtak.
          </p>
        </div>

        {/* Google rating badge & actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={liveData.placeUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl border border-black/[0.08] bg-white p-3.5 shadow-sm transition-all hover:border-black/20 hover:shadow-md"
            title="View verified reviews on Google Maps"
          >
            {/* Official Google 'G' Icon */}
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-50 border border-black/[0.04]">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold text-black">
                  {liveData.rating}
                </span>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs font-semibold text-black/70 group-hover:text-black">
                {liveData.reviewCountFormatted}
                <span className="ml-1 text-black/40 group-hover:text-black/70">
                  →
                </span>
              </div>
            </div>
          </a>

          {/* Write a Review Button */}
          <a
            href={liveData.writeReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-black/85 hover:shadow"
          >
            <PenLine className="h-3.5 w-3.5 text-amber-400" />
            <span>Write a Review</span>
          </a>
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-black text-white shadow-sm"
                  : "border border-black/[0.08] bg-white text-black/70 hover:border-black/20 hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Auto-sliding reviews */}
      <ReviewsCarousel reviews={filteredReviews} placeUrl={liveData.placeUrl} />

      {/* Bottom Trust & Write-Review Banner */}
      <div className="mt-12 rounded-3xl border border-black/[0.07] bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] p-6 sm:p-8 text-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
            <Star className="h-3.5 w-3.5 fill-[#E53935] text-[#E53935]" />
            <span>Customer First Philosophy</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Had your tyres or alloys fitted at Punjab Tyre?
          </h3>
          <p className="text-xs sm:text-sm text-white/75 max-w-xl">
            Help other motorists in Rohtak and Haryana make the right choice by
            sharing your honest experience on Google.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href={liveData.writeReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-[#E53935] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-[#D32F2F] hover:shadow-md"
          >
            <PenLine className="h-4 w-4" />
            <span>Leave a Google Review</span>
          </a>
          <a
            href={liveData.placeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/30"
          >
            <span>Read all 754+ Reviews</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
