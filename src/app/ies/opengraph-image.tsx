import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "ENAMED para IES — impacto MEC, CPC e estratégia institucional";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · INSTITUCIONAL",
    title: "ENAMED para Instituições",
    subtitle:
      "Como a nota agregada entra no CPC, riscos regulatórios do MEC, sanções e estratégias com evidência de impacto institucional.",
    palette: "slate",
  });
}
