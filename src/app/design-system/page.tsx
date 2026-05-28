import type { Metadata } from "next";
import { Button, type ButtonVariant } from "@/components/ui";

export const metadata: Metadata = {
  title: "Design System (interno)",
  robots: { index: false, follow: false },
};

const VARIANTS: ButtonVariant[] = [
  "primary",
  "secondary",
  "accent",
  "outline",
  "ghost",
  "pill",
  "urgency",
];

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Cell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">
        {label}
      </span>
      {children}
    </div>
  );
}

function Section({ title, children, subtitle }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-neutral-200 py-12 first:border-t-0">
      <header className="mb-8">
        <h2 className="font-display text-2xl font-bold text-neutral-900">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="container-page py-12">
      <header className="mb-12 pb-8 border-b border-neutral-200">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-2">
          Interno · não indexado
        </p>
        <h1 className="font-display text-4xl font-bold text-neutral-900">
          Design System — Galeria de componentes
        </h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Referência visual viva dos átomos do site ENAMED. Tokens em{" "}
          <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-sm">src/app/globals.css</code>{" "}
          · docs em <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-sm">docs/design-system/</code>.
        </p>
      </header>

      <Section title="Button · matriz 7 × 3" subtitle="Todas as variantes em todos os tamanhos.">
        <div className="space-y-8">
          {VARIANTS.map((variant) => (
            <div key={variant} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <Cell label={`${variant} · sm`}>
                <Button variant={variant} size="sm">
                  {variant === "urgency" ? "Últimos dias" : "Botão"}
                </Button>
              </Cell>
              <Cell label={`${variant} · md (default)`}>
                <Button variant={variant} size="md">
                  {variant === "urgency" ? "Últimos dias" : "Botão padrão"}
                </Button>
              </Cell>
              <Cell label={`${variant} · lg`}>
                <Button variant={variant} size="lg">
                  {variant === "urgency" ? "Últimos dias" : "Botão grande"}
                </Button>
              </Cell>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Estados" subtitle="Disabled, loading e com ícones.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Cell label="default">
            <Button variant="primary">Inscrever</Button>
          </Cell>
          <Cell label="disabled">
            <Button variant="primary" disabled>Inscrever</Button>
          </Cell>
          <Cell label="loading">
            <Button variant="primary" loading>Inscrever</Button>
          </Cell>
          <Cell label="loading · accent">
            <Button variant="accent" loading>Aguarde</Button>
          </Cell>
          <Cell label="icon left">
            <Button variant="primary" iconLeft={<CheckIcon size={16} />}>Confirmar</Button>
          </Cell>
          <Cell label="icon right">
            <Button variant="secondary" iconRight={<ArrowIcon size={16} />}>Avançar</Button>
          </Cell>
          <Cell label="ambos ícones">
            <Button variant="ghost" iconLeft={<CheckIcon size={16} />} iconRight={<ArrowIcon size={16} />}>
              Próximo passo
            </Button>
          </Cell>
          <Cell label="icon-only (aria)">
            <Button variant="ghost" size="sm" aria-label="Próxima página">
              <ArrowIcon size={18} />
            </Button>
          </Cell>
        </div>
      </Section>

      <Section title="asChild — wrap de Next Link" subtitle="O componente vira <a> via Radix Slot, preservando classes e aria.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <Cell label="primary asChild">
            <Button asChild variant="primary">
              <a href="/preparacao">Ver preparação →</a>
            </Button>
          </Cell>
          <Cell label="pill asChild">
            <Button asChild variant="pill">
              <a href="/blog">Leia o blog</a>
            </Button>
          </Cell>
          <Cell label="urgency asChild">
            <Button asChild variant="urgency">
              <a href="/faq">Tire dúvidas →</a>
            </Button>
          </Cell>
        </div>
      </Section>

      <Section title="Paleta — referência" subtitle="Swatches da paleta primária + secundárias para conferência rápida.">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: "brand-25", hex: "#F2FAFF", cls: "bg-brand-25" },
            { name: "brand-300", hex: "#6CFFBB", cls: "bg-brand-300" },
            { name: "brand-500", hex: "#05FC89", cls: "bg-brand-500" },
            { name: "brand-600", hex: "#35BD78", cls: "bg-brand-600" },
            { name: "brand-700", hex: "#005C31", cls: "bg-brand-700" },
            { name: "brand-800 ★", hex: "#004F36", cls: "bg-brand-800" },
            { name: "brand-950", hex: "#001D19", cls: "bg-brand-950" },
            { name: "accent-500", hex: "#EAB904", cls: "bg-accent-500" },
            { name: "purple-500", hex: "#841A81", cls: "bg-purple-500" },
            { name: "blue-500", hex: "#32578A", cls: "bg-blue-500" },
            { name: "coral-500", hex: "#E64444", cls: "bg-coral-500" },
            { name: "neutral-900", hex: "#181717", cls: "bg-neutral-900" },
          ].map((s) => (
            <div key={s.name} className="space-y-2">
              <div className={`h-16 rounded-lg border border-neutral-200 ${s.cls}`} />
              <div>
                <p className="text-xs font-semibold text-neutral-900">{s.name}</p>
                <p className="text-[10px] text-neutral-500 font-mono">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tipografia" subtitle="Poppins (display/UI) + Raleway (body)">
        <div className="space-y-4">
          <p className="font-display text-[clamp(3rem,5vw,4.5rem)] font-bold tracking-tight text-neutral-900">
            Display · h1 hero
          </p>
          <h2 className="font-display text-5xl font-bold text-neutral-900">Heading 2</h2>
          <h3 className="font-display text-4xl font-bold text-neutral-900">Heading 3</h3>
          <h4 className="font-display text-3xl font-semibold text-neutral-900">Heading 4</h4>
          <p className="font-body text-base text-neutral-700 max-w-2xl">
            Body padrão em Raleway Regular. Texto de exemplo para validar leiturabilidade,
            line-height e altura-x da fonte secundária. Usado em corpos longos como pilares e blog.
          </p>
          <p className="font-body text-sm text-neutral-500">Caption / metadata</p>
        </div>
      </Section>
    </div>
  );
}
