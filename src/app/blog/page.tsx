import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Journal — Massage4me" };

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-navy pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/70">
            Journal
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-tight tracking-[-0.01em] text-parchment">
            Stories from
            <br />
            the table.
          </h1>
          <div className="mt-4 h-px w-12 bg-gold/30" />

          {posts.length === 0 ? (
            <p className="mt-12 font-body text-sm font-light text-parchment/40">
              New stories are on the way — check back soon.
            </p>
          ) : (
            <ul className="mt-14 divide-y divide-parchment/8">
              {posts.map((p) => (
                <li key={p.slug} className="py-10">
                  <Link href={`/blog/${p.slug}`} className="group block">
                    {p.date && (
                      <p className="font-heading text-[10px] uppercase tracking-[0.14em] text-gold/60">
                        {p.date}
                      </p>
                    )}
                    <h2 className="mt-3 font-heading text-2xl font-light text-parchment transition-colors group-hover:text-gold">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="mt-3 font-body text-sm font-light leading-relaxed text-parchment/50">
                        {p.description}
                      </p>
                    )}
                    <p className="mt-4 font-heading text-[10px] uppercase tracking-[0.12em] text-gold/50 transition-colors group-hover:text-gold">
                      Read →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16">
            <Link
              href="/"
              className="font-body text-xs uppercase tracking-[0.1em] text-parchment/30 transition-colors hover:text-parchment"
            >
              ← Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
