import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Áreas Médicas no ENAMED — Clínica, Cirurgia, Pediatria, GO, Saúde Coletiva, Ética";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · CONTEÚDO",
    title: "Áreas Médicas no ENAMED",
    subtitle:
      "Clínica Médica, Cirurgia, Pediatria, Ginecologia e Obstetrícia, Saúde Coletiva e Ética. Peso, escopo e subtemas por área.",
    palette: "plum",
  });
}
