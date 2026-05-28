import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/prova-enamed/tempo-de-prova.mdx";

const PATH = "/prova-enamed/tempo-de-prova";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "A Prova", href: "/prova-enamed" },
  { label: "Tempo de prova" },
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

export default function ProvaEnamedTempoPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue se preparando"
      ctaSectionDescription="Sabendo a duração e o ritmo, veja como a nota é calculada ao fim."
      ctaPrimary={{ label: "Notas de corte do ENAMED", href: "/prova-enamed/notas-de-corte", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/prova-enamed", variant: "outline" }}
    />
  );
}
