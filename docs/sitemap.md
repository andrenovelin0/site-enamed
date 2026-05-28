# Sitemap Detalhado — Site ENAMED

Mapa página-a-página com: propósito, blocos de conteúdo, alvos de SEO, schemas estruturados e CTAs cruzados.

Legenda:
- 🟢 já scaffoldada · 🟡 scaffold existe mas vazia · 🔴 não criada
- **KW** = keyword principal · **KW-sec** = secundárias / cauda-longa

---

## 0. Home — `/` 🟡

**Propósito:** Pilar de autoridade. Consolida entidades semânticas e distribui link equity para os 5 clusters.

**KW:** "Enamed" · **KW-sec:** "Exame Nacional de Avaliação da Formação Médica", "Prova Enamed"

**Blocos:**
1. **Hero** — H1 com a entidade-mãe + subtítulo de proposta de valor + CTA primário (simulado/curso).
2. **Visão Geral do ENAMED** — definição técnica curta + link para `/enamed`.
3. **Público-Alvo** — quem precisa fazer + elegibilidade (snippet) + link para `/enamed#elegibilidade`.
4. **Hub de Clusters** — cards para os 5 pilares (`/enamed`, `/prova-enamed`, `/simulados-enamed`, `/cursos`, `/ies`).
5. **Prova Social** — depoimentos resumidos + link para `/depoimentos`.
6. **CTA Comercial** — bloco de conversão → `/cursos`.
7. **Últimos do Blog** — 3 cards recentes → `/blog`.
8. **FAQ Snippet** — top 5 perguntas → `/faq`.

**Schemas:** Organization, WebSite (SearchAction), BreadcrumbList (raiz), AggregateRating (se houver).

**CTAs:** primário → `/cursos`; secundário → `/simulados-enamed`.

---

## 1. Cluster Institucional & Informativo

### 1.1 `/enamed` 🟡 — **Pilar do cluster institucional**

**Propósito:** Guia enciclopédico sobre o exame. Topo de funil informativo.

**KW:** "o que é Enamed" · **KW-sec:** "Enamed vs Revalida", "história do Enamed", "obrigatoriedade Enamed"

**Blocos:**
1. Hero + TOC.
2. **Definição e Objetivos** — competências avaliadas + finalidade para o SUS.
3. **Elegibilidade** — quem é obrigado, quem pode optar, calendário.
4. **Contexto Histórico** — evolução da avaliação no Brasil, criação do Enamed.
5. **Diferenciação de Exames** — tabela comparativa Enamed × Revalida × residência médica.
6. CTA cruzado → `/prova-enamed` (próximo passo lógico) + `/simulados-enamed`.

**Schemas:** Article, BreadcrumbList, FAQPage (se houver bloco de perguntas).

**Conteúdo:** MDX em `content/pilares/enamed.mdx`.

---

## 2. Cluster Técnico da Avaliação

### 2.1 `/prova-enamed` 🟡 — **Pilar do cluster técnico**

**Propósito:** Logística, metodologia e desempenho.

**KW:** "prova Enamed" · **KW-sec:** "TRI Enamed", "método Angoff Enamed", "nota de corte Enamed", "quantas questões Enamed"

**Blocos:**
1. Hero + TOC.
2. **Metodologia de Avaliação** — Teoria de Resposta ao Item (TRI), método Angoff, pontuação bruta.
3. **Estrutura do Exame** — número de questões, divisão por área, tempo total.
4. **Análise de Desempenho** — notas de corte, cálculo da nota final, impacto na carreira.
5. CTA cruzado → `/simulados-enamed` + `/cursos`.

**Schemas:** Article, BreadcrumbList, HowTo (para "como funciona a TRI" se aplicável).

**Conteúdo:** MDX em `content/pilares/prova-enamed.mdx`.

---

## 3. Cluster de Performance e Prática

### 3.1 `/simulados-enamed` 🟡 — **Pilar do cluster de performance**

**Propósito:** Hub de diagnóstico (não só treino). Landing/SEO; produto funcional vive em app externo.

**KW:** "simulados Enamed" · **KW-sec:** "questões comentadas Enamed", "simulado diagnóstico medicina", "banco de questões Enamed"

**Blocos:**
1. Hero + TOC.
2. **O que é um simulado Enamed** — definição + diferencial diagnóstico.
3. **Questões Comentadas** — explicação metodológica + link para amostra.
4. **Simulados Temporizados** — descrição da experiência + CTA para app externo.
5. **Dashboard de Desempenho** — descritivo do produto externo + screenshots.
6. **Simulados por Área** — grid linkando para `/simulados-enamed/[area]`.
7. **Integração B2B (IES)** — bloco curto + link para `/ies`.
8. CTA cruzado → `/cursos` + waitlist do app.

**Schemas:** Article, BreadcrumbList, ItemList (lista de subáreas).

**Conteúdo:** MDX em `content/pilares/simulados-enamed.mdx`.

### 3.2 `/simulados-enamed/[area]` 🔴 — **Landing por especialidade**

**Áreas (slugs):**
- `clinica-medica` — Cardiologia, Pneumo, Gastro, Nefro, Endócrino, Infecto
- `cirurgia` — Cirurgia Geral, Trauma, Pré/Pós-op, Ética Cirúrgica
- `pediatria` — Neonatologia, Crescimento, Urgências
- `ginecologia-obstetricia` — Pré-natal, Mecanismo de parto, Puerpério, Ginecologia geral
- `saude-coletiva` — SUS, Epidemiologia, Bioestatística, Políticas Públicas
- `etica-legislacao` — Código de Ética, Resoluções CFM

**KW:** "simulado enamed [área]" · **KW-sec:** subtemas listados acima

**Blocos por página:**
1. Hero específico da área.
2. **Tópicos cobertos** — lista expandida dos subtemas.
3. **Questões comentadas (amostra)** — 3-5 exemplos com explicação.
4. **Erros comuns** — bloco didático.
5. CTA → app externo + curso correspondente.
6. Links cruzados para `/blog` (artigos da mesma área).

**Schemas:** Article, BreadcrumbList, ItemList.

**Conteúdo:** MDX em `content/simulados/[area].mdx` (1 por área).

---

## 4. Cluster Comercial

### 4.1 `/cursos` 🟡 — **Pilar comercial (plural)**

**Propósito:** Ranqueia buscas plurais ("cursos enamed", "preparatórios enamed"). NÃO substitui páginas individuais (singular).

**KW:** "cursos Enamed" · **KW-sec:** "preparatórios Enamed", "melhor curso Enamed"

**Blocos:**
1. Hero + TOC.
2. **Por que se preparar com curso** — argumentação.
3. **Catálogo de Programas** — cards para `/cursos/[slug]`.
4. **Mentoria Especializada** — bloco descritivo (`#mentoria` anchor).
5. **Prova Social** — depoimentos curtos + estatísticas de aprovação → `/depoimentos`.
6. **Transparência Comercial** — planos, preços, garantias.
7. **FAQ comercial** — top 5 dúvidas (com schema FAQPage).
8. CTA primário → contato/inscrição.

**Schemas:** Article, BreadcrumbList, ItemList (catálogo), FAQPage.

**Conteúdo:** MDX em `content/pilares/cursos.mdx`.

### 4.2 `/cursos/[slug]` 🔴 — **LP individual de curso**

**Propósito:** Ranqueia buscas singulares ("preparatório para Enamed", "curso intensivo Enamed").

**Slugs (a definir com cliente):** `intensivo`, `completo`, `mentoria`, `revisao-final` (placeholders).

**Blocos por LP:**
1. Hero com nome do curso + USP + CTA.
2. **Para quem é** — persona-alvo.
3. **O que está incluso** — bullets de entregáveis.
4. **Cronograma/Grade** — módulos/semanas.
5. **Professores/Mentores** — bios curtas + foto.
6. **Depoimentos específicos** — relacionados ao curso.
7. **Investimento** — planos + condições.
8. **FAQ específica** do curso.
9. CTA fixo (sticky) → checkout/contato.

**Schemas:** Course, Offer (preço), BreadcrumbList, FAQPage.

**Conteúdo:** MDX em `content/cursos/[slug].mdx`.

---

## 5. Cluster IES (B2B)

### 5.1 `/ies` 🟡 — **Pilar B2B**

**Propósito:** Capturar coordenadores e diretores de IES.

**KW:** "Enamed IES" · **KW-sec:** "nota do enamed impacta a faculdade", "enamed e sanções do mec", "consultoria enamed para ies", "programa de preparação enamed para faculdades"

**Blocos:**
1. Hero institucional.
2. **Desempenho Institucional no ENAMED** — como as IES são avaliadas pelo MEC.
3. **Impactos e Riscos** — credenciamento, sanções.
4. **Estratégias de Melhoria** — frameworks.
5. **Solução proposta** — programa/consultoria/integração de simulados → CTA contato comercial.
6. Cases (se houver).
7. Links cruzados para `/blog` (artigos IES) e `/depoimentos` (institucionais).

**Schemas:** Article, BreadcrumbList, Service (oferta B2B), Organization.

**Conteúdo:** MDX em `content/pilares/ies.mdx`.

---

## 6. Conteúdo Dinâmico

### 6.1 `/blog` 🟡 — **Listagem**

**Propósito:** Fresh content — notícias, editais, análises de provas.

**KW:** "blog Enamed" · **KW-sec:** "novidades Enamed", "edital Enamed [ano]"

**Blocos:**
1. Hero curto.
2. **Filtro por categoria** — chips: Notícias, Edital, Análise de Prova, Carreira, IES.
3. **Lista paginada** — 12 posts/página, cards com cover, título, excerpt, data, categoria.
4. **Sidebar** (desktop): posts populares, newsletter (opcional V1.1).

**Schemas:** Blog, BreadcrumbList, ItemList.

### 6.2 `/blog/[slug]` 🔴 — **Detalhe de post**

**Blocos:**
1. Hero do post (título, autor, data, tempo de leitura, categoria).
2. **TOC** lateral (desktop) / superior (mobile).
3. **Corpo MDX** — H2/H3 estruturados, imagens otimizadas, citações.
4. **Author bio** ao final.
5. **Posts relacionados** — 3 da mesma categoria.
6. **CTA contextual** — curso/simulado relacionado.
7. Compartilhar social.

**Schemas:** Article (NewsArticle quando aplicável), BreadcrumbList, Person (autor).

**Conteúdo:** MDX em `content/blog/[slug].mdx` com frontmatter (title, date, author, category, cover, excerpt).

### 6.3 `/faq` 🟡 — **Single page por categorias**

**Propósito:** Featured snippets + long-tail.

**KW:** "perguntas frequentes Enamed" · **KW-sec:** cauda-longa de cada pergunta

**Blocos:**
1. Hero + busca interna (filtro client-side).
2. **Categorias** com anchors (`#sobre-o-exame`, `#prova`, `#preparacao`, `#ies`, `#comercial`).
3. **Accordion de Q&A** por categoria.
4. CTA → `/suporte` ou `/contato`.

**Schemas:** FAQPage (crítico para snippets).

**Conteúdo:** MDX ou YAML estruturado em `content/faq/[categoria].mdx`.

---

## 7. Páginas Institucionais

### 7.1 `/sobre` 🟡

Apresentação da organização, missão, equipe, autoridade temática (porque devemos ser ouvidos sobre Enamed).
**Schemas:** AboutPage, Organization.

### 7.2 `/depoimentos` 🟡

Grid de depoimentos com foto, nome, instituição, ano de aprovação, citação. Inclui números agregados (aprovados, NPS).
**Schemas:** Review, AggregateRating.

### 7.3 `/contato` 🟡

Formulário (server action ou serviço externo — definir) + dados (e-mail, telefone, endereço). Validação client + server.
**Schemas:** ContactPage, ContactPoint (Organization).

### 7.4 `/suporte` 🟡

Central de ajuda — categorias de problemas comuns + links para FAQ + acesso ao atendimento.
**Schemas:** WebPage.

---

## 8. Páginas Legais

### 8.1 `/politica-de-privacidade` 🟡

Texto LGPD-completo. Encarregado de dados, base legal, direitos, retenção.

### 8.2 `/politica-de-cookies` 🟡

Categorias de cookies, finalidade, controle pelo usuário. Linka com banner de consentimento.

### 8.3 `/termos-de-uso` 🟡

Condições de uso do site, propriedade intelectual, foro.

---

## 9. URLs Especiais

| URL | Função | Status |
|---|---|---|
| `/sitemap.xml` | Gerado por `src/app/sitemap.ts` | 🟡 stub existe — implementar |
| `/robots.txt` | Gerado por `src/app/robots.ts` | 🟡 stub existe — implementar |
| `/404` (not-found) | Já em `src/app/not-found.tsx` | 🟢 |

---

## 10. Mapa de Links Internos (anchors críticas)

| De | Para | Razão |
|---|---|---|
| Todo artigo de área médica em `/blog` | `/simulados-enamed/[mesma-area]` | Conversão para prática |
| Todo artigo de área médica em `/blog` | `/cursos` ou `/cursos/[slug]` | Conversão comercial |
| `/enamed` | `/prova-enamed` | Próximo passo lógico (informacional → técnico) |
| `/prova-enamed` | `/simulados-enamed` | Técnico → prática |
| `/simulados-enamed` | `/cursos` | Prática → comercial |
| `/ies` | `/contato` (B2B) | Conversão B2B |
| Footer em todas | 4 grupos: Conteúdo, Comercial, Suporte, Institucional | Distribuição de link equity |

---

## 11. Tabela-resumo (status de implementação)

| Rota | Status | Conteúdo MDX | Schemas |
|---|---|---|---|
| `/` | 🟡 página existe (10kb) | — | Organization, WebSite |
| `/enamed` | 🟡 (1.7kb) | `content/pilares/enamed.mdx` | Article, FAQPage |
| `/prova-enamed` | 🟡 (1.5kb) | `content/pilares/prova-enamed.mdx` | Article |
| `/simulados-enamed` | 🟡 (2kb) | `content/pilares/simulados-enamed.mdx` | Article, ItemList |
| `/simulados-enamed/[area]` | 🔴 | 6 arquivos em `content/simulados/` | Article |
| `/cursos` | 🟡 (1.7kb) | `content/pilares/cursos.mdx` | Article, FAQPage |
| `/cursos/[slug]` | 🔴 | N arquivos em `content/cursos/` | Course, FAQPage |
| `/ies` | 🟡 (2kb) | `content/pilares/ies.mdx` | Article, Service |
| `/blog` | 🟡 (1.5kb) | — | Blog, ItemList |
| `/blog/[slug]` | 🔴 | N arquivos em `content/blog/` | Article |
| `/faq` | 🟡 (2kb) | `content/faq/*.mdx` | FAQPage |
| `/sobre` | 🟡 (1.4kb) | `content/institucional/sobre.mdx` | AboutPage |
| `/depoimentos` | 🟡 (2kb) | `content/institucional/depoimentos.json` | Review |
| `/contato` | 🟡 (3kb) | — | ContactPage |
| `/suporte` | 🟡 (2kb) | `content/institucional/suporte.mdx` | WebPage |
| `/politica-de-privacidade` | 🟡 (1.4kb) | `content/legal/privacidade.mdx` | — |
| `/politica-de-cookies` | 🟡 (1.4kb) | `content/legal/cookies.mdx` | — |
| `/termos-de-uso` | 🟡 (1.3kb) | `content/legal/termos.mdx` | — |
| `/sitemap.xml` | 🟡 stub | — | — |
| `/robots.txt` | 🟡 stub | — | — |
