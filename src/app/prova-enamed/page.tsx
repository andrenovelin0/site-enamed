import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/pilares/prova-enamed.mdx";

const PATH = "/prova-enamed";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "A Prova" },
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

export default function ProvaEnamedPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Próximo passo na sua preparação"
      ctaSectionDescription="Você entende a estrutura da prova. Agora veja como simulados funcionam ou como organizar sua preparação."
      ctaPrimary={{ label: "Conhecer simulados", href: "/simulados-enamed", variant: "accent" }}
      ctaSecondary={{ label: "Plano de preparação", href: "/preparacao", variant: "outline" }}
    />
  );
}
