import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/preparacao/ultima-semana-de-prova.mdx";

const PATH = "/preparacao/ultima-semana-de-prova";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Como se preparar", href: "/preparacao" },
  { label: "Última semana de prova" },
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

export default function PreparacaoUltimaSemanaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Chegando ao dia D"
      ctaSectionDescription="Veja o checklist prático do dia da prova ou o detalhamento dia a dia da última semana no blog."
      ctaPrimary={{ label: "Checklist do dia da prova", href: "/preparacao/dia-da-prova", variant: "accent" }}
      ctaSecondary={{ label: "Detalhamento completo", href: "/blog/ultima-semana-antes-enamed", variant: "outline" }}
    />
  );
}
