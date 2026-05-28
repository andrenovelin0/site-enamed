import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { CalculadoraTri } from "@/components/calculadora-tri";

const PATH = "/calculadora-tri";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Calculadora TRI" },
];

export const metadata: Metadata = {
  title: "Calculadora TRI ENAMED — estime sua banda de desempenho",
  description:
    "Calculadora educacional para estimar sua banda de desempenho no ENAMED a partir do número de acertos. Resultado aproximado — TRI oficial depende de parâmetros do INEP.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Calculadora TRI ENAMED",
    description:
      "Estime sua banda de desempenho no ENAMED a partir do número de acertos.",
    type: "website",
    url: PATH,
  },
};

export default function CalculadoraTriPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />

      <PageHero
        eyebrow="Ferramenta"
        title="Calculadora TRI ENAMED"
        description="Estime sua banda de desempenho a partir do número de acertos. Resultado é aproximação educacional — a nota TRI oficial depende de parâmetros calibrados pelo INEP."
        crumbs={CRUMBS}
      />

      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <CalculadoraTri />

          <div className="prose prose-neutral max-w-none mt-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-0 mb-4">
              Como usar
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-brand-600 marker:font-semibold">
              <li>
                Faça um simulado calibrado ou estime acertos em uma prova
                anterior.
              </li>
              <li>
                Informe quantas questões você acertou e o total de questões
                (ENAMED costuma ter cerca de 110).
              </li>
              <li>
                A calculadora mostra a banda estimada (Insuficiente, Básico,
                Adequado, Avançado, Excelente) e o percentual de acerto.
              </li>
              <li>
                Use o resultado como ponto de partida para ajustar plano de
                estudo — não como previsão de nota final.
              </li>
            </ol>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
              Por que isto é apenas estimativa
            </h2>
            <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed">
              A nota oficial do ENAMED é calculada por{" "}
              <Link
                href="/glossario/tri"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Teoria de Resposta ao Item (TRI)
              </Link>
              , modelo psicométrico que considera três parâmetros de cada
              questão: dificuldade, discriminação e probabilidade de acerto
              ao acaso. Esses parâmetros são calibrados pelo INEP a partir do
              padrão de respostas de todos os candidatos do ciclo e{" "}
              <strong>não são públicos antes do resultado</strong>.
            </p>
            <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed">
              Dois candidatos com o mesmo número de acertos podem ter notas
              TRI diferentes — depende de <em>quais</em> itens cada um
              acertou. Por isso a calculadora aqui usa percentual simples,
              suficiente para orientar plano de estudo, mas insuficiente para
              prever a banda oficial.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
              Para aprofundar
            </h2>
            <ul className="space-y-2 pl-6 list-disc marker:text-brand-600">
              <li>
                <Link
                  href="/glossario/tri"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Teoria de Resposta ao Item — verbete técnico
                </Link>
              </li>
              <li>
                <Link
                  href="/glossario/bandas-desempenho"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Bandas de desempenho do ENAMED
                </Link>
              </li>
              <li>
                <Link
                  href="/glossario/nota-tri"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Nota TRI — a métrica final
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/como-tri-calcula-nota-enamed"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Como a TRI calcula sua nota no ENAMED — explicação detalhada
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/bandas-desempenho-enamed"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Bandas de desempenho — o que cada banda significa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
