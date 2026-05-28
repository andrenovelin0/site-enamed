import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/clinica-medica.mdx";

const PATH = "/areas/clinica-medica";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Clínica Médica" },
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

export default function AreasClinicaMedicaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde os subtemas"
      ctaSectionDescription="Clínica Médica concentra o maior peso da prova. Comece pelos subtemas de maior frequência."
      ctaPrimary={{ label: "Cardiologia", href: "/areas/clinica-medica/cardiologia", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Áreas Médicas", href: "/areas", variant: "outline" }}
    />
  );
}
