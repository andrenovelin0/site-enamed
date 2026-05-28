import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ENAMED — Portal do Exame Nacional de Avaliação da Formação Médica",
    template: "%s | ENAMED",
  },
  description:
    "Portal completo sobre o Exame Nacional de Avaliação da Formação Médica (Enamed): guias, simulados, cursos preparatórios e conteúdo para estudantes e instituições.",
  keywords: [
    "ENAMED",
    "Exame Nacional de Avaliação da Formação Médica",
    "Prova ENAMED",
    "Simulado ENAMED",
    "Preparatório ENAMED",
    "TRI",
    "Residência Médica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: "ENAMED",
    title: "ENAMED — Portal do Exame Nacional de Avaliação da Formação Médica",
    description:
      "Tudo sobre o ENAMED em um só lugar: estrutura da prova, simulados, cursos e estratégia para estudantes e IES.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENAMED — Portal do Exame Nacional de Avaliação da Formação Médica",
    description:
      "Tudo sobre o ENAMED em um só lugar: estrutura da prova, simulados, cursos e estratégia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
