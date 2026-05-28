type PlaceholderSectionProps = {
  title: string;
  items: { title: string; description: string }[];
  note?: string;
};

export function PlaceholderSection({ title, items, note }: PlaceholderSectionProps) {
  return (
    <section className="container-page py-14 md:py-20">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-10">
        {title}
      </h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:border-brand-600 hover:shadow-lg transition-all"
          >
            <h3 className="font-display text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-800 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
      {note && (
        <p className="mt-10 rounded-xl bg-accent-50 border border-accent-200 px-5 py-4 text-sm text-neutral-800">
          <span className="font-semibold text-accent-700 mr-1">Nota:</span>
          {note}
        </p>
      )}
    </section>
  );
}
