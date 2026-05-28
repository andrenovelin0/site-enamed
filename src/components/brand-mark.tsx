type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
};

const sizes = {
  sm: { box: "h-8 w-8", text: "text-base", icon: 14 },
  md: { box: "h-9 w-9", text: "text-lg", icon: 16 },
  lg: { box: "h-12 w-12", text: "text-2xl", icon: 22 },
};

export function BrandMark({ size = "md", inverted = false }: BrandMarkProps) {
  const s = sizes[size];
  const boxClasses = inverted
    ? "bg-brand-500 text-brand-950"
    : "bg-brand-800 text-brand-500";
  const labelClasses = inverted ? "text-white" : "text-brand-950";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`relative inline-flex ${s.box} items-center justify-center rounded-xl ${boxClasses} font-display font-bold shrink-0`}
        aria-hidden
      >
        <svg
          viewBox="0 0 24 24"
          width={s.icon}
          height={s.icon}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 19V5l7 7 7-7v14" />
        </svg>
      </span>
      <span className={`font-display font-bold tracking-tight ${s.text} ${labelClasses}`}>
        ENAMED
      </span>
    </span>
  );
}
