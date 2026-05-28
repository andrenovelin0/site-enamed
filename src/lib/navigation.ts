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
    description: "Estrutura, metodologia (TRI) e desempenho",
  },
  {
    label: "Simulados",
    href: "/simulados-enamed",
    description: "Questões comentadas e dashboard de performance",
  },
  {
    label: "Cursos",
    href: "/cursos",
    description: "Preparatórios e mentorias",
  },
  {
    label: "Para IES",
    href: "/ies",
    description: "Desempenho institucional e MEC",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export const footerSections: { title: string; items: NavItem[] }[] = [
  {
    title: "Conteúdo",
    items: [
      { label: "O ENAMED", href: "/enamed" },
      { label: "A Prova", href: "/prova-enamed" },
      { label: "Simulados", href: "/simulados-enamed" },
      { label: "Para IES", href: "/ies" },
    ],
  },
  {
    title: "Comercial",
    items: [
      { label: "Cursos preparatórios", href: "/cursos" },
      { label: "Depoimentos e resultados", href: "/depoimentos" },
      { label: "Mentorias", href: "/cursos#mentoria" },
    ],
  },
  {
    title: "Suporte",
    items: [
      { label: "FAQ", href: "/faq" },
      { label: "Contato", href: "/contato" },
      { label: "Central de Suporte", href: "/suporte" },
    ],
  },
  {
    title: "Institucional",
    items: [
      { label: "Sobre", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
      { label: "Política de Cookies", href: "/politica-de-cookies" },
    ],
  },
];
