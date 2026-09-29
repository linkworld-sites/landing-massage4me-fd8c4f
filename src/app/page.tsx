import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Treatments from "@/components/sections/Treatments";
import CinematicScroll from "@/components/sections/CinematicScroll";
import Therapists from "@/components/sections/Therapists";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/sections/BookingSection";
import { SITE_URL } from "@/lib/site";

const HOMEPAGE_DESCRIPTION =
  "Book a professional massage today — Swedish, deep tissue, hot stone & more. Certified therapist, same-day availability, 4.9★ across 12,000+ sessions. Mobile or studio, on your schedule.";

export const metadata = {
  title: "Massage4me — Professionelle Massagetherapie",
  description: HOMEPAGE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Massage4me — Professionelle Massagetherapie",
    description: HOMEPAGE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Massage4me",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Massage4me",
  url: SITE_URL,
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12000",
  },
  makesOffer: [
    "Schwedische Entspannung",
    "Tiefengewebstherapie",
    "Hot-Stone-Ritual",
    "Sport-Regeneration",
    "Schwangerschaftsmassage",
    "Aromatherapie",
  ].map((serviceName) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: serviceName,
      provider: {
        "@type": "LocalBusiness",
        name: "Massage4me",
      },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Treatments />
        <CinematicScroll />
        <Therapists />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
