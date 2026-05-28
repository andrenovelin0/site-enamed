/**
 * Analytics helpers — Google Analytics 4 (gated por consentimento LGPD)
 *
 * GA4 só é carregado mediante opt-in explícito do usuário registrado em
 * localStorage (chave `enamed-cookie-consent`). Sem consent, nenhum script
 * de terceiros é injetado e `window.gtag` não existe.
 *
 * Cookies de marketing/remarketing NÃO são utilizados — apenas analítico.
 */

export const CONSENT_STORAGE_KEY = "enamed-cookie-consent";
export const CONSENT_CHANGED_EVENT = "emr-cookie-consent-changed";
export const OPEN_BANNER_EVENT = "emr-open-cookie-banner";

export type CookieConsent = {
  analytics: boolean;
  /** ISO 8601 timestamp da última decisão do usuário. */
  timestamp: string;
};

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["set", Record<string, unknown>]
  | ["consent", "default" | "update", Record<string, unknown>];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

const GA_SCRIPT_ID = "ga4-loader";

/**
 * Lê o consent salvo no localStorage de forma defensiva.
 * Retorna null se inexistente, malformado ou em ambiente sem `window`.
 */
export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      "analytics" in parsed &&
      typeof (parsed as { analytics: unknown }).analytics === "boolean"
    ) {
      const obj = parsed as { analytics: boolean; timestamp?: unknown };
      return {
        analytics: obj.analytics,
        timestamp:
          typeof obj.timestamp === "string"
            ? obj.timestamp
            : new Date().toISOString(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Persiste a preferência do usuário e dispara evento global para que
 * outros componentes (banner, loader GA4) reajam.
 */
export function writeConsent(analytics: boolean): CookieConsent {
  const next: CookieConsent = {
    analytics,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* localStorage indisponível — falhamos silenciosamente */
    }
    window.dispatchEvent(
      new CustomEvent<CookieConsent>(CONSENT_CHANGED_EVENT, { detail: next }),
    );
  }
  return next;
}

/** Apaga consent salvo (útil para "Gerenciar cookies" se quisermos reset). */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* noop */
  }
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}

/**
 * Injeta o snippet GA4 (gtag.js) no `<head>`. Idempotente: não duplica
 * o script se já carregado. Deve ser chamado APENAS após verificar consent.
 */
export function loadGA4(gaId: string): void {
  if (typeof window === "undefined") return;
  if (!gaId) return;
  if (document.getElementById(GA_SCRIPT_ID)) return;

  // Inicializa dataLayer + gtag stub antes do script carregar.
  window.dataLayer = window.dataLayer ?? [];
  const gtag: NonNullable<Window["gtag"]> = (...args) => {
    // gtag espera "arguments-like"; dataLayer.push aceita qualquer payload.
    window.dataLayer?.push(args);
  };
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", gaId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}

/** Remove o GA4 da página (opt-out). Não limpa cookies de domínio Google. */
export function unloadGA4(): void {
  if (typeof window === "undefined") return;
  const script = document.getElementById(GA_SCRIPT_ID);
  if (script?.parentNode) script.parentNode.removeChild(script);
  // Limpa stub para que `window.gtag` deixe de existir após opt-out.
  delete window.gtag;
  delete window.dataLayer;
}

/** Helper opcional para rastrear pageviews manualmente em SPAs. */
export function trackPageview(url: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return;
  window.gtag("config", gaId, { page_path: url });
}
