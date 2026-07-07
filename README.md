# OaksPlace — French Immersion & Admissions Landing Pages

A standalone ad-click landing destination for OaksPlace Montessori School,
separate from the main marketing site. Built for paid traffic conversion:
minimal navigation, strong single-scroll persuasive copy, and lead-capture
forms.

## Pages

- `/` — French Immersion Summer Programme (3–28 Aug 2026, ages 18 months–6 years)
- `/admissions` — General admissions enquiry
- `/thank-you/french-immersion`, `/thank-you/admissions` — post-submit
  confirmation pages (placeholders left for ad-pixel conversion tracking)

## Getting Started

```bash
npm install
npm run dev -- -p 3001
```

Runs on port 3001 by default so it can run alongside the main OaksPlace
site (which uses port 3000).

## Forms & Email

Both lead forms POST to `/api/french-immersion` and `/api/admissions`.
Each submission triggers two emails via [Resend](https://resend.com):

1. A **notification** to `info@oaksplacemontessori.com` (or whatever
   `NOTIFY_TO` is set to) with the lead's details — reply-to is set to the
   parent's email, so hitting "reply" goes straight to them.
2. A branded **confirmation** email to the parent.

Without a `RESEND_API_KEY` set, submissions are just logged to the server
console instead of emailed — so local development doesn't require a Resend
account. Copy `.env.example` to `.env.local` and fill in real values to test
sending locally.

### Required environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) |
| `EMAIL_FROM` | Sending address — its domain must be verified in Resend |
| `NOTIFY_TO` | Where lead notifications land (defaults to `info@oaksplacemontessori.com`) |

## Deploying to Netlify

This repo deploys to Netlify zero-config (Next.js 16 is auto-detected, no
plugin installation needed). See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the
full step-by-step runbook — it's tailored to this domain's actual setup
(Namecheap DNS + Zoho Mail) with the exact DNS records to add and a note on
why none of it breaks the existing Zoho email.

## Before launching ads

- Add your Meta/Google/TikTok pixel snippets to the thank-you pages (see
  the comments at the top of each `thank-you/*/page.tsx`).
- Confirm the Resend domain shows "Verified" and send a real test
  submission before turning on ad spend.

## Stack

Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · TypeScript ·
Resend. Shares the OaksPlace brand system (colors, fonts, logo) with the
main site.
