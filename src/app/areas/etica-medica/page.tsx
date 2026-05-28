import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/etica-medica.mdx";

const PATH = "/areas/etica-medica";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ética Médica" },
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

export default function AreasEticaMedicaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue explorando as áreas"
      ctaSectionDescription="Ética é a menor área em peso, mas com alta densidade de pegadinhas. Volte ao mapa de áreas para o panorama geral."
      ctaPrimary={{ label: "Mapa de Áreas Médicas", href: "/areas", variant: "accent" }}
      ctaSecondary={{ label: "Estrutura da prova", href: "/prova-enamed", variant: "outline" }}
    />
  );
}
