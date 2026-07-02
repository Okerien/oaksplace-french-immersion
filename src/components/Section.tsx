import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "white" | "dark" | "creamDark";
  id?: string;
  narrow?: boolean;
};

const tones = {
  cream: "bg-cream",
  white: "bg-white",
  dark: "bg-dark-green text-cream",
  creamDark: "bg-cream-dark",
};

export function Section({ children, className, tone = "cream", id, narrow = false }: SectionProps) {
  return (
    <section id={id} className={clsx("py-16 md:py-24", tones[tone], className)}>
      <div className={narrow ? "container-narrow" : "container-oaks"}>{children}</div>
    </section>
  );
}
