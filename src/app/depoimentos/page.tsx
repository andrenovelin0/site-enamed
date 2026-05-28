import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Depoimentos e Resultados",
  description:
    "Histórias de aprovação e resultados de alunos preparados pelos nossos cursos para o ENAMED.",
  alternates: { canonical: "/depoimentos" },
};

const placeholderTestimonials = [
  {
    name: "Aluno 1",
    role: "Estudante de Medicina",
    quote:
      "Conteúdo a ser substituído por depoimento real após coleta com alunos aprovados.",
  },
  {
    name: "Aluno 2",
    role: "Médico recém-formado",
    quote:
      "Conteúdo a ser substituído por depoimento real após coleta com alunos aprovados.",
  },
  {
    name: "Aluno 3",
    role: "Estudante de Medicina",
    quote:
      "Conteúdo a ser substituído por depoimento real após coleta com alunos aprovados.",
  },
];

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        title="Depoimentos e Resultados"
        description="Prova social dos alunos preparados pelos nossos cursos ENAMED."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Depoimentos" },
        ]}
      />
      <section className="container-page py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {placeholderTestimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-neutral-200 bg-white p-6 flex flex-col gap-4"
            >
              <blockquote className="text-neutral-700 text-sm leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-xs">
                <p className="font-semibold text-neutral-900">{t.name}</p>
                <p className="text-neutral-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
