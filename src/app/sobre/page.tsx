import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { AboutPageJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";

const PATH = "/sobre";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Sobre" },
];

export const metadata: Metadata = {
  title: "Sobre o Portal ENAMED — fonte de referência independente",
  description:
    "O Portal ENAMED é uma fonte de referência independente sobre o Exame Nacional de Avaliação da Formação Médica. Conteúdo factual e atualizado em parceria com a Eu Médico Residente.",
  alternates: { canonical: PATH },
};

export default function SobrePage() {
  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />
      <AboutPageJsonLd
        name="Sobre o Portal ENAMED"
        description="Fonte de referência independente sobre o Exame Nacional de Avaliação da Formação Médica."
        path={PATH}
      />

      <PageHero
        eyebrow="Sobre"
        title="Sobre o Portal ENAMED"
        description="Fonte de referência independente sobre o Exame Nacional de Avaliação da Formação Médica. Conteúdo factual, citável e atualizado, em parceria editorial com a Eu Médico Residente."
        crumbs={CRUMBS}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            O <strong className="font-semibold text-neutral-900">Portal ENAMED</strong> é uma fonte
            de referência independente sobre o Exame Nacional de Avaliação da Formação Médica
            (ENAMED). Nosso compromisso editorial é entregar conteúdo factual, citável e
            atualizado — sem viés comercial — para estudantes de Medicina, médicos recém-formados,
            coordenações de IES e pesquisadores.
          </p>

          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            Cobrimos o ENAMED em todas as suas dimensões: o que é, como funciona, como afeta
            estudantes e instituições, e como se preparar com base em evidência.
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-14 mb-5">
            Princípios editoriais
          </h2>

          <ul className="my-5 space-y-3 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Factual e citável.</strong>{" "}
              Toda afirmação técnica é linkada a fonte oficial (INEP, MEC, CFM, sociedades médicas
              ou periódicos revisados).
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Neutro.</strong> Não promovemos
              produtos, não fazemos propaganda comercial e não direcionamos o leitor a serviços
              específicos.
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Atualizado.</strong> Páginas
              técnicas têm revisão periódica documentada — toda página exibe a data da última
              atualização editorial.
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Acessível.</strong> Linguagem
              técnica precisa quando necessário, mas explicada — para que estudantes, médicos,
              coordenadores e leigos qualificados encontrem o nível certo.
            </li>
          </ul>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-14 mb-5">
            Quem está por trás
          </h2>

          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            O Portal é mantido em parceria com a{" "}
            <a
              href="https://www.eumedicoresidente.com.br"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800 font-semibold"
            >
              Eu Médico Residente
            </a>
            , organização brasileira referência em educação médica continuada. Profissionais
            médicos da EMR contribuem com revisão técnica e curadoria de conteúdo, garantindo
            precisão científica em todo o material publicado.
          </p>

          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            Apesar dessa parceria operacional, o{" "}
            <strong className="font-semibold text-neutral-900">conteúdo editorial é independente</strong>:
            não veiculamos produtos, não fazemos propaganda comercial e não direcionamos o leitor
            a serviços específicos. Nossas únicas métricas de sucesso são acurácia, profundidade
            e utilidade para quem busca informação sobre o ENAMED.
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-14 mb-5">
            Quem usa este portal
          </h2>

          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Estudantes de Medicina</strong>{" "}
              dos 3 últimos anos da graduação preparando-se para o exame
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Médicos recém-formados</strong>{" "}
              entendendo o impacto da nota em suas trajetórias
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Coordenadores de IES</strong>{" "}
              gerindo desempenho institucional e relação com MEC
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Pesquisadores e imprensa</strong>{" "}
              buscando referência objetiva sobre o exame
            </li>
            <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1">
              <strong className="font-semibold text-neutral-900">Familiares e curiosos</strong>{" "}
              tentando entender o que é o ENAMED
            </li>
          </ul>

          <section className="mt-16 rounded-2xl bg-brand-25 border border-brand-100 p-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-900 mb-3 mt-0">
              Encontrou algo impreciso?
            </h3>
            <p className="font-body text-base text-neutral-700 leading-relaxed mb-4">
              Nosso compromisso editorial inclui correção rápida de qualquer informação imprecisa.
              Se você é especialista ou identificou erro factual em algum conteúdo, entre em contato.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 text-brand-800 font-semibold underline underline-offset-2 hover:text-brand-700"
            >
              Fale com a redação →
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
