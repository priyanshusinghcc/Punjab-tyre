"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { X, Car, ChevronDown, CheckCircle, Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { carVehicleCatalog } from "@/lib/data";
import { getVehicleOemFitment } from "@/lib/oem-fitment";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";
import { ENABLE_STORE } from "@/lib/config";

export function VehicleLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Automatically trigger popup within 3-4 seconds whenever someone opens/reloads the website
  useEffect(() => {
    try {
      sessionStorage.removeItem("pt_vehicle_lead_popup_dismissed");
    } catch {
      // ignore
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Car models for the selected brand
  const selectedBrandData = useMemo(() => {
    return carVehicleCatalog.find((b) => b.name.toLowerCase() === brand.toLowerCase());
  }, [brand]);

  const availableModels = useMemo(() => {
    return selectedBrandData?.models || [];
  }, [selectedBrandData]);

  // Detected OEM Fitment
  const oemFitment = useMemo(() => {
    if (!brand || !model) return null;
    const fitment = getVehicleOemFitment("car", brand, model, "");
    return fitment.size && fitment.size !== "Universal" ? fitment : null;
  }, [brand, model]);

  // Reset model when brand changes
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextBrand = e.target.value;
    setBrand(nextBrand);
    setModel("");
    setError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
    if (val.length === 10) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!brand) {
      setError("Please select your car brand");
      return;
    }
    if (!model) {
      setError("Please select your car model");
      return;
    }
    if (phone.length < 10) {
      setError("Please enter a valid 10-digit WhatsApp number");
      return;
    }

    setSubmitted(true);

    // Build WhatsApp message
    const sizePart = oemFitment ? ` OEM Tyre Size: ${oemFitment.size}.` : "";
    const waMessage = `Hi Punjab Tyre, I am looking for tyre size & pricing for my ${brand} ${model}.${sizePart} My WhatsApp number is +91 ${phone}. Please share available brands, prices, and fitment details.`;

    // Open WhatsApp in a new tab
    window.open(buildWhatsAppUrl(waMessage), "_blank", "noopener,noreferrer");
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setSubmitted(false);
        }}
        id="open-vehicle-lead-popup"
        className="fixed bottom-5 left-5 z-[90] flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-black shadow-lg border border-black/10 hover:border-[#E53935] hover:text-[#E53935] hover:shadow-xl transition-all active:scale-95"
        aria-label="Find tyre size"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935]">
          <Car className="h-3 w-3" />
        </span>
        <span>Find Tyre Size</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] overflow-hidden rounded-[28px] bg-white p-6 sm:p-7 shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.04] text-black/40 hover:bg-black/10 hover:text-black transition-colors"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Red Car Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E53935]/10 text-[#E53935]">
              <Car className="h-7 w-7" />
            </div>

            {/* Title & Subtitle */}
            <h3 className="mt-3.5 text-center text-xl font-bold tracking-tight text-black">
              Find your tyre size & pricing
            </h3>
            <p className="mt-1.5 text-center text-xs text-black/60 max-w-[280px] mx-auto leading-relaxed">
              Tell us your vehicle — we'll help you find the right tyre size for it.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              {/* Car Brand Select */}
              <div className="relative">
                <select
                  value={brand}
                  onChange={handleBrandChange}
                  className="h-12 w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 pr-10 text-sm font-medium text-black outline-none transition focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10"
                >
                  <option value="">Car brand</option>
                  {carVehicleCatalog.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
              </div>

              {/* Car Model Select */}
              <div className="relative">
                <select
                  value={model}
                  disabled={!brand}
                  onChange={(e) => {
                    setModel(e.target.value);
                    setError("");
                  }}
                  className="h-12 w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 pr-10 text-sm font-medium text-black outline-none transition focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10 disabled:bg-black/[0.02] disabled:text-black/35"
                >
                  <option value="">Car model</option>
                  {availableModels.map((m) => (
                    <option key={m.name} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
              </div>

              {/* Detected OEM Fitment pill */}
              {oemFitment && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200/60 px-3 py-2 text-xs text-emerald-800 animate-in fade-in duration-200">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>
                    Company Tyre Size: <strong>{oemFitment.size}</strong>
                  </span>
                </div>
              )}

              {/* WhatsApp Number Input */}
              <div className="flex h-12 w-full items-center overflow-hidden rounded-2xl border border-black/10 bg-white transition focus-within:border-[#E53935] focus-within:ring-2 focus-within:ring-[#E53935]/10">
                <span className="flex h-full items-center border-r border-black/10 bg-[#fafafa] px-3.5 text-sm font-bold text-black select-none">
                  +91
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="WhatsApp number"
                  className="h-full flex-1 bg-transparent px-3.5 text-sm font-medium text-black placeholder:text-black/35 outline-none"
                />
              </div>

              {/* Error Notice */}
              {error && (
                <p className="text-[11px] font-semibold text-[#E53935] text-center pt-0.5 animate-in fade-in">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-2xl bg-[#E53935] text-sm font-bold text-white shadow-md shadow-[#E53935]/25 hover:bg-[#c72f2b] active:scale-[0.99] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          /* Submitted Confirmation Screen */
          <div className="py-2 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle className="h-8 w-8" />
            </div>

            <h3 className="mt-3.5 text-xl font-bold tracking-tight text-black">
              Inquiry Sent!
            </h3>
            <p className="mt-1 text-xs text-black/60 leading-relaxed">
              We found the recommended tyres for your{" "}
              <strong>
                {brand} {model}
              </strong>
              .
            </p>

            {oemFitment && (
              <div className="mt-4 rounded-2xl border border-black/[0.08] bg-[#fbfbfb] p-3.5 text-xs text-left">
                <p className="text-black/40 font-medium text-[11px]">Recommended OEM Tyre Size</p>
                <p className="text-base font-extrabold text-[#E53935] mt-0.5">
                  {oemFitment.size}
                </p>
                {oemFitment.rim && (
                  <p className="text-[11px] text-black/50 mt-0.5">Rim: {oemFitment.rim}</p>
                )}
              </div>
            )}

            <p className="mt-4 text-xs text-black/50 leading-relaxed">
              Our tyre specialist is messaging you on WhatsApp (<strong>+91 {phone}</strong>) with
              current stock availability and best price quotes.
            </p>

            <div className="mt-5 flex flex-col gap-2">
              {ENABLE_STORE ? (
                <>
                  <Link
                    href="/shop"
                    onClick={handleClose}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-black text-xs font-semibold text-white hover:bg-black/85 transition-colors"
                  >
                    Browse Catalog Online
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="h-10 text-xs font-semibold text-black/50 hover:text-black transition-colors"
                  >
                    Close
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-black text-xs font-semibold text-white hover:bg-black/85 transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
