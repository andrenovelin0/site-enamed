import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/carreira/processo-seletivo-residencia.mdx";

const PATH = "/carreira/processo-seletivo-residencia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Carreira", href: "/carreira" },
  { label: "Processo seletivo de residência" },
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

export default function CarreiraProcessoSeletivoPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continuar na trilha de carreira"
      ctaSectionDescription="Entendido como se entra, veja o que é a residência em si ou o panorama do mercado pós-formação."
      ctaPrimary={{ label: "Residência médica — visão geral", href: "/carreira/residencia-medica", variant: "accent" }}
      ctaSecondary={{ label: "Mercado médico no Brasil", href: "/carreira/mercado-medico-brasil", variant: "outline" }}
    />
  );
}
