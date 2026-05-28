import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/preparacao/cronograma-de-estudo.mdx";

const PATH = "/preparacao/cronograma-de-estudo";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Como se preparar", href: "/preparacao" },
  { label: "Cronograma de estudo" },
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

export default function PreparacaoCronogramaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofundar o cronograma"
      ctaSectionDescription="Veja o artigo editorial com distribuição semanal detalhada por modelo, ou explore as técnicas de estudo com evidência."
      ctaPrimary={{ label: "Cronograma detalhado no blog", href: "/blog/cronograma-estudo-enamed", variant: "accent" }}
      ctaSecondary={{ label: "Técnicas de estudo", href: "/preparacao/tecnicas-de-estudo", variant: "outline" }}
    />
  );
}
