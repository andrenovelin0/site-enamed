import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Carreira médica pós-formação — residência, R+, ENARE e mercado";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: "PILAR · CARREIRA",
    title: "Carreira Médica pós-formação",
    subtitle:
      "Da prova de residência ao R+, do ENARE à entrada no mercado. Panorama das decisões de carreira que aguardam após a graduação.",
    palette: "bronze",
  });
}
