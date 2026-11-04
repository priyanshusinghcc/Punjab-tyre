"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle, PhoneCall } from "lucide-react";
import { submitLead } from "@/lib/leads";
import { trackEvent } from "@/lib/analytics";

/**
 * "Request a call back" form. Saves the enquiry to the Google Sheet via
 * /api/lead and alerts the shop by email.
 */
export function CallbackForm({ defaultCar = "", dark = false }: { defaultCar?: string; dark?: boolean }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [car, setCar] = React.useState(defaultCar);
  const [message, setMessage] = React.useState("");
  const [website, setWebsite] = React.useState(""); // honeypot
  const [status, setStatus] = React.useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = React.useState("");
  const [invalid, setInvalid] = React.useState<Record<string, boolean>>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "").replace(/^(?:91|0)(?=\d{10}$)/, "");
    const checks: [string, boolean, string][] = [
      ["name", /[a-zA-Z\u0900-\u097F]{2,}/.test(name) && !/\d/.test(name), "Please enter your name"],
      ["phone", /^[6-9]\d{9}$/.test(digits), "Please enter a valid 10-digit mobile number"],
      ["car", car.trim().length >= 2, "Please enter your car or bike model"],
      ["message", message.trim().length >= 10, "Please tell us what you need (at least a few words)"],
    ];
    const bad = Object.fromEntries(checks.filter(([, ok]) => !ok).map(([k]) => [k, true]));
    setInvalid(bad);
    const firstBad = checks.find(([, ok]) => !ok);
    if (firstBad) {
      setError(firstBad[2]);
      return;
    }
    setError("");
    setStatus("sending");
    const result = await submitLead({
      type: "callback",
      name,
      phone: digits,
      car,
      message,
      marketing_opt_in: false,
      website,
    });
    if (result.ok) {
      setStatus("done");
      trackEvent("callback_request", { has_car: car ? "yes" : "no" });
    } else {
      setStatus("error");
      setError("Couldn't send right now — please WhatsApp or call us on +91 98960 53958.");
    }
  };

  const field = dark
    ? "h-11 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#E53935]"
    : "h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/35 outline-none focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10";
  const muted = dark ? "text-white/55" : "text-black/50";
  const cls = (key: string) => (invalid[key] ? `${field} !border-[#E53935]` : field);
  const clear = (key: string) => invalid[key] && setInvalid((v) => ({ ...v, [key]: false }));

  if (status === "done") {
    return (
      <div className={`rounded-3xl p-6 ${dark ? "bg-white/[0.05]" : "border border-black/[0.07] bg-white"}`}>
        <CheckCircle className="h-8 w-8 text-emerald-500" />
        <p className={`mt-3 text-lg font-bold ${dark ? "text-white" : "text-black"}`}>Thanks — we&apos;ll call you back</p>
        <p className={`mt-1 text-sm ${muted}`}>
          Our team usually responds within working hours (Mon–Sat 9:30 AM–8 PM, Sun 10 AM–5 PM).
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      data-track-location="callback_form"
      className={`space-y-3 rounded-3xl p-6 ${dark ? "bg-white/[0.05]" : "border border-black/[0.07] bg-white"}`}
    >
      <div className={`flex items-center gap-2 text-sm font-bold ${dark ? "text-white" : "text-black"}`}>
        <PhoneCall className="h-4 w-4 text-[#E53935]" />
        Request a call back
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className={cls("name")}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clear("name");
          }}
          placeholder="Your name *"
          aria-label="Your name"
          aria-invalid={!!invalid.name}
          autoComplete="name"
          maxLength={60}
          required
        />
        <input
          className={cls("phone")}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value.replace(/[^\d+ ]/g, "").slice(0, 14));
            clear("phone");
          }}
          placeholder="Mobile number *"
          aria-label="Mobile number"
          aria-invalid={!!invalid.phone}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          required
        />
      </div>
      <input
        className={cls("car")}
        value={car}
        onChange={(e) => {
          setCar(e.target.value);
          clear("car");
        }}
        placeholder="Car / bike model * (e.g. Creta SX)"
        aria-label="Car or bike model"
        aria-invalid={!!invalid.car}
        maxLength={80}
        required
      />
      <textarea
        className={`${cls("message")} h-20 resize-none py-3`}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          clear("message");
        }}
        placeholder="What do you need? * (e.g. 4 new tyres, 17-inch alloys, alignment)"
        aria-label="What do you need"
        aria-invalid={!!invalid.message}
        maxLength={500}
        required
      />
      {/* Honeypot — hidden from people, bots fill it */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden="true"
        name="website"
      />
      {error && <p className="text-xs font-semibold text-[#E53935]">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex h-11 w-full items-center justify-center rounded-xl bg-[#E53935] text-sm font-bold text-white transition-colors hover:bg-[#c72f2b] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Call me back"}
      </button>
      <p className={`text-[11px] leading-relaxed ${muted}`}>
        We use your number only to reply about this enquiry.{" "}
        <Link href="/privacy" className="underline">
          Privacy policy
        </Link>
      </p>
    </form>
  );
}
