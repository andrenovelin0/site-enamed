"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import { Button } from "@/components/ui";
import {
  CONSENT_CHANGED_EVENT,
  CONSENT_STORAGE_KEY,
  OPEN_BANNER_EVENT,
  loadGA4,
  readConsent,
  unloadGA4,
  writeConsent,
  type CookieConsent,
} from "@/lib/analytics";

/**
 * Banner de consentimento LGPD.
 *
 * - Aparece na primeira visita (sem preferência salva).
 * - Persiste a escolha em `localStorage` com a chave `enamed-cookie-consent`.
 * - GA4 só carrega após opt-in explícito e se `NEXT_PUBLIC_GA_ID` estiver definido.
 * - Reabre quando outro componente dispara `emr-open-cookie-banner`
 *   (ex.: link "Gerenciar cookies" do footer).
 */

// --------------------------------------------------------------------------
// useSyncExternalStore wiring para o consent salvo.
// É o padrão React 19 para refletir estado externo (localStorage) sem
// disparar `setState` dentro de `useEffect`.
// --------------------------------------------------------------------------

function subscribeToConsent(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CONSENT_CHANGED_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// Cache do snapshot: `useSyncExternalStore` exige identidade referencial
// estável quando nada mudou. Reusamos o último objeto enquanto o raw
// do localStorage não muda.
let cachedRaw: string | null | undefined;
let cachedSnapshot: CookieConsent | null = null;

function getConsentSnapshot(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (raw === cachedRaw) return cachedSnapshot;
  cachedRaw = raw;
  cachedSnapshot = readConsent();
  return cachedSnapshot;
}

function getServerConsentSnapshot(): CookieConsent | null {
  return null;
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const [forceOpen, setForceOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analyticsOptIn, setAnalyticsOptIn] = useState(false);

  const headingId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  /** Aplica decisão: carrega ou descarrega GA4 conforme consent. */
  const applyConsent = useCallback(
    (c: CookieConsent) => {
      if (c.analytics && gaId) {
        loadGA4(gaId);
      } else {
        unloadGA4();
      }
    },
    [gaId],
  );

  // Aplica o consent existente (se houver) ao GA4. Side-effect "puro" sobre
  // sistema externo (DOM/script tags), sem setState — não viola a regra do lint.
  useEffect(() => {
    if (consent) applyConsent(consent);
  }, [consent, applyConsent]);

  // Escuta evento global para reabrir o banner (footer "Gerenciar cookies").
  useEffect(() => {
    function handleOpen() {
      const existing = readConsent();
      setAnalyticsOptIn(existing?.analytics ?? false);
      setCustomizing(true);
      setForceOpen(true);
    }
    window.addEventListener(OPEN_BANNER_EVENT, handleOpen);
    return () => {
      window.removeEventListener(OPEN_BANNER_EVENT, handleOpen);
    };
  }, []);

  // Banner aparece quando: (a) usuário ainda não decidiu, OU (b) reabertura forçada.
  const open = forceOpen || consent === null;

  // Focus management: guarda foco anterior, dá foco inicial ao dialog.
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current =
      typeof document !== "undefined"
        ? (document.activeElement as HTMLElement | null)
        : null;
    const id = window.requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  const closeBanner = useCallback(() => {
    setForceOpen(false);
    setCustomizing(false);
    const target = previouslyFocused.current;
    if (target && typeof target.focus === "function") {
      window.requestAnimationFrame(() => target.focus());
    }
  }, []);

  const acceptAll = useCallback(() => {
    const next = writeConsent(true);
    applyConsent(next);
    closeBanner();
  }, [applyConsent, closeBanner]);

  const essentialOnly = useCallback(() => {
    const next = writeConsent(false);
    applyConsent(next);
    closeBanner();
  }, [applyConsent, closeBanner]);

  const saveCustom = useCallback(() => {
    const next = writeConsent(analyticsOptIn);
    applyConsent(next);
    closeBanner();
  }, [analyticsOptIn, applyConsent, closeBanner]);

  // ESC = "Apenas essenciais" (escolha conservadora declarada na AC).
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        essentialOnly();
      }
    },
    [essentialOnly],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 pointer-events-none px-4 pb-4 sm:px-6 sm:pb-6"
      aria-live="polite"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="pointer-events-auto mx-auto max-w-4xl rounded-xl bg-brand-950 text-brand-25 shadow-popover ring-1 ring-white/10 outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
      >
        <div className="px-5 py-5 sm:px-7 sm:py-6">
          <h2
            id={headingId}
            className="font-display text-base sm:text-lg font-semibold text-white"
          >
            Cookies e privacidade
          </h2>
          <p
            id={descriptionId}
            className="mt-2 text-sm leading-relaxed text-brand-25/85"
          >
            Usamos cookies essenciais para o site funcionar e, com sua autorização,
            cookies analíticos (Google Analytics 4) para entender o uso e melhorar
            o conteúdo. Não utilizamos cookies de marketing nem rastreamento de
            terceiros. Saiba mais em nossa{" "}
            <Link
              href="/politica-de-cookies"
              className="text-brand-300 underline underline-offset-2 hover:text-brand-100"
            >
              Política de Cookies
            </Link>
            .
          </p>

          {customizing ? (
            <fieldset className="mt-5 space-y-3 rounded-lg border border-white/15 bg-white/5 p-4">
              <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-brand-25/70">
                Categorias
              </legend>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Essenciais
                  </p>
                  <p className="mt-1 text-xs text-brand-25/70">
                    Necessários para o funcionamento básico do site. Sempre ativos.
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-25"
                >
                  Sempre ativos
                </span>
                <span className="sr-only">
                  Categoria sempre ativa (não opcional)
                </span>
              </div>

              <div className="h-px bg-white/10" />

              <label className="flex items-start justify-between gap-4 cursor-pointer">
                <span>
                  <span className="font-display text-sm font-semibold text-white">
                    Analytics (Google Analytics 4)
                  </span>
                  <span className="mt-1 block text-xs text-brand-25/70">
                    Métricas agregadas e anônimas de uso do site. IP é anonimizado
                    e sinais de publicidade ficam desativados.
                  </span>
                </span>
                <span className="shrink-0 pt-0.5">
                  <input
                    type="checkbox"
                    checked={analyticsOptIn}
                    onChange={(e) => setAnalyticsOptIn(e.target.checked)}
                    className="h-5 w-5 cursor-pointer accent-brand-500"
                    aria-label="Permitir cookies analíticos do Google Analytics 4"
                  />
                </span>
              </label>
            </fieldset>
          ) : null}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            {customizing ? (
              <>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                  onClick={essentialOnly}
                >
                  Apenas essenciais
                </Button>
                <Button variant="accent" onClick={saveCustom}>
                  Salvar preferências
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                  onClick={() => setCustomizing(true)}
                  aria-expanded={customizing}
                >
                  Personalizar
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                  onClick={essentialOnly}
                >
                  Apenas essenciais
                </Button>
                <Button variant="accent" onClick={acceptAll}>
                  Aceitar todos
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
