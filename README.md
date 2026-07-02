# OaksPlace — French Immersion & Admissions Landing Pages

A standalone ad-click landing destination for OaksPlace Montessori School,
separate from the main marketing site. Built for paid traffic conversion:
minimal navigation, strong single-scroll persuasive copy, and lead-capture
forms.

## Pages

- `/` — French Immersion Summer Programme (3–28 Aug 2026, ages 3–6)
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

## Forms

Both lead forms POST to `/api/french-immersion` and `/api/admissions`,
which currently just log the submission server-side. Wire these up to a
real email/CRM service (Resend, SendGrid, a Google Sheet, etc.) before
launch — see the `TODO` comments in `src/app/api/*/route.ts`.

## Before launching ads

- Replace the placeholder testimonials in `src/app/page.tsx` and
  `src/app/admissions/page.tsx` with real parent quotes.
- Wire the two API routes to an actual notification channel.
- Add your Meta/Google/TikTok pixel snippets to the thank-you pages (see
  the comments at the top of each `thank-you/*/page.tsx`).

## Stack

Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · TypeScript.
Shares the OaksPlace brand system (colors, fonts, logo) with the main site.
