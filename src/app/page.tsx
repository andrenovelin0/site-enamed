import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ENAMED — Portal do Exame Nacional de Avaliação da Formação Médica",
  description:
    "Tudo sobre o Exame Nacional de Avaliação da Formação Médica (Enamed): estrutura da prova, simulados, cursos preparatórios e estratégia para estudantes e IES.",
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
    description: "Metodologia TRI, Método Angoff, estrutura por áreas e análise de desempenho.",
    href: "/prova-enamed",
    eyebrow: "Técnico",
  },
  {
    title: "Simulados",
    description: "Questões comentadas, simulados temporizados e dashboard de performance.",
    href: "/simulados-enamed",
    eyebrow: "Prática",
  },
  {
    title: "Cursos preparatórios",
    description: "Programas de estudo, mentoria especializada e cronogramas personalizados.",
    href: "/cursos",
    eyebrow: "Conversão",
  },
  {
    title: "Para Instituições",
    description: "Desempenho institucional, avaliação MEC e estratégias de melhoria para IES.",
    href: "/ies",
    eyebrow: "B2B",
  },
  {
    title: "Blog & FAQ",
    description: "Notícias, editais, análises de provas recentes e respostas para dúvidas frequentes.",
    href: "/blog",
    eyebrow: "Conteúdo",
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
              Domine o ENAMED com o portal mais completo do Brasil.
            </h1>
            <p className="mt-5 text-lg text-brand-100/80 max-w-2xl leading-relaxed">
              Guias técnicos, simulados temporizados, análise de desempenho e cursos preparatórios
              — tudo organizado para você performar na avaliação que define sua formação médica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/simulados-enamed" className="btn-accent">
                Fazer simulado gratuito
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors font-display"
              >
                Conhecer cursos
              </Link>
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
                <dd className="font-display text-3xl font-bold text-white mt-1">6+</dd>
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
            Encontre o que precisa para cada etapa da preparação
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Do entendimento institucional do exame ao treinamento prático e à conversão em
            aprovação. Cada cluster aprofunda uma dimensão da jornada.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-brand-50 border-y border-brand-100">
        <div className="container-page py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
                Início do funil
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900">
                Comece pelo simulado diagnóstico
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Descubra suas lacunas por área (Clínica, Cirurgia, Pediatria, GO, Saúde Coletiva,
                Ética). Em seguida receba um plano de estudos sugerido para fechar gaps com
                eficiência.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/simulados-enamed" className="btn-primary">
                  Iniciar diagnóstico
                </Link>
                <Link href="/prova-enamed" className="btn-secondary">
                  Entender a prova primeiro
                </Link>
              </div>
            </div>
            <ul className="grid gap-3">
              {[
                "Simulados por área médica",
                "Questões comentadas por especialistas",
                "Dashboard de desempenho personalizado",
                "Cronogramas dirigidos por nível",
                "Integração B2B para IES",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white border border-brand-100 p-4 hover:border-brand-300 transition-colors"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-brand-950">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-neutral-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl gradient-brand text-white p-10 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-3">
                Para Instituições de Ensino
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Eleve o desempenho da sua IES no ENAMED
              </h2>
              <p className="mt-3 text-brand-100/85 leading-relaxed">
                Avaliações institucionais, simulados para alunos e consultoria estratégica para
                melhoria da nota no MEC.
              </p>
            </div>
            <Link href="/ies" className="btn-accent shrink-0">
              Soluções para IES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
