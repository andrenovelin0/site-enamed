import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/carreira/residencia-medica.mdx";

const PATH = "/carreira/residencia-medica";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Carreira", href: "/carreira" },
  { label: "Residência médica" },
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

export default function CarreiraResidenciaMedicaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continuar na trilha de carreira"
      ctaSectionDescription="Entendido o que é a residência, veja como funcionam os processos seletivos ou o panorama do mercado médico brasileiro."
      ctaPrimary={{ label: "Processo seletivo de residência", href: "/carreira/processo-seletivo-residencia", variant: "accent" }}
      ctaSecondary={{ label: "Mercado médico no Brasil", href: "/carreira/mercado-medico-brasil", variant: "outline" }}
    />
  );
}
