import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/clinica-medica/endocrinologia.mdx";

const PATH = "/areas/clinica-medica/endocrinologia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Clínica Médica", href: "/areas/clinica-medica" },
  { label: "Endocrinologia" },
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

export default function AreasClinicaEndocrinologiaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Clínica Médica"
      ctaSectionDescription="DM2 e tireoide concentram boa parte das questões. Veja Infectologia para outro subtema de alta frequência ou volte ao mini-hub."
      ctaPrimary={{ label: "Infectologia", href: "/areas/clinica-medica/infectologia", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Clínica Médica", href: "/areas/clinica-medica", variant: "outline" }}
    />
  );
}
