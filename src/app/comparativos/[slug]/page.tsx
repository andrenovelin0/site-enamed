import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "@/components/structured-data";
import {
  getAllComparativos,
  getComparativoMeta,
  getComparativosSlugs,
} from "@/lib/comparativos";

type Params = { slug: string };

export function generateStaticParams() {
  return getComparativosSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = await getComparativoMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/comparativos/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url: `/comparativos/${slug}`,
    },
  };
}

export default async function ComparativoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const meta = await getComparativoMeta(slug);
  if (!meta) notFound();

  const { default: Content } = await import(`@/content/comparativos/${slug}.mdx`);
  const all = await getAllComparativos();
  const related = all.filter((c) => c.slug !== slug).slice(0, 3);

  const crumbs = [
    { label: "Início", href: "/" },
    { label: "Comparativos", href: "/comparativos" },
    { label: meta.title },
  ];

  return (
    <>
      <ArticleJsonLd
        title={meta.title}
        description={meta.description}
        path={`/comparativos/${slug}`}
        datePublished={meta.updatedAt}
        dateModified={meta.updatedAt}
      />
      <BreadcrumbJsonLd trail={crumbs} />

      <PageHero
        eyebrow={meta.heroEyebrow ?? "Comparativo"}
        title={meta.title}
        description={meta.description}
        crumbs={crumbs}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Content />

          {meta.updatedAt && (
            <p className="mt-12 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
              Última atualização editorial:{" "}
              <strong>
                {new Date(meta.updatedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </strong>
            </p>
          )}

          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-neutral-200">
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6 mt-0">
                Outros comparativos
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/comparativos/${rel.slug}`}
                      className="group block p-5 rounded-xl border border-neutral-200 bg-white hover:border-brand-600 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2 text-xs font-semibold">
                        <span className="text-brand-800">{rel.entityA}</span>
                        <span className="text-neutral-400">vs.</span>
                        <span className="text-purple-500">{rel.entityB}</span>
                      </div>
                      <h3 className="font-display text-base font-semibold text-neutral-900 group-hover:text-brand-800 transition-colors">
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
              Continue explorando
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 mt-0">
              Aprofunde nos pilares
            </h2>
            <p className="text-brand-100/90 leading-relaxed mb-6 max-w-2xl">
              Comparativos são pontos de partida. Para aprofundamento, veja o guia institucional
              ou a estrutura técnica da prova.
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
                <Link href="/comparativos">Ver todos comparativos</Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
