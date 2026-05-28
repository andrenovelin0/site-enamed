import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CalloutVariant = "info" | "warn" | "success";

const VARIANT_STYLES: Record<CalloutVariant, { container: string; iconLabel: string }> = {
  info: {
    container: "border-blue-500/40 bg-blue-100/40",
    iconLabel: "Info",
  },
  warn: {
    container: "border-accent-500/50 bg-accent-50",
    iconLabel: "Atenção",
  },
  success: {
    container: "border-brand-500/40 bg-brand-25",
    iconLabel: "Importante",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}) {
  const styles = VARIANT_STYLES[variant];
  return (
    <aside
      role="note"
      className={cn(
        "my-7 rounded-xl border-l-4 px-6 py-5",
        styles.container,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
        {title ?? styles.iconLabel}
      </p>
      <div className="font-body text-base text-neutral-800 leading-relaxed [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
