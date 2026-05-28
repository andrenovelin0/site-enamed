import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: string;
  author: string;
  readingTime: number;
  heroEyebrow?: string;
};

type RawMetadata = Omit<BlogPostMeta, "slug">;

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getBlogPostMeta(slug: string): Promise<BlogPostMeta | null> {
  try {
    const mod = (await import(`@/content/blog/${slug}.mdx`)) as { metadata: RawMetadata };
    return { slug, ...mod.metadata };
  } catch {
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPostMeta(slug)));
  return posts
    .filter((p): p is BlogPostMeta => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
