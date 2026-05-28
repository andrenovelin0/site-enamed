import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/pilares/areas.mdx";

const PATH = "/areas";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Áreas Médicas" },
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

export default function AreasPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Próximo passo na sua preparação"
      ctaSectionDescription="Veja como funciona a prova ou como organizar seu estudo distribuído por essas áreas."
      ctaPrimary={{ label: "Estrutura da prova", href: "/prova-enamed", variant: "accent" }}
      ctaSecondary={{ label: "Como se preparar", href: "/preparacao", variant: "outline" }}
    />
  );
}
