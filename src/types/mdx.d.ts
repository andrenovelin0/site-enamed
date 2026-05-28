declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title?: string;
    description?: string;
    eyebrow?: string;
    updatedAt?: string;
    heroTitle?: string;
    heroDescription?: string;
    category?: string;
    cover?: string;
    author?: string;
    date?: string;
    readingTime?: number;
    heroEyebrow?: string;
    term?: string;
    acronym?: string;
    shortDefinition?: string;
  } & Record<string, unknown>;

  const MDXContent: ComponentType<{
    components?: Record<string, ComponentType<unknown>>;
  }>;
  export default MDXContent;
}
