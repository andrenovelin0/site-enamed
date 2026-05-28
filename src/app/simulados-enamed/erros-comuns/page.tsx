import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/simulados-enamed/erros-comuns.mdx";

const PATH = "/simulados-enamed/erros-comuns";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Simulados", href: "/simulados-enamed" },
  { label: "Erros comuns" },
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

export default function SimuladosErrosComunsPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Da identificação à correção"
      ctaSectionDescription="Reconhecer o padrão é o primeiro passo. Veja como interpretar o resultado do simulado e como aplicar simulado diagnóstico para mapear lacunas."
      ctaPrimary={{ label: "Como interpretar o resultado", href: "/simulados-enamed/como-interpretar-resultado", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/simulados-enamed", variant: "outline" }}
    />
  );
}
