import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/simulados-enamed/como-interpretar-resultado.mdx";

const PATH = "/simulados-enamed/como-interpretar-resultado";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Simulados", href: "/simulados-enamed" },
  { label: "Como interpretar o resultado" },
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

export default function SimuladosComoInterpretarPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Do resultado à ação"
      ctaSectionDescription="Identifique os padrões de erro mais comuns e veja como as resoluções comentadas viram aprendizado."
      ctaPrimary={{ label: "Erros comuns em simulados", href: "/simulados-enamed/erros-comuns", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/simulados-enamed", variant: "outline" }}
    />
  );
}
