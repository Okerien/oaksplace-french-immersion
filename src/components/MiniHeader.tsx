"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import { site } from "@/lib/site-data";
import { Button } from "./Button";

type NavLink = { label: string; href: string };

type MiniHeaderProps = {
  ctaLabel: string;
  ctaShortLabel?: string;
  ctaHref?: string;
  crossLinkLabel?: string;
  crossLinkHref?: string;
  navLinks?: NavLink[];
};

export function MiniHeader({
  ctaLabel,
  ctaShortLabel,
  ctaHref = "#register",
  crossLinkLabel,
  crossLinkHref,
  navLinks = [],
}: MiniHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt="OaksPlace Montessori School"
            width={849}
            height={727}
            className="h-11 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark-green/80 transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
          {crossLinkLabel && crossLinkHref && (
            <Link
              href={crossLinkHref}
              className="text-sm font-medium text-dark-green/70 underline decoration-dark-green/20 underline-offset-4 transition-colors hover:text-orange"
            >
              {crossLinkLabel}
            </Link>
          )}
          <a
            href={site.phoneHref}
            aria-label="Call OaksPlace Montessori"
            className="flex items-center gap-1.5 text-sm font-medium text-dark-green/80 hover:text-orange"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href={ctaHref} size="md">
              {ctaLabel}
            </Button>
          </div>
          <div className="lg:hidden">
            <Button href={ctaHref} size="sm">
              {ctaShortLabel ?? ctaLabel}
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-md p-2 text-dark-green lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-dark-green/10 bg-cream lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-dark-green/85 transition-colors hover:bg-dark-green/5"
                >
                  {link.label}
                </a>
              ))}
              {crossLinkLabel && crossLinkHref && (
                <Link
                  href={crossLinkHref}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-dark-green/85 underline decoration-dark-green/20 underline-offset-4 transition-colors hover:bg-dark-green/5"
                >
                  {crossLinkLabel}
                </Link>
              )}
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-dark-green/85 hover:bg-dark-green/5"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <Button href={ctaHref} className="mt-3 w-full" onClick={() => setOpen(false)}>
                {ctaLabel}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
