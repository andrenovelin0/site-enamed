export const siteConfig = {
  name: "ENAMED",
  url: "https://site-prova-enamed.example",
  description:
    "Portal completo sobre o Exame Nacional de Avaliação da Formação Médica (Enamed).",
  locale: "pt-BR",
};

export const sitemapRoutes: { path: string; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/enamed", changeFrequency: "monthly", priority: 0.9 },
  { path: "/prova-enamed", changeFrequency: "monthly", priority: 0.9 },
  { path: "/simulados-enamed", changeFrequency: "weekly", priority: 0.9 },
  { path: "/cursos", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sobre", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contato", changeFrequency: "yearly", priority: 0.4 },
  { path: "/depoimentos", changeFrequency: "monthly", priority: 0.5 },
  { path: "/suporte", changeFrequency: "monthly", priority: 0.4 },
  { path: "/politica-de-privacidade", changeFrequency: "yearly", priority: 0.2 },
  { path: "/termos-de-uso", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politica-de-cookies", changeFrequency: "yearly", priority: 0.2 },
];
