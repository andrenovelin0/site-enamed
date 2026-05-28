import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/saude-coletiva.mdx";

const PATH = "/areas/saude-coletiva";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Saúde Coletiva" },
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

export default function AreasSaudeColetivaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde o subtema central"
      ctaSectionDescription="Saúde Coletiva é a área mais previsível da prova. Comece pelo eixo central — o SUS."
      ctaPrimary={{ label: "SUS", href: "/areas/saude-coletiva/sus", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Áreas Médicas", href: "/areas", variant: "outline" }}
    />
  );
}
