import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { storeCatalog, getTyreBrands, getAlloyBrands, getTyreSizes } from "@/lib/store-catalog";
import type { StoreProduct, TyreStoreProduct } from "@/lib/store-catalog";
import { ShopCatalogClient } from "./shop-catalog-client";
import { ENABLE_STORE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Shop Tyres, Alloy Wheels & Accessories | Punjab Tyre Rohtak",
  description:
    "Browse our full catalog of genuine car tyres, bike tyres, alloy wheels, and accessories. Same-day fitment in Rohtak. Nationwide delivery available.",
};

type SearchParams = {
  type?: string;
  brand?: string;
  size?: string;
  usage?: string;
  q?: string;
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  if (!ENABLE_STORE) {
    notFound();
  }

  const params = await searchParams;

  // Server-side filter — fast, SEO-friendly
  let products: StoreProduct[] = storeCatalog;

  if (params.type && ["tyre", "alloy", "accessory"].includes(params.type)) {
    products = products.filter((p) => p.type === params.type);
  }

  if (params.brand) {
    const b = params.brand.toLowerCase();
    products = products.filter((p) => {
      if (p.type === "tyre") return (p as TyreStoreProduct).tyreBrand.toLowerCase() === b;
      return false;
    });
  }

  if (params.size) {
    products = products.filter(
      (p) => p.type === "tyre" && (p as TyreStoreProduct).size === params.size
    );
  }

  if (params.usage) {
    products = products.filter(
      (p) => p.type === "tyre" && (p as TyreStoreProduct).usage === params.usage
    );
  }

  if (params.q) {
    const q = params.q.toLowerCase();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  return (
    <ShopCatalogClient
      initialProducts={products}
      allProducts={storeCatalog}
      tyreBrands={getTyreBrands()}
      alloyBrands={getAlloyBrands()}
      tyreSizes={getTyreSizes()}
      activeFilters={{
        type: params.type ?? "",
        brand: params.brand ?? "",
        size: params.size ?? "",
        usage: params.usage ?? "",
        q: params.q ?? "",
      }}
    />
  );
}
