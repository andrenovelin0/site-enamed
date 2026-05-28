import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/ies/sancoes-mec.mdx";

const PATH = "/ies/sancoes-mec";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Para Instituições", href: "/ies" },
  { label: "Sanções do MEC" },
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

export default function IesSancoesMecPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Como evitar entrar na escala"
      ctaSectionDescription="Veja as estratégias com evidência para elevar o desempenho institucional ou entenda o cálculo do CPC."
      ctaPrimary={{ label: "Estratégias de melhoria", href: "/ies/melhoria-de-nota", variant: "accent" }}
      ctaSecondary={{ label: "Como o CPC é calculado", href: "/ies/avaliacao-mec-cpc", variant: "outline" }}
    />
  );
}
