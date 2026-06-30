"use client";

import { useReducedMotion, motion } from "framer-motion";

export default function Philosophy() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-plum py-32 md:py-48">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: prefersReduced ? 0 : 0.8 }}
          className="mb-12 font-heading text-[10px] uppercase tracking-superwide text-gold/60"
        >
          Our Philosophy
        </motion.p>

        {/* Main quote — two lines */}
        <div className="space-y-4">
          {[
            "Touch is the oldest language.",
            "We speak it fluently.",
          ].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ y: prefersReduced ? 0 : "100%", opacity: prefersReduced ? 1 : 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.15,
                  duration: prefersReduced ? 0 : 1.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-light italic leading-tight tracking-[-0.01em] text-parchment"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Divider + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.4, duration: prefersReduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex items-center gap-6"
        >
          <div className="h-px w-12 bg-gold/40" />
          <p className="font-body text-sm font-light tracking-[0.06em] text-parchment/50">
            500+ certified therapists · 4.9★ across 12,000+ sessions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
