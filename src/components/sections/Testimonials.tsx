"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const QUOTES = [
  {
    text: "Ich hatte nicht geahnt, wie viel ich getragen hatte — bis es weg war. Rene arbeitet genau dort, wo der Stress wirklich sitzt.",
    name: "Priya",
  },
  {
    text: "Keine Behandlung. Eine echte Erholung. Ich habe spontan an einem Dienstag gebucht und bin als anderer Mensch gegangen.",
    name: "James",
  },
  {
    text: "Rene hat sich genau gemerkt, was ich beim letzten Mal erzählt hatte. Diese Sorgfalt ist selten.",
    name: "Aoife",
  },
  {
    text: "Meine Stunde. Ganz für mich. Ich komme immer wieder, weil das anderswo so nicht funktioniert.",
    name: "Daniel",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = () => setIndex((i) => (i + 1) % QUOTES.length);

  useEffect(() => {
    if (prefersReduced) return;
    intervalRef.current = setInterval(advance, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [prefersReduced]);

  const handleDot = (i: number) => {
    setIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, 5000);
  };

  return (
    <section className="relative overflow-hidden bg-plum py-28 md:py-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gold/6 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: prefersReduced ? 0 : 0.7 }}
          className="mb-14 font-heading text-[10px] uppercase tracking-superwide text-gold/60"
        >
          In ihren Worten
        </motion.p>

        {/* Quote */}
        <div className="relative min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReduced ? 0 : -12 }}
              transition={{ duration: prefersReduced ? 0 : 0.6, ease: "easeInOut" }}
            >
              <blockquote>
                <p className="font-heading text-[clamp(1.4rem,3.5vw,2.25rem)] font-light italic leading-tight text-parchment">
                  &ldquo;{QUOTES[index].text}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/70">
                    — {QUOTES[index].name}
                  </p>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Stimme ${i + 1} anzeigen`}
              className={`h-1 transition-all duration-300 ${
                i === index
                  ? "w-6 bg-gold"
                  : "w-1 rounded-full bg-parchment/20 hover:bg-parchment/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
