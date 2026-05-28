import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { Callout, CTA, AnswerBox, Definition, Citation } from "@/components/mdx";

function isInternalHref(href: string | undefined): href is string {
  return typeof href === "string" && href.startsWith("/");
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className="font-display text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mt-0 mb-6"
        {...props}
      />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-14 mb-5 scroll-mt-24"
        {...props}
      />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className="font-display text-2xl md:text-3xl font-semibold text-neutral-900 mt-10 mb-4 scroll-mt-24"
        {...props}
      />
    ),
    h4: (props: ComponentPropsWithoutRef<"h4">) => (
      <h4
        className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mt-8 mb-3"
        {...props}
      />
    ),
    h5: (props: ComponentPropsWithoutRef<"h5">) => (
      <h5
        className="font-display text-lg font-semibold text-neutral-900 mt-6 mb-3"
        {...props}
      />
    ),
    h6: (props: ComponentPropsWithoutRef<"h6">) => (
      <h6
        className="font-display text-base font-semibold text-neutral-700 uppercase tracking-wider mt-6 mb-2"
        {...props}
      />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p className="font-body text-base md:text-lg text-neutral-700 leading-relaxed my-5" {...props} />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
      <ul className="my-5 space-y-2 pl-6 list-disc marker:text-brand-600" {...props} />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol className="my-5 space-y-2 pl-6 list-decimal marker:text-brand-600 marker:font-semibold" {...props} />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li className="font-body text-base md:text-lg text-neutral-700 leading-relaxed pl-1" {...props} />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="my-7 border-l-4 border-brand-500 bg-brand-25 py-4 px-6 italic text-neutral-700 rounded-r-lg"
        {...props}
      />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => (
      <code className="px-1.5 py-0.5 rounded bg-neutral-100 text-sm font-mono text-neutral-800" {...props} />
    ),
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className="my-6 rounded-lg bg-neutral-900 text-neutral-100 p-4 overflow-x-auto text-sm font-mono"
        {...props}
      />
    ),
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <div className="my-7 overflow-x-auto rounded-lg border border-neutral-200">
        <table className="w-full text-left text-sm" {...props} />
      </div>
    ),
    thead: (props: ComponentPropsWithoutRef<"thead">) => (
      <thead className="bg-brand-50 text-neutral-900 font-display font-semibold" {...props} />
    ),
    th: (props: ComponentPropsWithoutRef<"th">) => (
      <th className="px-4 py-3 border-b border-neutral-200" {...props} />
    ),
    td: (props: ComponentPropsWithoutRef<"td">) => (
      <td className="px-4 py-3 border-b border-neutral-100 font-body text-neutral-700 align-top" {...props} />
    ),
    a: ({ href, children, ...rest }: ComponentPropsWithoutRef<"a">) => {
      if (isInternalHref(href)) {
        return (
          <Link href={href} className="text-brand-700 underline underline-offset-2 hover:text-brand-800">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          className="text-brand-700 underline underline-offset-2 hover:text-brand-800"
          target="_blank"
          rel="noreferrer noopener"
          {...rest}
        >
          {children}
        </a>
      );
    },
    hr: (props: ComponentPropsWithoutRef<"hr">) => (
      <hr className="my-12 border-t border-neutral-200" {...props} />
    ),
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-semibold text-neutral-900" {...props} />
    ),
    em: (props: ComponentPropsWithoutRef<"em">) => (
      <em className="italic text-neutral-800" {...props} />
    ),
    Callout,
    CTA,
    AnswerBox,
    Definition,
    Citation,
    ...components,
  };
}
