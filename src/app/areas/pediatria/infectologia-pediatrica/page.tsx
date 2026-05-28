import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/pediatria/infectologia-pediatrica.mdx";

const PATH = "/areas/pediatria/infectologia-pediatrica";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Pediatria", href: "/areas/pediatria" },
  { label: "Infectologia Pediátrica" },
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

export default function AreasPediatriaInfectologiaPediatricaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Pediatria"
      ctaSectionDescription="Veja outro subtema do mini-hub ou volte para o panorama da área."
      ctaPrimary={{ label: "Urgências Pediátricas", href: "/areas/pediatria/urgencias-pediatricas", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Pediatria", href: "/areas/pediatria", variant: "outline" }}
    />
  );
}
