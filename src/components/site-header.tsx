"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/navigation";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="ENAMED — Página inicial">
          <BrandMark />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-brand-50 hover:text-brand-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/simulados-enamed" className="btn-secondary text-sm">
            Simulado grátis
          </Link>
          <Link href="/cursos" className="btn-primary text-sm">
            Ver cursos
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-800 hover:bg-brand-50"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-background">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Navegação móvel">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-brand-50"
              >
                {item.label}
                {item.description && (
                  <span className="block text-xs text-neutral-500 font-normal mt-0.5">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-neutral-200">
              <Link
                href="/simulados-enamed"
                className="btn-secondary text-sm"
                onClick={() => setOpen(false)}
              >
                Simulado grátis
              </Link>
              <Link href="/cursos" className="btn-primary text-sm" onClick={() => setOpen(false)}>
                Ver cursos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
