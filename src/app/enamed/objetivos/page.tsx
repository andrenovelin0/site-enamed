import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/enamed/objetivos.mdx";

const PATH = "/enamed/objetivos";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "O ENAMED", href: "/enamed" },
  { label: "Objetivos" },
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

export default function EnamedObjetivosPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde a parte técnica"
      ctaSectionDescription="Os objetivos da prova ficam mais claros quando você entende como ela é construída — TRI, Angoff e estrutura por áreas."
      ctaPrimary={{ label: "A Prova do ENAMED", href: "/prova-enamed", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/enamed", variant: "outline" }}
    />
  );
}
