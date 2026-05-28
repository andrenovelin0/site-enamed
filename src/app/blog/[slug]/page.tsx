import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";
import {
  getAllBlogPosts,
  getBlogPostMeta,
  getBlogSlugs,
  formatBlogDate,
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = await getBlogPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: meta.date,
      modifiedTime: meta.updatedAt ?? meta.date,
      authors: [meta.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const meta = await getBlogPostMeta(slug);
  if (!meta) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
  const allPosts = await getAllBlogPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === meta.category)
    .slice(0, 2);

  const crumbs = [
    { label: "Início", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: meta.title },
  ];

  return (
    <>
      <ArticleJsonLd
        title={meta.title}
        description={meta.description}
        path={`/blog/${slug}`}
        datePublished={meta.date}
        dateModified={meta.updatedAt ?? meta.date}
      />
      <BreadcrumbJsonLd trail={crumbs} />

      <PageHero
        eyebrow={meta.heroEyebrow ?? meta.category}
        title={meta.title}
        description={meta.description}
        crumbs={crumbs}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-neutral-200">
            <span className="tag tag-brand">{meta.category}</span>
            <span className="text-sm text-neutral-500">
              {formatBlogDate(meta.date)}
            </span>
            <span className="text-sm text-neutral-500">·</span>
            <span className="text-sm text-neutral-500">
              {meta.readingTime} min de leitura
            </span>
            <span className="text-sm text-neutral-500">·</span>
            <span className="text-sm text-neutral-600 font-medium">{meta.author}</span>
          </div>

          <Content />

          {meta.updatedAt && meta.updatedAt !== meta.date && (
            <p className="mt-12 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
              Última revisão editorial: <strong>{formatBlogDate(meta.updatedAt)}</strong>.
            </p>
          )}

          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-neutral-200">
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6 mt-0">
                Continue lendo
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="group block p-5 rounded-xl border border-neutral-200 bg-white hover:border-brand-600 transition-colors"
                    >
                      <span className="tag tag-brand mb-2">{rel.category}</span>
                      <h3 className="mt-2 font-display text-base font-semibold text-neutral-900 group-hover:text-brand-800 transition-colors">
                        {rel.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12 rounded-2xl gradient-brand text-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">
              Explore mais
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 mt-0">
              Continue navegando pelo Portal
            </h2>
            <p className="text-brand-100/90 leading-relaxed mb-6 max-w-2xl">
              Veja o guia completo sobre o ENAMED, a estrutura técnica da prova ou as áreas
              médicas avaliadas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link href="/enamed">Guia completo do ENAMED</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                <Link href="/blog">Ver todos os posts</Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
