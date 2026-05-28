import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/enamed/elegibilidade.mdx";

const PATH = "/enamed/elegibilidade";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "O ENAMED", href: "/enamed" },
  { label: "Elegibilidade" },
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

export default function EnamedElegibilidadePage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Próximos passos"
      ctaSectionDescription="Confirmada a obrigatoriedade, veja o cronograma anual e os objetivos do exame."
      ctaPrimary={{ label: "Cronograma do ENAMED", href: "/enamed/cronograma-aplicacao", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/enamed", variant: "outline" }}
    />
  );
}
