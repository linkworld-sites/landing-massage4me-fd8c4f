import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-navy pt-28 pb-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <Link
            href="/blog"
            className="font-body text-xs uppercase tracking-[0.1em] text-parchment/30 transition-colors hover:text-parchment"
          >
            ← Journal
          </Link>

          <div className="mt-10 mb-12">
            {post.date && (
              <p className="font-heading text-[10px] uppercase tracking-superwide text-gold/60">
                {post.date}
              </p>
            )}
            <h1 className="mt-4 font-heading text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-parchment">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-4 font-body text-base font-light leading-relaxed text-parchment/50">
                {post.description}
              </p>
            )}
            <div className="mt-8 h-px w-12 bg-gold/30" />
          </div>

          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 border-t border-parchment/8 pt-10">
            <Link
              href="/blog"
              className="font-body text-xs uppercase tracking-[0.1em] text-parchment/30 transition-colors hover:text-parchment"
            >
              ← All stories
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
