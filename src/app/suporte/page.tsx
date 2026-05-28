import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Central de Suporte",
  description:
    "Central de ajuda do portal ENAMED. Encontre artigos, contate o time de atendimento e resolva questões sobre cursos, simulados e a plataforma.",
  alternates: { canonical: "/suporte" },
};

const supportTopics = [
  {
    title: "Minha conta",
    description: "Cadastro, senha, dados pessoais e privacidade.",
  },
  {
    title: "Cursos e pagamentos",
    description: "Acesso, cobranças, planos e cancelamento.",
  },
  {
    title: "Simulados",
    description: "Como usar, dúvidas técnicas e análise de desempenho.",
  },
  {
    title: "Conteúdo e dúvidas técnicas",
    description: "Erros de cadastro, problemas com vídeos, materiais complementares.",
  },
];

export default function SuportePage() {
  return (
    <>
      <PageHero
        title="Central de Suporte"
        description="Como podemos ajudar você hoje?"
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Suporte" },
        ]}
      />

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 max-w-4xl">
          {supportTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-lg border border-neutral-200 bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-neutral-900">{topic.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{topic.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-brand-50 border border-brand-200 p-6 max-w-4xl">
          <h2 className="text-lg font-semibold text-brand-900">Não encontrou o que precisava?</h2>
          <p className="mt-2 text-sm text-brand-900/80">
            Nossa equipe responde em até 1 dia útil.
          </p>
          <Link href="/contato" className="btn-primary mt-4 inline-flex">
            Falar com o suporte
          </Link>
        </div>
      </section>
    </>
  );
}
