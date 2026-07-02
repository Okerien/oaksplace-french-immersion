import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: connect to an email/CRM service (e.g. Resend, SendGrid, or a Google Sheet)
  // to deliver admissions enquiries to info@oaksplacemontessori.com.
  console.log("New admissions enquiry:", data);

  return NextResponse.json({ ok: true });
}
