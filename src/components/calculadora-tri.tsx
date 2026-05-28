"use client";

import { useState, useMemo, useId } from "react";

type Band = {
  id: "insuficiente" | "basico" | "adequado" | "avancado" | "excelente";
  label: string;
  range: string;
  description: string;
  /** percent ceiling (inclusive) */
  ceiling: number;
  /** Tailwind class for the band chip */
  chipClass: string;
};

/**
 * Bandas didáticas para estimativa educacional.
 * NÃO refletem cortes oficiais do INEP — a banda real depende dos
 * parâmetros TRI calibrados de cada item, que não são públicos antes
 * do resultado. Cortes mostrados aqui assumem distribuição razoavelmente
 * uniforme de dificuldade entre itens.
 */
const BANDS: Band[] = [
  {
    id: "insuficiente",
    label: "Insuficiente",
    range: "Abaixo de 30% de acerto",
    description:
      "Indica lacunas amplas em uma ou mais áreas avaliadas. Plano de estudo precisa de revisão estrutural.",
    ceiling: 30,
    chipClass: "bg-red-100 text-red-900 border-red-300",
  },
  {
    id: "basico",
    label: "Básico",
    range: "30% a 49% de acerto",
    description:
      "Conhecimento mínimo, mas com lacunas relevantes em áreas de peso. Foco em fundamentos das três maiores áreas.",
    ceiling: 50,
    chipClass: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    id: "adequado",
    label: "Adequado",
    range: "50% a 64% de acerto",
    description:
      "Patamar mínimo esperado de um egresso de Medicina. Espaço de melhora em áreas específicas.",
    ceiling: 65,
    chipClass: "bg-brand-100 text-brand-900 border-brand-300",
  },
  {
    id: "avancado",
    label: "Avançado",
    range: "65% a 79% de acerto",
    description:
      "Desempenho acima da mediana esperada. Próximo passo é consolidação em áreas mais frágeis.",
    ceiling: 80,
    chipClass: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    id: "excelente",
    label: "Excelente",
    range: "80% ou mais de acerto",
    description:
      "Domínio consistente das seis áreas. Manutenção via simulados temporizados e revisão espaçada.",
    ceiling: 101,
    chipClass: "bg-violet-100 text-violet-900 border-violet-300",
  },
];

function bandFor(percent: number): Band {
  return BANDS.find((b) => percent < b.ceiling) ?? BANDS[BANDS.length - 1]!;
}

export function CalculadoraTri() {
  const [acertos, setAcertos] = useState(70);
  const [total, setTotal] = useState(110);

  const acertosClamped = Math.min(Math.max(0, acertos), total);
  const percent = useMemo(
    () => (total > 0 ? (acertosClamped / total) * 100 : 0),
    [acertosClamped, total],
  );
  const band = useMemo(() => bandFor(percent), [percent]);

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
            Entre 0 e {total}. Use sua estimativa após simulado, autoavaliação
            ou prova anterior.
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
            ENAMED costuma ter cerca de 110 questões. Confirme no edital
            vigente.
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
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold ${band.chipClass}`}
        >
          <span className="block h-2 w-2 rounded-full bg-current opacity-70" />
          Banda estimada: {band.label}
        </div>

        <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
          {band.description}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-semibold mb-1">Aviso importante</p>
        <p className="leading-relaxed">
          Esta é uma <strong>estimativa educacional</strong> baseada em
          percentual de acertos. A nota oficial do ENAMED é calculada por{" "}
          <strong>Teoria de Resposta ao Item (TRI)</strong>, que considera
          dificuldade, discriminação e probabilidade de acerto ao acaso de
          cada item — parâmetros não públicos antes do resultado. Sua banda
          real pode diferir desta estimativa.
        </p>
      </div>
    </div>
  );
}
