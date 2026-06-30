"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { track } from "@/lib/funnel";

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 20%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced
      ? ["inset(0% 0 0% 0)", "inset(0% 0 0% 0)"]
      : ["inset(100% 0 0% 0)", "inset(0% 0 0% 0)"]
  );

  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const contentY = useTransform(
    scrollYProgress,
    [0.4, 0.8],
    prefersReduced ? [0, 0] : [24, 0]
  );

  const handleBook = () => track("intent");

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Animated background wash */}
      <motion.div
        className="relative min-h-[80vh] bg-plum py-32 md:py-48"
        style={{ clipPath: prefersReduced ? undefined : clipPath }}
      >
        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/8 blur-[140px]" />

        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center lg:px-12"
          style={{
            opacity: prefersReduced ? 1 : contentOpacity,
            y: prefersReduced ? 0 : contentY,
          }}
        >
          <p className="mb-8 font-heading text-[10px] uppercase tracking-superwide text-gold/60">
            Reserve your time
          </p>

          <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight tracking-[-0.01em] text-parchment">
            Your hour
            <br />
            is waiting.
          </h2>

          <p className="mx-auto mt-6 max-w-sm font-body text-sm font-light leading-relaxed text-parchment/50">
            Same-day availability. Real-time booking. A therapist shaped to
            your body&rsquo;s needs — not a generic session.
          </p>

          {/* Hairline divider */}
          <div className="mx-auto my-12 h-px w-16 bg-gold/30" />

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link href="/book" onClick={handleBook}>
              <motion.div
                className="relative overflow-hidden border border-parchment/40 px-10 py-4 text-xs uppercase tracking-[0.18em]"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gold"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="relative z-10 font-heading font-light"
                  variants={{
                    rest: { color: "#F5EDE0" },
                    hover: { color: "#1A1A2E" },
                  }}
                  transition={{ duration: 0.35 }}
                >
                  Book Online
                </motion.span>
              </motion.div>
            </Link>

            <span className="hidden h-6 w-px bg-parchment/15 sm:block" />

            <motion.a
              href="tel:+442012345678"
              className="relative overflow-hidden border border-parchment/20 px-10 py-4 text-xs uppercase tracking-[0.18em]"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-0 bg-parchment/10"
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10 font-heading font-light text-parchment/60 hover:text-parchment">
                Call Us
              </span>
            </motion.a>
          </div>

          {/* Reassurance micro-copy */}
          <p className="mt-10 font-body text-[11px] font-light uppercase tracking-[0.1em] text-parchment/25">
            No deposit · Free cancellation 24h before · Mobile & studio
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
