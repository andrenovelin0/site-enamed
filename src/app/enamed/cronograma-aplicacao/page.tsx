import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/enamed/cronograma-aplicacao.mdx";

const PATH = "/enamed/cronograma-aplicacao";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "O ENAMED", href: "/enamed" },
  { label: "Cronograma" },
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

export default function EnamedCronogramaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue se preparando"
      ctaSectionDescription="Sabendo quando é a prova, veja como ela é estruturada e como organizar seu estudo."
      ctaPrimary={{ label: "A Prova do ENAMED", href: "/prova-enamed", variant: "accent" }}
      ctaSecondary={{ label: "Voltar ao pilar", href: "/enamed", variant: "outline" }}
    />
  );
}
