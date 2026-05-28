import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "O ENAMED — guia completo do exame";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · INSTITUCIONAL",
    title: "O ENAMED — guia completo",
    subtitle:
      "Definição, história, elegibilidade, objetivos e diferenças. O exame que substituiu o ENADE Medicina a partir de 2024-2025.",
    palette: "emerald",
  });
}
