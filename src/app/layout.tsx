import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Massage4me — Professionelle Massagetherapie",
  description:
    "Jetzt einen zertifizierten Masseur buchen. Gleiche-Tag-Verfügbarkeit, mobil & Studio. Druck, mit Absicht gesetzt. Erleichterung, die bleibt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <FunnelTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
