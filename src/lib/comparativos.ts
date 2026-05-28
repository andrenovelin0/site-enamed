import fs from "node:fs";
import path from "node:path";

const COMPARATIVOS_DIR = path.join(process.cwd(), "content", "comparativos");

export type ComparativoMeta = {
  slug: string;
  title: string;
  description: string;
  entityA: string;
  entityB: string;
  shortAnswer: string;
  updatedAt?: string;
  heroEyebrow?: string;
};

type RawMetadata = Omit<ComparativoMeta, "slug">;

export function getComparativosSlugs(): string[] {
  if (!fs.existsSync(COMPARATIVOS_DIR)) return [];
  return fs
    .readdirSync(COMPARATIVOS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getComparativoMeta(slug: string): Promise<ComparativoMeta | null> {
  try {
    const mod = (await import(`@/content/comparativos/${slug}.mdx`)) as { metadata: RawMetadata };
    return { slug, ...mod.metadata };
  } catch {
    return null;
  }
}

export async function getAllComparativos(): Promise<ComparativoMeta[]> {
  const slugs = getComparativosSlugs();
  const items = await Promise.all(slugs.map((slug) => getComparativoMeta(slug)));
  return items
    .filter((c): c is ComparativoMeta => c !== null)
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
}
