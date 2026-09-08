"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bikeVehicleCatalog, carVehicleCatalog } from "@/lib/data";
import { getVehicleOemFitment } from "@/lib/oem-fitment";
import { buildWhatsAppLink } from "@/lib/utils";
import { ArrowRight, PhoneCall, Search, ShieldCheck } from "lucide-react";

type TyreType = "car" | "bike";
type SearchMode = "vehicle" | "size";

export function VehicleSelector() {
  const [tyreType, setTyreType] = React.useState<TyreType>("car");
  const [mode, setMode] = React.useState<SearchMode>("vehicle");
  const catalog = tyreType === "car" ? carVehicleCatalog : bikeVehicleCatalog;

  const [brand, setBrand] = React.useState(catalog[0]?.name ?? "");
  const [model, setModel] = React.useState(catalog[0]?.models[0]?.name ?? "");
  const [variant, setVariant] = React.useState(catalog[0]?.models[0]?.variants[0]?.name ?? "");
  const [width, setWidth] = React.useState("195");
  const [profile, setProfile] = React.useState("55");
  const [rim, setRim] = React.useState("16");
  const [budget, setBudget] = React.useState("");

  React.useEffect(() => {
    const nextBrand = catalog[0]?.name ?? "";
    setBrand(nextBrand);
    const nextModel = catalog[0]?.models[0]?.name ?? "";
    setModel(nextModel);
    setVariant(catalog[0]?.models[0]?.variants[0]?.name ?? "");
  }, [tyreType]);

  const selectedBrand = catalog.find((item) => item.name === brand);
  const selectedModel = selectedBrand?.models.find((item) => item.name === model);
  const selectedVariant = selectedModel?.variants.find((item) => item.name === variant);

  React.useEffect(() => {
    const nextModel = selectedBrand?.models[0]?.name ?? "";
    if (brand && !selectedBrand?.models.some((item) => item.name === model)) {
      setModel(nextModel);
      setVariant(selectedBrand?.models[0]?.variants[0]?.name ?? "");
    }
  }, [brand, selectedBrand, model]);

  React.useEffect(() => {
    const nextVariant = selectedModel?.variants[0]?.name ?? "";
    if (model && !selectedModel?.variants.some((item) => item.name === variant)) {
      setVariant(nextVariant);
    }
  }, [model, selectedModel, variant]);

  // Compute Company OEM Fitment
  const oemFitment = React.useMemo(() => {
    return getVehicleOemFitment(tyreType, brand, model, variant);
  }, [tyreType, brand, model, variant]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const size = `${width}/${profile} R${rim}`;
    const budgetPart = budget.trim() ? ` Budget: ₹${budget.trim()}.` : "";
    const message =
      mode === "vehicle"
        ? `Hi, I want the best price for ${tyreType} tyres. Vehicle: ${brand} ${model} ${variant}. Company OEM Fitment: ${oemFitment.size}.${budgetPart} Please share options and fitment availability.`
        : `Hi, I want the best price for ${tyreType} tyres. Size: ${size}.${budgetPart} Please share options and fitment availability.`;

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const sizeValue = `${width}/${profile} R${rim}`;

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-5 shadow-premium">
      <Tabs value={tyreType} onValueChange={(v) => setTyreType(v as TyreType)}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="car">Car Tyres</TabsTrigger>
          <TabsTrigger value="bike">Bike Tyres</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs value={mode} onValueChange={(v) => setMode(v as SearchMode)} className="mt-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vehicle">Shop by Vehicle</TabsTrigger>
          <TabsTrigger value="size">Shop by Tyre Size</TabsTrigger>
        </TabsList>

        <TabsContent value="vehicle">
          <div className="grid gap-3">
            <div className="grid gap-2">
              <label className="text-xs font-medium text-black/60">Select Brand</label>
              <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
                {catalog.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-medium text-black/60">Select Model</label>
              <Select value={model} onChange={(e) => setModel(e.target.value)}>
                {selectedBrand?.models.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-medium text-black/60">Select Variant</label>
              <Select value={variant} onChange={(e) => setVariant(e.target.value)}>
                {selectedModel?.variants.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>

            {/* Company OEM Fitment Display */}
            {oemFitment && (
              <div className="mt-1 rounded-2xl border border-emerald-600/20 bg-emerald-50/60 p-3.5 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Company OEM Fitment Tyre Size</span>
                  </div>
                  <span className="rounded-full bg-emerald-200/70 px-2 py-0.5 text-[10px] font-bold text-emerald-900 tracking-wide uppercase">
                    {oemFitment.rim}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-[11px] font-medium text-neutral-500">
                      Standard Factory Fitment:
                    </div>
                    <div className="text-base font-extrabold tracking-tight text-neutral-900 sm:text-lg">
                      {oemFitment.size}
                    </div>
                  </div>

                  {oemFitment.parsedSize && (
                    <button
                      type="button"
                      onClick={() => {
                        if (oemFitment.parsedSize) {
                          setWidth(oemFitment.parsedSize.width);
                          setProfile(oemFitment.parsedSize.profile);
                          setRim(oemFitment.parsedSize.rim);
                          setMode("size");
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline underline-offset-2 transition-colors cursor-pointer"
                    >
                      Shop this size
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-emerald-900/90">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                  <span>This size is used as official company OEM fitment.</span>
                </div>

                {oemFitment.note && (
                  <p className="mt-1 text-[11px] leading-relaxed text-neutral-600">
                    {oemFitment.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="size">
          <div className="grid grid-cols-3 gap-3">
            <div className="grid gap-2">
              <label className="text-xs font-medium text-black/60">Width</label>
              <Input value={width} onChange={(e) => setWidth(e.target.value)} inputMode="numeric" />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-medium text-black/60">Profile</label>
              <Input value={profile} onChange={(e) => setProfile(e.target.value)} inputMode="numeric" />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-medium text-black/60">Rim</label>
              <Input value={rim} onChange={(e) => setRim(e.target.value)} inputMode="numeric" />
            </div>
          </div>
          <div className="mt-2 rounded-2xl bg-black/5 px-4 py-3 text-sm text-black/70">
            Current size: <span className="font-semibold text-black">{sizeValue}</span>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs font-medium text-black/60">Budget (optional)</label>
          <Input value={budget} onChange={(e) => setBudget(e.target.value)} inputMode="numeric" placeholder="e.g. 8000" />
        </div>
        <div className="flex items-end">
          <Button type="submit" className="h-11 w-full rounded-2xl">
            <Search className="h-4 w-4" />
            Get Best Price on WhatsApp
          </Button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#E53935]/8 px-4 py-3 text-xs text-black/70">
        <PhoneCall className="h-4 w-4 text-[#E53935]" />
        Share the exact tyre, car, and budget directly on WhatsApp for the fastest quote.
      </div>
    </form>
  );
}
