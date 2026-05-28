import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/saude-coletiva/politicas-publicas.mdx";

const PATH = "/areas/saude-coletiva/politicas-publicas";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Saúde Coletiva", href: "/areas/saude-coletiva" },
  { label: "Políticas Públicas" },
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

export default function AreasSaudeColetivaPoliticasPublicasPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Saúde Coletiva"
      ctaSectionDescription="Veja outro subtema do mini-hub ou volte para o panorama da área."
      ctaPrimary={{ label: "SUS", href: "/areas/saude-coletiva/sus", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Saúde Coletiva", href: "/areas/saude-coletiva", variant: "outline" }}
    />
  );
}
