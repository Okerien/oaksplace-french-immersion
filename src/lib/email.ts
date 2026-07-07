import { Resend } from "resend";
import { site } from "@/lib/site-data";

export type LeadFormType = "french-immersion" | "admissions";

const FIELD_LABELS: Record<string, string> = {
  parentName: "Parent Name",
  phone: "Phone Number",
  email: "Email Address",
  childAge: "Child's Age",
  preferredStart: "Preferred Start",
  preferredDate: "Preferred Tour Date",
  message: "Message",
};

const PREFERRED_START_LABELS: Record<string, string> = {
  "full-month": "Full Month (3rd – 28th Aug)",
  "week-1": "Week 1 only",
  "week-2": "Week 2 only",
  "week-3": "Week 3 only",
  "week-4": "Week 4 only",
  "not-sure": "Not sure yet",
};

const FORM_COPY: Record<
  LeadFormType,
  { subjectNoun: string; heading: string; confirmationBody: string }
> = {
  "french-immersion": {
    subjectNoun: "French Immersion Registration",
    heading: "New French Immersion Registration",
    confirmationBody:
      "Merci! Your French Immersion registration is in. Our team will personally reach out within 1–2 business days to confirm your child's spot, walk you through fees and payment options, and answer any questions you have — no pressure, no obligation.",
  },
  admissions: {
    subjectNoun: "Admissions Enquiry",
    heading: "New Admissions Enquiry",
    confirmationBody:
      "Thank you for considering OaksPlace. Our team will personally reach out within 1–2 business days to confirm a tour time and answer any questions about admissions — no pressure, no obligation.",
  },
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function fromAddress(displayName: string) {
  const address = process.env.EMAIL_FROM || site.email;
  return `${displayName} <${address}>`;
}

function formatValue(key: string, value: string) {
  if (key === "preferredStart") return PREFERRED_START_LABELS[value] ?? value;
  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notificationHtml(formType: LeadFormType, data: Record<string, string>) {
  const rows = Object.entries(data)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([key, value]) => {
      const label = FIELD_LABELS[key] ?? key;
      const formatted = escapeHtml(formatValue(key, value)).replace(/\n/g, "<br />");
      return `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #f2efe4;font-size:13px;font-weight:600;color:#003f24;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #f2efe4;font-size:14px;color:#1f2a24;">${formatted}</td>
        </tr>`;
    })
    .join("");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#fbfaf6;padding:32px 16px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #f2efe4;">
      <div style="background:#003f24;padding:24px 28px;">
        <p style="margin:0;color:#d9ad13;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">OaksPlace Montessori</p>
        <h1 style="margin:6px 0 0;color:#fbfaf6;font-size:20px;font-weight:600;">${FORM_COPY[formType].heading}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${rows}
      </table>
      <div style="padding:16px 28px 24px;">
        <p style="margin:0;font-size:12px;color:#5f6863;">
          Submitted via ${formType === "french-immersion" ? "the French Immersion" : "the Admissions"} landing page. Reply to this email to respond directly to the parent.
        </p>
      </div>
    </div>
  </div>`;
}

function confirmationHtml(formType: LeadFormType, data: Record<string, string>) {
  const firstName = (data.parentName || "there").split(" ")[0];
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#fbfaf6;padding:32px 16px;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #f2efe4;">
      <div style="background:#003f24;padding:32px 28px;text-align:center;">
        <p style="margin:0;font-family:Georgia,serif;font-style:italic;color:#d9ad13;font-size:16px;">Intentionally nurturing potential.</p>
      </div>
      <div style="padding:32px 28px;">
        <p style="margin:0 0 16px;font-size:15px;color:#1f2a24;">Hi ${escapeHtml(firstName)},</p>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#1f2a24;">${FORM_COPY[formType].confirmationBody}</p>
        <div style="margin:24px 0;padding:18px 20px;background:#f2efe4;border-radius:12px;">
          <p style="margin:0;font-size:13px;color:#5f6863;">
            <strong style="color:#003f24;">Have a question that can't wait?</strong><br />
            Call us at <a href="tel:${site.phoneHref.replace("tel:", "")}" style="color:#b94f0b;text-decoration:none;">${site.phone}</a>
            or email <a href="mailto:${site.email}" style="color:#b94f0b;text-decoration:none;">${site.email}</a>.
          </p>
        </div>
        <p style="margin:0;font-size:13px;color:#5f6863;">${site.name}<br />${site.address}</p>
      </div>
    </div>
  </div>`;
}

export async function sendLeadEmails(formType: LeadFormType, data: Record<string, string>) {
  const resend = getResend();
  if (!resend) {
    console.log(`[email disabled — no RESEND_API_KEY] ${formType} submission:`, data);
    return { notificationSent: false, confirmationSent: false };
  }

  const notifyTo = process.env.NOTIFY_TO || site.email;
  const parentEmail = data.email;

  const [notification, confirmation] = await Promise.allSettled([
    resend.emails.send({
      from: fromAddress("OaksPlace Website"),
      to: [notifyTo],
      replyTo: parentEmail || undefined,
      subject: `New ${FORM_COPY[formType].subjectNoun} — ${data.parentName || "Unknown"}`,
      html: notificationHtml(formType, data),
    }),
    parentEmail
      ? resend.emails.send({
          from: fromAddress("OaksPlace Montessori"),
          to: [parentEmail],
          subject:
            formType === "french-immersion"
              ? "We've received your French Immersion registration"
              : "We've received your admissions enquiry",
          html: confirmationHtml(formType, data),
        })
      : Promise.resolve(null),
  ]);

  if (notification.status === "rejected" || notification.value?.error) {
    console.error(
      `Failed to send ${formType} notification email:`,
      notification.status === "rejected" ? notification.reason : notification.value?.error
    );
  }
  if (confirmation.status === "rejected" || confirmation.value?.error) {
    console.error(
      `Failed to send ${formType} confirmation email:`,
      confirmation.status === "rejected" ? confirmation.reason : confirmation.value?.error
    );
  }

  return {
    notificationSent: notification.status === "fulfilled" && !notification.value?.error,
    confirmationSent:
      !!parentEmail && confirmation.status === "fulfilled" && !confirmation.value?.error,
  };
}
