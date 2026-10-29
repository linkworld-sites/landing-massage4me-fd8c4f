import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Massage4me — Professionelle Massagetherapie",
    template: "%s — Massage4me",
  },
  description:
    "Jetzt einen zertifizierten Masseur buchen. Gleiche-Tag-Verfügbarkeit, mobil & Studio. Druck, mit Absicht gesetzt. Erleichterung, die bleibt.",
  verification: {
    google: "WlJ66mw7eszwjs5WXh-HAJ_3n22gXQA1yf23ABf0enE",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Massage4me",
  url: SITE_URL,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Massage4me",
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script src="https://app.linkworld.ai/api/public/funnel/fd8c4fc9-3ac3-4747-84bc-f06cc2eb5074/pixel.js" async></script>
        <FunnelTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
