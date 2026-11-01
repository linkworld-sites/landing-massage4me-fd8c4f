import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage buchen – Termin anfragen",
  description:
    "Massage bei Rene Juschitz anfragen: mobil oder im Studio, kurzfristig buchbar, ohne Anzahlung und mit kostenloser Stornierung 24h vorher.",
  alternates: { canonical: "/book" },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
