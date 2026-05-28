import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/simulados-enamed/diagnostico-inicial.mdx";

const PATH = "/simulados-enamed/diagnostico-inicial";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Simulados", href: "/simulados-enamed" },
  { label: "Diagnóstico inicial" },
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

export default function SimuladosDiagnosticoInicialPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Depois do diagnóstico"
      ctaSectionDescription="Com o mapa de lacunas em mãos, veja como interpretar o resultado em detalhe e como evoluir para simulados temporizados."
      ctaPrimary={{ label: "Como interpretar o resultado", href: "/simulados-enamed/como-interpretar-resultado", variant: "accent" }}
      ctaSecondary={{ label: "Temporizado vs livre", href: "/simulados-enamed/temporizado-vs-livre", variant: "outline" }}
    />
  );
}
