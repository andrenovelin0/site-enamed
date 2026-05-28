import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/preparacao/dia-da-prova.mdx";

const PATH = "/preparacao/dia-da-prova";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Como se preparar", href: "/preparacao" },
  { label: "Dia da prova" },
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

export default function PreparacaoDiaDaProvaPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Antes e depois do dia D"
      ctaSectionDescription="Para chegar bem ao dia da prova, veja o plano da última semana. Para entender como o tempo funciona durante a prova, veja a logística."
      ctaPrimary={{ label: "Última semana de prova", href: "/preparacao/ultima-semana-de-prova", variant: "accent" }}
      ctaSecondary={{ label: "Tempo de prova", href: "/prova-enamed/tempo-de-prova", variant: "outline" }}
    />
  );
}
