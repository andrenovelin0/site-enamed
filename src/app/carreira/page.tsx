import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/pilares/carreira.mdx";

const PATH = "/carreira";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Carreira médica" },
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

export default function CarreiraPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde os próximos passos"
      ctaSectionDescription="Veja como o ENAMED se conecta a processos de residência, ou explore análises editoriais sobre carreira médica."
      ctaPrimary={{ label: "ENAMED × residência", href: "/blog/enamed-e-residencia-medica", variant: "accent" }}
      ctaSecondary={{ label: "Ver blog", href: "/blog", variant: "outline" }}
    />
  );
}
