import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe do portal ENAMED. Tire dúvidas, faça parcerias e solicite informações sobre cursos preparatórios e soluções para IES.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Fale conosco"
        description="Estamos disponíveis para tirar dúvidas, atender estudantes, parceiros e Instituições de Ensino Superior."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
      />

      <section className="container-page py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Envie uma mensagem</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-neutral-700 mb-1">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="voce@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-neutral-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button type="submit" className="btn-primary">
                Enviar mensagem
              </button>
              <p className="text-xs text-neutral-500">
                Formulário ilustrativo. Integração com backend a definir.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                E-mail
              </h3>
              <p className="text-neutral-600">contato@exemplo.com</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                Atendimento a IES
              </h3>
              <p className="text-neutral-600">ies@exemplo.com</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                Horário
              </h3>
              <p className="text-neutral-600">Seg. a Sex., 9h às 18h (BRT)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
