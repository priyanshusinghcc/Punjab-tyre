// lib/leads.ts — send a website enquiry to /api/lead (client-side).
import { getLeadSource } from "./analytics";

export type LeadPayload = {
  type: "tyre_size_popup" | "callback" | "quote_tool";
  phone: string;
  name?: string;
  car?: string;
  tyre_size?: string;
  budget?: string;
  message?: string;
  marketing_opt_in?: boolean;
  website?: string; // honeypot
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        ...payload,
        consent: true,
        page: typeof window !== "undefined" ? window.location.pathname : "",
        source: getLeadSource() ?? "direct",
      }),
    });
    return (await res.json()) as { ok: boolean; error?: string };
  } catch {
    return { ok: false, error: "network" };
  }
}
