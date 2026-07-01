import Link from "next/link";

const NAV = [
  { href: "/#treatments", label: "Behandlungen" },
  { href: "/#about", label: "Über mich" },
  { href: "/blog", label: "Journal" },
  { href: "/book", label: "Buchen" },
];

const LEGAL = [
  { href: "/legal/privacy", label: "Datenschutz" },
  { href: "/legal/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-parchment/10 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo */}
          <div>
            <p className="font-heading text-base font-light uppercase tracking-[0.18em] text-gold">
              Massage<span className="text-parchment/80">4me</span>
            </p>
            <p className="mt-3 text-xs font-body font-light leading-relaxed text-parchment/40 uppercase tracking-[0.08em]">
              Professionelle Massagetherapie
            </p>
            <p className="mt-6 text-xs font-body text-parchment/35 leading-relaxed">
              Mo – Fr 8:00 – 21:00 Uhr
              <br />
              Sa – So 9:00 – 20:00 Uhr
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gold/70">
              Navigation
            </p>
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm font-light text-parchment/50 transition-colors hover:text-parchment"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Contact + social */}
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gold/70">
              Kontakt
            </p>
            <p className="mt-3 font-body text-sm font-light text-parchment/50">
              hello@massage4me.com
            </p>
            <Link
              href="/book"
              className="mt-6 inline-block border border-gold/30 px-5 py-2.5 text-xs uppercase tracking-[0.1em] text-parchment/60 transition-colors hover:border-gold hover:text-parchment"
            >
              Session buchen
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-parchment/8 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-parchment/30">
            © {new Date().getFullYear()} Massage4me. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-xs text-parchment/30 transition-colors hover:text-parchment/60"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
