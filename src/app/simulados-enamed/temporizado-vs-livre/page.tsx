import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/simulados-enamed/temporizado-vs-livre.mdx";

const PATH = "/simulados-enamed/temporizado-vs-livre";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Simulados", href: "/simulados-enamed" },
  { label: "Temporizado vs livre" },
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

export default function SimuladosTemporizadoVsLivrePage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Maximize cada simulado"
      ctaSectionDescription="A escolha do formato é só uma parte. Veja como interpretar o resultado e como tirar valor máximo das resoluções comentadas."
      ctaPrimary={{ label: "Questões comentadas", href: "/simulados-enamed/questoes-comentadas", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/simulados-enamed", variant: "outline" }}
    />
  );
}
