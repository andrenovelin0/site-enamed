import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/prova-enamed/metodo-angoff.mdx";

const PATH = "/prova-enamed/metodo-angoff";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "A Prova", href: "/prova-enamed" },
  { label: "Método Angoff" },
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

export default function ProvaEnamedAngoffPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde a interpretação"
      ctaSectionDescription="Com TRI e Angoff combinados, sua nota vira banda. Veja como interpretar as 5 bandas e a 'nota de corte'."
      ctaPrimary={{ label: "Notas de corte do ENAMED", href: "/prova-enamed/notas-de-corte", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/prova-enamed", variant: "outline" }}
    />
  );
}
