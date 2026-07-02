import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "French Immersion Summer Programme | OaksPlace Montessori",
  description:
    "A month of joyful, hands-on French immersion inside an authentic Montessori environment in Sangotedo, Lagos. 3rd-28th August 2026. Ages 18 months-6 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-cream text-foreground">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
