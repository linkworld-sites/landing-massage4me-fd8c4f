"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

const FEATURED = [
  {
    name: "Schwedische Entspannung",
    duration: "60 / 90 / 120 Min.",
    descriptor: "Lange, fließende Streichungen, die Verspannungen lösen und das Nervensystem zur Ruhe bringen.",
  },
  {
    name: "Tiefengewebstherapie",
    duration: "60 / 90 Min.",
    descriptor: "Gezielter Druck auf chronische Verspannungen, Knoten und Muskelverwachsungen.",
  },
];

const ALL_TREATMENTS = [
  { name: "Hot-Stone-Ritual", duration: "90 / 120 Min.", desc: "Warme Basaltsteine lösen tiefe Verspannungen und schenken regenerierende Wärme." },
  { name: "Sport-Regeneration", duration: "60 / 90 Min.", desc: "Kompression, Stretching und myofasziale Techniken zur Beschleunigung der Erholung." },
  { name: "Schwangerschaftsmassage", duration: "60 / 90 Min.", desc: "Sanfte Techniken für werdende Mütter — bei Rückenschmerzen, Schwere und Anspannung." },
  { name: "Aromatherapie", duration: "60 / 90 / 120 Min.", desc: "Schwedische Massage mit ätherischen Ölen gegen Stress, Schlafprobleme und Stimmungstiefs." },
];

export default function Treatments() {
  const prefersReduced = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: prefersReduced ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="treatments" className="bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: prefersReduced ? 0 : 0.7 }}
              className="mb-3 font-heading text-[10px] uppercase tracking-superwide text-gold/70"
            >
              Unser Angebot
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-tight tracking-[-0.01em] text-parchment"
            >
              Deine Behandlung,
              <br />
              nach deinen Regeln.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: prefersReduced ? 0 : 0.8 }}
            className="max-w-xs font-body text-sm font-light leading-relaxed text-parchment/50"
          >
            Keine Behandlung. Eine Neukalibrierung. Jede Session wird auf deinen Körper,
            deine Geschichte, deine Stunde abgestimmt.
          </motion.p>
        </div>

        {/* Asymmetric grid — image card + two type cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 lg:gap-6">
          {/* Featured image card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden md:col-span-3"
            style={{ minHeight: "420px" }}
          >
            <Image
              src="/images/detail.png"
              alt="Close-up hands working therapeutic massage on warm skin"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/70">
                Signature-Behandlung
              </p>
              <p className="mt-2 font-heading text-2xl font-light text-parchment">
                Hot-Stone-Ritual
              </p>
              <p className="mt-1 font-body text-xs text-parchment/50">90 / 120 min</p>
            </div>
          </motion.div>

          {/* Two type-only cards */}
          <div className="flex flex-col gap-4 md:col-span-2">
            {FEATURED.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i + 1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-1 flex-col justify-between border border-parchment/8 bg-plum p-8 transition-colors hover:border-gold/20"
              >
                <div>
                  <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/60">
                    {t.duration}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-light text-parchment">
                    {t.name}
                  </h3>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-parchment/50">
                    {t.descriptor}
                  </p>
                </div>
                <div className="mt-6 h-px w-8 bg-gold/30" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional treatments list */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALL_TREATMENTS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="border border-parchment/6 p-6 transition-colors hover:border-gold/15"
            >
              <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/50">
                {t.duration}
              </p>
              <h3 className="mt-3 font-heading text-base font-light text-parchment">
                {t.name}
              </h3>
              <p className="mt-2 font-body text-xs font-light leading-relaxed text-parchment/45">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <Link
            href="/book"
            onClick={() => track("intent")}
            className="font-body text-sm font-light uppercase tracking-[0.1em] text-gold/70 underline underline-offset-4 transition-colors hover:text-gold"
          >
            Jetzt buchen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
