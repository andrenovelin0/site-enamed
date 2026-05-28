import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/prova-enamed/notas-de-corte.mdx";

const PATH = "/prova-enamed/notas-de-corte";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "A Prova", href: "/prova-enamed" },
  { label: "Notas de corte" },
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

export default function ProvaEnamedNotasCortePage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde os métodos"
      ctaSectionDescription="Entendido o conceito de banda, aprofunde nos métodos que geram a nota — TRI e Angoff."
      ctaPrimary={{ label: "TRI no ENAMED", href: "/prova-enamed/teoria-resposta-item", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/prova-enamed", variant: "outline" }}
    />
  );
}
