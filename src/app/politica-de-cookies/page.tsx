import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Como o portal ENAMED utiliza cookies, quais tecnologias de rastreamento são empregadas e como você pode controlar suas preferências.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <PageHero
        title="Política de Cookies"
        description="Uso de cookies, finalidades e como gerenciar suas preferências."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Política de Cookies" },
        ]}
      />
      <section className="container-page py-12 md:py-16">
        <article className="prose prose-neutral max-w-3xl text-neutral-700 leading-relaxed">
          <p className="text-sm text-neutral-500 italic">
            Conteúdo institucional inicial — versão a ser revisada com aconselhamento jurídico.
          </p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">1. O que são cookies</h2>
          <p>Definição técnica e diferenças entre cookies próprios e de terceiros.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">2. Categorias utilizadas</h2>
          <ul>
            <li>Estritamente necessários</li>
            <li>De desempenho e analytics</li>
            <li>De marketing</li>
            <li>De personalização</li>
          </ul>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">3. Como gerenciar</h2>
          <p>Como o usuário pode ajustar as preferências de cookies no navegador.</p>
        </article>
      </section>
    </>
  );
}
