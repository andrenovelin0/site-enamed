import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/cirurgia/cirurgia-geral.mdx";

const PATH = "/areas/cirurgia/cirurgia-geral";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Cirurgia", href: "/areas/cirurgia" },
  { label: "Cirurgia Geral" },
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

export default function AreasCirurgiaGeralPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Cirurgia"
      ctaSectionDescription="Cirurgia Geral concentra o maior volume do bloco. Volte ao mini-hub para mapear os outros subtemas."
      ctaPrimary={{ label: "Voltar para Cirurgia", href: "/areas/cirurgia", variant: "accent" }}
      ctaSecondary={{ label: "Mapa de Áreas Médicas", href: "/areas", variant: "outline" }}
    />
  );
}
