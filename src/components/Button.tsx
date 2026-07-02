"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "ghostLight";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
};

const variants = {
  primary: "bg-orange text-white shadow-sm hover:bg-dark-green hover:shadow-md",
  secondary: "bg-dark-green text-white shadow-sm hover:bg-green hover:shadow-md",
  ghost: "border border-dark-green/25 text-dark-green hover:bg-dark-green hover:text-white",
  ghostLight: "border border-cream/40 text-cream hover:bg-cream hover:text-dark-green",
};

const sizes = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

const MotionLink = motion.create(Link);

export function Button({ href, variant = "primary", size = "md", className, children }: ButtonProps) {
  return (
    <MotionLink
      href={href}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </MotionLink>
  );
}
