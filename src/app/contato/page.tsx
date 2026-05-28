import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd, ContactPageJsonLd } from "@/components/structured-data";

const PATH = "/contato";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Contato" },
];

export const metadata: Metadata = {
  title: "Contato — Portal ENAMED",
  description:
    "Fale com a redação do Portal ENAMED. Sugestões editoriais, correções factuais, parcerias institucionais e dúvidas gerais.",
  alternates: { canonical: PATH },
};

export default function ContatoPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />
      <ContactPageJsonLd
        name="Contato — Portal ENAMED"
        description="Canais de contato editorial do Portal ENAMED."
        path={PATH}
      />

      <PageHero
        eyebrow="Contato"
        title="Fale com a redação"
        description="Sugestões editoriais, correções factuais, parcerias institucionais ou dúvidas sobre o portal. Atendemos em até 5 dias úteis."
        crumbs={CRUMBS}
      />

      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-brand-25 border border-brand-100 p-6 md:p-8 mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-2">
              Formulário em integração
            </p>
            <p className="font-body text-base text-neutral-700 leading-relaxed">
              Estamos integrando nosso formulário via RD Station Forms.
              Enquanto isso, fale conosco diretamente pelo e-mail abaixo —
              respondemos em até 5 dias úteis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-xl font-bold text-neutral-900 mt-0 mb-3">
                E-mail da redação
              </h2>
              <p className="font-body text-base text-neutral-700 leading-relaxed mb-2">
                Sugestões editoriais, correções factuais, dúvidas gerais.
              </p>
              <a
                href="mailto:contato@provaenamed.com.br"
                className="font-display text-lg font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                contato@provaenamed.com.br
              </a>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-neutral-900 mt-0 mb-3">
                Para Instituições
              </h2>
              <p className="font-body text-base text-neutral-700 leading-relaxed mb-2">
                Coordenações de Medicina e gestores acadêmicos — discussão
                sobre desempenho institucional e impacto MEC.
              </p>
              <a
                href="mailto:ies@provaenamed.com.br"
                className="font-display text-lg font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                ies@provaenamed.com.br
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-200">
            <h2 className="font-display text-xl font-bold text-neutral-900 mt-0 mb-3">
              Tipos de mensagem que respondemos
            </h2>
            <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
              <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
                <strong>Correção factual</strong> — identificou erro em algum artigo? Aponte a página e o trecho específico.
              </li>
              <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
                <strong>Sugestão de pauta</strong> — pergunta frequente que ainda não cobrimos? Conta pra gente.
              </li>
              <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
                <strong>Parceria institucional</strong> — IES, sociedades médicas, periódicos.
              </li>
              <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
                <strong>Imprensa</strong> — apuração jornalística sobre o ENAMED.
              </li>
            </ul>
            <p className="font-body text-sm text-neutral-500 italic mt-6">
              Não atendemos solicitações comerciais (venda de cursos, propaganda) — somos portal editorial neutro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
