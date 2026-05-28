import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderSection } from "@/components/placeholder-section";

export const metadata: Metadata = {
  title: "Cursos Preparatórios para o ENAMED",
  description:
    "Programas de estudo dirigidos, cronogramas personalizados, mentoria especializada e prova social. Conheça nossos preparatórios ENAMED com transparência de planos e garantias.",
  alternates: { canonical: "/cursos" },
};

export default function CursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Cluster Comercial e de Conversão"
        title="Cursos Preparatórios ENAMED"
        description="Onde a preparação se transforma em aprovação. Conteúdo estruturado, mentoria especializada e suporte técnico — com transparência total de planos e garantias."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Cursos" },
        ]}
      />

      <PlaceholderSection
        title="O que oferecemos"
        items={[
          {
            title: "Programas de estudo",
            description:
              "Planos dirigidos com cronogramas personalizados por nível e disponibilidade de tempo.",
          },
          {
            title: "Mentoria especializada",
            description:
              "Acompanhamento para otimização de rotina de estudos e técnicas específicas de prova.",
          },
          {
            title: "Prova social",
            description:
              "Depoimentos de alunos aprovados e estatísticas de aprovação e desempenho.",
          },
          {
            title: "Transparência comercial",
            description:
              "Detalhamento claro de planos, preços, formas de pagamento e garantias.",
          },
        ]}
        note="Este hub captura buscas no plural (“cursos ENAMED”, “preparatórios ENAMED”). Páginas individuais de cursos continuam ranqueando para buscas no singular."
      />
    </>
  );
}
