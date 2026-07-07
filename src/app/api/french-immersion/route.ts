import { NextResponse } from "next/server";
import { sendLeadEmails } from "@/lib/email";

export async function POST(request: Request) {
  const data = await request.json();

  console.log("New French Immersion registration:", data);
  await sendLeadEmails("french-immersion", data);

  return NextResponse.json({ ok: true });
}
