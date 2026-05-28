# Design System — Specs de Componentes

Specs detalhados dos átomos/moléculas/organismos derivados do Manual de Identidade Visual EMR 2025. Cada componente lista: API mínima, variantes, estados, tokens consumidos e regras de acessibilidade.

> Para tokens, ver [`brand-tokens.md`](./brand-tokens.md). Para regras de uso, ver [`usage-guide.md`](./usage-guide.md).

---

## Convenção

- ⚛️ Atomic level (`atom`, `molecule`, `organism`)
- 🏗️ Status: `built` (já no scaffold) · `partial` · `todo`
- 🔗 Token: classes do Tailwind que consomem os custom properties
- 🎯 A11y: regras mínimas WCAG 2.1 AA

---

## ATOMS

### `<Button>` ⚛️ atom · 🏗️ partial

Substituir/promover as classes utilitárias `btn-primary`/`btn-secondary`/`btn-accent`/`btn-pill`/`btn-urgency` (em `globals.css`) para um componente tipado React.

**API:**
```tsx
type ButtonProps = {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "pill" | "urgency";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;          // permite virar <a> via Radix Slot
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: ReactNode;       // Material Symbol filled, weight 300
  iconRight?: ReactNode;
  children: ReactNode;
};
```

**Variantes × estados:**

| Variant | Default bg | Default text | Hover | Focus | Disabled |
|---|---|---|---|---|---|
| `primary` | brand-800 | white | brand-700 + shadow-cta + -1px | shadow-focus | opacity 0.5, cursor not-allowed |
| `secondary` | white | brand-800 | brand-50 | shadow-focus | idem |
| `accent` | brand-500 | brand-950 | brand-400 + shadow-cta | shadow-focus | idem |
| `outline` | transparent | brand-800 | brand-50 | shadow-focus | idem |
| `ghost` | transparent | brand-800 | neutral-50 | shadow-focus | idem |
| `pill` | brand-800 (radius-pill) | white | brand-700 | shadow-focus | idem |
| `urgency` | coral-500 (radius-pill) | white | coral-700 | shadow-focus | idem |

**Sizes:**

| Size | Padding | Font-size | Min-height |
|---|---|---|---|
| `sm` | 0.5rem 1rem | 0.875rem | 36px |
| `md` (default) | 0.75rem 1.5rem | 0.9375rem | 44px |
| `lg` | 1rem 2rem | 1rem | 52px |

**🎯 A11y:**
- `min-height: 44px` em mobile (touch target)
- `aria-busy="true"` quando `loading`
- Spinner com `role="status"` em `loading`
- `aria-label` obrigatório se for icon-only
- Focus ring visível via `:focus-visible`

**⚠️ Regra crítica do manual:** `variant="urgency"` (vermelho) apenas em campanhas editoriais de últimos dias. NÃO usar como CTA padrão de erro de formulário (para erro de form, usar mensagem texto + ícone, não botão vermelho).

---

### `<Badge>` ⚛️ atom · 🏗️ todo

Indicador inline de estado/categoria.

**API:**
```tsx
type BadgeProps = {
  variant?: "default" | "success" | "warning" | "info" | "urgency" | "neutral" | "purple";
  dot?: boolean;              // ponto colorido antes do texto
  children: ReactNode;
};
```

| Variant | bg | text |
|---|---|---|
| `default` | brand-50 | brand-800 |
| `success` | brand-100 | brand-700 |
| `warning` | accent-100 | accent-800 |
| `info` | blue-100 | blue-500 |
| `urgency` | coral-100 | coral-500 |
| `neutral` | neutral-100 | neutral-700 |
| `purple` | purple-100 | purple-500 |

**Tamanho fixo:** `0.25rem 0.625rem`, `text-xs`, `font-weight: 600`, `radius-pill`.

---

### `<Heading>` ⚛️ atom · 🏗️ todo

Wrapper semântico que aplica os tokens de tipografia da escala.

**API:**
```tsx
type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  level?: 1 | 2 | 3 | 4 | 5 | 6;  // se diferente do `as`, vira override visual
  tone?: "default" | "muted" | "inverse";
  align?: "left" | "center";
  children: ReactNode;
};
```

Tokens consumidos: `font-display`, `text-{2xl..6xl}`, `tracking-tight`, `neutral-900` (ou `brand-25` em fundos escuros).

**🎯 A11y:** Nunca pular níveis. 1 `h1` por página. `level` permite estilizar diferente do `as` quando precisar.

---

### `<Text>` ⚛️ atom · 🏗️ todo

**API:**
```tsx
type TextProps = {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  tone?: "default" | "muted" | "subtle" | "inverse" | "brand";
  weight?: "regular" | "medium" | "semibold" | "bold";
  family?: "body" | "display";  // default: body
  children: ReactNode;
};
```

| tone | cor |
|---|---|
| `default` | neutral-700 |
| `muted` | neutral-500 |
| `subtle` | neutral-400 |
| `inverse` | brand-25 ou white |
| `brand` | brand-700 |

---

### `<Link>` ⚛️ atom · 🏗️ todo

Wrapper do `<Link>` do Next com estilos da marca.

**API:**
```tsx
type LinkProps = {
  href: string;
  variant?: "inline" | "standalone" | "cta";
  external?: boolean;         // adiciona ícone + target="_blank" + rel
  children: ReactNode;
};
```

- `inline`: `text-brand-700` underline com offset 2px em hover.
- `standalone`: `text-brand-800` sem underline, com seta `arrow_forward` filled weight 300 que translada `+2px` em hover.
- `cta`: equivale a `<Button asChild>` — para usar quando o link visualmente é um botão.

**🎯 A11y:** `external` adiciona `aria-label="<children> (abre em nova aba)"` se não houver label explícito.

---

### `<Icon>` ⚛️ atom · 🏗️ todo

Wrapper para Material Symbols (configuração obrigatória do manual).

**API:**
```tsx
type IconProps = {
  name: string;               // ex: "school", "stethoscope"
  size?: 16 | 20 | 24 | 32 | 48;
  tone?: "default" | "muted" | "brand" | "inverse" | "urgency";
  fill?: boolean;             // default true (manual exige filled)
  decorative?: boolean;       // se true, aria-hidden + ignora label
  label?: string;             // obrigatório se !decorative
};
```

**Configuração** (regra do manual p30):
- Font style: `Material Symbols Rounded` ou `Outlined` com `font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24`
- Sempre **filled** (FILL 1) — não usar outlined
- Carregar via `<link>` no head **OU** `next/font/google` com axes definidos

**🎯 A11y:** Icon-only é `decorative={false} label="…"` ou wrappers `<button aria-label>`.

---

### `<Tag>` ⚛️ atom · 🏗️ todo

Indicador categórico colorido — usado em cards de blog/cursos para sinalizar área médica ou cluster.

**API:**
```tsx
type TagProps = {
  color?: "brand" | "verde" | "amarelo" | "purple" | "blue" | "coral";
  size?: "sm" | "md";
  children: ReactNode;
};
```

Mapeamento sugerido com as áreas médicas:

| Área (`/simulados-enamed/[area]`) | Cor da tag |
|---|---|
| Clínica Médica | `brand` (verde) |
| Cirurgia | `purple` |
| Pediatria | `blue` |
| Ginecologia e Obstetrícia | `coral` |
| Saúde Coletiva | `amarelo` |
| Ética e Legislação | `neutral` |

---

## MOLECULES

### `<CtaBlock>` 🧬 molecule · 🏗️ todo

Bloco reutilizável de chamada para ação. Usado nos finais de páginas pilares.

**Composição:** `<Heading level="3">` + `<Text muted>` + `<Button primary>` + `<Button secondary>` (opcional).

**Variantes:**
- `default`: card branco com border-neutral-200 + sombra `shadow-card`.
- `dark`: fundo `gradient-dark` + texto `brand-25` + CTA `accent`.
- `inline`: sem fundo, alinhamento horizontal.

---

### `<Breadcrumb>` 🧬 molecule · 🏗️ todo

Trilha de navegação. Schema BreadcrumbList em todas as páginas não-raiz.

**API:**
```tsx
type BreadcrumbProps = {
  trail: { label: string; href?: string }[];
};
```

Render: separador `chevron_right` filled weight 300, último item sem `href` (current page com `aria-current="page"`).

---

### `<Toc>` 🧬 molecule · 🏗️ todo

Sumário gerado a partir do conteúdo MDX. Sticky em desktop (>= 1024px), accordion em mobile.

**Estilo:**
- Container: `brand-25` background, `radius-lg`, padding 1.5rem.
- Items ativos: `text-brand-800 font-semibold`.
- Items inativos: `text-neutral-600`.
- Linha indicadora à esquerda (1px verde-neon) cresce com o scroll.

---

### `<PostCard>` 🧬 molecule · 🏗️ todo

Card de post no listing do blog.

**Composição:** cover image (radius-lg) + `<Tag>` da categoria + `<Heading level="4">` + `<Text muted>` excerpt + metadata (autor, data, tempo de leitura).

**Estados:**
- Default: `card` + leve sombra
- Hover: sobe `-2px`, sombra cresce, scale leve `1.02` na imagem.

---

### `<CourseCard>` 🧬 molecule · 🏗️ todo

Card de curso no `/cursos`.

**Composição:** badge `accent-500` (selo destacado, ex: "MAIS VENDIDO") opcional + heading + lista de bullets + preço + CTA pill.

---

### `<AreaTile>` 🧬 molecule · 🏗️ todo

Card de área médica no grid de `/simulados-enamed`.

**Composição:** ícone Material Symbol filled grande (48px) + cor de fundo da paleta secundária correspondente + título + subtemas listados.

Mapeamento sugerido:

| Área | Ícone Material | bg | text |
|---|---|---|---|
| Clínica Médica | `stethoscope` | brand-50 | brand-800 |
| Cirurgia | `surgical` | purple-100 | purple-500 |
| Pediatria | `child_care` | blue-100 | blue-500 |
| Ginecologia e Obstetrícia | `pregnant_woman` | coral-100 | coral-500 |
| Saúde Coletiva | `public` | accent-100 | accent-800 |
| Ética e Legislação | `gavel` | neutral-100 | neutral-700 |

---

### `<FaqAccordion>` 🧬 molecule · 🏗️ todo

Acordeão de perguntas com schema FAQPage.

**Estados:**
- Closed: ícone `expand_more` filled weight 300
- Open: ícone `expand_less`, bg `brand-25`, border-left 2px brand-500

**🎯 A11y:** `<button aria-expanded>` com `aria-controls` apontando para o `<div>` que abre. `<Heading as="h3">` para cada pergunta.

---

## ORGANISMS

### `<SiteHeader>` 🏛️ organism · 🏗️ built

Já existe em `src/components/site-header.tsx`. Specs alinhados ao manual:

- Logo EMR à esquerda (componente `<BrandMark>` já existe).
- Nav primária central (consome `primaryNav` de `src/lib/navigation.ts`).
- CTA pill à direita: "Simulado grátis" (`outline`) + "Ver cursos" (`primary`).
- Sticky em scroll, com `backdrop-blur` + bg `white/90`.
- Mobile: hamburger → drawer full-height, bg `brand-950`, texto `brand-25`.

---

### `<SiteFooter>` 🏛️ organism · 🏗️ built

Já existe. Specs:

- Bg `brand-950` + texto `brand-25`.
- 4 colunas (consome `footerSections`).
- Logo + tagline + redes sociais.
- Linha legal inferior com `text-xs`, `neutral-400`, links `brand-300`.

---

### `<Hero>` 🏛️ organism · 🏗️ built (page-hero.tsx)

Variantes:

- `hero-home`: gradiente escuro `gradient-dark`, badge superior, h1 display, descrição, 2 CTAs, KPIs no rodapé.
- `hero-pilar`: gradient suave `brand-25`, badge categoria, h1 maior, descrição, breadcrumb, sem CTA grande.
- `hero-blog-post`: imagem cover, h1, metadata (autor/data), tag categoria.
- `hero-lp-curso`: split (texto + mockup/foto), CTA pill sticky em scroll.

---

### `<ClusterGrid>` 🏛️ organism · 🏗️ todo

Grid de cards de cluster na Home (já visível no screenshot — formalizar como componente).

**Estrutura:** grid 3 colunas (desktop) / 2 (tablet) / 1 (mobile). Cada card é `<Link>` envolvendo: tag categoria + heading + texto + "Explorar" com seta.

---

### `<TestimonialsGrid>` 🏛️ organism · 🏗️ todo

Para `/depoimentos`. Schema Review + AggregateRating.

Cada depoimento: foto circular, citação (Raleway italic), nome, instituição, ano de aprovação, estrelas (opcional).

---

### `<PricingTable>` 🏛️ organism · 🏗️ todo

Para `/cursos/[slug]`. Layout cards lado a lado em desktop, stack mobile.

Card destacado: bg `brand-800`, texto `brand-25`, selo `accent-500` "RECOMENDADO" no topo, CTA pill `accent`.

---

### `<CookieBanner>` 🏛️ organism · 🏗️ todo

Banner inferior LGPD.

- Bg `brand-950`, texto `brand-25`, CTA `accent` "Aceitar todos" + ghost "Personalizar".
- Aparece no primeiro carregamento; persiste preferência em `localStorage` chave `emr-cookie-consent`.
- Bloqueia GA4/GTM até consent (gate em Epic 010).

---

## TEMPLATES

### `<PageShell>` 📄 template

Wrapper padrão de página: `<SiteHeader />` + `<main>` + `<SiteFooter />` (já em `layout.tsx`).

### `<PilarTemplate>` 📄 template

Layout das páginas-pilares:
1. `<Hero variant="pilar">`
2. Container 2 colunas: `<Toc>` (aside esquerda) + `<MdxContent>` (main).
3. `<CtaBlock variant="dark">` no rodapé do conteúdo.
4. Seção de "Conteúdo relacionado" (3 `<PostCard>` ou `<CourseCard>`).

### `<BlogPostTemplate>` 📄 template

Layout do `/blog/[slug]`:
1. `<Hero variant="blog-post">`
2. `<Breadcrumb>`
3. Container: `<Toc>` sticky + `<MdxContent>` + author bio + posts relacionados + share buttons.

### `<CourseLPTemplate>` 📄 template

Layout do `/cursos/[slug]`:
1. `<Hero variant="lp-curso">`
2. Seções de "Para quem é", "O que está incluso", "Cronograma", "Professores".
3. `<PricingTable>` + `<TestimonialsGrid>` filtrado por curso.
4. `<FaqAccordion>` específico do curso.
5. CTA sticky inferior em mobile.

---

## Ordem de implementação sugerida

Reordena as stories do `EPIC-001` para casar com prioridade visual:

| Story | Componente | Bloqueia |
|---|---|---|
| 001.1 ✅ | Tokens | Tudo |
| 001.2 ✅ | `<SiteHeader>`, `<SiteFooter>`, `<BrandMark>` | Layout |
| 001.3 ✅ | SEO helpers | — |
| 001.4 ✅ | Schema.org helpers | — |
| 001.5 ✅ | sitemap.ts / robots.ts | — |
| **001.6a** | `<Button>` (todas as variantes incluindo `pill` e `urgency`) | 002, 005, 006 |
| **001.6b** | `<Heading>`, `<Text>`, `<Link>`, `<Badge>`, `<Tag>` | Tudo |
| **001.6c** | `<Icon>` (Material Symbols configurado) | Tudo |
| **001.6d** | `<Breadcrumb>`, `<CtaBlock>`, `<Toc>` | Pilares |
| **001.7** | Página interna `/design-system` (dev-only) — galeria visual de validação | Aprovação @ux |

---

## Aprovações necessárias antes de codar

- [ ] Esta especificação aprovada pelo cliente (especialmente: variantes de botão, mapping de cores por área médica, regra de uso restrito do vermelho).
- [ ] Confirmação se a logo EMR padrão é a única usada no site público (lockup com Inspirali só fica para materiais conjuntos).
- [ ] Decisão sobre `<Icon>` — Material Symbols via `<link>` global ou via `next/font/google` (impacta performance).

---

## Anexo — referências cruzadas

| O que | Onde |
|---|---|
| Hex e HSL de cada token | [`brand-tokens.md`](./brand-tokens.md) |
| Quando usar cada cor | [`usage-guide.md`](./usage-guide.md) |
| Implementação dos tokens | `src/app/globals.css` |
| Fonts carregadas | `src/app/layout.tsx` |
| Manual original | `MIV EMR 2025 - Versão 01.pdf` |
