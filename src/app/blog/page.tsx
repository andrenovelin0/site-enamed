import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { getAllBlogPosts, formatBlogDate } from "@/lib/blog";

const PATH = "/blog";

const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Blog" },
];

export const metadata: Metadata = {
  title: "Blog do Portal ENAMED — análises, editais e carreira médica",
  description:
    "Análises da prova ENAMED, novidades de edital, carreira médica, residência, IES e MEC. Conteúdo factual e atualizado sobre o exame e seu ecossistema.",
  alternates: { canonical: PATH },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />

      <PageHero
        eyebrow="Editorial"
        title="Blog do Portal ENAMED"
        description="Análises da prova, atualizações de edital, recortes sobre IES, MEC, carreira médica e saúde mental durante a preparação. Atualizado com regularidade."
        crumbs={CRUMBS}
      />

      <section className="container-page py-12 md:py-16">
        {posts.length === 0 ? (
          <p className="text-center text-neutral-500 py-20">
            Em breve, novos artigos editoriais. Acompanhe esta página.
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full p-6 rounded-2xl border border-neutral-200 bg-white hover:border-brand-600 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag tag-brand">{post.category}</span>
                    <span className="text-xs text-neutral-500">{post.readingTime} min</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-neutral-900 leading-snug group-hover:text-brand-800 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between text-xs text-neutral-500">
                    <span>{formatBlogDate(post.date)}</span>
                    <span className="font-medium text-brand-700 group-hover:translate-x-1 transition-transform">
                      Ler →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
