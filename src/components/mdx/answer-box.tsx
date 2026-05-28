import type { ReactNode } from "react";

export function AnswerBox({
  label = "Resposta direta",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-7 rounded-2xl border-2 border-brand-500/30 bg-brand-25 px-6 py-5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 mb-2">
        {label}
      </p>
      <div className="font-display text-lg md:text-xl font-semibold text-neutral-900 leading-snug [&>p]:my-0">
        {children}
      </div>
    </div>
  );
}
