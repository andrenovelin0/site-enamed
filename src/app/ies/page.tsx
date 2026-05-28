import type { Metadata } from "next";
import { PilarTemplate } from "@/components/pilar-template";
import Content, { metadata as frontmatter } from "@/content/pilares/ies.mdx";

const PATH = "/ies";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Para IES" },
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

export default function IesPage() {
  return (
    <PilarTemplate
      path={PATH}
      crumbs={CRUMBS}
      frontmatter={frontmatter}
      Content={Content}
      ctaSectionTitle="Aprofunde para a sua IES"
      ctaSectionDescription="Entenda como o ENAMED é estruturado para alinhar o currículo da sua faculdade, ou entre em contato para discutir estratégias específicas."
      ctaPrimary={{ label: "Entender a estrutura da prova", href: "/prova-enamed", variant: "accent" }}
      ctaSecondary={{ label: "Falar com o Portal", href: "/contato", variant: "outline" }}
    />
  );
}
