import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/prova-enamed/teoria-resposta-item.mdx";

const PATH = "/prova-enamed/teoria-resposta-item";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "A Prova", href: "/prova-enamed" },
  { label: "TRI" },
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

export default function ProvaEnamedTriPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue explorando a metodologia"
      ctaSectionDescription="A TRI calcula seu número. O Angoff define o piso. Veja como os dois métodos se combinam."
      ctaPrimary={{ label: "Método Angoff no ENAMED", href: "/prova-enamed/metodo-angoff", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/prova-enamed", variant: "outline" }}
    />
  );
}
