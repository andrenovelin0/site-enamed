import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/pilares/preparacao.mdx";

const PATH = "/preparacao";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Como se preparar" },
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

export default function PreparacaoPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Mãos à obra"
      ctaSectionDescription="Veja os artigos editoriais do blog para aprofundar técnicas específicas, ou conheça os simulados informacionais."
      ctaPrimary={{ label: "Ver artigos do blog", href: "/blog", variant: "accent" }}
      ctaSecondary={{ label: "Sobre simulados", href: "/simulados-enamed", variant: "outline" }}
    />
  );
}
