import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/clinica-medica/pneumologia.mdx";

const PATH = "/areas/clinica-medica/pneumologia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Clínica Médica", href: "/areas/clinica-medica" },
  { label: "Pneumologia" },
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

export default function AreasClinicaPneumologiaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Clínica Médica"
      ctaSectionDescription="Pneumologia compõe o trio de maior frequência junto a Cardiologia e Infectologia. Continue pelos subtemas centrais."
      ctaPrimary={{ label: "Cardiologia", href: "/areas/clinica-medica/cardiologia", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Clínica Médica", href: "/areas/clinica-medica", variant: "outline" }}
    />
  );
}
