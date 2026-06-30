"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const SCENES = [
  {
    src: "/images/material.png",
    alt: "Arrival — a serene studio space, warm candlelight on stone",
    label: "01 / Arrival",
    headline: "You step in.",
    body: "The world outside stays there. Everything slows.",
  },
  {
    src: "/images/process.png",
    alt: "Table time — hands working with intention on warm skin",
    label: "02 / Table time",
    headline: "We work where stress lives.",
    body: "Not a technique. A conversation between touch and tissue.",
  },
  {
    src: "/images/detail.png",
    alt: "Afterglow — a face in serene profile, eyes closed, at rest",
    label: "03 / Afterglow",
    headline: "Your hour. Entirely yours.",
    body: "You leave different from how you arrived.",
  },
];

export default function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Image opacities — staggered crossfades
  const img1Opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.42],
    [1, 1, 0]
  );
  const img2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.42, 0.68, 0.82],
    [0, 1, 1, 0]
  );
  const img3Opacity = useTransform(
    scrollYProgress,
    [0.68, 0.82, 1],
    [0, 1, 1]
  );

  // Caption opacities
  const cap1Opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.3, 0.42],
    [0, 1, 1, 0]
  );
  const cap2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.42, 0.65, 0.78],
    [0, 1, 1, 0]
  );
  const cap3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.78, 1],
    [0, 1, 1]
  );

  // Caption Y drift
  const cap1Y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.42],
    prefersReduced ? [0, 0, 0, 0] : [24, 0, 0, -20]
  );
  const cap2Y = useTransform(
    scrollYProgress,
    [0.3, 0.42, 0.65, 0.78],
    prefersReduced ? [0, 0, 0, 0] : [24, 0, 0, -20]
  );
  const cap3Y = useTransform(
    scrollYProgress,
    [0.65, 0.78, 1],
    prefersReduced ? [0, 0, 0] : [24, 0, 0]
  );

  const overlayImages = [
    { opacity: img1Opacity },
    { opacity: img2Opacity },
    { opacity: img3Opacity },
  ];
  const captions = [
    { opacity: cap1Opacity, y: cap1Y },
    { opacity: cap2Opacity, y: cap2Y },
    { opacity: cap3Opacity, y: cap3Y },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh]"
      aria-label="The experience — cinematic scroll sequence"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background scenes */}
        {SCENES.map((scene, i) => (
          <motion.div
            key={scene.src}
            className="absolute inset-0"
            style={{ opacity: prefersReduced ? (i === 0 ? 1 : 0) : overlayImages[i].opacity }}
          >
            <Image
              src={scene.src}
              alt={scene.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/75" />
            <div className="absolute inset-0 bg-plum/25" />
          </motion.div>
        ))}

        {/* Section header — always visible */}
        <div className="absolute left-6 top-24 lg:left-12">
          <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/60">
            The Experience
          </p>
        </div>

        {/* Scene captions — centered, stacked */}
        {SCENES.map((scene, i) => (
          <motion.div
            key={scene.label}
            className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-20 text-center"
            style={{
              opacity: prefersReduced ? (i === 0 ? 1 : 0) : captions[i].opacity,
              y: prefersReduced ? 0 : captions[i].y,
            }}
          >
            <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/70">
              {scene.label}
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight text-parchment">
              {scene.headline}
            </h2>
            <p className="mt-4 max-w-md font-body text-sm font-light leading-relaxed text-parchment/60">
              {scene.body}
            </p>
          </motion.div>
        ))}

        {/* Scroll progress dots */}
        <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-2">
          {SCENES.map((_, i) => {
            const dotOpacities = [img1Opacity, img2Opacity, img3Opacity];
            return (
              <motion.div
                key={i}
                className="h-1 w-1 rounded-full bg-parchment"
                style={{
                  opacity: prefersReduced ? 1 : dotOpacities[i],
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
