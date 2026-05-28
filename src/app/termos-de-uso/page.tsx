import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd } from "@/components/structured-data";

const PATH = "/termos-de-uso";
const CRUMBS = [
  { label: "Início", href: "/" },
  { label: "Termos de Uso" },
];

export const metadata: Metadata = {
  title: "Termos de Uso — Portal ENAMED",
  description:
    "Termos e condições de uso do Portal ENAMED: direitos, deveres e regras de utilização do conteúdo informacional.",
  alternates: { canonical: PATH },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={CRUMBS} />

      <PageHero
        eyebrow="Legal"
        title="Termos de Uso"
        description="Regras de utilização do conteúdo do Portal ENAMED, direitos autorais e limitações de responsabilidade."
        crumbs={CRUMBS}
      />

      <article className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-neutral-500 mb-8 pb-6 border-b border-neutral-200">
            Última atualização: <strong>28 de maio de 2026</strong>
          </p>

          <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5">
            Estes Termos de Uso regulam o uso do site{" "}
            <strong>Portal ENAMED</strong> e do conteúdo nele disponibilizado. Ao acessar o site,
            você concorda com estes termos.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            1. Sobre o Portal ENAMED
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            O Portal ENAMED é uma fonte de referência informacional sobre o{" "}
            <strong>Exame Nacional de Avaliação da Formação Médica (ENAMED)</strong>. O conteúdo
            é puramente educacional e factual, sem caráter comercial direto, e visa estudantes de
            Medicina, médicos, coordenações de IES, pesquisadores e o público interessado em
            educação médica brasileira.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            2. Aceitação dos termos
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Ao acessar e utilizar este site, você confirma que:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Leu e compreendeu estes Termos de Uso
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Concorda em utilizar o conteúdo conforme as regras aqui estabelecidas
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Compreende que o conteúdo é informacional e não substitui aconselhamento profissional
            </li>
          </ul>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Se você não concorda com algum termo, deve <strong>encerrar o uso</strong> do site.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            3. Natureza informacional do conteúdo
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            O conteúdo do Portal ENAMED tem caráter <strong>exclusivamente informacional e
            educativo</strong>. Não constitui:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Aconselhamento médico individual</strong> — qualquer informação sobre
              diagnóstico, tratamento ou conduta clínica deve ser confirmada com profissional
              médico habilitado
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Aconselhamento jurídico</strong> — informações sobre legislação e regulação
              não substituem consulta com profissional do direito
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Garantia de aprovação</strong> em exames ou processos seletivos — o conteúdo
              do portal é referência, não promessa de resultado
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Fonte oficial substitutiva</strong> — em caso de dúvida sobre regulamentação,
              sempre consultar as fontes oficiais (INEP, MEC, CFM, periódicos científicos)
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            4. Direitos autorais e uso do conteúdo
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Todo o conteúdo do Portal ENAMED (textos, imagens, gráficos, layout, código) é
            protegido por <strong>direitos autorais</strong>. Você pode:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Ler e estudar</strong> livremente o conteúdo para uso pessoal
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Compartilhar links</strong> para páginas individuais em redes sociais ou
              outros sites
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              <strong>Citar trechos</strong> com atribuição clara ao Portal ENAMED, conforme uso
              acadêmico padrão
            </li>
          </ul>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Você <strong>não pode</strong>:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Reproduzir conteúdo integral em outros sites sem autorização escrita
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Modificar, traduzir ou criar obras derivadas sem autorização
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Usar comercialmente sem autorização escrita
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Empregar técnicas automatizadas (scraping massivo) para extrair conteúdo
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            5. Acuidade e atualização
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Nos esforçamos para manter o conteúdo factual e atualizado, com revisão periódica
            documentada (data exibida em cada página). Apesar disso:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Regulamentação pode mudar entre revisões editoriais
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Em caso de divergência entre o conteúdo do portal e fontes oficiais (INEP, MEC, CFM),
              as <strong>fontes oficiais prevalecem</strong>
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Identificou erro factual? Por favor, contate-nos pela{" "}
              <Link
                href="/contato"
                className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                página de contato
              </Link>
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            6. Links para sites externos
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            O Portal ENAMED inclui links para fontes externas (sites governamentais, periódicos,
            sociedades médicas). Não somos responsáveis pelo conteúdo desses sites — apenas
            referenciamos para consulta da fonte primária.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            7. Limitação de responsabilidade
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Na máxima extensão permitida pela lei brasileira, o Portal ENAMED e seus mantenedores
            não são responsáveis por:
          </p>
          <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600">
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Decisões clínicas, acadêmicas ou regulatórias tomadas com base em conteúdo do portal
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Indisponibilidade temporária do site por motivos técnicos ou de manutenção
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Conteúdo de sites de terceiros linkados a partir do portal
            </li>
            <li className="font-body text-base text-neutral-700 leading-relaxed pl-1">
              Resultados específicos em provas, processos seletivos ou avaliações
            </li>
          </ul>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            8. Alterações destes termos
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Estes Termos podem ser atualizados conforme evolução do site ou requisitos legais. A
            versão vigente sempre está disponível neste endereço, com a data da última atualização
            indicada no topo. Uso continuado após atualização implica concordância com os novos
            termos.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            9. Lei aplicável e foro
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Estes Termos de Uso são regidos pela lei brasileira. Qualquer disputa será resolvida
            no foro da comarca da sede do controlador (a definir conforme registros corporativos),
            com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-12 mb-4">
            10. Contato
          </h2>
          <p className="font-body text-base text-neutral-700 leading-relaxed my-5">
            Dúvidas sobre estes Termos de Uso podem ser enviadas via{" "}
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
            e{" "}
            <Link
              href="/politica-de-cookies"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              Política de Cookies
            </Link>
            .
          </p>

          <p className="mt-12 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
            Documento institucional. Para questões jurídicas específicas, consulte profissional
            habilitado. Estes Termos não substituem aconselhamento jurídico individualizado.
          </p>
        </div>
      </article>
    </>
  );
}
