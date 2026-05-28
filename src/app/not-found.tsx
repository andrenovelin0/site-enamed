import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
        Erro 404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
        Página não encontrada
      </h1>
      <p className="mt-4 text-neutral-600 max-w-md mx-auto">
        O conteúdo que você procura não existe ou foi movido. Volte para a página inicial e
        continue sua jornada pelo portal.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn-primary">
          Voltar à página inicial
        </Link>
        <Link href="/faq" className="btn-secondary">
          Consultar o FAQ
        </Link>
      </div>
    </section>
  );
}
