import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/areas/cirurgia/trauma.mdx";

const PATH = "/areas/cirurgia/trauma";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas", href: "/areas" },
  { label: "Cirurgia", href: "/areas/cirurgia" },
  { label: "Trauma" },
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

export default function AreasCirurgiaTraumaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Continue em Cirurgia"
      ctaSectionDescription="Trauma é o segundo subtema mais cobrado. Veja Cirurgia Geral para abdome agudo ou volte ao mini-hub."
      ctaPrimary={{ label: "Cirurgia Geral", href: "/areas/cirurgia/cirurgia-geral", variant: "accent" }}
      ctaSecondary={{ label: "Voltar para Cirurgia", href: "/areas/cirurgia", variant: "outline" }}
    />
  );
}
