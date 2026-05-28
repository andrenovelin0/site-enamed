import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "O que é o ENAMED — Definição, História e Função",
  description:
    "Guia enciclopédico sobre o Exame Nacional de Avaliação da Formação Médica: definição, objetivos, elegibilidade, contexto histórico e diferenças entre ENAMED, Revalida e exames de residência.",
  alternates: { canonical: "/enamed" },
};

export default function EnamedHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Cluster Institucional e Informativo"
        title="O Exame Nacional de Avaliação da Formação Médica"
        description="Página pilar do conteúdo institucional. Aqui consolidamos definição, objetivos, elegibilidade, contexto histórico e diferenciação em relação a outros exames."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "O ENAMED" },
        ]}
      />

      <PlaceholderSection
        title="Conteúdos de suporte do cluster"
        items={[
          {
            title: "Definição e Objetivos",
            description:
              "Competências avaliadas e finalidade do ENAMED para o sistema de saúde brasileiro.",
          },
          {
            title: "Elegibilidade",
            description:
              "Critérios de participação e obrigatoriedade para estudantes de medicina.",
          },
          {
            title: "Contexto Histórico",
            description:
              "Evolução da avaliação da formação médica no Brasil e a criação do ENAMED.",
          },
          {
            title: "Diferenciação de Exames",
            description:
              "Comparativo técnico entre ENAMED, Revalida e exames de residência médica.",
          },
        ]}
        note="Foco em tráfego de topo de funil — termos como “o que é o ENAMED”, “para que serve”, “quem deve fazer”."
      />
    </>
  );
}
