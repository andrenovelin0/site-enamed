import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/ginecologia-obstetricia/urgencia-obstetrica.mdx";

const PATH = "/areas/ginecologia-obstetricia/urgencia-obstetrica";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ginecologia e Obstetrícia", href: "/areas/ginecologia-obstetricia" },
  { label: "Urgência Obstétrica" },
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

export default function AreasGOUrgenciaObstetricaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Ginecologia e Obstetrícia"
      ctaSectionDescription="Veja outro subtema do mini-hub ou volte para o panorama da área."
      ctaPrimary={{ label: "Puerpério", href: "/areas/ginecologia-obstetricia/puerperio", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para GO", href: "/areas/ginecologia-obstetricia", variant: "outline" }}
    />
  );
}
