import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "Simulados ENAMED — Questões Comentadas e Dashboard de Performance",
  description:
    "Hub de desempenho e diagnóstico: simulados temporizados por área médica, questões comentadas por especialistas, análise estatística e integração B2B para IES.",
  alternates: { canonical: "/simulados-enamed" },
};

export default function SimuladosEnamedPage() {
  return (
    <>
      <PageHero
        eyebrow="Cluster de Performance e Prática"
        title="Simulados ENAMED"
        description="Mais que treino: um hub de desempenho e diagnóstico. Identifique lacunas, acompanhe evolução e prepare-se com simulação realística do ambiente de prova."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Simulados" },
        ]}
      />

      <PlaceholderSection
        title="Recursos da plataforma de simulados"
        items={[
          {
            title: "Simulados por área médica",
            description:
              "Clínica Médica, Cirurgia, Pediatria, Ginecologia e Obstetrícia, Saúde Coletiva e Ética.",
          },
          {
            title: "Questões comentadas",
            description:
              "Resoluções detalhadas por especialistas, com erros comuns e links para teoria.",
          },
          {
            title: "Simulado diagnóstico",
            description:
              "Avaliação de nível inicial com sugestão de próximos passos e plano de estudos.",
          },
          {
            title: "Simulados temporizados",
            description:
              "Ambiente realístico de prova: tempo controlado, navegação por questões, revisão.",
          },
          {
            title: "Dashboard de desempenho",
            description:
              "Análise estatística de acertos por área e por subárea, evolução ao longo do tempo.",
          },
          {
            title: "Integração B2B para IES",
            description:
              "Uso de simulados para avaliação institucional e estratégias de melhoria de nota.",
          },
        ]}
      />
    </>
  );
}
