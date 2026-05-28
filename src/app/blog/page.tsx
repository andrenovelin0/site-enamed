import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "Blog ENAMED — Notícias, Editais e Análises",
  description:
    "Conteúdo fresco sobre o ENAMED: notícias, editais oficiais, análises das provas recentes e atualizações relevantes para estudantes e instituições.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdo Dinâmico"
        title="Blog ENAMED"
        description="Fresh content para manter a autoridade em tempo real: notícias, editais, análises de provas e tendências em educação médica."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Blog" },
        ]}
      />

      <PlaceholderSection
        title="Categorias previstas"
        items={[
          {
            title: "Notícias",
            description: "Atualizações sobre o exame, calendários, datas e mudanças regulatórias.",
          },
          {
            title: "Editais",
            description: "Análise técnica dos editais oficiais de cada edição do ENAMED.",
          },
          {
            title: "Análise de provas",
            description: "Discussão de questões e padrões observados nas provas recentes.",
          },
          {
            title: "Estratégia de estudo",
            description: "Dicas práticas de organização, técnicas de memorização e foco.",
          },
        ]}
      />
    </>
  );
}
