import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: connect to an email/CRM service (e.g. Resend, SendGrid, or a Google Sheet)
  // to deliver French Immersion registrations to info@oaksplacemontessori.com.
  console.log("New French Immersion registration:", data);

  return NextResponse.json({ ok: true });
}
