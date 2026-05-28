import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/pediatria/neonatologia.mdx";

const PATH = "/areas/pediatria/neonatologia";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Pediatria", href: "/areas/pediatria" },
  { label: "Neonatologia" },
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

export default function AreasPediatriaNeonatologiaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Pediatria"
      ctaSectionDescription="Sala de parto e icterícia são tópicos clássicos. Veja Urgências Pediátricas para o pós-RN ou volte ao mini-hub."
      ctaPrimary={{ label: "Urgências Pediátricas", href: "/areas/pediatria/urgencias-pediatricas", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Pediatria", href: "/areas/pediatria", variant: "outline" }}
    />
  );
}
