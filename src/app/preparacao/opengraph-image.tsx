import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Preparação para o ENAMED — cronograma, técnicas e estratégia";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · ESTRATÉGIA",
    title: "Preparação para o ENAMED",
    subtitle:
      "Cronograma de estudo, técnicas de retenção, última semana antes da prova e checklist para o dia. Da rotina à logística final.",
    palette: "teal",
  });
}
