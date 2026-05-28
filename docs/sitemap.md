# Sitemap Detalhado v2.0 — Portal ENAMED (white-label)

**Versão:** 2.0 · **Data:** 2026-05-27 · **Substitui v1.0**

Escopo enciclopédico: ~110-140 páginas para topical authority máxima em SEO/GEO. Cada rota tem propósito, query-âncora, schemas e relações de cross-link.

Legenda:
- 🟢 já scaffoldada · 🟡 scaffold existe · 🔴 não criada
- 🆕 nova na v2.0 · 🔄 escopo mudou da v1.0 · ❌ removida da v1.0

---

## 0. Home — `/` 🟡 🔄

**Propósito v2.0:** Hub de descoberta puramente informacional. **SEM** CTAs comerciais.

**Mudanças vs v1.0:**
- ❌ remover botão "Fazer simulado gratuito"
- ❌ remover botão "Conhecer cursos"
- ❌ remover seção "Comece pelo simulado diagnóstico" (era comercial)
- ❌ remover bloco "Eleve o desempenho da sua IES" como CTA — vira card informacional
- ✅ trocar nome do site no header de "ENAMED" para "Portal ENAMED" + tagline
- ✅ adicionar bloco "Atualização recente" linkando para últimas análises do `/blog`
- ✅ FAQ snippet expandido (5-7 perguntas com schema)

**Blocos novos:**
1. Hero informacional — "Tudo sobre o ENAMED em um só lugar" + CTA neutro "Explorar guia completo"
2. Hub de clusters (7 cards, alinhados aos pilares)
3. **Última atualização editorial** — card destacando o post/análise mais recente
4. **Perguntas mais buscadas** — bloco FAQ com schema (5-7 questões)
5. **Glossário em destaque** — preview de termos-chave + link `/glossario`
6. **Recursos práticos** — links para calculadoras e comparativos

**Schema:** `WebSite (SearchAction)`, `Organization (Portal ENAMED)`, `FAQPage` (snippet)

---

## 1. Pilar Institucional — `/enamed` 🟡 ✅ MDX feito

**Pilar do cluster institucional.** Conteúdo enciclopédico sobre o exame.

**Subpáginas (artigos de suporte):** 🆕

| Slug | Tema | Query-âncora |
|---|---|---|
| `/enamed/historia` | História do ENAMED | "história do enamed" |
| `/enamed/criacao` | Como o ENAMED foi criado | "quando foi criado o enamed" |
| `/enamed/objetivos` | Objetivos e competências avaliadas | "para que serve o enamed" |
| `/enamed/elegibilidade` | Quem precisa fazer | "quem é obrigado a fazer o enamed" |
| `/enamed/legislacao` | Marco legal e regulamentação | "lei do enamed" |
| `/enamed/inep` | Papel do INEP na aplicação | "inep enamed" |
| `/enamed/mec-msau` | Relação MEC + Ministério da Saúde | "mec enamed" |
| `/enamed/edital-2026` | Edital ENAMED 2026 (atualizado anualmente) | "edital enamed 2026" |
| `/enamed/cronograma` | Datas e calendário | "quando é o enamed 2026" |
| `/enamed/locais-aplicacao` | Onde a prova é aplicada | "locais enamed" |
| `/enamed/inscricoes` | Inscrição (obrigatoriedade institucional) | "inscrição enamed" |

**Total subpáginas pilar 1:** ~11

**Schemas:** Article + BreadcrumbList em todas; MedicalEntity opcional em /enamed (entidade do exame)

---

## 2. Pilar Técnico — `/prova-enamed` 🟡 🔴

**Pilar do cluster técnico.** Detalhes da prova em si.

**Subpáginas:** 🆕

| Slug | Tema | Query-âncora |
|---|---|---|
| `/prova-enamed/teoria-resposta-item` | TRI — explicação detalhada | "o que é tri enamed" |
| `/prova-enamed/metodo-angoff` | Método Angoff aplicado | "método angoff enamed" |
| `/prova-enamed/calculo-da-nota` | Como sua nota é calculada | "como é calculada a nota do enamed" |
| `/prova-enamed/escala-proficiencia` | Bandas de desempenho TRI | "escala de proficiência enamed" |
| `/prova-enamed/numero-de-questoes` | Quantas questões tem | "quantas questões tem o enamed" |
| `/prova-enamed/divisao-por-areas` | Distribuição por área médica | "áreas avaliadas no enamed" |
| `/prova-enamed/tempo-de-prova` | Duração e divisão de tempo | "duração enamed" |
| `/prova-enamed/formato-questoes` | Estilo das questões (caso clínico) | "formato questões enamed" |
| `/prova-enamed/correcao-anulacao` | Critérios de correção e anulação | "anulação questão enamed" |
| `/prova-enamed/notas-de-corte` | Existem notas de corte? | "nota de corte enamed" |
| `/prova-enamed/desempenho-historico` | Médias históricas por edição | "média do enamed" |
| `/prova-enamed/curriculo-lattes` | Como aparece no Lattes | "enamed no lattes" |
| `/prova-enamed/peso-em-selecoes` | Peso em concursos/residência | "enamed conta para residência" |
| `/prova-enamed/recursos-edital` | Recursos contra resultados | "recursos enamed" |

**Total subpáginas pilar 2:** ~14

**Schemas:** Article + BreadcrumbList; HowTo em `/calculo-da-nota`

---

## 3. Pilar Áreas Médicas — `/areas` 🆕 🔴 (NOVO na v2.0)

**Páginas pilar por área avaliada.** Sub-cluster grande — coração do topical authority médico.

**Páginas pilar de área:**

| Slug | Área | Subtemas |
|---|---|---|
| `/areas/clinica-medica` | Clínica Médica | 8 subtemas |
| `/areas/cirurgia` | Cirurgia | 6 subtemas |
| `/areas/pediatria` | Pediatria | 5 subtemas |
| `/areas/ginecologia-obstetricia` | GO | 6 subtemas |
| `/areas/saude-coletiva` | Saúde Coletiva | 6 subtemas |
| `/areas/etica-medica` | Ética e Legislação | 4 subtemas |

**Subtemas (artigos de aprofundamento):**

`/areas/clinica-medica/` → cardiologia, pneumologia, gastroenterologia, nefrologia, endocrinologia, infectologia, hematologia, reumatologia (~8)
`/areas/cirurgia/` → cirurgia-geral, trauma, pre-pos-operatorio, cirurgia-vascular, urgencia-cirurgica, etica-cirurgica (~6)
`/areas/pediatria/` → neonatologia, crescimento-desenvolvimento, urgencias-pediatricas, infectologia-pediatrica, alergia-imunologia (~5)
`/areas/ginecologia-obstetricia/` → pre-natal, mecanismo-parto, puerperio, ginecologia-geral, contracepcao, urgencia-obstetrica (~6)
`/areas/saude-coletiva/` → sus, epidemiologia, bioestatistica, politicas-publicas, atencao-basica, vigilancia (~6)
`/areas/etica-medica/` → codigo-etica, resolucoes-cfm, sigilo-medico, responsabilidade-civil (~4)

**Total Áreas:** 6 pilares + ~35 subtemas = ~41

**Schemas:** Article + BreadcrumbList em todas; MedicalCondition/MedicalProcedure quando aplicável

---

## 4. Pilar Simulados — `/simulados-enamed` 🟡 🔴 🔄

**Pilar informacional (NÃO transacional).**

**v2.0:** site não oferece simulado funcional. Apenas explica o que é, como interpretar resultados, e linka para fontes externas onde simulado é possível (sem promover marca).

**Subpáginas:**

| Slug | Tema |
|---|---|
| `/simulados-enamed/o-que-e` | Definição e propósito de simulado |
| `/simulados-enamed/como-interpretar-resultado` | Como ler um relatório de simulado |
| `/simulados-enamed/diagnostico-inicial` | O que é simulado diagnóstico |
| `/simulados-enamed/temporizado-vs-livre` | Diferenças e quando usar cada um |
| `/simulados-enamed/por-area/[area]` | Simulados por área (6 sub-páginas — clinica, cirurgia, etc.) |
| `/simulados-enamed/questoes-comentadas` | O que é e por que serve |
| `/simulados-enamed/erros-comuns` | Padrões de erro mais frequentes |
| `/simulados-enamed/dashboard-desempenho` | O que medir |

**Total subpáginas pilar 4:** ~13 (4 estáticas + 6 áreas + 3 técnicas)

---

## 5. Pilar "Como se preparar" — `/preparacao` 🆕 🔴 🔄

**Renomeado de `/cursos` (v1.0).** Agora puramente informacional.

**Subpáginas:**

| Slug | Tema | Query-âncora |
|---|---|---|
| `/preparacao/cronograma-estudo` | Como montar cronograma | "cronograma de estudos enamed" |
| `/preparacao/quanto-tempo-estudar` | Tempo médio de preparação | "quanto tempo estudar enamed" |
| `/preparacao/tecnicas-de-estudo` | Técnicas (Pomodoro, revisão espaçada) | "como estudar para o enamed" |
| `/preparacao/material-recomendado` | Tipos de material (sem marca específica) | "livros para o enamed" |
| `/preparacao/preparatorios-no-mercado` | Tipos de preparatório (sem promoção) | "preparatório para enamed" |
| `/preparacao/mentoria-individual` | Quando vale a pena mentoria | "vale a pena mentoria enamed" |
| `/preparacao/grupos-de-estudo` | Como montar grupo de estudos | "grupo de estudo enamed" |
| `/preparacao/saude-mental-na-preparacao` | Saúde mental durante preparação | "ansiedade enamed" |
| `/preparacao/ultima-semana-de-prova` | Plano da última semana | "última semana antes do enamed" |
| `/preparacao/dia-da-prova` | O que fazer no dia | "dia da prova enamed o que fazer" |

**Total subpáginas pilar 5:** ~10

⚠️ **Tom:** zero promoção. "Existem preparatórios no mercado X, Y, Z" sem destacar EMR.

---

## 6. Pilar IES — `/ies` 🟡 🔴

**Pilar B2B-informacional.** Como o ENAMED impacta Instituições de Ensino Superior.

**Subpáginas:**

| Slug | Tema | Query-âncora |
|---|---|---|
| `/ies/avaliacao-mec-cpc` | CPC e como o ENAMED entra | "cpc mec enamed" |
| `/ies/sanções-mec` | Sanções por baixo desempenho | "sanções do mec medicina" |
| `/ies/credenciamento-medicina` | Credenciamento de novos cursos | "credenciamento curso medicina mec" |
| `/ies/reducao-de-vagas` | Quando o MEC reduz vagas | "redução de vagas medicina mec" |
| `/ies/supervisao-academica` | O processo de supervisão | "supervisão academica medicina" |
| `/ies/comparativo-de-ies` | Como comparar IES pelo ENAMED | "ranking faculdades de medicina enamed" |
| `/ies/melhoria-de-nota` | Estratégias para coordenadores | "como melhorar desempenho enamed faculdade" |
| `/ies/consultoria-enamed` | O que é consultoria ENAMED para IES | "consultoria enamed para ies" |
| `/ies/programa-de-preparacao-ies` | Programas estruturados para faculdades | "preparação enamed para faculdade" |
| `/ies/casos-de-melhoria` | Cases reais (anônimos) | "case sucesso melhoria enamed" |

**Total subpáginas pilar 6:** ~10

---

## 7. Pilar Carreira — `/carreira` 🆕 🔴 (NOVO na v2.0)

**Foco SEO/GEO:** o que vem depois do ENAMED — captura buscas correlatas que ampliam topical authority no nicho médico.

**Subpáginas:**

| Slug | Tema | Query-âncora |
|---|---|---|
| `/carreira/residencia-medica` | O que é residência médica | "o que é residência médica" |
| `/carreira/r1-vs-r-plus` | Diferença R1 e R+ | "diferença r1 e r+" |
| `/carreira/processo-seletivo-residencia` | Como funcionam as seleções | "como entrar na residência" |
| `/carreira/principais-instituicoes` | USP, UNIFESP, AMRIGS, etc. (informacional) | "melhores residências medicina" |
| `/carreira/enamed-vs-residencia` | Comparação direta | "enamed conta para residência" |
| `/carreira/medico-recem-formado` | Trajetória possível | "o que fazer depois de formar em medicina" |
| `/carreira/especialidades-medicas` | Mapa das especialidades | "especialidades médicas no brasil" |
| `/carreira/mercado-medico-brasil` | Panorama do mercado | "mercado de trabalho medicina brasil" |
| `/carreira/medicina-no-exterior` | Atuar fora do Brasil | "validar diploma medicina exterior" |
| `/carreira/revalida` | Sobre o Revalida | "o que é revalida" |

**Total subpáginas pilar 7:** ~10

---

## 8. Blog — `/blog` + `/blog/[slug]` 🟡 🔴

**Fresh content** — notícias, análises, releituras editoriais.

**Estrutura:**
- `/blog` — listagem paginada + filtro por categoria
- `/blog/[slug]` — artigo individual

**Categorias V1:**
- Edital e calendário
- Análise de prova (post-aplicação anual)
- Carreira médica
- IES e MEC
- Saúde mental e preparação
- Notícias setoriais

**Seed inicial (15-20 posts):** lista detalhada no índice de epics.

**Total Blog V1:** 1 listing + ~20 artigos seed

---

## 9. FAQ Dual-mode 🟡 🆕

### 9.1 `/faq` — single page agregadora

Acordeão por categoria com schema FAQPage. Boa para featured snippets clássicos.

### 9.2 `/faq/[slug]` — cada Q como artigo próprio 🆕

Para queries GEO específicas. Cada artigo:
- H1 = pergunta exata
- Resposta direta nos primeiros 200 chars
- Aprofundamento
- Schema QAPage

**Categorias de FAQ:**
1. Sobre o exame (~8 Qs)
2. Estrutura da prova (~8 Qs)
3. Cálculo de nota (~6 Qs)
4. Preparação (~6 Qs)
5. IES (~5 Qs)
6. Carreira (~5 Qs)

**Total FAQ artigos:** ~38

---

## 10. Glossário — `/glossario` 🆕 🔴

`/glossario` — lista alfabética A-Z
`/glossario/[termo]` — verbete individual

**Verbetes seed (~30):**

A: Aprovação, Avaliação institucional
B: Bandas de desempenho, Bioestatística básica
C: Caso clínico (formato), CPC, Conselho Federal de Medicina
D: Diretrizes Curriculares Nacionais
E: ENADE, ENARE, Epidemiologia, Edital
F: Formação médica
I: INEP, Item (estatística)
L: Lattes
M: Método Angoff, MEC, Medicina baseada em evidências
N: Nota TRI
P: Padrão de resposta, Programa de residência
Q: Questão objetiva
R: Residência médica, Revalida
S: SUS, Supervisão acadêmica, Sanção (MEC)
T: TRI (Teoria de Resposta ao Item)
U: USP (referência)

**Total Glossário:** ~30 verbetes

---

## 11. Comparativos — `/comparativos/*` 🆕 🔴

Páginas estruturadas em tabela + análise. Excelentes para GEO.

| Slug | Comparativo |
|---|---|
| `/comparativos/enamed-vs-revalida` | ENAMED × Revalida |
| `/comparativos/enamed-vs-enade` | ENAMED × ENADE |
| `/comparativos/enamed-vs-residencia` | ENAMED × Provas de residência |
| `/comparativos/enamed-vs-r-plus` | ENAMED × R+ |
| `/comparativos/tri-vs-classica` | TRI × Pontuação clássica |

**Total:** 5

---

## 12. Calculadoras — `/calculadoras/*` 🆕 🔴

Microferramentas client-side. Excelentes para engajamento + sinal de utilidade pra IA.

| Slug | Ferramenta |
|---|---|
| `/calculadoras/estimador-nota-tri` | Estimador rough de nota a partir de acertos brutos |
| `/calculadoras/distribuicao-tempo` | Distribuidor de tempo na prova |
| `/calculadoras/calendario-estudo` | Gerador de plano de estudo até a prova |

**Total:** 3

---

## 13. Institucional & Legal (minimalista)

| Slug | Conteúdo |
|---|---|
| `/sobre` 🟡 | Sobre o portal + **única menção visível EMR** ("Conteúdo desenvolvido em parceria com Eu Médico Residente") |
| `/contato` 🟡 | Formulário neutro de contato |
| `/politica-de-privacidade` 🟡 | LGPD |
| `/politica-de-cookies` 🟡 | LGPD cookies |
| `/termos-de-uso` 🟡 | Termos de uso |

**Removidos da v1.0:**
- ❌ `/cursos` como hub comercial (renomeado para `/preparacao`)
- ❌ `/cursos/[slug]` como LPs de venda
- ❌ `/depoimentos` (não faz sentido em portal informacional)
- ❌ `/suporte` (não há produto a suportar — substituído por `/contato`)

---

## 14. URLs Especiais

| URL | Função |
|---|---|
| `/sitemap.xml` | Gerado por `src/app/sitemap.ts` — listar todas as ~110 rotas |
| `/robots.txt` | Allow everything exceto `/design-system` (interno) |
| `/404` | not-found.tsx — manter |
| `/design-system` | Galeria interna de componentes (noindex) ✅ feito |

---

## 15. Mapa de Cross-Links Internos (regras)

Toda página deve ter:

| Tipo de página | Cross-links mínimos |
|---|---|
| Pilar | 3+ para subpáginas próprias + 2+ para outros pilares |
| Subpágina pilar | 1 para o pilar-mãe + 2+ para subpáginas irmãs + 1 para pilar relacionado |
| Artigo de blog | 1 para pilar relacionado + 2+ para outros artigos de blog |
| FAQ artigo | 1 para `/faq` + 1 para pilar relacionado + 2+ para outros FAQ |
| Glossário verbete | 2+ para termos relacionados + 1 para pilar onde o termo aparece |
| Comparativo | 1 para cada entidade comparada (se houver pilar próprio) |

---

## 16. Resumo numérico

| Cluster | Páginas |
|---|---|
| Home | 1 |
| Pilar Institucional `/enamed` + sub | 12 |
| Pilar Técnico `/prova-enamed` + sub | 15 |
| Pilar Áreas `/areas` + sub | 41 |
| Pilar Simulados + sub | 13 |
| Pilar Preparação + sub | 11 |
| Pilar IES + sub | 11 |
| Pilar Carreira + sub | 11 |
| Blog (listing + posts) | 1 + 20 |
| FAQ (listing + artigos) | 1 + 38 |
| Glossário (listing + verbetes) | 1 + 30 |
| Comparativos | 5 |
| Calculadoras | 3 |
| Institucional/legal | 5 |
| Especiais (sitemap, robots, 404, ds) | 4 |
| **Total V1** | **~223 rotas / ~219 indexáveis** |

> Inicial estava em 100-130 — mas mapeando subáreas das `/areas` o número subiu pra ~220. Pode ser **lançado em ondas**: V1.0 com os 7 pilares + 30% das subpáginas + blog inicial + FAQ + glossário core = ~80 páginas; ondas seguintes preenchem.

---

## 17. Ondas de lançamento sugeridas

| Onda | Escopo | Páginas | Janela |
|---|---|---|---|
| **V1.0 — MVP** | Home pivotada + 7 pilares com MDX + 10 FAQ artigos + 10 verbetes + 5 blog posts + sobre/legais | ~35 | 4-6 semanas |
| **V1.1 — Pilares completos** | Todas as subpáginas dos pilares principais | +60 | +4 semanas |
| **V1.2 — Áreas médicas** | `/areas` completo (41 páginas) | +41 | +6 semanas |
| **V1.3 — Ferramentas + comparativos** | Calculadoras + comparativos + glossário completo | +28 | +3 semanas |
| **V1.4 — Editorial cadence** | Blog cresce continuamente + FAQ amplia | contínuo | em diante |
