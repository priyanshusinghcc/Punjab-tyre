type SearchParams = {
  brand?: string;
  width?: string;
  profile?: string;
  rim?: string;
  usage?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  vehicle?: string;
  type?: string;
  carBrand?: string;
  carModel?: string;
  carVariant?: string;
  budget?: string;
};

export default async function TyresPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const vehicleSummary =
    params.carBrand && params.carModel && params.carVariant
      ? `${params.carBrand} ${params.carModel} ${params.carVariant}`
      : params.vehicle || "";

  return (
    <main className="container-shell py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E53935]">
          Tyre listing
        </p>
        <h1 className="mt-2 text-3xl font-bold text-black">
          Find the right tyre fast
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-black/65">
          Filter by brand, size, usage, and budget. Every product card is built
          to push WhatsApp inquiry instead of checkout friction.
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 p-6">
        <p className="text-lg font-semibold">Tyre catalogue coming soon</p>
        <p className="mt-2 text-sm text-black/60">
          Inventory integration is under development.
        </p>
      </div>
    </main>
  );
}
