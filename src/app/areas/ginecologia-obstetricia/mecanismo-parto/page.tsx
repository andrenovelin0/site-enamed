import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/ginecologia-obstetricia/mecanismo-parto.mdx";

const PATH = "/areas/ginecologia-obstetricia/mecanismo-parto";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ginecologia e Obstetrícia", href: "/areas/ginecologia-obstetricia" },
  { label: "Mecanismo de Parto" },
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

export default function AreasGoMecanismoPartoPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Ginecologia e Obstetrícia"
      ctaSectionDescription="Partograma e indicações de cesárea são tópicos clássicos. Veja Pré-natal para a etapa anterior ou volte ao mini-hub."
      ctaPrimary={{ label: "Pré-natal", href: "/areas/ginecologia-obstetricia/pre-natal", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para GO", href: "/areas/ginecologia-obstetricia", variant: "outline" }}
    />
  );
}
