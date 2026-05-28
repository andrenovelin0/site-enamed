import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o portal ENAMED coleta, usa, armazena e protege os dados dos seus usuários, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero
        title="Política de Privacidade"
        description="Como tratamos seus dados em conformidade com a LGPD."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Política de Privacidade" },
        ]}
      />
      <section className="container-page py-12 md:py-16">
        <article className="prose prose-neutral max-w-3xl text-neutral-700 leading-relaxed">
          <p className="text-sm text-neutral-500 italic">
            Conteúdo institucional inicial — versão a ser revisada com aconselhamento jurídico.
          </p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">1. Quem somos</h2>
          <p>Texto a ser preenchido com a razão social, CNPJ e dados de contato do controlador.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">2. Quais dados coletamos</h2>
          <p>Lista detalhada de dados pessoais coletados via formulários, cookies e navegação.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">3. Como usamos os dados</h2>
          <p>Finalidades específicas: atendimento, comunicação, melhoria do produto, marketing.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">4. Compartilhamento</h2>
          <p>Com quem compartilhamos (parceiros tecnológicos, integrações etc.).</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">5. Direitos do titular</h2>
          <p>Como exercer os direitos previstos na LGPD (acesso, correção, exclusão).</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">6. Contato do DPO</h2>
          <p>Canal de comunicação com o Encarregado de Dados.</p>
        </article>
      </section>
    </>
  );
}
