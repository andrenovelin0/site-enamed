import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Portal ENAMED — Portal do Exame Nacional de Avaliação da Formação Médica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background:
            "linear-gradient(135deg, #00301F 0%, #004F36 55%, #006847 100%)",
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
            color: "#6CFFBB",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              background: "#05FC89",
              borderRadius: 999,
            }}
          />
          PORTAL ENAMED
        </div>

        {/* Center — title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -1.5,
            }}
          >
            Exame Nacional de Avaliação da Formação Médica
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.3,
              color: "rgba(255, 255, 255, 0.78)",
              maxWidth: 880,
              fontWeight: 400,
            }}
          >
            Conteúdo factual, citável e atualizado sobre o ENAMED — para
            estudantes, médicos, IES e pesquisadores.
          </div>
        </div>

        {/* Footer — domain + accent line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(108, 255, 187, 0.35)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#6CFFBB",
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
            Fonte de referência independente
          </div>
        </div>
      </div>
    ),
    size,
  );
}
