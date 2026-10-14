"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { ProductCard } from "@/components/shop/product-card";
import type { StoreProduct, TyreStoreProduct } from "@/lib/store-catalog";

type ActiveFilters = {
  type: string;
  brand: string;
  size: string;
  usage: string;
  q: string;
};

const USAGE_OPTIONS = ["City", "Highway", "Premium", "Mileage", "Off-Road", "Sport", "Scooter", "Commuter"];
const TYPE_OPTIONS = [
  { value: "tyre", label: "Tyres" },
  { value: "alloy", label: "Alloy Wheels" },
  { value: "accessory", label: "Accessories" },
];

export function ShopCatalogClient({
  initialProducts,
  allProducts,
  tyreBrands,
  alloyBrands,
  tyreSizes,
  activeFilters,
}: {
  initialProducts: StoreProduct[];
  allProducts: StoreProduct[];
  tyreBrands: string[];
  alloyBrands: string[];
  tyreSizes: string[];
  activeFilters: ActiveFilters;
}) {
  const router = useRouter();
  const [filters, setFilters] = useState<ActiveFilters>(activeFilters);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Client-side re-filter (instant, no round-trip)
  const products = useMemo(() => {
    let results = allProducts;
    if (filters.type) results = results.filter((p) => p.type === filters.type);
    if (filters.brand) {
      const b = filters.brand.toLowerCase();
      results = results.filter((p) =>
        p.type === "tyre" ? (p as TyreStoreProduct).tyreBrand.toLowerCase() === b : false
      );
    }
    if (filters.size) {
      results = results.filter(
        (p) => p.type === "tyre" && (p as TyreStoreProduct).size === filters.size
      );
    }
    if (filters.usage) {
      results = results.filter(
        (p) => p.type === "tyre" && (p as TyreStoreProduct).usage === filters.usage
      );
    }
    if (filters.q) {
      const q = filters.q.toLowerCase();
      results = results.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    return results;
  }, [allProducts, filters]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  function updateFilter(key: keyof ActiveFilters, value: string) {
    setFilters((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  }

  function clearAll() {
    setFilters({ type: "", brand: "", size: "", usage: "", q: "" });
  }

  return (
    <main>
      {/* Page header */}
      <div className="border-b border-black/[0.06] bg-white">
        <div className="container-shell py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E53935]">
            Punjab Tyre Store
          </p>
          <h1 className="mt-2 text-3xl font-black text-black md:text-4xl">
            Shop Tyres, Alloys & Accessories
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/50">
            {allProducts.length} products · Same-day fitment in Rohtak · Nationwide delivery
          </p>

          {/* Search bar */}
          <div className="mt-5 flex max-w-md items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-2.5 focus-within:border-black/25 focus-within:shadow-sm">
            <Search className="h-4 w-4 shrink-0 text-black/30" />
            <input
              id="shop-search"
              type="text"
              placeholder="Search by brand, model, size…"
              value={filters.q}
              onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))}
              className="w-full bg-transparent text-sm text-black placeholder-black/30 outline-none"
            />
            {filters.q && (
              <button onClick={() => setFilters((p) => ({ ...p, q: "" }))}>
                <X className="h-3.5 w-3.5 text-black/30 hover:text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container-shell py-8">
        <div className="flex gap-8 lg:items-start">
          {/* ── Filter sidebar (desktop) ─── */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterPanel
              filters={filters}
              tyreBrands={tyreBrands}
              alloyBrands={alloyBrands}
              tyreSizes={tyreSizes}
              updateFilter={updateFilter}
              clearAll={clearAll}
            />
          </aside>

          {/* ── Main content ─── */}
          <div className="flex-1 min-w-0">
            {/* Active filter chips + mobile filter trigger */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {/* Mobile filter button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3.5 py-1.5 text-xs font-medium text-black/60 transition-colors hover:border-black/20 lg:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E53935] text-[9px] font-bold text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Active filter chips */}
              {filters.type && (
                <FilterChip
                  label={TYPE_OPTIONS.find((t) => t.value === filters.type)?.label ?? filters.type}
                  onRemove={() => updateFilter("type", filters.type)}
                />
              )}
              {filters.brand && <FilterChip label={filters.brand} onRemove={() => updateFilter("brand", filters.brand)} />}
              {filters.size && <FilterChip label={filters.size} onRemove={() => updateFilter("size", filters.size)} />}
              {filters.usage && <FilterChip label={filters.usage} onRemove={() => updateFilter("usage", filters.usage)} />}
              {activeFilterCount > 1 && (
                <button onClick={clearAll} className="text-xs font-medium text-[#E53935] hover:underline">
                  Clear all
                </button>
              )}

              <span className="ml-auto text-xs text-black/40">{products.length} result{products.length !== 1 ? "s" : ""}</span>
            </div>

            {/* Grid */}
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 py-20 text-center">
                <p className="text-base font-semibold text-black">No products found</p>
                <p className="mt-1.5 text-sm text-black/40">Try removing some filters or searching differently</p>
                <button onClick={clearAll} className="mt-4 rounded-full bg-[#E53935] px-5 py-2 text-sm font-semibold text-white hover:bg-[#c72f2b]">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white px-5 pb-8 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold">Filters</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5 text-black/50" />
              </button>
            </div>
            <FilterPanel
              filters={filters}
              tyreBrands={tyreBrands}
              alloyBrands={alloyBrands}
              tyreSizes={tyreSizes}
              updateFilter={updateFilter}
              clearAll={() => { clearAll(); setSidebarOpen(false); }}
            />
            <button
              onClick={() => setSidebarOpen(false)}
              className="mt-4 w-full rounded-2xl bg-[#E53935] py-3 text-sm font-semibold text-white"
            >
              Show {products.length} result{products.length !== 1 ? "s" : ""}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

// ─── Filter chip ───────────────────────────────────────────────────

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-[11px] font-semibold text-white"
    >
      {label}
      <X className="h-3 w-3" />
    </button>
  );
}

// ─── Filter panel (shared between desktop sidebar & mobile drawer) ──

function FilterPanel({
  filters,
  tyreBrands,
  alloyBrands,
  tyreSizes,
  updateFilter,
  clearAll,
}: {
  filters: ActiveFilters;
  tyreBrands: string[];
  alloyBrands: string[];
  tyreSizes: string[];
  updateFilter: (k: keyof ActiveFilters, v: string) => void;
  clearAll: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Product type */}
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">Category</p>
        <div className="space-y-1.5">
          {TYPE_OPTIONS.map((t) => (
            <button
              key={t.value}
              onClick={() => updateFilter("type", t.value)}
              className={`flex w-full items-center rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                filters.type === t.value
                  ? "bg-black text-white"
                  : "text-black/60 hover:bg-black/[0.04] hover:text-black"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tyre brand */}
      {(filters.type === "" || filters.type === "tyre") && (
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">Tyre Brand</p>
          <div className="flex flex-wrap gap-1.5">
            {tyreBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => updateFilter("brand", brand)}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors ${
                  filters.brand === brand
                    ? "border-black bg-black text-white"
                    : "border-black/10 text-black/55 hover:border-black/20 hover:text-black"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Usage */}
      {(filters.type === "" || filters.type === "tyre") && (
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">Best For</p>
          <div className="flex flex-wrap gap-1.5">
            {USAGE_OPTIONS.map((u) => (
              <button
                key={u}
                onClick={() => updateFilter("usage", u)}
                className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
                  filters.usage === u
                    ? "border-[#E53935] bg-[#E53935] text-white"
                    : "border-black/10 text-black/55 hover:border-black/20 hover:text-black"
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Alloy brand */}
      {(filters.type === "" || filters.type === "alloy") && (
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">Alloy Brand</p>
          <div className="flex flex-wrap gap-1.5">
            {alloyBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => updateFilter("brand", brand)}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors ${
                  filters.brand === brand
                    ? "border-black bg-black text-white"
                    : "border-black/10 text-black/55 hover:border-black/20 hover:text-black"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

      {Object.values(filters).some(Boolean) && (
        <button onClick={clearAll} className="text-xs font-medium text-[#E53935] hover:underline">
          Clear all filters
        </button>
      )}
    </div>
  );
}
