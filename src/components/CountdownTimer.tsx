"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CountdownTimerProps = {
  target: string;
  className?: string;
};

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    done: diff <= 0,
  };
}

const units: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
];

export function CountdownTimer({ target, className }: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    // Client-only mount flag to avoid a server/client hydration mismatch on
    // the live seconds digit — this is the standard hydration-safe pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const interval = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!mounted) return null;

  if (timeLeft.done) {
    return (
      <p className={className ?? "text-sm font-semibold text-gold"}>
        Registration is open now — spaces are filling up.
      </p>
    );
  }

  return (
    <div className={className ?? "flex items-center justify-center gap-3 sm:gap-4"}>
      {units.map((unit) => (
        <div key={unit.key} className="flex flex-col items-center">
          <motion.div
            key={`${unit.key}-${timeLeft[unit.key]}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl font-semibold tabular-nums text-white sm:h-16 sm:w-16 sm:text-3xl"
          >
            {String(timeLeft[unit.key]).padStart(2, "0")}
          </motion.div>
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-cream/60 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
