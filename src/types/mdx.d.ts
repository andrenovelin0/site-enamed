declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    description: string;
    eyebrow?: string;
    updatedAt?: string;
    heroTitle?: string;
    heroDescription?: string;
    category?: string;
    cover?: string;
    author?: string;
  };

  const MDXContent: ComponentType<{
    components?: Record<string, ComponentType<unknown>>;
  }>;
  export default MDXContent;
}
