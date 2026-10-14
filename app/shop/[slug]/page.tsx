import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, storeCatalog, isInStock, getStockStatus, DELIVERY_NOTICE } from "@/lib/store-catalog";
import type { TyreStoreProduct, AlloyStoreProduct, StoreProduct } from "@/lib/store-catalog";
import { ProductDetailClient } from "./product-detail-client";
import { formatINR } from "@/lib/utils";
import { ENABLE_STORE } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return storeCatalog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | Punjab Tyre" };
  return {
    title: `${product.name} | Punjab Tyre Rohtak`,
    description: product.description,
  };
}

function getSpecRows(product: StoreProduct): { label: string; value: string }[] {
  if (product.type === "tyre") {
    const p = product as TyreStoreProduct;
    return [
      { label: "Brand", value: p.tyreBrand },
      { label: "Model", value: p.tyreModel },
      { label: "Size", value: p.size },
      { label: "Vehicle Type", value: p.vehicleCategory === "car" ? "Car" : "Bike / Scooter" },
      { label: "Best For", value: p.usage },
      { label: "Compatible Vehicles", value: p.compatibleCarBrands?.join(", ") ?? "—" },
    ];
  }
  if (product.type === "alloy") {
    const p = product as AlloyStoreProduct;
    return [
      { label: "Brand", value: p.alloyBrand },
      { label: "Rim Size", value: `${p.rimSize}"` },
      { label: "Finish", value: p.finish },
      { label: "Bolt Pattern (PCD)", value: p.pcd },
      { label: "Width", value: p.width ?? "—" },
      { label: "ET (Offset)", value: p.et ?? "—" },
      { label: "Centre Bore", value: p.cb ? `${p.cb} mm` : "—" },
      { label: "Compatible Vehicles", value: p.compatibleCarBrands?.join(", ") ?? "—" },
      { label: "Sold As", value: "Set of 4 wheels" },
    ];
  }
  return [
    { label: "Category", value: product.category },
    { label: "Fitment Required", value: "No — ships or counter pickup" },
  ];
}

export default async function ProductDetailPage({ params }: Props) {
  if (!ENABLE_STORE) {
    notFound();
  }

  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const inStock = isInStock(product);
  const stockStatus = getStockStatus(product);
  const specs = getSpecRows(product);

  // Related: same type, exclude current product, up to 4
  const related = storeCatalog
    .filter((p) => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailClient
      product={product}
      inStock={inStock}
      stockStatus={stockStatus}
      specs={specs}
      related={related}
      deliveryNotice={DELIVERY_NOTICE}
    />
  );
}
