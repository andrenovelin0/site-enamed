import Link from "next/link";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white border-b border-brand-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, hsl(var(--brand-500)) 0%, transparent 40%), radial-gradient(circle at 0% 100%, hsl(var(--brand-700)) 0%, transparent 50%)",
        }}
      />
      <div className="container-page relative py-14 md:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-brand-300/80">
              {crumbs.map((crumb, idx) => (
                <li key={`${crumb.label}-${idx}`} className="flex items-center gap-1.5">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-brand-300 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {idx < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-brand-500/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-white max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base md:text-lg text-brand-100/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
