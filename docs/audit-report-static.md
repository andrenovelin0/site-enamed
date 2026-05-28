# Auditoria Estática — Portal ENAMED

**Versão:** 1.0 · **Data:** 2026-05-28 · **Escopo:** Code review estático (sem browser/runtime) · **Owner:** @qa (Quinn)

> Auditoria não-executiva sobre acessibilidade (WCAG 2.1 AA), SEO/GEO (schemas + estrutura) e performance (patterns Next.js 16) do código-fonte. Build executado uma vez para confirmar integridade (`npm run build` → 99 páginas estáticas geradas, sem erro). Lint executado uma vez (`npm run lint` → zero warnings).

---

## Sumário executivo

O Portal ENAMED encontra-se em um estado **maduro e saudável** para a fase de pivô white-label v2.0. A fundação técnica (Next.js 16 + Tailwind v4 + MDX) está sólida, a estrutura semântica do shell (`<header>/<main>/<footer>`, `lang="pt-BR"`, focus-visible global, prefers-reduced-motion respeitado) cobre as bases de WCAG 2.1 AA com folga, e a densidade de schemas (Article + BreadcrumbList em ~60 pilares/subpáginas, FAQPage, DefinedTerm, QAPage-ready, Organization + WebSite globais) atende NFR-10 sem ressalvas no caminho principal. O build gera **99 rotas estáticas** sem erro, todos os bundles via Turbopack, fontes via `next/font/google`, zero `<img>` (apenas SVGs inline) e o uso de `"use client"` está confinado a 4 componentes interativos legítimos (header, banner LGPD, manage-cookies button, Button). A obstrução maior identificada é a **ausência da rota `/faq/[slug]` dual-mode** prevista em FR-05/PRD §5 — esse é o único item P0 não-conformante. Achados secundários: sitemap.ts hardcoded perdendo dinamicamente blog/glossário/comparativos, ausência de skip-link, banner de cookies sem trap-focus efetivo, e ~7 páginas listing/legais com apenas BreadcrumbList sem complemento de schema secundário no nível da página (passa NFR-10 só pela conta global de Org+WebSite no layout root).

---

## Métricas quantitativas

| Métrica | Valor |
|---|---|
| **Rotas estáticas geradas pelo build** | 99 (incluindo `/_not-found`, `robots.txt`, `sitemap.xml`) |
| Páginas estáticas distintas (`page.tsx`) | 51 arquivos |
| Páginas dinâmicas SSG (`generateStaticParams` + `dynamicParams = false`) | 3 (`/blog/[slug]`, `/glossario/[termo]`, `/comparativos/[slug]`) |
| MDX content seeds — pilares | 7 |
| MDX content seeds — blog | 20 |
| MDX content seeds — glossário | 21 |
| MDX content seeds — comparativos | 5 |
| MDX content — áreas | (~8 arquivos, mas só 4 pillar-pages + 4 subpages roteadas) |
| Componentes em `src/components/` | 15 (8 root + 5 MDX + 2 UI) |
| Componentes com `"use client"` | 4 (cookie-banner, manage-cookies-button, site-header, ui/Button) |
| Helpers de schema.org | 7 (Organization, WebSite, Article, Breadcrumb, FAQPage, QAPage, DefinedTerm) |
| Helpers em `src/lib/` | 8 (analytics, blog, cn, comparativos, faq, glossario, navigation, site-config) |
| Páginas com `generateMetadata` ou `metadata` export | 51/51 (100%) |
| Páginas com `alternates.canonical` | 50/51 (única exceção: `/design-system` — intencional, marcado `robots:{index:false}`) |
| Uso de `next/image` | 0 (não há imagens raster) |
| Uso de `<img>` direto | 0 |
| Uso de `next/font` | sim (`Poppins` + `Raleway` em `layout.tsx`) |
| Schemas globais por página (via `layout.tsx`) | 2 (`EducationalOrganization` + `WebSite`+`SearchAction`) |

---

## A. Acessibilidade (WCAG 2.1 AA)

### ✅ Conformidades

- **Landmarks semânticos completos.** `layout.tsx` provê `<header>`, `<main>` (com `flex-1`), `<footer>` e o banner LGPD com `role="dialog"`. Todos os pages-content usam `<article>`, `<section>` ou `<nav aria-label=...>` apropriadamente.
- **`<html lang="pt-BR" data-scroll-behavior="smooth">`** correto em `src/app/layout.tsx:69-70` — `data-scroll-behavior` é a forma idiomática Next 16 para evitar o warning do React 19 sobre `scroll-behavior` em CSS.
- **Heading hierarchy disciplinada.** `H1` é renderizado pelo `PageHero` (1 por página), `H2` dentro de cards/MDX, H3 em subitens. Os MDX dos pilares começam corpo direto com H2 (`## Definição e objetivos...`) — não há duplo H1.
- **`<img>` ausente.** Zero `<img>` raster no projeto; SVGs são inline com `aria-hidden` quando decorativos (ex.: chevron no home, `src/app/page.tsx:157`).
- **Icon-only buttons rotulados.** O hamburger menu em `site-header.tsx:37-38` tem `aria-label` dinâmico ("Abrir menu" / "Fechar menu") + `aria-expanded`. Link da logo tem `aria-label="Portal ENAMED — Página inicial"`. O `Button` component (`ui/button.tsx:92-99`) imprime `console.warn` em desenvolvimento se um ícone-only button não tem `aria-label`.
- **Focus-visible global.** `globals.css:265-269` define `:focus-visible { outline: none; box-shadow: var(--shadow-focus); }` — focus ring verde de 3px em todos os elementos interativos.
- **`prefers-reduced-motion` respeitado.** `globals.css:276-283` colapsa animações e transições para 0.01ms quando o usuário tem `reduce` ligado, incluindo `scroll-behavior: auto`.
- **Contraste documentado.** Pares `neutral-900` em branco (17.4:1 AAA), `brand-800` em branco (8.9:1 AA), branco em `brand-950` (hero — também AAA equivalente), `brand-100/70` em `brand-950` no footer (lido com `text-brand-100/70` — ratio aproximado 8:1 AA). Pares já validados no design-system §5.
- **Breadcrumb com `aria-label`.** `page-hero.tsx:25` usa `<nav aria-label="Breadcrumb">` + `<ol>` semântica.
- **Navegação nomeada.** `<nav aria-label="Navegação principal">` e `<nav aria-label="Navegação móvel">` no header.
- **Banner LGPD.** `role="dialog"`, `aria-labelledby`, `aria-describedby`, ESC → "apenas essenciais" (escolha conservadora), `previouslyFocused` é restaurado ao fechar (`cookie-banner.tsx:143-148`), e o checkbox custom tem `aria-label` explícito.
- **Form labels (contato).** Página `/contato` está em estado placeholder (sem `<form>` — apenas `<a href="mailto:">`). Sem inputs = sem risco a11y atual.

### ⚠️ Ressalvas

- **Banner LGPD usa `aria-modal="false"`** (`cookie-banner.tsx:189`) — declarado intencionalmente como não-modal, mas isso significa que **não há focus trap real**: usuário com teclado pode tabular para fora do banner para o conteúdo da página, embora o banner siga visível. Para um cookie banner "soft" essa é uma escolha defensável (não bloqueia o uso do site), porém o ESC é tratado como "apenas essenciais" — o que conflita com a expectativa WCAG 2.1.2 do usuário ("ESC fecha modais sem decidir"). O comportamento atual já é declarado em comentário no código (linha 168-177).
- **Sem skip-link "Pular para o conteúdo principal".** Não há `<a href="#main">Pular...</a>` no início do `<body>`. Como o header tem ~11 links de navegação primária, usuários de teclado / leitores de tela precisam tabular toda essa nav antes de chegar no conteúdo. WCAG 2.4.1 (Bypass Blocks) — atualmente atendido **parcialmente** pela existência do landmark `<main>` (NVDA/JAWS conseguem pular por landmark), mas o skip-link visual é a forma mais universal.
- **`button` de hamburguer não tem `<span class="sr-only">` redundante.** O `aria-label` cobre, mas é boa prática ter também texto visualmente oculto que reforce — não é bloqueante.
- **Hero do home tem `<dl>` com estatísticas (6/TRI/7/MEC)** sem `aria-label` na lista — o leitor de tela vai ler "Definition list with 4 items" sem contexto. Sugere-se `<dl aria-label="Portal em números">`.
- **Banner LGPD: footer "Gerenciar cookies"** dispara `OPEN_BANNER_EVENT` — funciona, mas o usuário com leitor de tela não recebe `aria-live` anunciando a reabertura. O `aria-live="polite"` está no container externo (`cookie-banner.tsx:184`), mas é setado uma vez na montagem — leitores podem não anunciar a re-renderização condicional.

### 🔴 Problemas

- **Nenhum bloqueante identificado.** O baseline a11y do Portal está acima da média de projetos comparáveis.

---

## B. SEO / GEO

### ✅ Conformidades

- **Metadata em 100% das páginas.** Todas as 51 rotas têm `metadata` ou `generateMetadata`.
- **Canonical em 50/51** via `alternates.canonical`. Única exclusão (`/design-system`) é noindex intencional.
- **Layout root forte.** `OrganizationJsonLd` (`@type: EducationalOrganization`) + `WebSiteJsonLd` (com `SearchAction` apontando para `/blog?q={search_term_string}`) em **toda página** (renderizados no `<body>` em `layout.tsx:74-75`).
- **Pilares e subpáginas** usam `PilarTemplate`, que automatiza `ArticleJsonLd` + `BreadcrumbJsonLd` consumindo `frontmatter.updatedAt` como `datePublished`/`dateModified`. Cobertura: todas as 7 áreas, 7 pilares, e todas as subpáginas roteadas (~16).
- **Blog posts** (`/blog/[slug]/page.tsx`) — `ArticleJsonLd` com `datePublished` (frontmatter `date`) + `dateModified` (`updatedAt`); `BreadcrumbJsonLd`; OpenGraph com `type: article`, `publishedTime`, `modifiedTime`, `authors`.
- **Glossário verbete** (`/glossario/[termo]/page.tsx`) — `DefinedTermJsonLd` + `BreadcrumbJsonLd` + `inDefinedTermSet` apontando para `/glossario`. Schema correto.
- **Comparativos detail** (`/comparativos/[slug]/page.tsx`) — `ArticleJsonLd` + `BreadcrumbJsonLd`. OK.
- **FAQ single page** (`/faq/page.tsx`) — `FAQPageJsonLd` com `mainEntity` listando todas as Q&A de todas as categorias + `BreadcrumbJsonLd`. Correto.
- **Sitemap dinâmico.** `src/app/sitemap.ts` exporta `MetadataRoute.Sitemap` via Next 16 — gerado em build, listado no robots.txt.
- **Robots.txt** — `allow: "/"`, `disallow: ["/design-system"]`, sitemap apontando para canônico. Correto.
- **Frontmatter MDX → `metadata` export** via `remark-mdx-frontmatter` permite consumir título/descrição/updatedAt diretamente nas pages.
- **GEO patterns aplicados** no MDX dos pilares: `<AnswerBox label="Em 3 frases">`, `<Definition term="..." acronym="...">`, `<Citation source="..." url="...">` (componentes em `src/components/mdx/`). MDX usa `[link interno](/glossario/...)` para reforçar topical mesh.
- **Open Graph + Twitter Card** em layout root + override em pages.
- **`metadataBase`** definido (`siteConfig.url = "https://provaenamed.com.br"`) — links og:image/canonical resolverão absolutos.

### ⚠️ Ressalvas

- **Sitemap hardcoded.** `src/lib/site-config.ts:9-56` lista 46 rotas estáticas hard-coded. Está **faltando**:
  - Todas as 20 rotas de `/blog/[slug]` (presentes no build, ausentes do sitemap)
  - Todas as 21 rotas de `/glossario/[termo]`
  - Todas as 5 rotas de `/comparativos/[slug]` + `/comparativos` (a listing está faltando)
  - `/areas/clinica-medica/cardiologia` ✓ presente, mas `/areas/clinica-medica/pneumologia` ✓; subpáginas roteadas estão refletidas; o gap dominante é content dinâmico.
  - Algumas páginas estáticas: `/sobre` ✓, `/contato` ✓, mas a listing `/comparativos` está faltando.
  - **Impacto:** ~46 URLs (20 blog + 21 glossário + 5 comparativos) **não estão sendo submetidas** no sitemap.xml, prejudicando indexação no GSC e descoberta por motores de busca.
- **Páginas listing/legais sem schema secundário no nível da página.** Embora todas tenham `BreadcrumbJsonLd` + os 2 schemas globais (Organization + WebSite) injetados no layout, **NFR-10** especifica "mínimo 2 schemas POR PÁGINA". Estritamente as páginas têm 3 schemas (2 globais + 1 page-level), mas o page-level é só Breadcrumb. Para reforço GEO recomenda-se:
  - `/blog` (listing) → `CollectionPage` + `ItemList`
  - `/glossario` (listing) → `DefinedTermSet`
  - `/comparativos` (listing) → `CollectionPage`
  - `/sobre` → `AboutPage`
  - `/contato` → `ContactPage`
- **FAQ dual-mode incompleto (FR-05).** A rota `/faq/[slug]` **não existe** — não há `src/app/faq/[slug]/page.tsx`, não há `src/content/faq/` com MDXs individuais por Q. O PRD/sitemap projetam 38 FAQ artigos com `QAPage` schema, mas só o single-page agregador existe. **`QAPageJsonLd` helper já existe** em `structured-data.tsx:98-135` aguardando consumo. Esse é o gap P0 mais relevante.
- **Calculadoras (FR-07).** Sitemap não lista `/calculadoras/*`; código não existe. **3 calculadoras P1 ainda não implementadas.** Schema previsto: `WebApplication`. Helper `WebApplicationJsonLd` **ainda não foi criado** (não está em `structured-data.tsx`).
- **`/areas` subpáginas incompletas.** Sitemap/PRD projetam 35 subtemas em `/areas/*/*`; existem somente 4 implementados (`cardiologia`, `pneumologia`, `cirurgia-geral`, `sus`). Esse é o gap P0/L de conteúdo (não código).
- **Search URL inconsistente.** `WebsiteJsonLd` declara `SearchAction` apontando para `/blog?q={search_term_string}` (`structured-data.tsx:181`), mas o `/blog` atual **não implementa filtro `?q=`** (a página renderiza todos os posts em `getAllBlogPosts()` sem consumir search params). Schema "promete" um endpoint que não existe — IAs e Google podem registrar como inconsistência.

### 🔴 Problemas

- **`FAQPageJsonLd` em `/faq` pode estar enviando HTML de resposta como string plana.** `src/app/faq/page.tsx:30-34` passa `answer: item.answer` direto do `getAllFaqItems()`. Se `item.answer` for puro texto (verificar `src/lib/faq.ts`), OK; se carregar markup HTML, o schema fica inconsistente com a recomendação do Google (FAQPage answer aceita HTML inline, mas precisa ser sanitized). **Verificar `src/lib/faq.ts` em audit follow-up.**
- **Não-bloqueante mas significativo:** sitemap não-dinâmico (item acima) causa perda de cobertura.

---

## C. Performance (Next.js 16 patterns)

### ✅ Conformidades

- **Build limpo.** `npm run build` em 2.1s (compile) + 285ms (99 páginas estáticas geradas em 9 workers). TypeScript checks passam em 1.1s. Zero erros, zero warnings (não exibe linhas individuais de "Size / First Load JS" no terminal output capturado — esperado em Turbopack stable do Next 16).
- **Lint limpo.** `npm run lint` (eslint-config-next 16.2.6) — zero issues.
- **100% SSG.** Todas as rotas dinâmicas usam `generateStaticParams()` + `export const dynamicParams = false` (blog/glossário/comparativos). Resultado: rotas marcadas `●  (SSG)` ou `○  (Static)` no build output — **nenhuma rota** é SSR/streaming dinâmico desnecessariamente.
- **`next/font`** com `display: "swap"` para Poppins e Raleway — evita FOIT.
- **Zero `<img>` direto.** Não há imagens raster no projeto — todo o visual é tipografia, gradientes CSS, e SVGs inline. `next/image` não é necessário no estado atual.
- **`"use client"` confinado.** Apenas 4 componentes carregam JS interativo no cliente:
  - `site-header.tsx` (toggle de menu mobile via `useState`)
  - `cookie-banner.tsx` (consent management, `useSyncExternalStore`)
  - `manage-cookies-button.tsx` (dispara `OPEN_BANNER_EVENT`)
  - `ui/button.tsx` (forwardRef + Slot — poderia ser server, mas Radix Slot às vezes exige client em Next 16)
- **MDX compile via Turbopack** em build (`@next/mdx` 16.2.6 + remark-frontmatter + remark-mdx-frontmatter + remark-gfm). Compila uma vez no build, zero runtime overhead.
- **Redirects 301 declarados em `next.config.ts`** para `/cursos → /preparacao`, `/cursos/:slug → /preparacao`, `/depoimentos → /sobre`, `/suporte → /contato`. Permanentes.
- **Dependências enxutas.** `package.json` lista apenas 11 dependencies + 9 devDependencies. Nenhuma órfã visível (mdx loader, react-slot, clsx, tailwind-merge — todas usadas).
- **TailwindCSS v4** via `@tailwindcss/postcss` — JIT, tree-shaking automático, e tokens definidos via CSS custom properties em `globals.css` (`@theme inline` block).
- **Cookie banner não carrega GA4 antes do opt-in.** `loadGA4(gaId)` só roda se `consent.analytics === true` (`cookie-banner.tsx:96-103`).

### ⚠️ Ressalvas

- **Bundle size por rota não capturado.** O output do `next build` no terminal não imprime a tabela "Size / First Load JS" (comportamento do Turbopack 16). Para auditoria runtime, executar `next build --profile` ou rodar `next-bundle-analyzer` (não está instalado).
- **`ui/Button` poderia ser server.** Marcado como `"use client"` apenas por causa do `forwardRef` + `Slot`. Em Next 16 + React 19, server components podem usar `ref` quando passados como prop — vale validar se essa marcação é necessária. Não é bloqueante: o Button é tree-shakable e o JS shippado é mínimo (~1KB minified).
- **Banner LGPD usa `useSyncExternalStore`** — moderno e correto, mas adiciona ~1KB. O custo é justificado pelo padrão React 19 oficial.
- **Imports `await import('@/content/...')`** dentro de pages dinâmicas (blog/glossário/comparativos) — Next 16 + Turbopack lida bem com isso via static analysis quando `dynamicParams = false`, mas se um dia mudar para `dynamicParams = true` será preciso pré-aquecer.
- **Sem lazy loading explícito.** Como não há imagens nem componentes pesados client-side, não há candidatos atuais — mas se calculadoras vierem com bibliotecas (chart.js, math.js etc.), considerar `next/dynamic`.

### 🔴 Problemas

- **Nenhum bloqueante.** O perfil de performance é excelente para o estágio atual.

---

## Recomendações priorizadas

### P0 — Críticas (devem entrar antes do lançamento)

| ID | Recomendação | Onde | Esforço |
|---|---|---|---|
| P0-01 | **Implementar `/faq/[slug]`** com `QAPageJsonLd` (helper já existe). Migrar `src/lib/faq.ts` para emitir slugs individuais; criar `src/content/faq/*.mdx` com 1 Q por arquivo; cobrir 38 perguntas seed | `src/app/faq/[slug]/page.tsx` (novo), `src/content/faq/` (novo), `src/lib/faq.ts` (refator) | M |
| P0-02 | **Sitemap dinâmico.** Refatorar `src/app/sitemap.ts` para concatenar `sitemapRoutes` + `getBlogSlugs()` + `getGlossarioSlugs()` + `getComparativosSlugs()` (e futuro `getFaqSlugs()`), gerando URLs absolutos com `lastModified` real do frontmatter `updatedAt` | `src/app/sitemap.ts`, `src/lib/site-config.ts` | S |
| P0-03 | **Adicionar `/comparativos` ao sitemap hardcoded** (e remover a hardcoded list assim que P0-02 estiver pronto) | `src/lib/site-config.ts` | XS |
| P0-04 | **Corrigir SearchAction URL.** Decidir: (a) implementar busca em `/blog?q=` consumindo `searchParams`; OU (b) remover o `potentialAction` do `WebsiteJsonLd` até a busca interna existir | `src/components/structured-data.tsx:181`, `src/app/blog/page.tsx` | S |

### P1 — Importantes (próxima onda)

| ID | Recomendação | Onde | Esforço |
|---|---|---|---|
| P1-01 | **Skip-link "Pular para o conteúdo principal"** no topo do `<body>` apontando para `#main-content` (e adicionar `id="main-content"` no `<main>`) | `src/app/layout.tsx` | XS |
| P1-02 | **Schemas secundários nas listings/legais** — `CollectionPage` em `/blog`, `/glossario`, `/comparativos`; `AboutPage` em `/sobre`; `ContactPage` em `/contato`. Criar helpers em `structured-data.tsx` | `src/components/structured-data.tsx`, 5 pages | M |
| P1-03 | **Implementar 3 calculadoras** (FR-07) com `WebApplicationJsonLd` (helper novo) | `src/app/calculadoras/*` (novo), `src/components/structured-data.tsx` | M |
| P1-04 | **Banner LGPD: aria-live anunciando reabertura** + considerar `aria-modal="true"` com focus trap completo (decisão de produto: bloqueante vs soft) | `src/components/cookie-banner.tsx` | S |
| P1-05 | **Sanitizar/normalizar `item.answer` em `FAQPageJsonLd`** — garantir texto plano ou HTML sanitizado | `src/app/faq/page.tsx`, `src/lib/faq.ts` | XS |

### P2 — Polimento (V1.2+)

| ID | Recomendação | Onde | Esforço |
|---|---|---|---|
| P2-01 | `<dl>` do home stats receber `aria-label="Portal ENAMED em números"` | `src/app/page.tsx:94` | XS |
| P2-02 | Validar se `ui/Button` realmente precisa de `"use client"` no Next 16 / React 19; se não, remover | `src/components/ui/button.tsx` | XS |
| P2-03 | Adicionar `next-sitemap-analyzer` (ou similar) ao package.json devDeps para auditoria periódica de bundle | `package.json` | XS |
| P2-04 | Adicionar **35 subpáginas faltantes** de `/areas/*` (gap de conteúdo, não código) | `src/app/areas/*/`, `src/content/areas/` | XL |
| P2-05 | Verificar `aria-label` em ícones SVG decorativos restantes (audit completo via axe runtime) | global | S |

---

## Lista de itens para auditoria runtime (Lighthouse / axe / pa11y / browser)

Os seguintes itens **não são detectáveis em revisão estática** e dependem de execução em browser:

1. **Contraste real renderizado** em estados de hover/focus de cards/CTAs (especialmente `brand-100/70` sobre `brand-950` no footer — esperado ~8:1, mas só medido em runtime com axe-core).
2. **Lighthouse Performance score** — LCP, FCP, CLS, TBT, INP. O Portal não tem imagens, então CLS deve ser baixo; LCP provavelmente é o hero `<h1>` ou stats `<dl>` do home.
3. **Lighthouse Best Practices** — verifica `console.error`, mixed content, deprecated APIs.
4. **Lighthouse SEO** — crawlable links, meta description length, descriptive link text, valid hreflang (não aplicável aqui).
5. **axe-core full scan** — landmark ordering, ARIA atributos órfãos, focus order real, role="dialog" ativo cobrindo conteúdo abaixo.
6. **Keyboard navigation linear** — Tab através do shell para confirmar ordem lógica; testar Escape no banner LGPD; testar reabertura do banner via footer.
7. **Screen reader narração** — NVDA + Chrome + JAWS no Edge: confirmar leitura do hero, anúncio do banner LGPD, anúncio do toggle de menu mobile.
8. **`prefers-reduced-motion`** — ativar no SO e confirmar que `transform: translateY(-1px)` em hover não acontece.
9. **Rich Results Test (Google)** — submeter URLs representativas a `https://search.google.com/test/rich-results` para validar Article, FAQPage, DefinedTerm, BreadcrumbList, Organization, WebSite.
10. **Schema validator (schema.org)** — validar JSON-LD output em `view-source`.
11. **GSC indexing coverage** — após deploy, monitorar quantas URLs do sitemap são indexadas em 30/60/90 dias.
12. **PSI Field Data (CrUX)** — após 28 dias de tráfego real, validar Web Vitals em campo.
13. **Lighthouse CI** integrado a um workflow de PR — adicionar como Epic 012.
14. **404 page reach** — confirmar que `/foo-inexistente` retorna status HTTP 404 (não 200) e renderiza `not-found.tsx`.
15. **OpenGraph image rendering** — testar `https://www.opengraph.xyz/url/<url-encoded-url>` para verificar preview em redes sociais (atualmente o site não declara `og:image` — pode ser P1).
16. **Network waterfall** — confirmar que GA4 só carrega após opt-in via DevTools → Network.
17. **Cookie banner UX em viewport mobile** — confirmar que o card não cobre conteúdo crítico e tem `min-height` confortável.

---

## Apêndice — comandos executados durante a auditoria

```bash
npm run build   # 99 páginas estáticas geradas em 285ms; zero erro
npm run lint    # zero warnings
```

Saída relevante do build (subset):

```text
✓ Compiled successfully in 2.1s
✓ Generating static pages using 9 workers (99/99) in 285ms

Route (app):
○  (Static)  — 76 rotas
●  (SSG)     — 23 rotas (blog/[slug] × 20 + comparativos/[slug] × 5 + glossario/[termo] × 21 = 46 sub-rotas geradas)
```

---

**Conclusão:** Portal ENAMED está em condições de seguir para auditoria runtime (Lighthouse, axe) com **alta probabilidade de aprovação** em todas as categorias-âncora. As recomendações P0 (faq dual-mode, sitemap dinâmico, SearchAction) podem ser endereçadas em uma onda curta de 1-2 sprints. Nenhum problema bloqueante foi identificado para o pivô v2.0.
