import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-dark-green text-cream">
      <div className="container-oaks flex flex-col items-center gap-6 py-12 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-cream p-3 shadow-md">
          <Image
            src="/brand/logo-icon.png"
            alt="OaksPlace Montessori School"
            width={512}
            height={512}
            className="h-9 w-9 object-contain"
          />
        </div>

        <p className="font-serif text-lg italic text-gold">{site.tagline}</p>

        <div className="flex flex-col items-center gap-2 text-sm text-cream/80 sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-orange" />
            {site.address}
          </span>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 shrink-0 text-orange" />
            {site.email}
          </a>
          <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 shrink-0 text-orange" />
            {site.phone}
          </a>
        </div>

        <p className="text-xs text-cream/50">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
