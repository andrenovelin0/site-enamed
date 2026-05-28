import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "Como se preparar para o ENAMED — guia completo de preparação",
  description:
    "Conteúdo informacional sobre como se preparar para o ENAMED: cronogramas, técnicas de estudo, materiais, saúde mental e plano da última semana antes da prova.",
  alternates: { canonical: "/preparacao" },
};

export default function PreparacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Cluster de Preparação"
        title="Como se preparar para o ENAMED"
        description="Cronogramas baseados em evidência, técnicas de estudo, materiais de qualidade, manejo da saúde mental durante o ciclo de provas e o plano da última semana. Conteúdo neutro e factual — sem promoção comercial."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Como se preparar" },
        ]}
      />

      <PlaceholderSection
        title="Tópicos cobertos neste cluster"
        items={[
          {
            title: "Cronograma de estudos",
            description:
              "Modelos de cronograma adaptados a tempo disponível (3, 6 ou 12 meses) e padrões de distribuição por área.",
          },
          {
            title: "Técnicas de estudo",
            description:
              "Pomodoro, revisão espaçada, mapas mentais, resolução ativa de questões. O que tem evidência.",
          },
          {
            title: "Materiais de referência",
            description:
              "Tipos de livros, fontes oficiais (INEP, MEC), bancos de questões. Sem indicação de marca específica.",
          },
          {
            title: "Saúde mental durante a preparação",
            description:
              "Manejo da ansiedade, prevenção de burnout, sono, alimentação e atividade física no período intensivo.",
          },
          {
            title: "Plano da última semana",
            description:
              "O que fazer, o que evitar, como descansar estrategicamente nos sete dias finais antes da prova.",
          },
          {
            title: "No dia da prova",
            description:
              "Checklist prático: documentos, alimentação, transporte, manejo do tempo durante a aplicação.",
          },
        ]}
        note="Conteúdo em construção — subpáginas serão adicionadas nas próximas semanas. Veja também o blog para artigos mais aprofundados."
      />
    </>
  );
}
