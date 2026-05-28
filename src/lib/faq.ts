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
          "O ENAMED é o Exame Nacional de Avaliação da Formação Médica — avaliação objetiva aplicada anualmente pelo INEP a estudantes concluintes do curso de Medicina em Instituições de Ensino Superior brasileiras. Mede competência clínica em seis áreas (Clínica Médica, Cirurgia, Pediatria, Ginecologia e Obstetrícia, Saúde Coletiva e Ética Médica), com nota calculada por Teoria de Resposta ao Item (TRI).",
      },
      {
        slug: "para-que-serve-enamed",
        question: "Para que serve o ENAMED?",
        answer:
          "O ENAMED serve a dois propósitos: avaliar a competência individual do egresso (nota entra no Lattes) e gerar dado agregado por Instituição que alimenta o Conceito Preliminar de Curso (CPC) do MEC. Não é prova de classificação para residência, nem de revalidação de diploma — é avaliação somativa do nível de formação médica.",
      },
      {
        slug: "quem-e-obrigado-fazer",
        question: "Quem é obrigado a fazer o ENAMED?",
        answer:
          "São obrigatoriamente avaliados estudantes concluintes do curso de Medicina em IES brasileiras com formatura prevista no ano da aplicação. Médicos formados há menos de dois anos que ainda não realizaram o exame também podem ser convocados, conforme regras de transição do edital vigente. A ausência sem justificativa formal pode bloquear a colação de grau.",
      },
      {
        slug: "enamed-substitui-revalida",
        question: "O ENAMED substitui o Revalida?",
        answer:
          "Não. ENAMED e Revalida têm públicos e funções diferentes. O ENAMED é aplicado a concluintes de Medicina no Brasil para avaliar competência da formação. O Revalida é para médicos formados no exterior que querem exercer no Brasil — revalida o diploma estrangeiro. São avaliações distintas e não intercambiáveis.",
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
          "A prova tem aproximadamente 100 a 120 questões objetivas (variando levemente entre edições), distribuídas entre as seis áreas médicas avaliadas. Cada questão é apresentada em formato de caso clínico ou problema contextualizado.",
      },
      {
        slug: "tempo-prova-enamed",
        question: "Quanto tempo dura a prova do ENAMED?",
        answer:
          "A aplicação tem duração total de aproximadamente 5 horas e 30 minutos de prova efetiva, divididas em dois períodos no mesmo dia com pausa intermediária. Os horários exatos são divulgados no edital de cada edição.",
      },
      {
        slug: "areas-avaliadas-enamed",
        question: "Quais áreas são avaliadas no ENAMED?",
        answer:
          "Seis áreas: Clínica Médica (~30% da prova), Cirurgia (~20%), Pediatria (~15%), Ginecologia e Obstetrícia (~15%), Saúde Coletiva (~13%) e Ética Médica e Legislação (~7%). Os pesos podem variar levemente entre edições.",
      },
      {
        slug: "formato-questoes-enamed",
        question: "Qual é o formato das questões do ENAMED?",
        answer:
          "Todas são questões objetivas de múltipla escolha (tipicamente 5 alternativas), apresentadas como casos clínicos ou problemas contextualizados. O foco está em raciocínio clínico e tomada de decisão, não em memorização isolada de fatos.",
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
          "A nota é calculada por Teoria de Resposta ao Item (TRI), modelo psicométrico que considera três parâmetros de cada questão (dificuldade, discriminação, acerto ao acaso). Sua nota depende de quais itens você acertou, não apenas de quantos. Dois candidatos com a mesma quantidade de acertos podem ter notas diferentes.",
      },
      {
        slug: "nota-corte-enamed",
        question: "O ENAMED tem nota de corte?",
        answer:
          "Não no sentido de eliminação. O ENAMED gera uma nota TRI individual e uma banda de desempenho (Insuficiente, Básico, Adequado, Avançado, Excelente). Não existe 'aprovado' ou 'reprovado' — existe o seu nível de proficiência e a sua posição relativa.",
      },
      {
        slug: "tri-enamed-explicado",
        question: "O que é TRI e por que o ENAMED usa?",
        answer:
          "TRI (Teoria de Resposta ao Item) é um modelo psicométrico que calcula proficiência considerando padrão de respostas em relação à dificuldade dos itens. O ENAMED usa TRI por três razões: permite comparar notas entre edições diferentes; reduz o ganho de quem chuta sistematicamente; e gera informação mais fina sobre o nível de competência do candidato.",
      },
      {
        slug: "enamed-conta-residencia",
        question: "A nota do ENAMED conta para residência médica?",
        answer:
          "Não como nota direta de classificação. Mas a nota entra no seu Currículo Lattes e pode ser considerada em análise curricular por bancas de seleção. Alguns programas já atribuem peso explícito (5-15% da nota final). Há discussão sobre integração ENARE + ENAMED nos próximos anos.",
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
          "Sim, diretamente. A nota agregada por IES entra no cálculo do Conceito Preliminar de Curso (CPC) do MEC. CPC baixo (≤ 2) ativa protocolo de supervisão, podendo levar a Termo de Saneamento de Deficiências, redução de vagas e, em casos extremos, descredenciamento do curso. Por isso o desempenho ENAMED é estratégico para coordenações.",
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
          "Sim. A nota individual e a banda de desempenho são automaticamente registradas no seu Currículo Lattes. Como o Lattes é consultado por bancas de seleção em residências e programas acadêmicos, sua nota fica visível em processos seletivos futuros — mesmo quando o programa não a use como nota explícita.",
      },
      {
        slug: "enamed-vs-enare",
        question: "Qual a diferença entre ENAMED e ENARE?",
        answer:
          "ENAMED é avaliação somativa da formação médica aplicada a concluintes — entra no Lattes, alimenta avaliação MEC, não classifica para residência. ENARE é o Exame Nacional de Residência Médica — processo seletivo centralizado para vagas em programas de residência. Você presta um para se formar; presta o outro se quiser fazer residência por programa que adote o ENARE.",
      },
    ],
  },
];

export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((cat) => cat.items);
}
