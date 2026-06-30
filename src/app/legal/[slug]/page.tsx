import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-navy pt-28 pb-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <Link
            href="/"
            className="font-body text-xs uppercase tracking-[0.1em] text-parchment/30 transition-colors hover:text-parchment"
          >
            ← Home
          </Link>
          <div className="mt-12">
            <article
              className="post-body"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
