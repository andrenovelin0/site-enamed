import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/pediatria/urgencias-pediatricas.mdx";

const PATH = "/areas/pediatria/urgencias-pediatricas";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Pediatria", href: "/areas/pediatria" },
  { label: "Urgências Pediátricas" },
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

export default function AreasPediatriaUrgenciasPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Pediatria"
      ctaSectionDescription="Convulsão febril e desidratação são quadros recorrentes. Veja Neonatologia para urgências do RN ou volte ao mini-hub."
      ctaPrimary={{ label: "Neonatologia", href: "/areas/pediatria/neonatologia", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Pediatria", href: "/areas/pediatria", variant: "outline" }}
    />
  );
}
