import { NextResponse } from "next/server";
import { sendLeadEmails } from "@/lib/email";

export async function POST(request: Request) {
  const data = await request.json();

  console.log("New admissions enquiry:", data);
  await sendLeadEmails("admissions", data);

  return NextResponse.json({ ok: true });
}
