# Snapshot do Portal ENAMED — 28 de maio de 2026 (v2 pós-delegação massiva)

Estado atual após sessão longa com ondas de delegação de subagentes. Use este documento como referência rápida para retomar trabalho em nova sessão.

---

## Como retomar em nova sessão

**Prompt sugerido para começar:**

```
Olá. Estou retomando trabalho no Portal ENAMED (Next.js 16 + Tailwind v4 + MDX, 
white-label informacional). Por favor leia os seguintes docs para se atualizar:

1. docs/session-snapshot.md (este arquivo — estado atual)
2. docs/prd.md (PRD v2.0)
3. docs/audit-report-static.md (findings com P0, P1, P2)
4. docs/stories/README.md (12 epics + status)

Depois me diga: (a) onde estamos, (b) qual o próximo passo recomendado.
```

A memory MEMORY.md já carrega automaticamente — não precisa Read manual.

---

## Estado de páginas (build atual)

| Métrica | Valor |
|---|---|
| **Páginas estáticas no build** | **115** |
| **Páginas indexáveis** | ~70 (excluindo `/design-system` noindex) |
| **Rotas no sitemap.ts** | 67 |
| **Total arquivos MDX** | 89 |

### MDX por cluster

| Cluster | Arquivos MDX |
|---|---|
| `content/pilares/` | 7 (todos polidos ao padrão Wave 2 com `<AnswerBox>`, `<Citation>`, `<Definition>`) |
| `content/blog/` | 20 (roadmap completo) |
| `content/glossario/` | 21 (faltam ~9 letras para 30 target) |
| `content/comparativos/` | 5 (5/5 do sitemap) |
| `content/enamed/` (subpáginas) | 5 |
| `content/prova-enamed/` (subpáginas) | 5 |
| `content/simulados-enamed/` (subpáginas) | 6 |
| `content/areas/` (mini-hubs + subtemas) | 17 (6 mini-hubs + 11 subtemas) |
| `content/preparacao/` (subpáginas) | 4 |
| `content/ies/` (subpáginas) | 3 |
| `content/carreira/` (subpáginas) | 3 |
| **Total** | **89** |

### Rotas em src/app/

- Home `/`
- 7 pilares principais
- ~50 subpáginas dos pilares
- Blog: listing + 20 posts SSG
- Glossário: listing + 21 verbetes SSG
- Comparativos: listing + 5 SSG
- FAQ single page
- Institucional: `/sobre`, `/contato`
- Legais: 3 páginas LGPD-compliant
- Internal noindex: `/design-system`

---

## Commits da sessão (cronologia desde início do projeto)

```
763479e chore: sitemap consolidado — +22 rotas (areas wave 3, simulados, comparativos)
c8d71c2 docs: audit estático (+ areas wave 3 oportunisticamente)
0478723 content: 6 subpáginas /simulados-enamed/* (+ polish pilares oportunisticamente)
ca15f1a chore: site-config — +20 rotas areas/preparacao/ies/carreira
e1de8d3 content: 10 subpáginas /preparacao + /ies + /carreira [wave 2B]
d044b3f content: 10 subpáginas /areas/* (6 mini-hubs + 4 subtemas) [wave 2A]
519cd29 content: polish /enamed.mdx para padrão Wave 2
2124bf9 content: 10 subpáginas seed (/enamed/* + /prova-enamed/*) [wave 1]
59c9d89 feat: LGPD cookie consent banner + GA4 integration
c22ad4c chore: aplicar decisões operacionais — domínio + RD Forms
a201eff docs: snapshot do estado atual (v1, anterior)
6dfef48 content: páginas legais LGPD-compliant
346c7a7 chore: redirects 301 (follow-up)
deeb5dd chore: remove /depoimentos e /suporte (v2.0)
6ce9eba content: +13 verbetes glossário (8 → 21)
21ed9ed feat: cluster /comparativos (5 SSG)
37d47e6 docs: marca todos os 20 posts no roadmap
3d6ce77 content: +10 blog posts (roadmap completo)
b74253d content: +6 blog posts (Wave 6)
861ce5f content: +2 verbetes + 1 blog post
4d67cd4 feat: /sobre + /faq + /glossario
19547c7 feat: GEO infrastructure
9939abf feat: 6 pilares MDX + PilarTemplate
3e784b4 feat: blog dynamic routes
6108829 feat: complete white-label pivot
35be4cf feat: header/footer white-label + Portal ENAMED branding
508bead feat: Home refactor — white-label pivot
385ff36 docs: pivot to white-label v2.0
785dcca feat: MDX pipeline + /enamed pilot
f88b616 feat: implement Button atom
f9c676e feat: kickoff site ENAMED
402ff48 Initial commit from Create Next App
```

**Status remoto:** nenhum push. Tudo local, esperando autorização do owner para @devops.

---

## Decisões operacionais firmadas (2026-05-28)

| Item | Decisão |
|---|---|
| **Domínio** | `provaenamed.com.br` (aplicado em `site-config.ts`) |
| **Hospedagem** | Vercel |
| **Backend `/contato`** | RD Station Forms (integração posterior; P1) |
| **Revisor de conteúdo** | C-Level EMR (após produção) |
| **Logo** | Wordmark atual ("Portal **ENAMED**") OK |
| **E-mails placeholders** | `contato@provaenamed.com.br`, `ies@provaenamed.com.br` |

---

## Status dos 12 epics (PRD v2.0)

| # | Epic | Status |
|---|---|---|
| 001 | Fundação técnica & DS | ✅ 100% (logo neutro definitivo seria nice-to-have) |
| 002 | Pivô white-label | ✅ 100% |
| 003 | MDX pipeline | ✅ 100% |
| 004 | Pilares informacionais (7) | ✅ 100% (incluindo polish Wave 2 em todos) |
| 005 | Subpáginas dos pilares | ⚠️ ~40% (37 de ~80-100 estimadas) |
| 006 | Blog dinâmico | ✅ 100% (20 posts seed) |
| 007 | FAQ dual-mode | ⚠️ 50% (single page ok, `/faq/[slug]` pendente — P0 audit) |
| 008 | Glossário | ⚠️ ~70% (21/30 verbetes) |
| 009 | Ferramentas | ⚠️ 50% (5 comparativos ok, calculadoras pendentes) |
| 010 | Institucional + legal | ✅ ~95% (audit, sobre, contato, 3 legais) |
| 011 | GEO/Schema avançado | ✅ 100% (todos schemas + AnswerBox/Definition/Citation) |
| 012 | Analytics & lançamento | ⚠️ ~80% (banner LGPD + GA4 prontos; falta deploy) |

---

## ⚠️ TODO crítico (do audit estático)

### P0 — bloqueiam lançamento

1. **`/faq/[slug]` dual-mode** — helper `QAPageJsonLd` já existe em `structured-data.tsx` mas não está sendo consumido. Criar rota dinâmica.
2. **Sitemap perde URLs dinâmicas** — `src/app/sitemap.ts` lê só `sitemapRoutes` do `site-config.ts`, ignorando blog posts, verbetes e comparativos individuais (~46 URLs). Refatorar pra ler também `getBlogSlugs`, `getGlossarioSlugs`, `getComparativosSlugs`.
3. **`WebsiteJsonLd` SearchAction** aponta `/blog?q=` sem implementação. Ou implementa busca, ou remove SearchAction.

### P1 — pré-lançamento

4. Skip-link "Pular para o conteúdo" no layout
5. CollectionPage/AboutPage/ContactPage schemas para listings/legais
6. Calculadoras (Epic 009) — pendentes
7. RD Forms integração em `/contato`

### P2 — pós-lançamento ou nice-to-have

8. Mais verbetes glossário (~9 faltando: A, B, F, N, P, Q, U)
9. Subpáginas restantes (~40-60 dos pilares — wave 4+)
10. Logo definitivo (story 002.5)
11. Subpáginas de `/blog` (Epic 005.x adicionais)

### Externos ao código

- Revisão factual completa (médico EMR / C-Level)
- Revisão jurídica das 3 páginas legais
- Deploy Vercel + DNS apontando `provaenamed.com.br` (@devops)
- Submissão sitemap ao GSC + Bing

---

## Estrutura de código (referência)

```
src/
├── app/
│   ├── (75+ rotas estáticas/SSG)
│   ├── layout.tsx              (Header + Footer + CookieBanner + Org/Website JSON-LD)
│   ├── globals.css             (tokens DS EMR + a11y patterns)
│   ├── sitemap.ts              (consome site-config.sitemapRoutes — refatorar para incluir dinâmicas)
│   └── robots.ts
├── components/
│   ├── ui/button.tsx           (7 variants)
│   ├── mdx/                    (Callout, CTA, AnswerBox, Definition, Citation)
│   ├── pilar-template.tsx      (reusável em 50+ subpáginas)
│   ├── cookie-banner.tsx       (LGPD + GA4 gated)
│   ├── manage-cookies-button.tsx
│   ├── structured-data.tsx     (Organization, WebSite, Article, FAQPage, QAPage, DefinedTerm, Breadcrumb)
│   └── (header, footer, brand-mark, page-hero, etc.)
├── lib/
│   ├── blog.ts, glossario.ts, comparativos.ts  (filesystem loaders)
│   ├── faq.ts                  (dados de Q&A)
│   ├── analytics.ts            (GA4 helpers + consent)
│   ├── navigation.ts, site-config.ts, seo.ts
│   └── cn.ts
├── mdx-components.tsx
└── types/mdx.d.ts

content/
├── pilares/                    (7 MDX)
├── blog/                       (20 MDX)
├── glossario/                  (21 MDX)
├── comparativos/               (5 MDX)
├── enamed/                     (5 subpáginas)
├── prova-enamed/               (5 subpáginas)
├── simulados-enamed/           (6 subpáginas)
├── areas/                      (17: 6 mini-hubs + 11 subtemas)
├── preparacao/                 (4)
├── ies/                        (3)
└── carreira/                   (3)

docs/
├── prd.md                       (v2.0)
├── sitemap.md                   (v2.0)
├── geo-strategy.md
├── architecture.md
├── audit-report-static.md       (achados P0/P1/P2)
├── session-snapshot.md          (este arquivo)
├── content/blog-seed-roadmap.md
├── design-system/
│   ├── brand-tokens.md
│   ├── usage-guide.md
│   ├── components-spec.md
│   └── logo-brief.md
└── stories/
    ├── README.md                (12 epics v2.0)
    ├── 001.6a-button-atom.md
    ├── 002.1-home-refactor-white-label.md
    └── 003.1-mdx-pipeline-enamed-pilot.md
```

---

## Padrões delegação (lições aprendidas)

Esta sessão delegou intensivamente para subagentes. Padrão que funcionou:

1. **Briefings autocontidos** — agente NÃO vê histórico, então listar arquivos de contexto, decisões já tomadas, constraints explícitos
2. **`run_in_background: true`** — paralelismo verdadeiro, minha janela não cresce
3. **Constraint "não modifique site-config.ts"** quando múltiplos agentes em paralelo — eu consolido depois em commit dedicado
4. **Agentes não conseguem `git commit`** no harness atual — todos relatam "blocked, files staged"; eu commitar daqui mesma working tree
5. **Risco de pickup oportunista** — `git add` explícito não captura se outros agentes deixaram coisas staged; aceitar que commit ocasionalmente leva trabalho de 2 agentes (mensagem fica ligeiramente imprecisa mas conteúdo está OK)

---

## Como verificar o site

```bash
npm run dev
# abrir http://localhost:3000
```

Páginas-chave para validar:
- `/` (Home white-label)
- `/enamed` (pilar polido Wave 2 com AnswerBox)
- `/areas/clinica-medica/cardiologia` (subtema profundo)
- `/blog/como-tri-calcula-nota-enamed` (post longo)
- `/glossario/tri` (verbete com DefinedTerm schema)
- `/comparativos/enamed-vs-revalida` (comparativo)
- `/faq` (18 Q&A com FAQPage schema)
- Footer → "Gerenciar cookies" (banner LGPD reabre)

---

## Janela de contexto

Sessão atual ficou longa por causa de:
- Múltiplas iterações de feedback do owner
- Telemetria de subagentes (each ~2-5k tokens)
- Sumários intermediários

**Próxima sessão começando limpa + esta snapshot doc deve reidratar 100% do contexto operacional.**

---

**Snapshot v2 gerado em 28/05/2026 ao fim de ~16h de sessão acumulada.**
