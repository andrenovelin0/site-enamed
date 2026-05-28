import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/components/structured-data";
import { getAllComparativos } from "@/lib/comparativos";

const PATH = "/comparativos";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Comparativos" },
];

export const metadata: Metadata = {
  title: "Comparativos — ENAMED × outras avaliações",
  description:
    "Comparativos detalhados entre ENAMED e outras avaliações educacionais/profissionais médicas: Revalida, ENADE, provas de residência, R+, TRI vs pontuação clássica.",
  alternates: { canonical: PATH },
};

export default async function ComparativosPage() {
  const items = await getAllComparativos();

  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />
      <CollectionPageJsonLd
        name="Comparativos do ENAMED"
        description="Comparativos detalhados entre o ENAMED e outras avaliações que cruzam a trajetória médica."
        path="/comparativos"
        numberOfItems={items.length}
      />

      <PageHero
        eyebrow="Comparativos"
        title="ENAMED comparado a outras avaliações"
        description="Comparativos detalhados entre o ENAMED e outras avaliações que cruzam a trajetória médica: Revalida, ENADE, provas de residência, R+, TRI e pontuação clássica."
        crumbs={CRUMBS}
      />

      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          {items.length === 0 ? (
            <p className="text-center text-neutral-500 py-20">
              Em breve, novos comparativos.
            </p>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/comparativos/${item.slug}`}
                    className="group block h-full p-6 rounded-2xl border border-neutral-200 bg-white hover:border-brand-600 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-sm font-bold text-brand-800">
                        {item.entityA}
                      </span>
                      <span className="text-xs text-neutral-400">vs.</span>
                      <span className="font-display text-sm font-bold text-purple-500">
                        {item.entityB}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-neutral-900 leading-snug group-hover:text-brand-800 transition-colors mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {item.shortAnswer}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 group-hover:translate-x-1 transition-transform">
                      Ver comparativo →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
