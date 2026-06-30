"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";
import ConversionForm from "@/components/ConversionForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const FIELDS = [
  { name: "name", label: "Your name", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  {
    name: "treatment",
    label: "Treatment type",
    type: "text",
    required: false,
  },
  {
    name: "message",
    label: "Anything else? (pressure, areas of focus, dates)",
    type: "textarea",
    required: false,
  },
];

export default function BookPage() {
  const prefersReduced = useReducedMotion();
  const formWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    track("booking_start");

    // Fire convert when the native form submits (ConversionForm fires booking_confirmed)
    const el = formWrapperRef.current;
    if (!el) return;
    const handleSubmit = () => track("convert");
    el.addEventListener("submit", handleSubmit, true);
    return () => el.removeEventListener("submit", handleSubmit, true);
  }, []);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-navy pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReduced ? 0 : 0.6 }}
          >
            <Link
              href="/"
              className="font-body text-xs uppercase tracking-[0.12em] text-parchment/40 transition-colors hover:text-parchment"
            >
              ← Back
            </Link>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/70">
                Reserve your session
              </p>
              <h1 className="mt-4 font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-light leading-tight tracking-[-0.01em] text-parchment">
                Your hour.
                <br />
                <span className="text-gold/80">Entirely yours.</span>
              </h1>
              <p className="mt-6 font-body text-sm font-light leading-relaxed text-parchment/55">
                Tell us what you need. A therapist matched to your body and
                preferences will confirm your time, your place — mobile or
                studio — within the hour.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: "◯", text: "Same-day availability in most areas" },
                  { icon: "◯", text: "Mobile · In-home · Studio sessions" },
                  { icon: "◯", text: "500+ certified, background-checked therapists" },
                  { icon: "◯", text: "Your preferences saved for every future session" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="mt-1 font-heading text-[10px] text-gold/50">
                      {item.icon}
                    </span>
                    <p className="font-body text-sm font-light text-parchment/55">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 h-px w-full bg-parchment/8" />
              <p className="mt-6 font-body text-xs font-light text-parchment/30">
                4.9★ across 12,000+ sessions · No deposit required ·
                Free cancellation 24h before
              </p>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReduced ? 0 : 0.15,
                duration: prefersReduced ? 0 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="border border-parchment/10 bg-plum p-8 md:p-10">
                <p className="mb-8 font-heading text-xs uppercase tracking-[0.15em] text-parchment/50">
                  Request a booking
                </p>
                {/* Wrap form to capture submit event for track('convert') */}
                <div ref={formWrapperRef} className="[&_input]:!bg-transparent [&_textarea]:!bg-transparent [&_button]:!bg-gold [&_button]:!text-navy [&_button]:font-heading [&_button]:!border-0 [&_button]:!px-8 [&_button]:!py-3 [&_button]:text-xs [&_button]:tracking-[0.12em]">
                  <ConversionForm
                    startStep="booking_start"
                    submitStep="booking_confirmed"
                    cta="Request Booking"
                    fields={FIELDS}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
