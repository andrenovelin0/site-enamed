import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/enamed/historia.mdx";

const PATH = "/enamed/historia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "O ENAMED", href: "/enamed" },
  { label: "História" },
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

export default function EnamedHistoriaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue explorando o ENAMED"
      ctaSectionDescription="Entendido o contexto histórico, veja os objetivos atuais do exame e quem precisa fazer."
      ctaPrimary={{ label: "Para que serve o ENAMED", href: "/enamed/objetivos", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/enamed", variant: "outline" }}
    />
  );
}
