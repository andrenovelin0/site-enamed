import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import {
  BreadcrumbJsonLd,
  DefinedTermJsonLd,
} from "@/components/structured-data";
import {
  getAllGlossarioTerms,
  getGlossarioSlugs,
  getGlossarioTermMeta,
} from "@/lib/glossario";

type Params = { termo: string };

export function generateStaticParams() {
  return getGlossarioSlugs().map((slug) => ({ termo: slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { termo } = await params;
  const meta = await getGlossarioTermMeta(termo);
  if (!meta) return {};
  return {
    title: `${meta.term}${meta.acronym ? ` (${meta.acronym})` : ""} — Glossário ENAMED`,
    description: meta.shortDefinition,
    alternates: { canonical: `/glossario/${termo}` },
  };
}

export default async function GlossarioTermPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { termo } = await params;
  const meta = await getGlossarioTermMeta(termo);
  if (!meta) notFound();

  const { default: Content } = await import(`@/content/glossario/${termo}.mdx`);
  const allTerms = await getAllGlossarioTerms();
  const related = allTerms.filter((t) => t.slug !== termo).slice(0, 4);

  const crumbs = [
    { label: "Início", href: "/" },
    { label: "Glossário", href: "/glossario" },
    { label: meta.term },
  ];

  return (
    <>
      <DefinedTermJsonLd
        name={meta.term}
        description={meta.shortDefinition}
        path={`/glossario/${termo}`}
        inDefinedTermSet="Glossário do Portal ENAMED"
      />
      <BreadcrumbJsonLd trail={crumbs} />

      <PageHero
        eyebrow={meta.category ? `Glossário · ${meta.category}` : "Glossário"}
        title={meta.term}
        description={meta.shortDefinition}
        crumbs={crumbs}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {meta.acronym && (
            <p className="mb-8 pb-6 border-b border-neutral-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Acrônimo de
              </span>
              <br />
              <span className="font-display text-lg font-bold text-neutral-900">
                {meta.acronym}
              </span>
            </p>
          )}

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
                Outros termos do glossário
              </h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/glossario/${rel.slug}`}
                      className="group block p-4 rounded-xl border border-neutral-200 bg-white hover:border-brand-600 transition-colors"
                    >
                      <h3 className="font-display text-base font-semibold text-neutral-900 group-hover:text-brand-800 transition-colors">
                        {rel.term}
                        {rel.acronym && (
                          <span className="ml-1 text-sm font-normal text-brand-700">
                            ({rel.acronym})
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-600 line-clamp-2">
                        {rel.shortDefinition}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12 rounded-2xl bg-brand-25 border border-brand-100 p-8">
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-3 mt-0">
              Ver tudo no glossário
            </h3>
            <p className="text-neutral-700 mb-4">
              Mais de uma dezena de termos do ecossistema ENAMED organizados de A a Z.
            </p>
            <Link
              href="/glossario"
              className="inline-flex items-center gap-2 text-brand-800 font-semibold underline underline-offset-2 hover:text-brand-700"
            >
              Voltar ao glossário completo →
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
