import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Enquiry Received | Admissions | ${site.name}`,
  robots: { index: false, follow: false },
};

export default function AdmissionsThankYouPage() {
  return (
    <>
      {/*
        Ad conversion tracking: fire your Meta Pixel / Google Ads / TikTok
        conversion event here once you have the pixel IDs, e.g.:
        <Script id="admissions-conversion" strategy="afterInteractive">
          {`fbq('track', 'Lead'); gtag('event', 'conversion', {...});`}
        </Script>
      */}
      <Section tone="cream" className="pt-16">
        <Reveal className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
            <CheckCircle2 className="h-9 w-9 text-green" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Enquiry received
          </p>
          <h1 className="mt-3 text-4xl font-medium text-dark-green md:text-5xl">
            Thank you for considering OaksPlace.
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Our team will personally reach out within 1–2 business days to confirm a tour time
            and answer any questions about admissions — no pressure, no obligation.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 text-left shadow-sm">
            <p className="font-serif text-lg text-dark-green">What happens next</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>&bull; We&rsquo;ll confirm a tour time that works for your family.</li>
              <li>&bull; You&rsquo;ll meet our Guides and see our prepared environments in person.</li>
              <li>&bull; We&rsquo;ll walk you through admissions steps and answer every question.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={site.phoneHref} size="lg">
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </Button>
            <Button href={site.mainSiteUrl} variant="ghost" size="lg">
              Visit the Main Site
            </Button>
          </div>

          <Link
            href="/admissions"
            className="mt-8 inline-block text-sm text-muted underline decoration-dark-green/20 underline-offset-4 hover:text-dark-green"
          >
            &larr; Back to Admissions
          </Link>

          <div className="mt-10 flex justify-center">
            <Image
              src="/brand/logo-icon.png"
              alt={site.name}
              width={512}
              height={512}
              className="h-14 w-14 object-contain opacity-80"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
