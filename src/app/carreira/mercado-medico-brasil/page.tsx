import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/carreira/mercado-medico-brasil.mdx";

const PATH = "/carreira/mercado-medico-brasil";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Carreira", href: "/carreira" },
  { label: "Mercado médico no Brasil" },
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

export default function CarreiraMercadoMedicoPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Trilha de carreira completa"
      ctaSectionDescription="Entendido o mercado, veja o que é a residência ou como funcionam os processos seletivos para definir sua estratégia."
      ctaPrimary={{ label: "Residência médica", href: "/carreira/residencia-medica", variant: "accent" }}
      ctaSecondary={{ label: "Processo seletivo de residência", href: "/carreira/processo-seletivo-residencia", variant: "outline" }}
    />
  );
}
