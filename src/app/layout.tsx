import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
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
    default: "Portal ENAMED — Exame Nacional de Avaliação da Formação Médica",
    template: "%s | Portal ENAMED",
  },
  description: siteConfig.description,
  keywords: [
    "ENAMED",
    "Exame Nacional de Avaliação da Formação Médica",
    "TRI",
    "Método Angoff",
    "INEP",
    "CPC",
    "MEC",
    "Residência Médica",
    "Saúde Coletiva",
    "Clínica Médica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: "Portal ENAMED",
    title: "Portal ENAMED — Exame Nacional de Avaliação da Formação Médica",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal ENAMED — Exame Nacional de Avaliação da Formação Médica",
    description: siteConfig.description,
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[1000] focus:rounded-md focus:bg-brand-700 focus:text-white focus:px-4 focus:py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400"
        >
          Pular para o conteúdo
        </a>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
