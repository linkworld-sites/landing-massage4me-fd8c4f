"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [1, 1] : [1.04, 1]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["0%", "18%"]
  );

  const handleBook = () => {
    track("intent");
  };

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/material.png"
          alt="Warm candlelit massage studio — close-up texture of skin and stone"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />
        <div className="absolute inset-0 bg-plum/30" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: prefersReduced ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 font-heading text-[10px] uppercase tracking-superwide text-gold/80"
        >
          Professional Massage Therapy
        </motion.p>

        {/* Studio name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: prefersReduced ? 0 : 1.0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-heading text-[clamp(3.5rem,10vw,8rem)] font-light leading-none tracking-[-0.01em] text-parchment"
        >
          massage
          <span className="text-gold">4</span>
          me
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: prefersReduced ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 font-body text-[clamp(0.9rem,2vw,1.1rem)] font-light leading-relaxed tracking-[0.04em] text-parchment/70"
        >
          Made for your body. Timed for your life.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: prefersReduced ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14"
        >
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
                Book a Session
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="font-heading text-[9px] uppercase tracking-superwide text-parchment/30">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-parchment/30 to-transparent"
          animate={prefersReduced ? {} : { scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
