import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "A Prova do ENAMED — estrutura, TRI e método Angoff";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · TÉCNICO",
    title: "A Prova do ENAMED",
    subtitle:
      "Estrutura, TRI, método Angoff, número de questões, tempo de prova e notas de corte. O detalhe técnico do exame.",
    palette: "cobalt",
  });
}
