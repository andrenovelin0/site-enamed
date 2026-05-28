# Arquitetura Técnica — Site ENAMED

**Stack:** Next.js 16.2.6 (App Router) · React 19.2.4 · Tailwind v4 · TypeScript 5 · MDX local · SSG/ISR

---

## 1. Convenção crítica do projeto

> **`AGENTS.md`:** *"This is NOT the Next.js you know. This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices."*

**Toda story de implementação tem como pré-requisito** consultar `node_modules/next/dist/docs/` para a feature relevante (metadata, MDX, dynamic routes, sitemap, etc.) antes de escrever o primeiro arquivo `.tsx`.

---

## 2. Estrutura de pastas planejada

```
site-prova-enamed/
├── content/                          🔴 a criar
│   ├── pilares/
│   │   ├── enamed.mdx
│   │   ├── prova-enamed.mdx
│   │   ├── simulados-enamed.mdx
│   │   ├── cursos.mdx
│   │   └── ies.mdx
│   ├── blog/
│   │   └── [slug].mdx                (N posts)
│   ├── cursos/
│   │   └── [slug].mdx                (N LPs)
│   ├── simulados/
│   │   ├── clinica-medica.mdx
│   │   ├── cirurgia.mdx
│   │   ├── pediatria.mdx
│   │   ├── ginecologia-obstetricia.mdx
│   │   ├── saude-coletiva.mdx
│   │   └── etica-legislacao.mdx
│   ├── faq/
│   │   ├── sobre-o-exame.mdx
│   │   ├── prova.mdx
│   │   ├── preparacao.mdx
│   │   ├── ies.mdx
│   │   └── comercial.mdx
│   ├── institucional/
│   │   ├── sobre.mdx
│   │   ├── depoimentos.json
│   │   └── suporte.mdx
│   └── legal/
│       ├── privacidade.mdx
│       ├── cookies.mdx
│       └── termos.mdx
│
├── src/
│   ├── app/                          🟢 scaffold existe
│   │   ├── layout.tsx                🟢
│   │   ├── page.tsx                  🟢 (Home, 10kb)
│   │   ├── globals.css               🟢
│   │   ├── not-found.tsx             🟢
│   │   ├── robots.ts                 🟡 stub
│   │   ├── sitemap.ts                🟡 stub
│   │   ├── enamed/page.tsx           🟡
│   │   ├── prova-enamed/page.tsx     🟡
│   │   ├── simulados-enamed/
│   │   │   ├── page.tsx              🟡
│   │   │   └── [area]/page.tsx       🔴
│   │   ├── cursos/
│   │   │   ├── page.tsx              🟡
│   │   │   └── [slug]/page.tsx       🔴
│   │   ├── ies/page.tsx              🟡
│   │   ├── blog/
│   │   │   ├── page.tsx              🟡
│   │   │   └── [slug]/page.tsx       🔴
│   │   ├── faq/page.tsx              🟡
│   │   ├── sobre/page.tsx            🟡
│   │   ├── depoimentos/page.tsx      🟡
│   │   ├── contato/page.tsx          🟡
│   │   ├── suporte/page.tsx          🟡
│   │   ├── politica-de-privacidade/page.tsx  🟡
│   │   ├── politica-de-cookies/page.tsx      🟡
│   │   └── termos-de-uso/page.tsx            🟡
│   │
│   ├── components/                   🟢 base existe
│   │   ├── brand-mark.tsx            🟢
│   │   ├── page-hero.tsx             🟢
│   │   ├── placeholder-section.tsx   🟢
│   │   ├── site-header.tsx           🟢
│   │   ├── site-footer.tsx           🟢
│   │   ├── structured-data.tsx       🟢
│   │   ├── breadcrumb.tsx            🔴
│   │   ├── cta-block.tsx             🔴
│   │   ├── cluster-grid.tsx          🔴
│   │   ├── faq-accordion.tsx         🔴
│   │   ├── post-card.tsx             🔴
│   │   ├── course-card.tsx           🔴
│   │   ├── area-grid.tsx             🔴
│   │   ├── toc.tsx                   🔴
│   │   ├── mdx-components.tsx        🔴 (mapeamento de tags)
│   │   └── cookie-banner.tsx         🔴
│   │
│   └── lib/                          🟢 base existe
│       ├── navigation.ts             🟢
│       ├── site-config.ts            🟢
│       ├── content.ts                🔴 (MDX loader/listing)
│       ├── mdx.ts                    🔴 (parser + frontmatter + TOC)
│       ├── schema-org.ts             🔴 (helpers JSON-LD)
│       ├── slugify.ts                🔴
│       └── seo.ts                    🔴 (helpers de generateMetadata)
│
├── public/                           — assets estáticos
├── docs/                             — PRD, sitemap, arquitetura, stories
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config (ou tokens em globals.css se Tailwind v4 @theme)
```

---

## 3. Renderização

| Rota | Estratégia | Motivo |
|---|---|---|
| `/`, pilares, FAQ, institucionais, legais | **SSG** | Conteúdo estável, máxima performance |
| `/blog`, `/blog/[slug]` | **SSG + ISR (revalidate 1h)** | Posts mudam mas não são tempo-real |
| `/cursos`, `/cursos/[slug]` | **SSG + revalidate on-demand** | Preços/cronograma mudam pontualmente |
| `/simulados-enamed/[area]` | **SSG** | Conteúdo estável |
| `/sitemap.xml`, `/robots.txt` | **build-time** | Geração estática |
| `/contato` (form submit) | **server action** | Mantém SSG no GET, server-side só no POST |

Sem SSR puro em V1.

---

## 4. Camada de conteúdo (MDX)

**Decisão:** MDX local em `content/` versionado em git.

**Pipeline:**
1. Arquivos `.mdx` com frontmatter YAML (title, description, date, category, cover, etc.).
2. `src/lib/content.ts` lê o filesystem em build-time via `fs/promises`, retorna metadados tipados.
3. `src/lib/mdx.ts` faz o parsing (avaliar `next-mdx-remote` ou MDX nativo do Next 16 — **verificar `node_modules/next/dist/docs/` antes de decidir**).
4. `src/components/mdx-components.tsx` mapeia tags MDX (h1, h2, ul, code, etc.) para componentes do design system.
5. `generateStaticParams` em rotas dinâmicas lê os slugs disponíveis.

**Componentes MDX customizados disponíveis no MDX:** `<Callout>`, `<CTA>`, `<CompareTable>`, `<Faq>`, `<Quote>`.

---

## 5. SEO técnico

**`generateMetadata` por rota** — todo `page.tsx` exporta metadata dinâmica (title, description, openGraph, twitter, canonical, alternates).

**JSON-LD por página** via `src/components/structured-data.tsx` (já existe). Helpers em `src/lib/schema-org.ts`:
- `organization()` — Footer/Home global.
- `article({ title, date, author, ... })` — pilares, blog.
- `course({ name, provider, offers })` — `/cursos/[slug]`.
- `faqPage(items)` — `/faq`, pilares com FAQ embutido.
- `breadcrumb(trail)` — todas as páginas não-raiz.
- `review/aggregateRating` — `/depoimentos`.

**`sitemap.ts`** — itera as rotas estáticas + lê os slugs dinâmicos (blog/cursos/simulados) e emite o XML.

**`robots.ts`** — permite tudo exceto `/api/` (futuro) + aponta para o sitemap.

---

## 6. Design System

Cliente fornece referência (Eu Médico Residente). Implementação V1:

- Tokens via Tailwind v4 `@theme` em `globals.css` (cores, fontes, espaçamento, radius).
- Tipografia: serif para títulos (autoridade), sans para corpo, monospace para código.
- Paleta: a definir; placeholder com tons de azul-clínico + neutros quentes.
- Componentes base já isolados em `src/components/`, fáceis de re-tematizar.

Quando o DS chegar: swap dos tokens + ajuste de espaçamentos; sem refator de estrutura.

---

## 7. Performance (NFR-01, NFR-04, NFR-05)

- **`next/image`** para toda imagem; `loading="lazy"` padrão, `priority` no hero LCP.
- **`next/font`** com `display: swap`; subset latin.
- **Sem JS desnecessário** — components com interação isolados em `"use client"`.
- **CSS** Tailwind v4 (zero runtime).
- **Pré-fetch** automático do Next nos links visíveis.
- Budget de bundle: rotas críticas (`/`, pilares) < 90kb JS gzip.

---

## 8. Acessibilidade (NFR-03)

- Landmarks semânticos (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Heading hierarchy estrita (1 H1 por página, sem pular níveis).
- Focus rings visíveis (Tailwind `focus-visible:`).
- Alt text em toda imagem; descrições em ícones interativos.
- Contraste AA mínimo nos pares cor-texto.
- Auditoria axe em cada rota antes de fechar o epic.

---

## 9. Analytics & LGPD

- GA4 + GTM placeholders carregados **somente após consentimento** (banner em `cookie-banner.tsx`).
- Variáveis: `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_ID` no `.env.local`.
- Eventos custom mínimos: `click_cta_curso`, `click_cta_simulado`, `submit_contato`.

---

## 10. Deploy (a confirmar com cliente)

Opções equivalentes:
- **Vercel** — zero-config para Next.js, ISR nativo, edge cache. Recomendado.
- **Self-hosted** (Node) — possível se houver restrição corporativa.

Decisão fica para Epic 010.

---

## 11. Riscos técnicos

| Risco | Mitigação |
|---|---|
| API de MDX no Next 16 diferente do que sabemos | Consultar `node_modules/next/dist/docs/` antes de cada feature MDX |
| `generateMetadata` API instável | Validar contrato exato na própria versão instalada |
| Tailwind v4 `@theme` ainda recente | Manter tokens em `globals.css` com fallback para utilities; evitar plugins não-oficiais |
| Build lento se MDX explodir | Streaming/parallel build do Next; ISR para blog |

---

## 12. Pontos abertos

1. **Onde recebe submissão de `/contato`?** (server action local → e-mail SMTP? formspree? hubspot?)
2. **Banco/lista de cursos** — slugs e estrutura final do `content/cursos/`.
3. **Posts iniciais do blog** — quantos no lançamento? quem produz?
4. **Identidade visual final** — quando o DS chega?
5. **Domínio + DNS + cert** — escopo de @devops no Epic 010.
6. **Política de imagens** — quem fornece os assets dos cursos/professores?
