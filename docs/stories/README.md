# Epics & Stories — Site ENAMED

Roteiro de implementação derivado de `docs/prd.md` (§9) e `docs/sitemap.md`. Cada epic é uma fatia entregável, com stories sequenciáveis dentro.

**Convenção:** stories detalhadas serão criadas por `@sm *create-story` consumindo este índice. Aqui ficam apenas os títulos, escopo de aceitação e dependências.

**Ordem recomendada:** EPIC-001 → EPIC-003 → (002, 004, 005, 006 em paralelo) → (007, 008, 009) → EPIC-010.

---

## EPIC-001 — Fundação técnica & Design System base · **P0**

**Objetivo:** Tornar o projeto "pronto para receber conteúdo": tokens, layout shell, navegação, SEO base.

**Pré-requisito:** Consultar `node_modules/next/dist/docs/` para `app/layout`, `metadata`, `font`, `image`.

| ID | Story | DoD essencial |
|---|---|---|
| 001.1 | Tokens de design system (cores, tipografia, espaçamento, radius) via Tailwind v4 `@theme` | `globals.css` com tokens nomeados; documentação inline |
| 001.2 | Layout shell — Header + Footer + container responsivo | `<SiteHeader>` e `<SiteFooter>` consumindo `navigation.ts`; mobile menu acessível |
| 001.3 | Helpers SEO (`generateMetadata`, OG, canonical, hreflang=`pt-BR`) | `src/lib/seo.ts`; aplicado em `layout.tsx` raiz |
| 001.4 | Helpers Schema.org (Organization, BreadcrumbList, WebSite) | `src/lib/schema-org.ts`; testes unitários |
| 001.5 | `sitemap.ts` + `robots.ts` funcionais | XML válido com todas as rotas estáticas conhecidas |
| 001.6 | Componente `<Breadcrumb>` + `<CtaBlock>` reusáveis | Storybook/exemplo em página de teste; a11y AA |
| 001.7 | `not-found.tsx` ajustada ao novo DS | Já existe — só re-tematizar |

---

## EPIC-002 — Home & Pilares informacionais · **P0**

**Objetivo:** Entregar Home + `/enamed` + `/prova-enamed` com conteúdo real (placeholder editorial até o cliente fornecer).

| ID | Story | DoD essencial |
|---|---|---|
| 002.1 | Refator da Home — hero, hub de clusters (6 cards), prova social stub, CTA comercial, últimos do blog, FAQ snippet | Lighthouse SEO ≥95; LCP <2.5s |
| 002.2 | Página `/enamed` consumindo `content/pilares/enamed.mdx` com TOC + breadcrumb + Article schema | MDX renderiza; H1 único; FAQ schema se houver bloco |
| 002.3 | Página `/prova-enamed` consumindo `content/pilares/prova-enamed.mdx` | Mesma checklist da 002.2 |

**Dependências:** EPIC-001, EPIC-003 (MDX pipeline).

---

## EPIC-003 — Camada de conteúdo MDX · **P0**

**Objetivo:** Pipeline para ler, validar e renderizar conteúdo MDX local.

**Pré-requisito:** Consultar `node_modules/next/dist/docs/` para `mdx`, `app-router-mdx`, `dynamic-routes`, `generate-static-params`.

| ID | Story | DoD essencial |
|---|---|---|
| 003.1 | Loader de filesystem (`src/lib/content.ts`) — lista, filtra, valida frontmatter | API tipada; cobertura unitária |
| 003.2 | Renderer MDX + componentes mapeados (`mdx-components.tsx`) | Tags HTML básicas estilizadas; custom components disponíveis |
| 003.3 | Componente `<Toc>` (sticky desktop, accordion mobile) gerado a partir do conteúdo | Funciona em todas as páginas-pilares |
| 003.4 | Componentes MDX `<Callout>`, `<CTA>`, `<CompareTable>`, `<Faq>`, `<Quote>` | Documentados em `content/_examples.mdx` |

---

## EPIC-004 — Blog dinâmico · **P0**

| ID | Story | DoD essencial |
|---|---|---|
| 004.1 | `/blog` listagem com filtro por categoria + paginação | URLs `?categoria=x&p=2` indexáveis; canonicals corretos |
| 004.2 | `/blog/[slug]` detalhe + Article schema + author bio + related posts | LCP <2.5s; OG image custom |
| 004.3 | 3 posts seed em `content/blog/` (edital, análise de prova, carreira) | Aprovados pelo cliente |
| 004.4 | RSS feed `/blog/rss.xml` (opcional) | XML válido |

**Dependências:** EPIC-003.

---

## EPIC-005 — Hub Simulados & subáreas · **P0**

| ID | Story | DoD essencial |
|---|---|---|
| 005.1 | Refator de `/simulados-enamed` consumindo `content/pilares/simulados-enamed.mdx` + grid de subáreas | Links para cada `/simulados-enamed/[area]` |
| 005.2 | Rota dinâmica `/simulados-enamed/[area]` com 6 MDX (clínica, cirurgia, pediatria, GO, saúde coletiva, ética) | `generateStaticParams` lê os 6 slugs; CTAs cruzados |
| 005.3 | Componente `<AreaGrid>` reusável | Aceita lista de áreas + cor/ícone por área |

**Dependências:** EPIC-003.

---

## EPIC-006 — Hub Cursos & páginas individuais · **P0**

| ID | Story | DoD essencial |
|---|---|---|
| 006.1 | `/cursos` (hub plural) com catálogo de cards + FAQ comercial | Schema FAQPage + ItemList |
| 006.2 | `/cursos/[slug]` LP individual (Course schema + Offer + sticky CTA) | LP-grade UX; checklist de conversão |
| 006.3 | 1 LP-seed para validação (ex: `intensivo`) | Aprovada pelo cliente |
| 006.4 | Componente `<CourseCard>` + `<PricingTable>` | Acessíveis AA |

**Dependências:** EPIC-003. **Bloqueio externo:** lista final de cursos do cliente.

---

## EPIC-007 — Hub IES · **P1**

| ID | Story | DoD essencial |
|---|---|---|
| 007.1 | `/ies` consumindo `content/pilares/ies.mdx` (B2B, MEC, programa institucional) | Service schema + CTA contato comercial |
| 007.2 | 2 artigos seed em `/blog` categoria "IES" | Aprovados pelo cliente |

**Dependências:** EPIC-003, EPIC-004.

---

## EPIC-008 — FAQ & páginas institucionais · **P1**

| ID | Story | DoD essencial |
|---|---|---|
| 008.1 | `/faq` com busca client-side + accordion por categoria + FAQPage schema | Snippets validados em rich results test |
| 008.2 | `/sobre` com missão/equipe/autoridade | AboutPage schema |
| 008.3 | `/depoimentos` com Review/AggregateRating | Dados em `content/institucional/depoimentos.json` |
| 008.4 | `/contato` com formulário + server action **OU** integração externa (definir) | Validação client+server; LGPD-compliant |
| 008.5 | `/suporte` central de ajuda | Categorias + atalhos para FAQ |

**Bloqueio externo:** decisão sobre destino da submissão do `/contato`.

---

## EPIC-009 — Conformidade legal · **P1**

| ID | Story | DoD essencial |
|---|---|---|
| 009.1 | Conteúdo final de `/politica-de-privacidade`, `/politica-de-cookies`, `/termos-de-uso` | Revisão jurídica do cliente |
| 009.2 | Banner LGPD de consentimento (cookie-banner) | Bloqueia GA/GTM até consent; preferências persistidas |
| 009.3 | Helper `usePreferences()` para ler/escrever consent | Consumido pelo Epic 010 (analytics) |

---

## EPIC-010 — Analytics & lançamento · **P1**

| ID | Story | DoD essencial |
|---|---|---|
| 010.1 | Integração GA4/GTM via env, gatekeeping por consent | Sem network call antes do opt-in |
| 010.2 | Eventos custom (`click_cta_curso`, `click_cta_simulado`, `submit_contato`) | Validados no DebugView |
| 010.3 | Auditoria final Lighthouse + axe em todas as rotas-pilares | Relatório anexo à PR final |
| 010.4 | Deploy (Vercel ou alternativa) + domínio + cert + redirects do site antigo (se houver) | Smoke test pós-deploy |
| 010.5 | Submissão de `sitemap.xml` ao Google Search Console + Bing Webmaster | Indexação iniciada |

**@devops exclusivo:** deploy, DNS, push final.

---

## Métricas por Epic

| Epic | Effort estimado | Bloqueios externos |
|---|---|---|
| 001 | M | — |
| 002 | M | Texto editorial dos pilares |
| 003 | M | — (técnico puro) |
| 004 | M | 3 posts seed do cliente |
| 005 | M | 6 textos das áreas |
| 006 | L | Lista de cursos + LP-seed do cliente |
| 007 | S | Texto IES + 2 artigos |
| 008 | M | Destino do formulário + textos institucionais |
| 009 | S | Texto jurídico revisado |
| 010 | M | Acesso à hospedagem + domínio |

S = ≤3 dias · M = 3-7 dias · L = >7 dias (estimativas grosseiras; @sm/@dev calibram nas stories detalhadas).

---

## Próximos passos imediatos

1. **Validar este PRD + sitemap + arquitetura** com o cliente.
2. Encaminhar dúvidas em `docs/architecture.md` §12.
3. Após GO, `@sm *create-story 001.1` para começar a expansão da primeira story detalhada.
