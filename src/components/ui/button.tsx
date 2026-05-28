"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  Children,
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost"
  | "pill"
  | "urgency";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  accent:    "btn-accent",
  outline:   "btn-outline",
  ghost:     "btn-ghost",
  pill:      "btn-pill",
  urgency:   "btn-urgency",
};

// Size overrides applied AFTER the base .btn-* class.
// `md` is empty because the variant CSS already targets the default size.
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-9",
  md: "",
  lg: "px-8 py-4 text-base min-h-13",
};

const ICON_SIZE: Record<ButtonSize, number> = { sm: 16, md: 18, lg: 20 };

function Spinner({ size }: { size: number }) {
  return (
    <svg
      role="status"
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="animate-spin"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" fill="none" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    asChild = false,
    loading = false,
    iconLeft,
    iconRight,
    className,
    children,
    disabled,
    type,
    "aria-label": ariaLabel,
    ...rest
  },
  ref,
) {
  if (process.env.NODE_ENV !== "production") {
    const hasVisibleChildren = Children.count(children) > 0;
    if (!hasVisibleChildren && !ariaLabel) {
      console.warn(
        "[Button] Icon-only button requires an `aria-label`. " +
        "Provide one or include text children for accessibility.",
      );
    }
  }

  const composed = cn(
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    loading && "pointer-events-none",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  const content = loading ? (
    <>
      <Spinner size={ICON_SIZE[size]} />
      <span className="sr-only">Carregando…</span>
    </>
  ) : (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (asChild) {
    return (
      <Slot
        ref={ref}
        className={composed}
        aria-label={ariaLabel}
        aria-busy={loading || undefined}
        {...rest}
      >
        {children}
      </Slot>
    );
  }

  return (
    <button
      ref={ref}
      type={type ?? "button"}
      className={composed}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
});
