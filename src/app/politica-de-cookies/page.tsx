import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd } from "@/components/structured-data";

const PATH = "/politica-de-cookies";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Política de Cookies" },
];

export const metadata: Metadata = {
  title: "Política de Cookies — Portal ENAMED",
  description:
    "Como o Portal ENAMED utiliza cookies e tecnologias de rastreamento, quais categorias são empregadas e como você pode controlar suas preferências.",
  alternates: { canonical: PATH },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />

      <PageHero
        eyebrow="Legal"
        title="Política de Cookies"
        description="Como utilizamos cookies e tecnologias de rastreamento no Portal ENAMED, e como você pode gerenciar suas preferências."
        crumbs={CRUMBS}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-neutral-500 mb-8 pb-6 border-b border-neutral-200">
            Última atualização: <strong>28 de maio de 2026</strong>
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-0 mb-4">
            1. O que são cookies
          </h2>
          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            <strong>Cookies</strong> são pequenos arquivos de texto armazenados no navegador do
            visitante quando ele acessa um site. Servem para reconhecer o visitante em acessos
            futuros, manter preferências, medir audiência e habilitar funcionalidades específicas.
          </p>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Cookies podem ser <strong>próprios</strong> (definidos pelo site visitado) ou{" "}
            <strong>de terceiros</strong> (definidos por serviços integrados, como analytics).
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            2. Categorias usadas no Portal ENAMED
          </h2>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            Estritamente necessários
          </h3>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Necessários para o funcionamento básico do site. Não podem ser desativados sem comprometer
            o funcionamento. Não exigem consentimento prévio conforme LGPD.
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Cookie de sessão — gerencia navegação básica
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Cookie de preferência de consentimento — registra sua escolha de cookies
            </li>
          </ul>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            Analíticos (com consentimento)
          </h3>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Permitem medir audiência, entender quais conteúdos têm mais interesse e melhorar a
            experiência. Carregados apenas após consentimento explícito do visitante.
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Google Analytics 4</strong> — análise de uso anonimizada
            </li>
          </ul>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            Não utilizados
          </h3>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Por se tratar de um portal informacional, o Portal ENAMED{" "}
            <strong>NÃO utiliza</strong>:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Cookies de marketing/propaganda (remarketing, conversão)
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Cookies de personalização avançada
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Pixels de redes sociais (Meta, LinkedIn)
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            3. Como gerenciar suas preferências
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Você pode controlar cookies de várias formas:
          </p>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            No banner de consentimento
          </h3>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Ao acessar o site pela primeira vez, um banner aparece com opções de aceitar ou
            personalizar cookies não essenciais. Sua escolha é registrada e respeitada em acessos
            subsequentes.
          </p>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            No seu navegador
          </h3>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Todos os navegadores modernos permitem gerenciar cookies. Veja as instruções específicas:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noreferrer noopener"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Google Chrome
              </a>
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <a
                href="https://support.mozilla.org/pt-BR/kb/protecao-aprimorada-rastreamento-firefox-desktop"
                target="_blank"
                rel="noreferrer noopener"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Mozilla Firefox
              </a>
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <a
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noreferrer noopener"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Safari
              </a>
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <a
                href="https://support.microsoft.com/pt-br/microsoft-edge"
                target="_blank"
                rel="noreferrer noopener"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            4. Consequências de bloquear cookies
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Bloquear cookies estritamente necessários pode comprometer o funcionamento básico do
            site. Bloquear cookies analíticos não impede o uso do site — apenas limita nossa
            capacidade de medir audiência.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            5. Atualizações desta política
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Esta Política de Cookies pode ser atualizada conforme mudanças nas tecnologias usadas ou
            em regulamentações aplicáveis. A versão vigente está sempre disponível neste endereço.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            6. Contato
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Dúvidas sobre o uso de cookies pelo Portal ENAMED podem ser enviadas via{" "}
            <Link
              href="/contato"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              página de contato
            </Link>
            . Veja também nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              Política de Privacidade
            </Link>{" "}
            para informações mais amplas sobre tratamento de dados.
          </p>
        </div>
      </article>
    </>
  );
}
