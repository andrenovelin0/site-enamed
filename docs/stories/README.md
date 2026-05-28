# Epics & Stories v2.0 — Portal ENAMED

**Atualizado:** 2026-05-27 (pivô white-label) · **Versão:** 2.0 · **Substitui v1.0**

Roteiro de execução pós-pivô. Cada epic é uma fatia entregável que avança a estratégia [`docs/prd.md` v2.0](../prd.md) e [`docs/geo-strategy.md`](../geo-strategy.md).

> **Stories detalhadas:** serão criadas por `@sm *draft` consumindo este índice. Aqui ficam apenas títulos, escopo de aceitação e dependências.

---

## EPIC-001 — Fundação técnica & DS ✅ (concluído com ressalva)

- 001.6a Button ✅
- ⚠️ **Pendente:** Logo neutro substituindo o wordmark "ENAMED" no header → reabrir como sub-story 001.8 (@ux + @dev)

## EPIC-003 — MDX pipeline ✅ (concluído)

- 003.1 ✅ (pipeline + /enamed piloto). Conteúdo seed precisa de **revisão editorial** pra remover qualquer tom comercial residual e adicionar `<dl>` patterns + answer-first.

---

## EPIC-002 (NOVO) — **Pivô white-label · CRÍTICO P0**

**Objetivo:** Eliminar qualquer rastro de venda/EMR no front. Site fica neutro, informacional.

| Story | Escopo | Dependências |
|---|---|---|
| 002.1 | Refator da Home — remover "Fazer simulado gratuito", "Conhecer cursos", e os 2 CTAs comerciais inferiores | EPIC-001 |
| 002.2 | Refator do Header — remover botões "Simulado grátis" + "Ver cursos"; substituir por nav neutra (talvez link "Glossário"/"FAQ" em destaque) | 002.1 |
| 002.3 | Renomear `/cursos` → `/preparacao` (redirect 301, atualiza navigation, sitemap) | — |
| 002.4 | Refator do Footer — adicionar linha discreta "Conteúdo desenvolvido em parceria com Eu Médico Residente"; revisar copy | — |
| 002.5 | Logo neutro (substituir "ENAMED" no header) — @ux desenha, @dev integra | EPIC-001 |
| 002.6 | Atualizar metadata global (title pattern: "%s · Portal ENAMED"); tagline em layout | 002.1 |

---

## EPIC-004 — Pilares informacionais (7 pilares com MDX) · P0

Aplicar o padrão de `/enamed` aos demais. **Cada pilar:** content MDX + page.tsx + Article schema + breadcrumb + cross-CTA neutro.

| Story | Pilar |
|---|---|
| 004.1 | `/prova-enamed` MDX |
| 004.2 | `/simulados-enamed` MDX (informacional, sem CTA para app externo) |
| 004.3 | `/preparacao` MDX (era /cursos) |
| 004.4 | `/ies` MDX |
| 004.5 | `/areas` (novo pilar) + 6 áreas pilares (clinica, cirurgia, etc.) |
| 004.6 | `/carreira` (novo pilar) MDX |

Pré-requisitos por story: conteúdo seed escrito (eu @pm posso rascunhar; revisão editorial obrigatória antes de publicar).

---

## EPIC-005 — Subpáginas dos pilares (~80 páginas) · P0

Cada subpágina é um `route.tsx` simples + `content/<pilar>/<slug>.mdx`. Padrão e template já estabelecidos.

Stories por lote (~10 subpáginas por story):
| Story | Lote |
|---|---|
| 005.1 | `/enamed/*` (11 subpáginas) |
| 005.2 | `/prova-enamed/*` (14) |
| 005.3 | `/simulados-enamed/*` (13) |
| 005.4 | `/preparacao/*` (10) |
| 005.5 | `/ies/*` (10) |
| 005.6 | `/carreira/*` (10) |
| 005.7 | `/areas/clinica-medica/*` (8 subtemas) |
| 005.8 | `/areas/cirurgia/*` (6) |
| 005.9 | `/areas/pediatria/*` (5) |
| 005.10 | `/areas/ginecologia-obstetricia/*` (6) |
| 005.11 | `/areas/saude-coletiva/*` (6) |
| 005.12 | `/areas/etica-medica/*` (4) |

**Total:** 103 sub-páginas em 12 stories.

---

## EPIC-006 — Blog dinâmico · P0

| Story | Escopo |
|---|---|
| 006.1 | `/blog` listagem (filtro por categoria + paginação) |
| 006.2 | `/blog/[slug]` template + Article/NewsArticle schema |
| 006.3 | 5 posts seed em categorias diversas |
| 006.4 | RSS feed `/blog/rss.xml` (opcional V1) |

---

## EPIC-007 — FAQ dual-mode · P0

| Story | Escopo |
|---|---|
| 007.1 | `/faq` single page com schema FAQPage + categorias |
| 007.2 | `/faq/[slug]` dynamic route + schema QAPage |
| 007.3 | 15 FAQ artigos seed (das categorias mais buscadas) |

---

## EPIC-008 — Glossário · P1

| Story | Escopo |
|---|---|
| 008.1 | `/glossario` listagem A-Z + filtro |
| 008.2 | `/glossario/[termo]` template + schema DefinedTerm |
| 008.3 | 20 verbetes seed |

---

## EPIC-009 — Ferramentas (calculadoras + comparativos) · P1

| Story | Escopo |
|---|---|
| 009.1 | `/comparativos/enamed-vs-revalida` template + conteúdo |
| 009.2 | `/comparativos/enamed-vs-enade` |
| 009.3 | `/comparativos/enamed-vs-residencia` |
| 009.4 | `/calculadoras/estimador-nota-tri` (componente cliente + UX) |
| 009.5 | `/calculadoras/distribuicao-tempo` |

---

## EPIC-010 — Institucional + legal · P1

| Story | Escopo |
|---|---|
| 010.1 | `/sobre` com menção EMR + missão |
| 010.2 | `/contato` formulário neutro |
| 010.3 | `/politica-de-privacidade`, `/politica-de-cookies`, `/termos-de-uso` |
| 010.4 | Banner LGPD de consentimento |

---

## EPIC-011 — GEO/Schema avançado · P0

**Crítico** para o diferencial estratégico. Não esperar fim dos pilares pra fazer — pode ir em paralelo com EPIC-004.

| Story | Escopo |
|---|---|
| 011.1 | Estender `structured-data.tsx` — FAQPageJsonLd, QAPageJsonLd, DefinedTermJsonLd, WebApplicationJsonLd |
| 011.2 | Componente `<AnswerBox>` — callout especial pra resposta-direta no topo |
| 011.3 | Componente `<Definition term="" />` — renderiza `<dl>` semântico |
| 011.4 | Componente `<Citation>` — citação inline com `<cite>` e link |
| 011.5 | Componente `<UpdatedAt>` — exibe `dateModified` na página |
| 011.6 | Auditoria de schema (Rich Results Test) em todas as pilares |

---

## EPIC-012 — Analytics, performance, lançamento · P1

| Story | Escopo |
|---|---|
| 012.1 | GA4 + GTM via env, gate por consent (LGPD) |
| 012.2 | Auditoria Lighthouse + axe nos 7 pilares |
| 012.3 | Submissão `sitemap.xml` ao GSC + Bing |
| 012.4 | Deploy (Vercel ou alt) — @devops |

---

## Estimativas grosseiras

| Epic | Effort total |
|---|---|
| 002 (pivô) | M (2-3 dias) |
| 004 (7 pilares) | L+ (~2-3 semanas com conteúdo seed) |
| 005 (sub-páginas) | XL (~6-8 semanas com conteúdo seed) |
| 006 (blog) | M+ (~1 semana) |
| 007 (FAQ) | M (~1 semana) |
| 008 (glossário) | M (~1 semana) |
| 009 (ferramentas) | M+ (~1-2 semanas) |
| 010 (institucional) | S (~3-5 dias) |
| 011 (GEO/schema) | M (~1 semana, paralelo) |
| 012 (lançamento) | M (~1 semana) |

**Crítico V1.0 (lançamento mínimo viável):** EPIC-002 + EPIC-004 + EPIC-007 + EPIC-010 + EPIC-011 + EPIC-012 = **~35 páginas em ~6-8 semanas**.

---

## Próximos passos imediatos

1. **Aprovar este novo escopo** (PRD v2.0 + sitemap v2.0 + estratégia GEO)
2. **`@sm *draft 002.1`** — primeira story do pivô white-label (refator Home)
3. **Em paralelo:** revisar `/enamed.mdx` existente para alinhar com novo tom editorial (eu @pm posso rascunhar revisão)
4. **Em paralelo:** @ux design do logo neutro (story 002.5)
