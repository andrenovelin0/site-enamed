import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/ginecologia-obstetricia/pre-natal.mdx";

const PATH = "/areas/ginecologia-obstetricia/pre-natal";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ginecologia e Obstetrícia", href: "/areas/ginecologia-obstetricia" },
  { label: "Pré-natal" },
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

export default function AreasGoPreNatalPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Ginecologia e Obstetrícia"
      ctaSectionDescription="Pré-natal lidera em frequência. Veja Mecanismo de Parto para a etapa seguinte ou volte ao mini-hub."
      ctaPrimary={{ label: "Mecanismo de Parto", href: "/areas/ginecologia-obstetricia/mecanismo-parto", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para GO", href: "/areas/ginecologia-obstetricia", variant: "outline" }}
    />
  );
}
