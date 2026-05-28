import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/ginecologia-obstetricia/puerperio.mdx";

const PATH = "/areas/ginecologia-obstetricia/puerperio";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ginecologia e Obstetrícia", href: "/areas/ginecologia-obstetricia" },
  { label: "Puerpério" },
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

export default function AreasGOPuerperioPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Ginecologia e Obstetrícia"
      ctaSectionDescription="Veja outro subtema do mini-hub ou volte para o panorama da área."
      ctaPrimary={{ label: "Mecanismo do Parto", href: "/areas/ginecologia-obstetricia/mecanismo-parto", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para GO", href: "/areas/ginecologia-obstetricia", variant: "outline" }}
    />
  );
}
