import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/ginecologia-obstetricia.mdx";

const PATH = "/areas/ginecologia-obstetricia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ginecologia e Obstetrícia" },
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

export default function AreasGinecologiaObstetriciaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue explorando as áreas"
      ctaSectionDescription="GO responde por cerca de 15% da prova, com casos clínicos densos. Veja o mapa de áreas para distribuir o estudo."
      ctaPrimary={{ label: "Mapa de Áreas Médicas", href: "/areas", variant: "accent" }}
      ctaSecondary={{ label: "Como se preparar", href: "/preparacao", variant: "outline" }}
    />
  );
}
