import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/preparacao/tecnicas-de-estudo.mdx";

const PATH = "/preparacao/tecnicas-de-estudo";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Como se preparar", href: "/preparacao" },
  { label: "Técnicas de estudo" },
];

export const metadata: Metadata = {
  title: frontmatter.title,
  description: frontmatter.description,
  alternates: { canonical: PATH },
  openGraph: {
    title: frontmatter.title,
    description: frontmatter.description,
    type: "article",
    url: PATH,
  },
};

export default function PreparacaoTecnicasPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Encaixar técnicas no plano"
      ctaSectionDescription="Veja como aplicar essas técnicas dentro do cronograma escolhido, ou volte ao pilar para a visão geral da preparação."
      ctaPrimary={{ label: "Cronograma de estudo", href: "/preparacao/cronograma-de-estudo", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/preparacao", variant: "outline" }}
    />
  );
}
