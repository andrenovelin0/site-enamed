import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/prova-enamed/numero-de-questoes.mdx";

const PATH = "/prova-enamed/numero-de-questoes";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "A Prova", href: "/prova-enamed" },
  { label: "Número de questões" },
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

export default function ProvaEnamedNumeroQuestoesPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Próximo aspecto técnico"
      ctaSectionDescription="Conhecida a quantidade de questões, veja quanto tempo você tem para resolvê-las."
      ctaPrimary={{ label: "Tempo de prova do ENAMED", href: "/prova-enamed/tempo-de-prova", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/prova-enamed", variant: "outline" }}
    />
  );
}
