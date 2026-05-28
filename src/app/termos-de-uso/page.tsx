import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições de uso do portal ENAMED: direitos, deveres e regras de utilização da plataforma.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <PageHero
        title="Termos de Uso"
        description="Regras gerais de utilização do portal e dos seus produtos digitais."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Termos de Uso" },
        ]}
      />
      <section className="container-page py-12 md:py-16">
        <article className="prose prose-neutral max-w-3xl text-neutral-700 leading-relaxed">
          <p className="text-sm text-neutral-500 italic">
            Conteúdo institucional inicial — versão a ser revisada com aconselhamento jurídico.
          </p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">1. Aceitação dos termos</h2>
          <p>Ao acessar o site, o usuário concorda com estes Termos de Uso.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">2. Cadastro</h2>
          <p>Regras de criação de conta, veracidade das informações e responsabilidades.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">3. Conteúdo</h2>
          <p>Direitos autorais, propriedade intelectual e uso permitido do conteúdo.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">4. Planos e pagamentos</h2>
          <p>Detalhes comerciais sobre planos pagos, formas de pagamento e cancelamento.</p>
          <h2 className="text-xl font-semibold text-neutral-900 mt-6">5. Limitação de responsabilidade</h2>
          <p>Limites legais de responsabilidade do portal sobre uso e resultados.</p>
        </article>
      </section>
    </>
  );
}
