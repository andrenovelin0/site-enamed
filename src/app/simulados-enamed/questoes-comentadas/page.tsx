import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/simulados-enamed/questoes-comentadas.mdx";

const PATH = "/simulados-enamed/questoes-comentadas";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Simulados", href: "/simulados-enamed" },
  { label: "Questões comentadas" },
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

export default function SimuladosQuestoesComentadasPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue na revisão"
      ctaSectionDescription="A leitura ativa de comentários liga-se ao reconhecimento de padrões de erro. Veja os mais frequentes em simulados ENAMED."
      ctaPrimary={{ label: "Erros comuns em simulados", href: "/simulados-enamed/erros-comuns", variant: "accent" }}
      ctaSecondary={{ label: "Como interpretar o resultado", href: "/simulados-enamed/como-interpretar-resultado", variant: "outline" }}
    />
  );
}
