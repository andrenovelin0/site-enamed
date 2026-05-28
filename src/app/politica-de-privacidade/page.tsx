import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd } from "@/components/structured-data";

const PATH = "/politica-de-privacidade";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Política de Privacidade" },
];

export const metadata: Metadata = {
  title: "Política de Privacidade — Portal ENAMED",
  description:
    "Como o Portal ENAMED coleta, usa, armazena e protege os dados dos seus visitantes, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />

      <PageHero
        eyebrow="Legal"
        title="Política de Privacidade"
        description="Como tratamos dados de visitantes em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
        crumbs={CRUMBS}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-neutral-500 mb-8 pb-6 border-b border-neutral-200">
            Última atualização: <strong>28 de maio de 2026</strong>
          </p>

          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            Esta Política de Privacidade descreve como o <strong>Portal ENAMED</strong> trata
            dados pessoais de visitantes do site, em conformidade com a{" "}
            <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            1. Quem é o controlador
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            O Portal ENAMED é mantido em parceria com a{" "}
            <a
              href="https://www.eumedicoresidente.com.br"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              Eu Médico Residente
            </a>
            , controladora dos dados eventualmente coletados via formulário de contato. Para
            questões relacionadas a esta política, contate a{" "}
            <Link
              href="/contato"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              página de contato
            </Link>{" "}
            do portal.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            2. Quais dados coletamos
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            O Portal ENAMED é primariamente <strong>informacional</strong>. Não exige cadastro,
            login ou senha para acesso ao conteúdo. Os dados que podemos coletar são:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Dados de navegação</strong> — IP anonimizado, navegador, sistema operacional,
              páginas visitadas, tempo de permanência (via Google Analytics, com consentimento)
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Dados de contato</strong> — apenas quando você envia mensagem voluntariamente
              via formulário de contato (nome, e-mail, mensagem)
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Cookies essenciais e analíticos</strong> — conforme detalhado em nossa{" "}
              <Link
                href="/politica-de-cookies"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Política de Cookies
              </Link>
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            3. Finalidade do tratamento
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Os dados são tratados exclusivamente para:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Operação técnica do site e segurança
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Análise de uso agregada (quais conteúdos têm mais interesse)
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Resposta a mensagens enviadas via formulário de contato
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Melhoria do conteúdo editorial
            </li>
          </ul>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            <strong>Não usamos dados para marketing comercial</strong>, propaganda de serviços,
            captação de leads para venda ou compartilhamento com terceiros para fins promocionais.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            4. Base legal
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Conforme a LGPD, as bases legais aplicáveis ao Portal ENAMED são:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Consentimento</strong> — para uso de cookies analíticos e contato voluntário
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Legítimo interesse</strong> — para segurança técnica e melhoria do serviço
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Cumprimento de obrigação legal</strong> — quando aplicável
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            5. Compartilhamento
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Compartilhamos dados apenas com prestadores técnicos necessários para operação do site:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Provedor de hospedagem</strong> — para armazenamento e entrega do site
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Google Analytics</strong> — análise de uso (com IPs anonimizados)
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Serviço de e-mail</strong> — para resposta a contatos voluntários
            </li>
          </ul>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            <strong>Não vendemos, alugamos ou cedemos dados</strong> para terceiros para fins
            comerciais.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            6. Direitos do titular
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Conforme art. 18 da LGPD, você tem direito a:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Confirmar a existência de tratamento dos seus dados
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Acessar os dados
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Corrigir dados incompletos, inexatos ou desatualizados
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Solicitar anonimização, bloqueio ou eliminação de dados desnecessários
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Solicitar portabilidade
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Revogar consentimento
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados)
            </li>
          </ul>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Para exercer qualquer um destes direitos, utilize nossa{" "}
            <Link
              href="/contato"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              página de contato
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            7. Retenção de dados
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Dados de navegação anonimizados são retidos por <strong>26 meses</strong> (padrão GA4).
            Dados de contato voluntários são retidos enquanto a comunicação estiver ativa, ou até
            que o titular solicite eliminação. Logs técnicos por <strong>6 meses</strong> para
            fins de segurança.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            8. Segurança
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Adotamos medidas técnicas e administrativas razoáveis para proteger dados pessoais:
            HTTPS em todas as páginas, controle de acesso a sistemas administrativos, e
            armazenamento em provedores com práticas de segurança documentadas.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            9. Alterações desta política
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Esta política pode ser atualizada para refletir mudanças regulatórias ou operacionais.
            A versão vigente está sempre disponível neste endereço, com a data da última atualização
            indicada no topo.
          </p>

          <p className="mt-12 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
            Documento institucional. Para questões jurídicas, consulte profissional habilitado. Esta
            política não substitui aconselhamento jurídico individualizado.
          </p>
        </div>
      </article>
    </>
  );
}
