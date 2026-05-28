import type { ReactNode } from "react";

export function Definition({
  term,
  acronym,
  children,
}: {
  term: string;
  acronym?: string;
  children: ReactNode;
}) {
  return (
    <dl className="my-6 rounded-xl border-l-4 border-brand-600 bg-neutral-50 px-6 py-4">
      <dt className="font-display text-base font-bold text-neutral-900 flex items-baseline gap-2 flex-wrap">
        <span>{term}</span>
        {acronym && (
          <span className="text-sm font-medium text-brand-700 uppercase tracking-wide">
            ({acronym})
          </span>
        )}
      </dt>
      <dd className="mt-2 font-body text-base text-neutral-700 leading-relaxed [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </dd>
    </dl>
  );
}
