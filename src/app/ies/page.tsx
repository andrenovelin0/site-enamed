import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "ENAMED para IES — Desempenho Institucional e Avaliação MEC",
  description:
    "Como a nota do ENAMED impacta a avaliação das Instituições de Ensino Superior pelo MEC. Programas de preparação, consultoria e estratégias de melhoria institucional.",
  alternates: { canonical: "/ies" },
};

export default function IesPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos para Instituições de Ensino"
        title="ENAMED para IES"
        description="Hub voltado ao desempenho institucional no ENAMED: impactos na avaliação MEC, riscos, sanções e estratégias práticas de melhoria de nota."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Para IES" },
        ]}
      />

      <PlaceholderSection
        title="Páginas pilar e tópicos previstos"
        items={[
          {
            title: "Desempenho Institucional no ENAMED",
            description:
              "Como as IES são avaliadas pelo MEC e quais indicadores compõem a análise.",
          },
          {
            title: "ENAMED e Avaliação das IES",
            description:
              "Impactos, riscos de sanção e estratégias de melhoria para coordenações de curso.",
          },
          {
            title: "Impacto no credenciamento",
            description:
              "Como a nota do ENAMED afeta cursos de Medicina e o credenciamento junto ao MEC.",
          },
          {
            title: "Programa de preparação para IES",
            description:
              "Estrutura de preparação ENAMED para faculdades: avaliação, conteúdo e mentoria.",
          },
          {
            title: "Consultoria ENAMED",
            description:
              "Apoio estratégico para coordenações otimizarem desempenho institucional.",
          },
          {
            title: "Buscas relacionadas",
            description:
              "“nota do enamed impacta a faculdade?”, “enamed e sanções do mec”, “consultoria enamed para ies”.",
          },
        ]}
      />
    </>
  );
}
