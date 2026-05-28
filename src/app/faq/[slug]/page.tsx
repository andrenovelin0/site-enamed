import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd, QAPageJsonLd } from "@/components/structured-data";
import {
  getAllFaqSlugs,
  getFaqItemBySlug,
  getAdjacentFaqItems,
} from "@/lib/faq";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllFaqSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getFaqItemBySlug(slug);
  if (!found) return { title: "Pergunta não encontrada" };

  const { item } = found;
  return {
    title: `${item.question} — Portal ENAMED`,
    description: item.answer.slice(0, 158),
    alternates: { canonical: `/faq/${slug}` },
    openGraph: {
      title: item.question,
      description: item.answer.slice(0, 158),
      type: "article",
    },
  };
}

export default async function FaqDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const found = getFaqItemBySlug(slug);
  if (!found) notFound();

  const { item, category } = found;
  const { previous, next } = getAdjacentFaqItems(slug);

  const crumbs = [
    { label: "Início", href: "/" },
    { label: "FAQ", href: "/faq" },
    { label: category.label, href: `/faq#${category.id}` },
    { label: item.question },
  ];

  return (
    <>
      <BreadcrumbJsonLd trail={crumbs} />
      <QAPageJsonLd
        question={item.question}
        answer={item.answer}
        path={`/faq/${slug}`}
      />

      <PageHero
        eyebrow={`FAQ — ${category.label}`}
        title={item.question}
        description="Resposta direta, factual e citável. Aprofunde nos links relacionados."
        crumbs={crumbs}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg leading-relaxed text-neutral-800">{item.answer}</p>
          </div>

          <nav
            aria-label="Outras perguntas"
            className="mt-12 grid gap-4 sm:grid-cols-2 border-t border-neutral-200 pt-8"
          >
            {previous ? (
              <Link
                href={`/faq/${previous.slug}`}
                className="group flex flex-col rounded-xl border border-neutral-200 p-4 hover:border-brand-600 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                  ← Anterior
                </span>
                <span className="font-display text-sm font-semibold text-neutral-900 group-hover:text-brand-800">
                  {previous.question}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {next ? (
              <Link
                href={`/faq/${next.slug}`}
                className="group flex flex-col sm:text-right rounded-xl border border-neutral-200 p-4 hover:border-brand-600 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                  Próxima →
                </span>
                <span className="font-display text-sm font-semibold text-neutral-900 group-hover:text-brand-800">
                  {next.question}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </nav>

          <section className="mt-12 rounded-2xl bg-brand-50 border border-brand-100 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-2">
              Ver tudo
            </p>
            <h2 className="font-display text-xl md:text-2xl font-bold text-neutral-900 mb-3 mt-0">
              Todas as perguntas sobre o ENAMED
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Navegue pelo índice completo de perguntas frequentes organizadas em {""}
              {[...new Set([category.label])].join(", ")} e outras categorias.
            </p>
            <Link href="/faq" className="btn-primary">
              Voltar ao índice do FAQ
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
