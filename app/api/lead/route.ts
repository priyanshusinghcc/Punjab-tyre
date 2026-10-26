// POST /api/lead — receives website enquiries and forwards them to the
// Google Sheet (Apps Script web app) set in LEADS_WEBHOOK_URL.
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LEAD_TYPES = ["tyre_size_popup", "callback", "quote_tool"] as const;

function text(value: unknown, max = 120): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function normalisePhone(value: unknown): string | null {
  const digits = text(value, 20).replace(/\D/g, "").replace(/^(?:91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real people never fill the hidden "website" field.
  if (text(body.website)) return NextResponse.json({ ok: true });

  const phone = normalisePhone(body.phone);
  if (!phone) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }

  const type = LEAD_TYPES.includes(body.type as (typeof LEAD_TYPES)[number])
    ? (body.type as string)
    : "callback";

  const lead = {
    secret: process.env.LEADS_WEBHOOK_SECRET ?? "",
    type,
    name: text(body.name, 60),
    phone,
    car: text(body.car, 80),
    tyre_size: text(body.tyre_size, 60),
    budget: text(body.budget, 20),
    message: text(body.message, 500),
    page: text(body.page, 200),
    source: text(body.source, 40),
    marketing_opt_in: body.marketing_opt_in === true,
  };

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[lead] LEADS_WEBHOOK_URL is not set — lead not stored", { type, page: lead.page });
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });
    const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!result?.ok) throw new Error(result?.error ?? `webhook status ${res.status}`);
  } catch (error) {
    console.error("[lead] failed to store lead", error);
    return NextResponse.json({ ok: false, error: "store_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
