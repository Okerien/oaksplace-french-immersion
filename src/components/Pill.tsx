import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

type PillProps = {
  icon?: LucideIcon;
  children: React.ReactNode;
  tone?: "cream" | "dark";
  className?: string;
};

export function Pill({ icon: Icon, children, tone = "cream", className }: PillProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide",
        tone === "cream" ? "bg-white/70 text-dark-green" : "bg-white/10 text-cream",
        className
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}
