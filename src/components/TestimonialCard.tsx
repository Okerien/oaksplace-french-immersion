import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm">
      <Quote className="h-6 w-6 text-gold" />
      <p className="mt-4 flex-1 leading-relaxed text-dark-green/90">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6">
        <p className="font-serif text-base text-dark-green">{name}</p>
        <p className="text-xs uppercase tracking-wide text-muted">{role}</p>
      </div>
    </div>
  );
}
