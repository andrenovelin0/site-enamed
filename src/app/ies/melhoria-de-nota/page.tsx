import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/ies/melhoria-de-nota.mdx";

const PATH = "/ies/melhoria-de-nota";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Para Instituições", href: "/ies" },
  { label: "Melhoria de nota" },
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

export default function IesMelhoriaDeNotaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Onde a melhoria aparece"
      ctaSectionDescription="Veja como o CPC é calculado para entender em que componentes investir, ou volte ao pilar IES para a visão geral."
      ctaPrimary={{ label: "Como o CPC é calculado", href: "/ies/avaliacao-mec-cpc", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar IES", href: "/ies", variant: "outline" }}
    />
  );
}
