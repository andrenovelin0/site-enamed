import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/saude-coletiva/sus.mdx";

const PATH = "/areas/saude-coletiva/sus";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Saúde Coletiva", href: "/areas/saude-coletiva" },
  { label: "SUS" },
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

export default function AreasSaudeColetivaSusPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Saúde Coletiva"
      ctaSectionDescription="SUS é o tópico mais cobrado da área. Volte ao mini-hub para mapear epidemiologia, bioestatística e políticas."
      ctaPrimary={{ label: "Voltar para Saúde Coletiva", href: "/areas/saude-coletiva", variant: "accent" }}
      ctaSecondary={{ label: "Mapa de Áreas Médicas", href: "/areas", variant: "outline" }}
    />
  );
}
