import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/components/structured-data";
import { getAllGlossarioTerms } from "@/lib/glossario";

const PATH = "/glossario";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Glossário" },
];

export const metadata: Metadata = {
  title: "Glossário do ENAMED — termos, acrônimos e definições",
  description:
    "Glossário A-Z de termos, acrônimos e conceitos relacionados ao ENAMED: TRI, Angoff, INEP, MEC, CPC, ENADE, Revalida e mais.",
  alternates: { canonical: PATH },
};

function groupByLetter<T extends { term: string }>(items: T[]): Record<string, T[]> {
  const groups: Record<string, T[]> = {};
  items.forEach((item) => {
    const letter = item.term.charAt(0).toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(item);
  });
  return groups;
}

export default async function GlossarioPage() {
  const terms = await getAllGlossarioTerms();
  const groups = groupByLetter(terms);
  const letters = Object.keys(groups).sort();

  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />
      <CollectionPageJsonLd
        name="Glossário do ENAMED"
        description="Definições objetivas dos principais termos, acrônimos e conceitos relacionados ao Exame Nacional de Avaliação da Formação Médica."
        path="/glossario"
        numberOfItems={terms.length}
      />

      <PageHero
        eyebrow="Glossário"
        title="Glossário do ENAMED"
        description="Definições objetivas dos principais termos, acrônimos e conceitos relacionados ao Exame Nacional de Avaliação da Formação Médica."
        crumbs={CRUMBS}
      />

      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {terms.length === 0 ? (
            <p className="text-center text-neutral-500 py-20">
              Glossário em construção. Em breve, novos verbetes.
            </p>
          ) : (
            <>
              <nav aria-label="Letras do alfabeto" className="mb-10 pb-6 border-b border-neutral-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
                  Navegue por letra
                </p>
                <ul className="flex flex-wrap gap-2">
                  {letters.map((letter) => (
                    <li key={letter}>
                      <a
                        href={`#letra-${letter}`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-800 font-display font-bold hover:bg-brand-100 transition-colors"
                      >
                        {letter}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {letters.map((letter) => (
                <section key={letter} id={`letra-${letter}`} className="mb-10 scroll-mt-24">
                  <h2 className="font-display text-3xl font-bold text-neutral-900 mb-4 mt-0">
                    {letter}
                  </h2>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {groups[letter].map((term) => (
                      <li key={term.slug}>
                        <Link
                          href={`/glossario/${term.slug}`}
                          className="group block p-5 rounded-xl border border-neutral-200 bg-white hover:border-brand-600 hover:shadow-md transition-all"
                        >
                          <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-brand-800 transition-colors">
                            {term.term}
                            {term.acronym && (
                              <span className="ml-2 text-sm font-medium text-brand-700">
                                ({term.acronym})
                              </span>
                            )}
                          </h3>
                          <p className="mt-1 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                            {term.shortDefinition}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}
