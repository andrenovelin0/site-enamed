import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/cirurgia.mdx";

const PATH = "/areas/cirurgia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Cirurgia" },
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

export default function AreasCirurgiaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde os subtemas"
      ctaSectionDescription="Cirurgia no ENAMED é raciocínio cirúrgico, não técnica operatória. Comece pelo subtema de maior peso."
      ctaPrimary={{ label: "Cirurgia Geral", href: "/areas/cirurgia/cirurgia-geral", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Áreas Médicas", href: "/areas", variant: "outline" }}
    />
  );
}
