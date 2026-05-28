export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  {
    label: "O ENAMED",
    href: "/enamed",
    description: "Definição, história e função do exame",
  },
  {
    label: "A Prova",
    href: "/prova-enamed",
    description: "Estrutura, metodologia (TRI) e cálculo da nota",
  },
  {
    label: "Áreas",
    href: "/areas",
    description: "Conteúdos por área médica avaliada",
  },
  {
    label: "Simulados",
    href: "/simulados-enamed",
    description: "O que são simulados ENAMED e como interpretá-los",
  },
  {
    label: "Preparação",
    href: "/preparacao",
    description: "Como se preparar — cronograma, técnicas, materiais",
  },
  {
    label: "Carreira",
    href: "/carreira",
    description: "Residência, R+, ENARE e mercado médico",
  },
  {
    label: "Para IES",
    href: "/ies",
    description: "Impacto MEC, CPC, sanções e melhoria institucional",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Glossário",
    href: "/glossario",
  },
];

export const footerSections: { title: string; items: NavItem[] }[] = [
  {
    title: "Conteúdo",
    items: [
      { label: "O ENAMED", href: "/enamed" },
      { label: "A Prova", href: "/prova-enamed" },
      { label: "Áreas médicas", href: "/areas" },
      { label: "Simulados", href: "/simulados-enamed" },
      { label: "Para IES", href: "/ies" },
    ],
  },
  {
    title: "Preparação e carreira",
    items: [
      { label: "Como se preparar", href: "/preparacao" },
      { label: "Carreira médica", href: "/carreira" },
      { label: "Glossário", href: "/glossario" },
    ],
  },
  {
    title: "Editorial",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Institucional",
    items: [
      { label: "Sobre o Portal", href: "/sobre" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
      { label: "Política de Cookies", href: "/politica-de-cookies" },
    ],
  },
];
