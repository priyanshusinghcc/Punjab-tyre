"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export type Review = {
  name: string;
  role?: string;
  date?: string;
  rating?: number;
  quote: string;
  highlight?: string;
};

const AUTOPLAY_MS = 4500;
const RESUME_AFTER_TOUCH_MS = 6000;

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
    </svg>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < rating ? "fill-[#FBBC04]" : "fill-black/10"}`} aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, placeUrl }: { review: Review; placeUrl: string }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-7">
      {/* Decorative quote mark */}
      <span aria-hidden className="pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[120px] leading-none text-[#E53935]/[0.07]">
        &rdquo;
      </span>

      <div className="flex items-center justify-between gap-3">
        <Stars rating={review.rating ?? 5} />
        <a
          href={placeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-[#fafafa] px-2.5 py-1 text-[10px] font-semibold text-black/55 transition-colors hover:text-black"
          title="Read on Google Maps"
        >
          <GoogleG className="h-3 w-3" />
          Google review
        </a>
      </div>

      {review.highlight && (
        <div className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800">
          <Sparkles className="h-3 w-3 text-amber-600" />
          {review.highlight}
        </div>
      )}

      <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-black/80">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#E53935] to-[#b71c1c] text-sm font-bold text-white">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-bold text-black">{review.name}</div>
          {review.role && <div className="truncate text-xs text-black/50">{review.role}</div>}
        </div>
        {review.date && <div className="shrink-0 text-[11px] text-black/40">{review.date}</div>}
      </footer>
    </article>
  );
}

/**
 * Auto-sliding review carousel.
 * - Advances one card every few seconds and loops back to the start
 * - Native swipe / trackpad scrolling via CSS scroll-snap
 * - Pauses on hover, keyboard focus, touch and when the tab is hidden
 * - No autoplay for visitors who prefer reduced motion
 */
export function ReviewsCarousel({ reviews, placeUrl }: { reviews: Review[]; placeUrl: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);
  const [pageCount, setPageCount] = useState(reviews.length);
  const [hovered, setHovered] = useState(false);
  const [touched, setTouched] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hidden, setHidden] = useState(false);

  const step = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    if (!track || !first) return 1;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    const visible = Math.max(1, Math.round(track.clientWidth / s));
    setPageCount(Math.max(1, reviews.length - visible + 1));
    setActive(Math.min(Math.round(track.scrollLeft / s), Math.max(0, reviews.length - visible)));
  }, [reviews.length, step]);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({ left: index * step(), behavior: reduceMotion ? "auto" : "smooth" });
    },
    [reduceMotion, step],
  );

  // Reset to the first card when the list changes (e.g. a filter tab)
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    setActive(0);
    measure();
  }, [reviews, measure]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    const onVis = () => setHidden(document.hidden);
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", measure);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", measure);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [measure]);

  // Autoplay
  const paused = hovered || touched || hidden || reduceMotion || pageCount <= 1;
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      goTo(active >= pageCount - 1 ? 0 : active + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, active, pageCount, goTo]);

  const onTouchStart = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    setTouched(true);
  };
  const onTouchEnd = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setTouched(false), RESUME_AFTER_TOUCH_MS);
  };

  const prev = () => goTo(active <= 0 ? pageCount - 1 : active - 1);
  const next = () => goTo(active >= pageCount - 1 ? 0 : active + 1);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      <div
        ref={trackRef}
        onScroll={measure}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0"
      >
        {reviews.map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2rem)/3)]"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${reviews.length}`}
          >
            <ReviewCard review={review} placeUrl={placeUrl} />
          </div>
        ))}
      </div>

      {/* Controls */}
      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Choose review">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-[#E53935]" : "w-2 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-black/70 transition-colors hover:border-black/25 hover:text-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="grid h-10 w-10 place-items-center rounded-full bg-black text-white transition-colors hover:bg-black/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
