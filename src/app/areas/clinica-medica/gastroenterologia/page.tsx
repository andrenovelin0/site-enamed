import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/clinica-medica/gastroenterologia.mdx";

const PATH = "/areas/clinica-medica/gastroenterologia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Clínica Médica", href: "/areas/clinica-medica" },
  { label: "Gastroenterologia" },
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

export default function AreasClinicaGastroenterologiaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Clínica Médica"
      ctaSectionDescription="Gastroenterologia tem alta repetição de padrões em hepatites e cirrose. Veja outro subtema ou volte ao mini-hub."
      ctaPrimary={{ label: "Nefrologia", href: "/areas/clinica-medica/nefrologia", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Clínica Médica", href: "/areas/clinica-medica", variant: "outline" }}
    />
  );
}
