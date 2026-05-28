import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type Gradient = {
  /** background gradient — full CSS value */
  background: string;
  /** divider line color above footer */
  divider: string;
  /** small dot in the header eyebrow */
  dot: string;
  /** eyebrow + domain accent color */
  accent: string;
};

const GRADIENTS = {
  emerald: {
    background:
      "linear-gradient(135deg, #00301F 0%, #004F36 55%, #006847 100%)",
    divider: "rgba(108, 255, 187, 0.35)",
    dot: "#05FC89",
    accent: "#6CFFBB",
  },
  cobalt: {
    background:
      "linear-gradient(135deg, #0A1742 0%, #102B66 50%, #1B3FA0 100%)",
    divider: "rgba(168, 195, 255, 0.30)",
    dot: "#7CC4FF",
    accent: "#A8C3FF",
  },
  amber: {
    background:
      "linear-gradient(135deg, #3F1A00 0%, #7A2E00 50%, #B14400 100%)",
    divider: "rgba(255, 199, 130, 0.35)",
    dot: "#FFB259",
    accent: "#FFD699",
  },
  teal: {
    background:
      "linear-gradient(135deg, #052B30 0%, #0A4A52 50%, #0F7780 100%)",
    divider: "rgba(143, 235, 244, 0.30)",
    dot: "#5DDDE8",
    accent: "#8FEBF4",
  },
  plum: {
    background:
      "linear-gradient(135deg, #28102E 0%, #4A1857 50%, #732486 100%)",
    divider: "rgba(218, 168, 255, 0.30)",
    dot: "#C172E8",
    accent: "#DAA8FF",
  },
  slate: {
    background:
      "linear-gradient(135deg, #14181F 0%, #232A37 50%, #364056 100%)",
    divider: "rgba(195, 207, 230, 0.25)",
    dot: "#94A3B8",
    accent: "#C3CFE6",
  },
  bronze: {
    background:
      "linear-gradient(135deg, #2A1B0E 0%, #4D331A 50%, #7A5230 100%)",
    divider: "rgba(255, 217, 169, 0.30)",
    dot: "#E5A461",
    accent: "#FFD9A9",
  },
} as const satisfies Record<string, Gradient>;

export type OgPalette = keyof typeof GRADIENTS;

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  palette = "emerald",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  palette?: OgPalette;
}) {
  const g = GRADIENTS[palette];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: g.background,
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Header — eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: g.accent,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              background: g.dot,
              borderRadius: 999,
            }}
          />
          {eyebrow}
        </div>

        {/* Center — title + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.3,
                color: "rgba(255, 255, 255, 0.78)",
                maxWidth: 920,
                fontWeight: 400,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Footer — domain + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${g.divider}`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: g.accent,
            }}
          >
            provaenamed.com.br
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.55)",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Portal ENAMED
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
