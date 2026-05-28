import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "Prova ENAMED — Estrutura, Metodologia e Análise de Desempenho",
  description:
    "Guia completo sobre a prova do ENAMED: Teoria de Resposta ao Item (TRI), Método Angoff, estrutura por áreas médicas, tempo, notas de corte e impacto na carreira.",
  alternates: { canonical: "/prova-enamed" },
};

export default function ProvaEnamedPage() {
  return (
    <>
      <PageHero
        eyebrow="Cluster Técnico da Avaliação"
        title="A Prova do ENAMED"
        description="Logística e metodologia da avaliação. Para buscas de consideração e preparação imediata — quem está se preparando precisa entender exatamente como a prova é construída e pontuada."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "A Prova" },
        ]}
      />

      <PlaceholderSection
        title="O que esta página pilar cobre"
        items={[
          {
            title: "Metodologia de Avaliação",
            description:
              "Teoria de Resposta ao Item (TRI), Método Angoff e critérios de pontuação bruta.",
          },
          {
            title: "Estrutura do Exame",
            description:
              "Número de questões, divisão por áreas médicas e tempo total de execução.",
          },
          {
            title: "Análise de Desempenho",
            description:
              "Notas de corte, cálculo da nota final e impacto na carreira acadêmica e profissional.",
          },
        ]}
      />
    </>
  );
}
