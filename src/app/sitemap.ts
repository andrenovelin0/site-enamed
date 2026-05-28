import type { MetadataRoute } from "next";
import { siteConfig, sitemapRoutes } from "@/lib/site-config";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllGlossarioTerms } from "@/lib/glossario";
import { getAllComparativos } from "@/lib/comparativos";
import { getAllFaqItems } from "@/lib/faq";

type SitemapEntry = MetadataRoute.Sitemap[number];

function toAbsolute(path: string): string {
  return `${siteConfig.url}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Static routes from site-config (index pages, pilares, subpáginas estáticas)
  const staticEntries: SitemapEntry[] = sitemapRoutes.map((route) => ({
    url: toAbsolute(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamic content-driven routes
  const [blogPosts, glossarioTerms, comparativos] = await Promise.all([
    getAllBlogPosts(),
    getAllGlossarioTerms(),
    getAllComparativos(),
  ]);

  const blogEntries: SitemapEntry[] = blogPosts.map((post) => ({
    url: toAbsolute(`/blog/${post.slug}`),
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const glossarioEntries: SitemapEntry[] = glossarioTerms.map((term) => ({
    url: toAbsolute(`/glossario/${term.slug}`),
    lastModified: term.updatedAt ? new Date(term.updatedAt) : now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const comparativoEntries: SitemapEntry[] = comparativos.map((item) => ({
    url: toAbsolute(`/comparativos/${item.slug}`),
    lastModified: item.updatedAt ? new Date(item.updatedAt) : now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const faqEntries: SitemapEntry[] = getAllFaqItems().map((item) => ({
    url: toAbsolute(`/faq/${item.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // 3. Merge with dedupe (static wins — keeps configured priority/freq)
  const seen = new Set(staticEntries.map((e) => e.url));
  const dynamicEntries = [
    ...blogEntries,
    ...glossarioEntries,
    ...comparativoEntries,
    ...faqEntries,
  ].filter((e) => !seen.has(e.url));

  return [...staticEntries, ...dynamicEntries];
}
