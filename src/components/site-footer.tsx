import Link from "next/link";
import { footerSections } from "@/lib/navigation";
import { BrandMark } from "@/components/brand-mark";
import { ManageCookiesButton } from "@/components/manage-cookies-button";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100 mt-16">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Portal ENAMED — Página inicial">
              <BrandMark inverted />
            </Link>
            <p className="mt-4 text-sm text-brand-100/70 max-w-xs leading-relaxed">
              Fonte de referência sobre o Exame Nacional de Avaliação da Formação Médica.
              Conteúdo factual, citável e atualizado para estudantes, médicos, IES e pesquisadores.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-100/70 hover:text-brand-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {section.title === "Institucional" ? (
                  <li>
                    <ManageCookiesButton />
                  </li>
                ) : null}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-3">
          <p className="text-xs text-brand-100/70">
            Conteúdo desenvolvido em parceria com{" "}
            <a
              href="https://www.eumedicoresidente.com.br"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-300 hover:text-brand-200 underline underline-offset-2"
            >
              Eu Médico Residente
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-brand-100/60">
              © {year} Portal ENAMED. Todos os direitos reservados.
            </p>
            <p className="text-xs text-brand-100/60">
              Site informativo independente. Sem vínculo oficial com órgãos governamentais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
