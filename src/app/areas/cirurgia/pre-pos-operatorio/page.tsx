import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/cirurgia/pre-pos-operatorio.mdx";

const PATH = "/areas/cirurgia/pre-pos-operatorio";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Cirurgia", href: "/areas/cirurgia" },
  { label: "Pré e Pós-operatório" },
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

export default function AreasCirurgiaPrePosOperatorioPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Cirurgia"
      ctaSectionDescription="Veja outro subtema do mini-hub ou volte para o panorama da área."
      ctaPrimary={{ label: "Cirurgia Geral", href: "/areas/cirurgia/cirurgia-geral", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Cirurgia", href: "/areas/cirurgia", variant: "outline" }}
    />
  );
}
