"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import clsx from "clsx";
import { site } from "@/lib/site-data";
import { Button } from "./Button";

type MiniHeaderProps = {
  ctaLabel: string;
  ctaHref?: string;
  crossLinkLabel?: string;
  crossLinkHref?: string;
};

export function MiniHeader({ ctaLabel, ctaHref = "#register", crossLinkLabel, crossLinkHref }: MiniHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b bg-cream/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "border-dark-green/10 shadow-sm" : "border-transparent"
      )}
    >
      <div className="container-oaks flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo.png"
            alt="OaksPlace Montessori School"
            width={849}
            height={727}
            className="h-11 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          {crossLinkLabel && crossLinkHref && (
            <Link
              href={crossLinkHref}
              className="hidden text-sm font-medium text-dark-green/70 underline decoration-dark-green/20 underline-offset-4 transition-colors hover:text-orange sm:inline"
            >
              {crossLinkLabel}
            </Link>
          )}
          <a
            href={site.phoneHref}
            aria-label="Call OaksPlace Montessori"
            className="hidden items-center gap-1.5 text-sm font-medium text-dark-green/80 hover:text-orange md:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <div className="sm:hidden">
            <Button href={ctaHref} size="sm">
              {ctaLabel}
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button href={ctaHref} size="md">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
