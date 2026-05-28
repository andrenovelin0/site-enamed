import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a missão e a proposta do portal ENAMED: referência completa sobre o Exame Nacional de Avaliação da Formação Médica.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre o portal ENAMED"
        description="Um hub de conteúdo, prática e preparação para estudantes de Medicina e Instituições de Ensino Superior."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre" },
        ]}
      />
      <section className="container-page py-12 md:py-16">
        <div className="prose prose-neutral max-w-3xl text-neutral-700 leading-relaxed">
          <p>
            Este portal foi concebido para consolidar, em um só lugar, todo o conhecimento técnico
            e estratégico em torno do Exame Nacional de Avaliação da Formação Médica (ENAMED).
            Nossa proposta combina <strong>conteúdo institucional</strong>, <strong>análise técnica
            da prova</strong>, <strong>prática orientada por dados</strong> e <strong>oferta de
            cursos preparatórios</strong>.
          </p>
          <p>
            Trabalhamos com a metodologia de Topic Clusters: cada área do site funciona como um
            mini-hub temático interligado, garantindo profundidade de informação e uma experiência
            de navegação coerente — tanto para o estudante que está conhecendo o exame quanto para
            a coordenação de IES preocupada com avaliação MEC.
          </p>
          <p className="text-sm text-neutral-500 italic">
            Conteúdo institucional a ser detalhado conforme briefing final.
          </p>
        </div>
      </section>
    </>
  );
}
