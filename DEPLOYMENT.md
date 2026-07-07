# Deployment Runbook — frenchimmersion.oaksplacemontessori.com

This is a step-by-step guide for going live. Everything here needs your
account logins (Namecheap, Netlify, Resend), so these are the steps for
**you** to run — the code side is already done and pushed to
`Okerien/oaksplace-french-immersion`.

## Your current setup (verified via DNS lookup)

| Thing | Value | Notes |
|---|---|---|
| DNS host | **Namecheap BasicDNS** (`dns1/dns2.registrar-servers.com`) | All DNS records go in Namecheap → **Advanced DNS**, not Netlify |
| Main site | Parking page on Netlify (`amazing-torte-8a316f.netlify.app`) | The apex `A` record already points to Netlify (`75.2.60.5`) |
| Email | **Zoho Mail** (`mx.zoho.com`), root SPF `include:zohomail.com`, DKIM on `zoho._domainkey` | **Leave all of these untouched** |

### The important reassurance about your email

Nothing in this setup will break Zoho email. Resend isolates everything
onto a **`send.` subdomain** (for its bounce handling + SPF) and uses its
own **`resend._domainkey`** DKIM selector. Your Zoho records live on the
**root domain** and the **`zoho._domainkey`** selector — completely
separate namespaces. You are *adding* records, never editing or removing
Zoho's. Receiving mail at `info@oaksplacemontessori.com` keeps working
exactly as it does today.

---

## Step 1 — Create the Netlify site

1. Netlify → **Add new site → Import an existing project → GitHub**.
2. Pick the repo **`Okerien/oaksplace-french-immersion`**, branch **`main`**.
3. Build settings are auto-detected (also declared in `netlify.toml`):
   build command `npm run build`, Next.js runtime is automatic. Deploy.
4. Note the site's temporary address, e.g. `something-xyz.netlify.app` —
   you'll need it in Step 3. (It will be **different** from the parking
   page's address.)

## Step 2 — Add environment variables (Netlify)

Site → **Site configuration → Environment variables** → add:

| Key | Value |
|---|---|
| `RESEND_API_KEY` | (from Step 4 — `re_...`) |
| `EMAIL_FROM` | `info@oaksplacemontessori.com` |
| `NOTIFY_TO` | `info@oaksplacemontessori.com` |

After adding them, trigger a redeploy (**Deploys → Trigger deploy → Clear
cache and deploy site**) so the running site picks them up.

> Until `RESEND_API_KEY` is set, the forms still work but just log to the
> server instead of emailing — no crashes, just no email.

## Step 3 — Point the subdomain (Namecheap)

Namecheap → Domain List → **Manage** `oaksplacemontessori.com` →
**Advanced DNS** → **Add New Record**:

| Type | Host | Value | TTL |
|---|---|---|---|
| `CNAME Record` | `frenchimmersion` | `<your-new-site>.netlify.app` | Automatic |

> **Namecheap gotcha:** the **Host** field is just the subdomain part
> (`frenchimmersion`) — Namecheap appends `.oaksplacemontessori.com`
> automatically. Don't type the full domain.

Then in Netlify → your new site → **Domain management → Add a domain** →
enter `frenchimmersion.oaksplacemontessori.com`. Netlify will verify the
CNAME and auto-provision an SSL certificate (a few minutes once DNS
propagates).

## Step 4 — Verify the domain in Resend

1. [resend.com](https://resend.com) → sign up / log in → **API Keys** →
   create one → that's your `RESEND_API_KEY` for Step 2.
2. **Domains → Add Domain** → enter `oaksplacemontessori.com`.
3. Resend shows a set of DNS records. Add each one in Namecheap →
   **Advanced DNS**. They'll look like this (exact values come from your
   Resend dashboard):

| Type | Host (Namecheap field) | Value | Priority |
|---|---|---|---|
| `MX` | `send` | `feedback-smtp.<region>.amazonses.com` | 10 |
| `TXT` | `send` | `v=spf1 include:amazonses.com ~all` | — |
| `TXT` | `resend._domainkey` | `p=MIGfMA0…` (long key from Resend) | — |

> **Namecheap gotcha (same as above):** when Resend says the record is for
> `send.oaksplacemontessori.com`, the Namecheap **Host** field is just
> `send`. For `resend._domainkey.oaksplacemontessori.com`, the Host is
> `resend._domainkey`. Never include the root domain in the Host field.

4. Back in Resend, click **Verify**. It can take a few minutes to a few
   hours for DNS to propagate. Sending will fail until it shows
   **Verified** — this is the one thing that gates go-live.

> Resend may also suggest a `_dmarc` TXT record (you don't have one yet).
> Adding `v=DMARC1; p=none;` is safe — `p=none` is monitor-only and won't
> affect Zoho deliverability. Optional but recommended.

## Step 5 — Test before spending on ads

1. Once Resend shows **Verified** and Netlify shows the subdomain live
   with SSL, open `https://frenchimmersion.oaksplacemontessori.com`.
2. Submit the registration form with a **real address you control** (not
   your info@ — use a personal Gmail so you see the parent confirmation).
3. Confirm you received **two** emails:
   - The **notification** in the `info@oaksplacemontessori.com` Zoho inbox
     (reply to it → goes straight to the parent).
   - The **confirmation** in the personal address you used.
4. Repeat on `/admissions`.

## Ad-pixel tracking (optional, before ads)

Each thank-you page (`src/app/thank-you/*/page.tsx`) has a commented
placeholder at the top for your Meta / Google / TikTok conversion pixel.
Drop the snippet there so ad platforms record the lead as a conversion.

---

## Quick reference — all DNS records you'll add in Namecheap

Site (Step 3):

```
CNAME  frenchimmersion  →  <new-netlify-site>.netlify.app
```

Email / Resend (Step 4 — exact values from your Resend dashboard):

```
MX     send             →  feedback-smtp.<region>.amazonses.com   (pri 10)
TXT    send             →  v=spf1 include:amazonses.com ~all
TXT    resend._domainkey→  p=MIGf…(long key)
TXT    _dmarc           →  v=DMARC1; p=none;                       (optional)
```

**Do not touch** your existing Zoho records: the root `MX` (mx.zoho.com…),
the root SPF `TXT` (`v=spf1 include:zohomail.com ~all`), or
`zoho._domainkey`. They stay exactly as they are.
