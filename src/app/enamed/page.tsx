import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";
import Content, { metadata as frontmatter } from "@/content/pilares/enamed.mdx";

const PATH = "/enamed";

const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "O ENAMED" },
];

export const metadata: Metadata = {
  title: frontmatter.title ?? "O ENAMED",
  description: frontmatter.description ?? "",
  alternates: { canonical: PATH },
  openGraph: {
    title: frontmatter.title ?? "O ENAMED",
    description: frontmatter.description ?? "",
    type: "article",
    url: PATH,
  },
};

export default function EnamedHubPage() {
  return (
    <>
      <ArticleJsonLd
        title={frontmatter.title ?? ""}
        description={frontmatter.description ?? ""}
        path={PATH}
        datePublished={frontmatter.updatedAt}
        dateModified={frontmatter.updatedAt}
      />
      <BreadcrumbJsonLd trail={CRUMBS} />

      <PageHero
        eyebrow={frontmatter.eyebrow}
        title={frontmatter.heroTitle ?? frontmatter.title ?? "O ENAMED"}
        description={frontmatter.heroDescription ?? frontmatter.description}
        crumbs={CRUMBS}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Content />

          <hr className="my-12 border-t border-neutral-200" />

          <section className="rounded-2xl gradient-brand text-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">
              Continue na jornada
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 mt-0">
              Pronto para entender a prova por dentro?
            </h2>
            <p className="text-brand-100/90 leading-relaxed mb-6 max-w-2xl">
              Agora que você sabe o que é o ENAMED, vá para o detalhamento técnico — TRI,
              método Angoff, estrutura por áreas e como interpretar sua nota.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link href="/prova-enamed">Entender a prova</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                <Link href="/simulados-enamed">Ir direto pro simulado</Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
