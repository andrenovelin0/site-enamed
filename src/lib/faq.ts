export type FaqItem = {
  question: string;
  answer: string;
  slug: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "sobre-o-exame",
    label: "Sobre o exame",
    items: [
      {
        slug: "o-que-e-enamed",
        question: "O que é o ENAMED?",
        answer:
          "O ENAMED é o Exame Nacional de Avaliação da Formação Médica — avaliação aplicada pelo INEP a estudantes concluintes e a estudantes do quarto ano de Medicina em IES brasileiras, nos termos da Portaria MEC nº 330/2025 e do Edital INEP nº 71/2026. Tem 100 questões objetivas com 4 alternativas, duração de 5 horas, e a nota é calculada por Teoria de Resposta ao Item (TRI). A prova de 2026 será aplicada em 13/09/2026, das 13h30 às 18h30 (horário de Brasília).",
      },
      {
        slug: "para-que-serve-enamed",
        question: "Para que serve o ENAMED?",
        answer:
          "O ENAMED serve a dois propósitos formais (Edital INEP nº 71/2026, item 2.2): avaliar os cursos de Medicina a partir do desempenho dos estudantes inscritos no ENADE (a proporção de Proficientes alimenta o Conceito ENADE do curso) e subsidiar a seleção para residência médica de Acesso Direto via ENARE — no qual a prova objetiva é literalmente a prova do ENAMED. Não é prova de revalidação de diploma e não é prova de licenciamento.",
      },
      {
        slug: "quem-e-obrigado-fazer",
        question: "Quem é obrigado a fazer o ENAMED?",
        answer:
          "A participação é obrigatória para dois grupos (Edital INEP nº 71/2026, item 1.1): (1) concluintes habilitados e inscritos pelo coordenador como concluintes de Medicina avaliados no ENADE 2026 — fundamento na Lei nº 10.861/2004; e (2) estudantes do quarto ano habilitados e inscritos pelo coordenador — fundamento na Lei nº 12.871/2013, art. 9º. Graduados podem participar voluntariamente para usar o resultado no ENARE.",
      },
      {
        slug: "enamed-substitui-revalida",
        question: "O ENAMED substitui o Revalida?",
        answer:
          "Não. O ENAMED é aplicado pelo INEP a concluintes e estudantes do quarto ano de Medicina em IES brasileiras para avaliar a formação médica (Edital INEP nº 71/2026). O Revalida é para médicos formados no exterior que querem exercer no Brasil — revalida o diploma estrangeiro e inclui prova objetiva e estações práticas (OSCE). São avaliações distintas, com públicos diferentes e não intercambiáveis.",
      },
    ],
  },
  {
    id: "estrutura-da-prova",
    label: "Estrutura da prova",
    items: [
      {
        slug: "quantas-questoes-enamed",
        question: "Quantas questões tem o ENAMED?",
        answer:
          "O Caderno de Prova do ENAMED 2026 é composto por 100 questões objetivas de múltipla escolha, conforme item 3.1.1.1 do Edital INEP nº 71/2026. Os itens são construídos com base na Matriz de Referência Comum para Avaliação da Formação Médica (Portaria Inep nº 478/2025) e provenientes do Banco Nacional de Itens da Educação Superior.",
      },
      {
        slug: "tempo-prova-enamed",
        question: "Quanto tempo dura a prova do ENAMED?",
        answer:
          "A prova tem duração total de 5 horas (item 3.1.1.1.1 do Edital INEP nº 71/2026). A aplicação ocorre das 13h30 às 18h30, horário oficial de Brasília/DF, em data única nacional (13/09/2026). Candidatos com solicitação aprovada de tempo adicional têm acréscimo de 60 minutos. O tempo mínimo de permanência em sala é de 2 horas.",
      },
      {
        slug: "areas-avaliadas-enamed",
        question: "Quais áreas são avaliadas no ENAMED?",
        answer:
          "A prova avalia competências em seis grandes áreas da formação médica generalista — Clínica Médica, Cirurgia, Pediatria, Ginecologia e Obstetrícia, Saúde Coletiva e Ética Médica/Legislação —, com base na Matriz de Referência Comum (Portaria Inep nº 478/2025) e nas DCN do curso de Medicina (Resolução CNE/CES nº 3/2014). Os pesos específicos por área são publicados nas notas técnicas e no relatório pedagógico do INEP de cada ciclo.",
      },
      {
        slug: "formato-questoes-enamed",
        question: "Qual é o formato das questões do ENAMED?",
        answer:
          "Todas as questões são objetivas de múltipla escolha com 4 alternativas e uma única resposta correta (item 3.1.1.1 do Edital INEP nº 71/2026). São apresentadas como casos clínicos ou problemas contextualizados. O foco está em raciocínio clínico e tomada de decisão, não em memorização isolada de fatos.",
      },
    ],
  },
  {
    id: "calculo-de-nota",
    label: "Cálculo de nota",
    items: [
      {
        slug: "como-calculada-nota-enamed",
        question: "Como a nota do ENAMED é calculada?",
        answer:
          "A nota é calculada por Teoria de Resposta ao Item (TRI), conforme metodologia descrita nas Notas Técnicas nº 19/2025/CGAFM/DAES-INEP e nº 42/2025/CEI/CGGI/DAES-INEP. A TRI considera parâmetros de cada item (dificuldade, discriminação, acerto ao acaso). Sua nota depende de quais itens você acertou, não apenas de quantos — dois candidatos com a mesma quantidade de acertos podem ter notas diferentes.",
      },
      {
        slug: "nota-corte-enamed",
        question: "O ENAMED tem nota de corte?",
        answer:
          "Sim, no sentido oficial de habilitação. O Edital INEP nº 71/2026 (item 14.1.4) estabelece o piso de 60,0 pontos na escala de proficiência TRI — quem fica abaixo é Não Proficiente e quem fica acima ou igual é Proficiente. Não há outros níveis. O Proficiente é exigido para uso da nota no ENARE para residência médica (Edital ENARE nº 02/2026, item 4.3.1). O ENAMED não bloqueia a colação de grau.",
      },
      {
        slug: "tri-enamed-explicado",
        question: "O que é TRI e por que o ENAMED usa?",
        answer:
          "TRI (Teoria de Resposta ao Item) é o modelo psicométrico de cálculo da nota no ENAMED, conforme item 12.5 do Edital INEP nº 71/2026 e Notas Técnicas nº 19/2025 e nº 42/2025 do INEP. A TRI calcula proficiência considerando o padrão de respostas em relação à dificuldade dos itens. Vantagens: permite comparar notas entre edições; reduz o ganho de quem chuta sistematicamente; e gera informação mais fina sobre o nível de competência.",
      },
      {
        slug: "enamed-conta-residencia",
        question: "A nota do ENAMED conta para residência médica?",
        answer:
          "Sim, e de forma direta para o ENARE. No ciclo 2026/2027, a prova objetiva do ENARE Acesso Direto é literalmente a prova do ENAMED (Edital ENARE nº 02/2026, item 4.1.1). Para concorrer, é necessário ter atingido o nível Proficiente (≥60,0). A nota TRI é convertida para escala 0–1000 pontos e pode receber bonificação de +10% para concluintes de Programa de Residência em Medicina de Família e Comunidade (Portaria MEC nº 446/2026).",
      },
    ],
  },
  {
    id: "preparacao",
    label: "Preparação",
    items: [
      {
        slug: "quanto-tempo-estudar-enamed",
        question: "Quanto tempo preciso estudar para o ENAMED?",
        answer:
          "Depende do seu ponto de partida. Estudantes com formação consistente e bom desempenho na graduação podem ter preparação suficiente em 3-6 meses focados. Quem identifica lacunas grandes no diagnóstico inicial geralmente precisa de 9-12 meses. O ideal é começar com um simulado diagnóstico no início do penúltimo ano.",
      },
      {
        slug: "como-comecar-estudar-enamed",
        question: "Como começar a estudar para o ENAMED?",
        answer:
          "Comece por um simulado diagnóstico — sem ele, você estuda intuitivamente. Em seguida, monte cronograma respeitando o peso das áreas (~30% Clínica, ~20% Cirurgia, etc.), priorize resolução ativa de questões sobre leitura passiva, e use revisão espaçada para consolidar memória de longo prazo.",
      },
      {
        slug: "vale-pena-curso-enamed",
        question: "Vale a pena fazer um curso preparatório para o ENAMED?",
        answer:
          "Depende do seu perfil. Autoestudo bem estruturado pode funcionar para quem tem disciplina, base sólida da graduação e acesso a bons materiais. Cursos preparatórios entregam estrutura, cronograma pronto e suporte de especialistas — vantagem real para quem precisa de externalidade para manter ritmo. A decisão é pessoal e depende do contexto.",
      },
    ],
  },
  {
    id: "ies",
    label: "Para IES",
    items: [
      {
        slug: "enamed-afeta-faculdade",
        question: "A nota do ENAMED afeta a faculdade?",
        answer:
          "Sim, diretamente. O Edital INEP nº 71/2026 (item 14.1.5) determina que o Conceito ENADE dos cursos de Medicina será calculado com base na proporção de estudantes que atingem o Nível Proficiente, conforme Nota Técnica nº 40/2025/CEI/CGGI/DAES-INEP. O Conceito ENADE alimenta o CPC (Conceito Preliminar de Curso) do MEC, que orienta atos regulatórios — desde credenciamento até supervisão, redução de vagas e, em casos extremos, descredenciamento do curso.",
      },
      {
        slug: "como-melhorar-desempenho-ies",
        question: "Como uma IES pode melhorar seu desempenho no ENAMED?",
        answer:
          "Cinco estratégias com evidência: diagnóstico institucional contínuo via simulados internos calibrados; revisão curricular orientada por padrões de erro no relatório INEP; internato com foco em raciocínio clínico; suporte estruturado a estudantes próximos à prova; e alinhamento do currículo às diretrizes nacionais (Sociedades médicas, Ministério da Saúde).",
      },
    ],
  },
  {
    id: "carreira",
    label: "Carreira",
    items: [
      {
        slug: "enamed-no-lattes",
        question: "O ENAMED aparece no meu Lattes?",
        answer:
          "Sim. O resultado do ENAMED é compartilhado com a HU Brasil (item 16.11 do Edital INEP nº 71/2026) e tradicionalmente fica registrado no Currículo Lattes do participante. Como o Lattes é consultado por bancas de seleção em residências e programas acadêmicos, a nota fica visível em processos seletivos futuros. Confirme os detalhes operacionais de cada edição no portal do INEP.",
      },
      {
        slug: "enamed-vs-enare",
        question: "Qual a diferença entre ENAMED e ENARE?",
        answer:
          "ENAMED é a avaliação aplicada pelo INEP que mede a formação médica de concluintes e estudantes do quarto ano. ENARE é o processo seletivo público de residência médica organizado pela HU Brasil com apoio da FGV. No ciclo 2026/2027, a prova objetiva do ENARE Acesso Direto é literalmente a prova do ENAMED (Edital ENARE nº 02/2026, item 4.1.1) — o candidato presta uma única prova que serve a dois propósitos. Atingir o nível Proficiente no ENAMED é critério obrigatório para classificação no ENARE.",
      },
    ],
  },
];

export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((cat) => cat.items);
}

export function getFaqItemBySlug(slug: string): { item: FaqItem; category: FaqCategory } | null {
  for (const category of faqCategories) {
    const item = category.items.find((i) => i.slug === slug);
    if (item) return { item, category };
  }
  return null;
}

export function getAllFaqSlugs(): string[] {
  return getAllFaqItems().map((i) => i.slug);
}

export function getAdjacentFaqItems(slug: string): {
  previous: FaqItem | null;
  next: FaqItem | null;
} {
  const all = getAllFaqItems();
  const idx = all.findIndex((i) => i.slug === slug);
  if (idx === -1) return { previous: null, next: null };
  return {
    previous: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
