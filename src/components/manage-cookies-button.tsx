"use client";

import { OPEN_BANNER_EVENT } from "@/lib/analytics";

/**
 * Botão discreto que reabre o banner LGPD para o usuário trocar
 * suas preferências de cookies. Usado no footer.
 *
 * Dispara um CustomEvent global que o CookieBanner escuta — não navega.
 */
export function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent(OPEN_BANNER_EVENT));
        }
      }}
      className="text-sm text-brand-100/70 hover:text-brand-300 transition-colors text-left"
    >
      Gerenciar cookies
    </button>
  );
}
