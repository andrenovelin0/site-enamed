import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/clinica-medica/cardiologia.mdx";

const PATH = "/areas/clinica-medica/cardiologia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Clínica Médica", href: "/areas/clinica-medica" },
  { label: "Cardiologia" },
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

export default function AreasClinicaCardiologiaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Clínica Médica"
      ctaSectionDescription="Cardiologia é um dos subtemas de maior peso. Veja outro subtema de alta frequência ou volte para o mini-hub."
      ctaPrimary={{ label: "Pneumologia", href: "/areas/clinica-medica/pneumologia", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Clínica Médica", href: "/areas/clinica-medica", variant: "outline" }}
    />
  );
}
