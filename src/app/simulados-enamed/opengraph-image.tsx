import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Simulados ENAMED — como usar para se preparar";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · PREPARAÇÃO",
    title: "Simulados do ENAMED",
    subtitle:
      "O que é simulado de qualidade, como interpretar o resultado, quando fazer diagnóstico e como usar questões comentadas a seu favor.",
    palette: "amber",
  });
}
