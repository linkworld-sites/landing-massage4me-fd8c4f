import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Treatments from "@/components/sections/Treatments";
import CinematicScroll from "@/components/sections/CinematicScroll";
import Therapists from "@/components/sections/Therapists";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/sections/BookingSection";

export default function Home() {
  return (
    <>
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
