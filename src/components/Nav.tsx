"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/funnel";

const NAV_LINKS = [
  { href: "/#treatments", label: "Behandlungen" },
  { href: "/#about", label: "Über mich" },
  { href: "/blog", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBook = () => {
    track("intent");
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-navy/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="/"
            className="font-heading text-base font-light uppercase tracking-[0.18em] text-gold"
          >
            Massage<span className="text-parchment/90">4me</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/book" onClick={handleBook} className="hidden md:block">
              <BookCTA>Session buchen</BookCTA>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-px w-6 bg-parchment transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-parchment transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-parchment transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy"
          >
            <ul className="flex flex-col items-center gap-10">
              {[...NAV_LINKS, { href: "/book", label: "Book a Session" }].map(
                (l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => {
                        if (l.href === "/book") handleBook();
                        else setOpen(false);
                      }}
                      className="font-heading text-3xl font-light uppercase tracking-superwide text-parchment transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative font-body text-xs uppercase tracking-[0.12em] text-parchment/70 transition-colors hover:text-parchment"
    >
      {children}
      <motion.span
        className="absolute -bottom-0.5 left-0 right-0 h-px origin-center bg-gold"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </Link>
  );
}

function BookCTA({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative overflow-hidden border border-gold/50 px-6 py-2.5 text-xs uppercase tracking-[0.12em]"
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        className="absolute inset-0 bg-gold"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="relative z-10 font-heading font-light"
        variants={{
          rest: { color: "#F5EDE0" },
          hover: { color: "#1A1A2E" },
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
