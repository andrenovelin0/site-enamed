import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/cursos",
        destination: "/preparacao",
        permanent: true,
      },
      {
        source: "/cursos/:slug",
        destination: "/preparacao",
        permanent: true,
      },
      {
        source: "/depoimentos",
        destination: "/sobre",
        permanent: true,
      },
      {
        source: "/suporte",
        destination: "/contato",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
