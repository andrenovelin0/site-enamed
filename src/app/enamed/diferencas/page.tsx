import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/enamed/diferencas.mdx";

const PATH = "/enamed/diferencas";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "O ENAMED", href: "/enamed" },
  { label: "Diferenças" },
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

export default function EnamedDiferencasPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Comparativos detalhados"
      ctaSectionDescription="Para um quadro lado a lado completo, confira a seção de comparativos."
      ctaPrimary={{ label: "Ver todos os comparativos", href: "/comparativos", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/enamed", variant: "outline" }}
    />
  );
}
