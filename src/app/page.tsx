import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portal ENAMED — Tudo sobre o Exame Nacional de Avaliação da Formação Médica",
  description:
    "Definições, estrutura da prova, áreas avaliadas, impacto institucional e preparação — conteúdo factual, citável e atualizado sobre o ENAMED para estudantes, médicos, IES e pesquisadores.",
  alternates: { canonical: "/" },
};

const clusters = [
  {
    title: "O ENAMED",
    description: "Definição, história, elegibilidade e como o exame se diferencia do Revalida.",
    href: "/enamed",
    eyebrow: "Institucional",
  },
  {
    title: "A Prova",
    description: "Metodologia TRI, Método Angoff, estrutura por áreas e cálculo da nota.",
    href: "/prova-enamed",
    eyebrow: "Técnico",
  },
  {
    title: "Conteúdos por área",
    description: "Clínica Médica, Cirurgia, Pediatria, GO, Saúde Coletiva e Ética.",
    href: "/areas",
    eyebrow: "Áreas médicas",
  },
  {
    title: "Simulados (informacional)",
    description: "O que são simulados ENAMED, como interpretar resultados, padrões de erros.",
    href: "/simulados-enamed",
    eyebrow: "Prática",
  },
  {
    title: "Como se preparar",
    description: "Cronogramas, técnicas, materiais, saúde mental e plano da última semana.",
    href: "/preparacao",
    eyebrow: "Preparação",
  },
  {
    title: "Para Instituições",
    description: "Avaliação MEC, CPC, sanções, credenciamento e estratégias de melhoria.",
    href: "/ies",
    eyebrow: "IES",
  },
  {
    title: "Carreira médica",
    description: "Residência, R+, ENARE, especialidades e mercado pós-formação.",
    href: "/carreira",
    eyebrow: "Carreira",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, hsl(var(--brand-500)) 0%, transparent 45%), radial-gradient(circle at 10% 90%, hsl(var(--brand-700)) 0%, transparent 50%)",
          }}
        />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-brand-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Exame Nacional de Avaliação da Formação Médica
            </p>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight text-white">
              Tudo sobre o ENAMED — em um só lugar
            </h1>
            <p className="mt-5 text-lg text-brand-100/80 max-w-2xl leading-relaxed">
              Definições, estrutura da prova, áreas avaliadas, impacto institucional e preparação —
              conteúdo factual, citável e atualizado para estudantes, médicos, IES e pesquisadores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link href="/enamed">Explorar o guia completo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                <Link href="/faq">Ver perguntas frequentes</Link>
              </Button>
            </div>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-300/80">Áreas avaliadas</dt>
                <dd className="font-display text-3xl font-bold text-white mt-1">6</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-300/80">Metodologia</dt>
                <dd className="font-display text-3xl font-bold text-white mt-1">TRI</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-300/80">Clusters</dt>
                <dd className="font-display text-3xl font-bold text-white mt-1">7</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-brand-300/80">Foco</dt>
                <dd className="font-display text-3xl font-bold text-white mt-1">MEC</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
            Hub de Conteúdo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900">
            Encontre o que precisa para cada dimensão do exame
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Do entendimento institucional ao detalhamento técnico, das áreas médicas avaliadas à
            preparação e à carreira médica. Sete clusters de conteúdo organizados para aprofundar
            cada dimensão.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clusters.map((cluster) => (
            <Link
              key={cluster.href}
              href={cluster.href}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 hover:border-brand-600 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span
                aria-hidden
                className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <p className="relative text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
                {cluster.eyebrow}
              </p>
              <h3 className="relative font-display text-xl font-bold text-neutral-900 group-hover:text-brand-800 transition-colors">
                {cluster.title}
              </h3>
              <p className="relative mt-2 text-sm text-neutral-600 leading-relaxed">
                {cluster.description}
              </p>
              <span className="relative mt-5 inline-flex items-center text-sm font-semibold text-brand-800">
                Explorar
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-3xl gradient-brand text-white p-10 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-0">
                Como o ENAMED afeta as Instituições de Ensino
              </h2>
              <p className="mt-3 text-brand-100/85 leading-relaxed">
                Conheça o impacto do ENAMED na avaliação MEC, o cálculo do CPC, as sanções
                regulatórias e os caminhos de melhoria institucional.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white shrink-0"
            >
              <Link href="/ies">Ler sobre o impacto institucional</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
