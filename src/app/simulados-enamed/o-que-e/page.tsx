import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/simulados-enamed/o-que-e.mdx";

const PATH = "/simulados-enamed/o-que-e";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Simulados", href: "/simulados-enamed" },
  { label: "O que é" },
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

export default function SimuladosOQueEPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Próximos passos"
      ctaSectionDescription="Entendida a definição, veja como aplicar um simulado diagnóstico ou como interpretar o resultado."
      ctaPrimary={{ label: "Simulado diagnóstico", href: "/simulados-enamed/diagnostico-inicial", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/simulados-enamed", variant: "outline" }}
    />
  );
}
