"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Therapists() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: prefersReduced ? 0 : 0.7 }}
            className="mb-3 font-heading text-[10px] uppercase tracking-superwide text-gold/70"
          >
            The person behind the hands
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-tight tracking-[-0.01em] text-parchment"
          >
            Touch, practiced
            <br />
            to its fullest.
          </motion.h2>
        </div>

        {/* Therapist profile */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 sm:flex-row"
        >
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="relative flex h-[240px] w-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-mauve via-plum to-navy border border-gold/10">
              {/* Abstract texture lines */}
              <svg
                className="absolute inset-0 h-full w-full opacity-10"
                viewBox="0 0 180 240"
                aria-hidden="true"
              >
                {Array.from({ length: 8 }).map((_, j) => (
                  <line
                    key={j}
                    x1={0}
                    y1={30 * (j + 1)}
                    x2={180}
                    y2={30 * (j + 1) + (j % 2 === 0 ? 20 : -20)}
                    stroke="#C9963A"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
              {/* Monogram */}
              <div className="relative text-center">
                <span className="font-heading text-4xl font-light tracking-[0.1em] text-parchment/70">
                  RJ
                </span>
              </div>
              {/* Gold top edge */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gold/40" />
            </div>
            <p className="mt-3 font-heading text-[10px] uppercase tracking-[0.15em] text-parchment/30">
              Years of experience
            </p>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-light text-parchment">
              Rene Juschitz
            </h3>
            <p className="mt-1 font-body text-xs font-light uppercase tracking-[0.1em] text-gold/70">
              Certified Massage Therapist
            </p>
            <p className="mt-1 font-body text-xs font-light text-parchment/40">
              Deep Tissue · Swedish · Relaxation · Sports Recovery
            </p>

            <blockquote className="mt-6 border-l border-gold/30 pl-5">
              <p className="font-heading text-base font-light italic leading-relaxed text-parchment/70">
                &ldquo;I listen with my hands before I listen with my ears.&rdquo;
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 border-t border-parchment/8 pt-12"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              { stat: "4.9★", label: "Average rating" },
              { stat: "12k+", label: "Sessions delivered" },
              { stat: "Same day", label: "Availability" },
            ].map((item) => (
              <div key={item.stat}>
                <p className="font-heading text-[clamp(1.6rem,3vw,2.25rem)] font-light text-gold">
                  {item.stat}
                </p>
                <p className="mt-1 font-body text-xs font-light uppercase tracking-[0.1em] text-parchment/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
