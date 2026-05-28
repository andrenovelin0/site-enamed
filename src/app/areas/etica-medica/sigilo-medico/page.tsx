import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/etica-medica/sigilo-medico.mdx";

const PATH = "/areas/etica-medica/sigilo-medico";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Ética Médica", href: "/areas/etica-medica" },
  { label: "Sigilo Médico" },
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

export default function AreasEticaMedicaSigiloMedicoPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Ética Médica"
      ctaSectionDescription="Veja outro subtema do mini-hub ou volte para o panorama da área."
      ctaPrimary={{ label: "Código de Ética", href: "/areas/etica-medica/codigo-etica", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Ética Médica", href: "/areas/etica-medica", variant: "outline" }}
    />
  );
}
