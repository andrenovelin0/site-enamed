import Link from "next/link";
import type { ComponentType } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";

export type PilarFrontmatter = {
  title: string;
  description: string;
  eyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  updatedAt?: string;
};

export type PilarCta = {
  label: string;
  href: string;
  variant?: "primary" | "accent" | "outline";
};

type PilarTemplateProps = {
  path: string;
  crumbs: { label: string; href?: string }[];
  frontmatter: PilarFrontmatter;
  Content: ComponentType;
  ctaPrimary?: PilarCta;
  ctaSecondary?: PilarCta;
  ctaSectionTitle?: string;
  ctaSectionDescription?: string;
};

export function PilarTemplate({
  path,
  crumbs,
  frontmatter,
  Content,
  ctaPrimary,
  ctaSecondary,
  ctaSectionTitle,
  ctaSectionDescription,
}: PilarTemplateProps) {
  return (
    <>
      <ArticleJsonLd
        title={frontmatter.title}
        description={frontmatter.description}
        path={path}
        datePublished={frontmatter.updatedAt}
        dateModified={frontmatter.updatedAt}
      />
      <BreadcrumbJsonLd trail={crumbs} />

      <PageHero
        eyebrow={frontmatter.eyebrow}
        title={frontmatter.heroTitle ?? frontmatter.title}
        description={frontmatter.heroDescription ?? frontmatter.description}
        crumbs={crumbs}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Content />

          {(ctaPrimary || ctaSecondary) && (
            <section className="mt-12 rounded-2xl gradient-brand text-white p-8 md:p-10">
              {ctaSectionTitle && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-2">
                    Continue na jornada
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 mt-0">
                    {ctaSectionTitle}
                  </h2>
                </>
              )}
              {ctaSectionDescription && (
                <p className="text-brand-100/90 leading-relaxed mb-6 max-w-2xl">
                  {ctaSectionDescription}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {ctaPrimary && (
                  <Button asChild variant={ctaPrimary.variant ?? "accent"}>
                    <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
                  </Button>
                )}
                {ctaSecondary && (
                  <Button
                    asChild
                    variant={ctaSecondary.variant ?? "outline"}
                    className={
                      ctaSecondary.variant === "outline" || !ctaSecondary.variant
                        ? "border-white/30 text-white hover:bg-white/10 hover:border-white"
                        : undefined
                    }
                  >
                    <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
                  </Button>
                )}
              </div>
              {frontmatter.updatedAt && (
                <p className="mt-6 text-xs text-brand-100/60">
                  Atualizado em {new Date(frontmatter.updatedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
              )}
            </section>
          )}
        </div>
      </article>
    </>
  );
}
