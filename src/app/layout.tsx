import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Massage4me — Professional Massage Therapy",
  description:
    "Book a certified massage therapist today. 500+ vetted therapists, same-day availability, mobile & studio sessions. Made for your body. Timed for your life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FunnelTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
