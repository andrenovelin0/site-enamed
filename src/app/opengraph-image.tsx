import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt =
  "Portal ENAMED — Exame Nacional de Avaliação da Formação Médica";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PORTAL ENAMED",
    title: "Exame Nacional de Avaliação da Formação Médica",
    subtitle:
      "Conteúdo factual, citável e atualizado sobre o ENAMED — para estudantes, médicos, IES e pesquisadores.",
    palette: "emerald",
  });
}
