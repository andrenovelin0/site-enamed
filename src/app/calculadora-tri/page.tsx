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
  title: "Calculadora TRI ENAMED — projeção do nível de desempenho",
  description:
    "Calculadora educacional para projetar o nível de desempenho no ENAMED (Proficiente / Não Proficiente) a partir do número de acertos. Resultado é aproximação — a TRI oficial usa parâmetros calibrados pelo INEP após a aplicação.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Calculadora TRI ENAMED",
    description:
      "Projeção educacional do nível de desempenho no ENAMED — Proficiente exige nota ≥ 60,0 na escala TRI.",
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
        description="Projete o nível de desempenho a partir do número de acertos. O ENAMED 2026 tem 100 questões objetivas e o piso oficial para o nível Proficiente é 60,0 pontos na escala de proficiência TRI."
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
                Informe o número de acertos e o total de questões (o
                ENAMED 2026 tem 100 questões, conforme item 3.1.1.1 do{" "}
                <a
                  href="https://www.in.gov.br/web/dou/-/edital-n-71-de-28-de-maio-de-2026-709280869"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Edital INEP nº 71/2026
                </a>
                ).
              </li>
              <li>
                A calculadora projeta o nível de desempenho (Proficiente ou
                Não Proficiente) e o percentual de acerto.
              </li>
              <li>
                Use o resultado como ponto de partida para ajustar plano de
                estudo — não como previsão de nota TRI final.
              </li>
            </ol>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
              Os dois níveis oficiais
            </h2>
            <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed">
              O boletim de desempenho do ENAMED traz a pontuação e o nível de
              desempenho alcançado pelo participante. Há apenas{" "}
              <strong>dois níveis oficiais</strong>, definidos no item 14.1.4
              do Edital INEP nº 71/2026:
            </p>
            <ul className="space-y-2 pl-6 list-disc marker:text-brand-600">
              <li>
                <strong>Nível Proficiente:</strong> nota{" "}
                <strong>igual ou superior a 60,0 pontos</strong> na escala de
                proficiência baseada em TRI.
              </li>
              <li>
                <strong>Nível Não Proficiente:</strong> nota{" "}
                <strong>inferior a 60,0 pontos</strong>.
              </li>
            </ul>
            <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed">
              A descrição pedagógica do Nível Proficiente está na{" "}
              <strong>Nota Técnica nº 19/2025/CGAFM/DAES-INEP</strong>,
              disponível no portal do INEP. Para o estudante do quarto ano, o
              boletim apresenta apenas a pontuação obtida, sem atribuição de
              nível (item 14.1.6.2 do Edital INEP nº 71/2026).
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
              Por que isto é apenas uma projeção
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
              ao acaso. Esses parâmetros são calibrados pelo INEP a partir
              do padrão de respostas dos participantes e{" "}
              <strong>não são públicos antes do resultado</strong> — o item
              3.1.1.2 do Edital INEP nº 71/2026 menciona a Matriz de
              Referência (Portaria Inep nº 478/2025) e o Banco Nacional de
              Itens da Educação Superior como insumos.
            </p>
            <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed">
              Dois candidatos com o mesmo número de acertos podem ter notas
              TRI diferentes — depende de <em>quais</em> itens cada um
              acertou. Por isso a calculadora aqui usa percentual simples
              apenas como referência para orientar plano de estudo.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
              Validade e aproveitamento no ENARE
            </h2>
            <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed">
              A nota baseada na escala de proficiência (TRI) tem{" "}
              <strong>validade de três anos</strong>, exceto para estudantes
              do quarto ano (item 5.4 do Edital INEP nº 71/2026; art. 15 da
              Portaria Inep nº 413/2025). Para participação no{" "}
              <Link
                href="/glossario/enare"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                ENARE 2026/2027
              </Link>
              , é necessário ter atingido o nível Proficiente — em caso de
              reaproveitamento de nota anterior, considera-se a maior nota
              válida obtida.
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
                  Níveis de desempenho do ENAMED
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
                  href="/glossario/enare"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  ENARE — Exame Nacional de Residência
                </Link>
              </li>
              <li>
                <a
                  href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enamed"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  Portal oficial do ENAMED — INEP (fonte primária)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
