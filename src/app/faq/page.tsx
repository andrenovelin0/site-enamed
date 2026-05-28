import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Perguntas Frequentes (FAQ) — ENAMED",
  description:
    "Respostas diretas para as principais dúvidas sobre o ENAMED: o que é, quem deve fazer, como funciona a prova, notas, simulados e mais.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "O que é o ENAMED?",
    answer:
      "O Exame Nacional de Avaliação da Formação Médica (ENAMED) é uma avaliação que mede competências de estudantes e egressos de cursos de Medicina no Brasil.",
  },
  {
    question: "Quem é obrigado a fazer o ENAMED?",
    answer:
      "Conteúdo a ser desenvolvido a partir das diretrizes oficiais do MEC sobre obrigatoriedade e elegibilidade.",
  },
  {
    question: "Qual a diferença entre ENAMED, Revalida e provas de residência?",
    answer:
      "Comparativo técnico será detalhado no cluster /enamed, destacando objetivo, público e metodologia de cada exame.",
  },
  {
    question: "Como é calculada a nota do ENAMED?",
    answer:
      "A nota considera a Teoria de Resposta ao Item (TRI) e critérios como o Método Angoff. Detalhes em /prova-enamed.",
  },
  {
    question: "A nota do ENAMED impacta minha faculdade?",
    answer:
      "Sim. O desempenho institucional no ENAMED é considerado pelo MEC. Veja /ies para o detalhamento.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdo Dinâmico"
        title="Perguntas Frequentes"
        description="Otimizado para Featured Snippets e buscas do tipo “People Also Ask”. Respostas diretas para dúvidas comuns e de cauda longa."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="container-page py-12 md:py-16">
        <div className="max-w-3xl">
          <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <dt className="text-lg font-semibold text-neutral-900">{faq.question}</dt>
                <dd className="mt-2 text-neutral-600 leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
