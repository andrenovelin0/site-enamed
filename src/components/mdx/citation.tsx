import type { ReactNode } from "react";

export function Citation({
  source,
  url,
  date,
  children,
}: {
  source: string;
  url?: string;
  date?: string;
  children?: ReactNode;
}) {
  return (
    <cite className="not-italic text-sm text-neutral-600">
      {children && <>{children} — </>}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
        >
          {source}
        </a>
      ) : (
        <span className="font-medium">{source}</span>
      )}
      {date && <span className="ml-1 text-neutral-500">({date})</span>}
    </cite>
  );
}
