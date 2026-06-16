"use client";

import { useState, useMemo, useId } from "react";

type Level = {
  id: "proficiente" | "nao-proficiente";
  label: string;
  description: string;
  chipClass: string;
};

const LEVELS: Record<Level["id"], Level> = {
  proficiente: {
    id: "proficiente",
    label: "Proficiente",
    description:
      "Nível mínimo de habilitação no ENAMED, conforme item 14.1.4 do Edital nº 71/2026 (INEP). O resultado Proficiente também habilita o candidato a usar a nota no ENARE 2026/2027 para residência médica de acesso direto.",
    chipClass: "bg-brand-100 text-brand-900 border-brand-300",
  },
  "nao-proficiente": {
    id: "nao-proficiente",
    label: "Não Proficiente",
    description:
      "Nota abaixo do piso oficial de 60,0 pontos. Não habilita o aproveitamento da nota no ENARE — o candidato pode tentar novamente em edição posterior ou usar nota válida de edição anterior em que tenha atingido o nível Proficiente.",
    chipClass: "bg-amber-100 text-amber-900 border-amber-300",
  },
};

const TOTAL_QUESTOES_OFICIAL = 100;
const PISO_PROFICIENTE = 60;

/**
 * IMPORTANTE — limitações desta calculadora:
 *
 * A nota oficial do ENAMED é calculada por Teoria de Resposta ao Item (TRI),
 * que considera dificuldade, discriminação e probabilidade de acerto ao acaso
 * de cada item. Esses parâmetros são calibrados pelo INEP após a aplicação
 * e NÃO são públicos antes do resultado.
 *
 * Esta calculadora usa apenas o percentual de acertos como referência
 * didática para projetar o nível de desempenho. Dois candidatos com mesmo
 * número de acertos podem ter notas TRI diferentes — depende de quais itens
 * cada um acertou. Use como orientação de plano de estudo, não como previsão.
 */
function projectarNivel(percent: number): Level {
  return percent >= PISO_PROFICIENTE ? LEVELS.proficiente : LEVELS["nao-proficiente"];
}

export function CalculadoraTri() {
  const [acertos, setAcertos] = useState(60);
  const [total, setTotal] = useState(TOTAL_QUESTOES_OFICIAL);

  const acertosClamped = Math.min(Math.max(0, acertos), total);
  const percent = useMemo(
    () => (total > 0 ? (acertosClamped / total) * 100 : 0),
    [acertosClamped, total],
  );
  const level = useMemo(() => projectarNivel(percent), [percent]);

  const acertosId = useId();
  const totalId = useId();

  return (
    <div className="my-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor={acertosId}
            className="block font-display text-sm font-semibold text-neutral-900 mb-2"
          >
            Quantas questões você acertou?
          </label>
          <input
            id={acertosId}
            type="number"
            min={0}
            max={total}
            value={acertos}
            onChange={(e) => setAcertos(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-lg font-display font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            aria-describedby={`${acertosId}-help`}
          />
          <p
            id={`${acertosId}-help`}
            className="mt-2 text-xs text-neutral-500"
          >
            Entre 0 e {total}. Use sua estimativa após simulado calibrado ou
            autoavaliação.
          </p>
        </div>

        <div>
          <label
            htmlFor={totalId}
            className="block font-display text-sm font-semibold text-neutral-900 mb-2"
          >
            Total de questões na prova
          </label>
          <input
            id={totalId}
            type="number"
            min={1}
            max={200}
            value={total}
            onChange={(e) => setTotal(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-lg font-display font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            aria-describedby={`${totalId}-help`}
          />
          <p
            id={`${totalId}-help`}
            className="mt-2 text-xs text-neutral-500"
          >
            O ENAMED 2026 tem 100 questões objetivas, conforme item 3.1.1.1 do
            Edital nº 71/2026 (INEP).
          </p>
        </div>
      </div>

      <div
        className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
          Estimativa educacional
        </p>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-4">
          <p className="font-display text-4xl md:text-5xl font-bold text-neutral-900">
            {percent.toFixed(1)}%
          </p>
          <p className="text-neutral-600">
            {acertosClamped} de {total} acertos
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold ${level.chipClass}`}
        >
          <span className="block h-2 w-2 rounded-full bg-current opacity-70" />
          Projeção: nível {level.label}
        </div>

        <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
          {level.description}
        </p>

        <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
          Piso de habilitação oficial: <strong>60,0 pontos</strong> na escala
          de proficiência TRI (item 14.1.4 do Edital INEP nº 71/2026).
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-semibold mb-1">Aviso importante</p>
        <p className="leading-relaxed">
          Esta é uma <strong>estimativa educacional</strong> baseada em
          percentual de acertos. A nota oficial do ENAMED é calculada por{" "}
          <strong>Teoria de Resposta ao Item (TRI)</strong>, que considera
          dificuldade, discriminação e probabilidade de acerto ao acaso de
          cada item — parâmetros calibrados pelo INEP após a aplicação e não
          públicos antes do resultado. Sua nota oficial pode diferir desta
          projeção. Fonte:{" "}
          <a
            href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enamed"
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-2 hover:text-amber-700"
          >
            Portal oficial do ENAMED — INEP
          </a>
          .
        </p>
      </div>
    </div>
  );
}
