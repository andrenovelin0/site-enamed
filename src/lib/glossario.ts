import fs from "node:fs";
import path from "node:path";

const GLOSSARIO_DIR = path.join(process.cwd(), "content", "glossario");

export type GlossarioTermMeta = {
  slug: string;
  term: string;
  acronym?: string;
  shortDefinition: string;
  category?: string;
  updatedAt?: string;
};

type RawMetadata = Omit<GlossarioTermMeta, "slug">;

export function getGlossarioSlugs(): string[] {
  if (!fs.existsSync(GLOSSARIO_DIR)) return [];
  return fs
    .readdirSync(GLOSSARIO_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getGlossarioTermMeta(slug: string): Promise<GlossarioTermMeta | null> {
  try {
    const mod = (await import(`@/content/glossario/${slug}.mdx`)) as { metadata: RawMetadata };
    return { slug, ...mod.metadata };
  } catch {
    return null;
  }
}

export async function getAllGlossarioTerms(): Promise<GlossarioTermMeta[]> {
  const slugs = getGlossarioSlugs();
  const terms = await Promise.all(slugs.map((slug) => getGlossarioTermMeta(slug)));
  return terms
    .filter((t): t is GlossarioTermMeta => t !== null)
    .sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
}
