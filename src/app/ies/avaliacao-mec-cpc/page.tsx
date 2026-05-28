import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/ies/avaliacao-mec-cpc.mdx";

const PATH = "/ies/avaliacao-mec-cpc";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Para Instituições", href: "/ies" },
  { label: "Avaliação MEC e CPC" },
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

export default function IesAvaliacaoMecCpcPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Quando o CPC vira sanção"
      ctaSectionDescription="Veja a gradação de sanções do MEC quando o CPC entra na faixa de risco, ou as estratégias de melhoria com evidência."
      ctaPrimary={{ label: "Sanções do MEC", href: "/ies/sancoes-mec", variant: "accent" }}
      ctaSecondary={{ label: "Estratégias de melhoria", href: "/ies/melhoria-de-nota", variant: "outline" }}
    />
  );
}
