import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import {
  BreadcrumbJsonLd,
  CollectionPageJsonLd,
  FAQPageJsonLd,
} from "@/components/structured-data";
import { faqCategories, getAllFaqItems } from "@/lib/faq";

const PATH = "/faq";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "FAQ" },
];

export const metadata: Metadata = {
  title: "Perguntas Frequentes sobre o ENAMED — respostas diretas",
  description:
    "Respostas diretas para as principais dúvidas sobre o ENAMED: o que é, quem deve fazer, como funciona a prova, TRI, nota, impacto na carreira e nas IES.",
  alternates: { canonical: PATH },
};

export default function FaqPage() {
  const allItems = getAllFaqItems();

  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />
      <CollectionPageJsonLd
        name="Perguntas frequentes sobre o ENAMED"
        description="Respostas diretas, factuais e citáveis para as principais dúvidas sobre o exame."
        path="/faq"
        numberOfItems={allItems.length}
      />
      <FAQPageJsonLd
        items={allItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <PageHero
        eyebrow="Perguntas frequentes"
        title="Tudo que você quer saber sobre o ENAMED"
        description="Respostas diretas, factuais e citáveis para as principais dúvidas sobre o exame, sua estrutura, cálculo de nota, preparação e impacto institucional."
        crumbs={CRUMBS}
      />

      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Categorias de perguntas" className="mb-12 pb-6 border-b border-neutral-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
              Navegue por categoria
            </p>
            <ul className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="tag tag-brand hover:bg-brand-100 transition-colors"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {faqCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="mb-12 scroll-mt-24">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-6 mt-0">
                {cat.label}
              </h2>
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                {cat.items.map((item) => (
                  <div key={item.slug} className="py-6">
                    <dt className="font-display text-lg md:text-xl font-semibold text-neutral-900 mb-2">
                      <Link
                        href={`/faq/${item.slug}`}
                        className="hover:text-brand-800 transition-colors"
                      >
                        {item.question}
                      </Link>
                    </dt>
                    <dd className="font-body text-base text-neutral-700 leading-relaxed">
                      {item.answer}
                      <div className="mt-3">
                        <Link
                          href={`/faq/${item.slug}`}
                          className="text-sm font-medium text-brand-700 hover:text-brand-800 inline-flex items-center gap-1"
                        >
                          Página da pergunta →
                        </Link>
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}

          <section className="mt-16 rounded-2xl gradient-brand text-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">
              Não encontrou sua pergunta?
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 mt-0">
              Aprofunde em um dos pilares
            </h2>
            <p className="text-brand-100/90 leading-relaxed mb-6 max-w-2xl">
              Cada pilar do Portal aprofunda uma dimensão do ENAMED. Comece pelo guia institucional
              ou pelo detalhe técnico da prova.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/enamed"
                className="btn-accent"
              >
                Guia completo do ENAMED
              </Link>
              <Link
                href="/prova-enamed"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-1.5 border-white/30 text-white hover:bg-white/10 hover:border-white px-6 py-3 font-display font-semibold text-sm transition-colors"
              >
                Estrutura técnica da prova
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
