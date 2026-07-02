"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck } from "lucide-react";
import clsx from "clsx";

type LeadFormProps = {
  endpoint: string;
  thankYouHref: string;
  children: React.ReactNode;
  submitLabel: string;
  trustNote?: string;
  className?: string;
};

export function LeadForm({
  endpoint,
  thankYouHref,
  children,
  submitLabel,
  trustNote = "We respect your privacy — your details are never shared or sold.",
  className,
}: LeadFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push(thankYouHref);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={clsx(
          "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white shadow-md transition-colors hover:bg-dark-green disabled:cursor-not-allowed disabled:opacity-70"
        )}
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitLabel}
      </motion.button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-green" />
        {trustNote}
      </p>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-orange">
          Something went wrong. Please try again, or call us directly.
        </p>
      )}
    </form>
  );
}
