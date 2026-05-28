# Design System — Guia de Uso

Quando escolher qual cor, peso ou componente. Referência prática para devs e designers que tocarem no site.

> Para o catálogo completo de tokens, ver [`brand-tokens.md`](./brand-tokens.md).

---

## 1. Mapa rápido — qual cor para qual coisa

### CTAs

| Cenário | Background | Texto | Por quê |
|---|---|---|---|
| **CTA primário** (ação principal da página: "Ver cursos") | `brand-800` | branco | Cor-âncora da marca, máximo contraste |
| **CTA secundário** (alternativa) | branco | `brand-800` (border 1.5px) | Reduz peso visual sem perder identidade |
| **CTA vibrante** (lançamento, promoção positiva) | `brand-500` (#05FC89) | `brand-950` | Verde neon como "wow" — usar com moderação |
| **CTA urgência** ("ÚLTIMOS DIAS") | `coral-500` | branco | **Apenas urgência editorial** — não para fluxo regular |

### Texto

| Elemento | Cor | Família |
|---|---|---|
| H1 hero | `neutral-900` ou `brand-950` | Poppins Bold/Black |
| H2–H4 | `neutral-900` | Poppins SemiBold/Bold |
| Body | `neutral-700` | Raleway Regular |
| Body secundário/legenda | `neutral-500` | Raleway Regular |
| Link inline | `brand-700` | herda |
| Link hover | `brand-800` | herda |

### Estados / Feedback

| Estado | Cor | Token |
|---|---|---|
| Sucesso | Verde escuro | `brand-700` ou alias `success` |
| Aviso | Amarelo destaque | `accent-500` ou alias `warning` |
| Informação | Azul | `blue-500` ou alias `info` |
| Erro/Urgência | Vermelho coral | `coral-500` (compartilhado entre `error` e `urgency`) |
| Disabled | Cinza | `neutral-300` |
| Placeholder | Cinza | `neutral-400` |

### Backgrounds

| Cenário | Cor |
|---|---|
| Página padrão | `background` (branco) |
| Seção alternativa (zebra) | `muted` (`neutral-50`) |
| Hero light | `brand-25` (#F2FAFF) |
| Hero escuro | `brand-950` ou gradiente `gradient-brand` |
| Faixa de CTA destacada | `brand-800` |
| Aviso/banner | `accent-100` (#FFEA9C) com texto `neutral-900` |

---

## 2. Hierarquia tipográfica por página

### Hero (homepage e pilares)

```tsx
<h1 className="font-display text-[clamp(3rem,5vw,4.5rem)] font-bold tracking-tight text-neutral-900">
  Título do hero
</h1>
<p className="font-body text-lg text-neutral-700 max-w-2xl">
  Lead descritivo de 1–2 linhas.
</p>
```

### Seção dentro de página

```tsx
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">…</h2>
<p className="text-base text-neutral-700">…</p>
```

### Card

```tsx
<article>
  <h3 className="text-xl font-semibold text-neutral-900">…</h3>
  <p className="text-sm text-neutral-600 line-clamp-3">…</p>
</article>
```

### Caption / metadata

```tsx
<span className="text-xs uppercase tracking-wide text-neutral-500">
  Categoria · 5 min de leitura
</span>
```

---

## 3. Componentes-padrão (átomos a construir)

| Átomo | Variantes | Tokens consumidos |
|---|---|---|
| `<Button>` | `primary` `secondary` `accent` `outline` `ghost` `urgency` | brand-*, neutral-*, radius-lg, shadow-cta |
| `<Badge>` | `default` `success` `warning` `info` `urgency` `neutral` | semânticos |
| `<Heading>` | `level={1..6}` | font-display, neutral-900 |
| `<Text>` | `size` `tone` | font-body, neutral-* |
| `<Link>` | `inline` `cta` | brand-700/800 |
| `<Icon>` | Material Symbols filled, weight 300 | iconografia §8 |
| `<Tag>` | Categorias coloridas (verde/amarelo/púrpura/azul/coral) | secundárias |
| `<Card>` | `flat` `elevated` `featured` | shadow-card, radius-lg |
| `<Section>` | `default` `muted` `dark` `gradient` | backgrounds |

Specs detalhados em [`components-spec.md`](./components-spec.md).

---

## 4. Microinterações

O termômetro pede **moderno + ousado** — então sim para interações fluidas, mas dentro do bom gosto.

- **Botões:** transição 150ms ease em background + transform; hover sobe `-1px`, click volta.
- **Cards:** hover sobe `-2px`, sombra cresce de `shadow-card` para `shadow-popover`.
- **Links:** underline com offset 2px aparece em hover (com transição de `opacity` e `transform`).
- **Imagens:** scale `1.03` em hover quando dentro de card-link.
- **Skeleton/loading:** evitar — preferir SSG e ISR.
- **Scroll-reveal:** OK em pilares (entrada de seções com fade-in 200ms). NUNCA bloquear conteúdo crítico para SEO.

> Sem confete, sem easter eggs, sem ícones piscando. Estamos vendendo educação médica, não brinquedo.

---

## 5. Acessibilidade — checklist diário

Antes de fechar qualquer story de UI:

- [ ] Contraste AA mínimo no par texto/fundo (verificar com axe ou WebAIM)
- [ ] Focus visible em todo elemento interativo (`shadow-focus`)
- [ ] Heading hierarchy não pula níveis (1 H1 por página)
- [ ] `<img>` com `alt` (vazio `alt=""` apenas em decorativos)
- [ ] Ícone-only button com `aria-label`
- [ ] Cor não é o único veicular de informação (estados também usam texto/ícone)
- [ ] Tamanho mínimo de toque 44×44px em mobile
- [ ] `prefers-reduced-motion` respeitado em microinterações

### Pares com contraste validado

| Combinação | Ratio | Uso |
|---|---|---|
| `neutral-900` em branco | 17.4:1 | Texto de corpo ✅ AAA |
| `brand-800` em branco | 8.9:1 | Texto secundário, links ✅ AA |
| Branco em `brand-800` | 8.9:1 | CTA primário ✅ AA |
| `brand-950` em `brand-500` | 10.2:1 | CTA vibrante ✅ AAA |
| `neutral-500` em branco | 4.6:1 | Texto auxiliar ✅ AA (não usar abaixo de 16px regular) |
| `neutral-400` em branco | 3.1:1 | ⚠️ Só para placeholders/disabled (UI não-textual) |

---

## 6. Dos & Don'ts (regras do manual)

### ✅ DO

- Verde escuro `#004F36` como cor-âncora em ~40% das peças
- Usar Poppins para títulos e UI; Raleway para corpo longo
- Texturas (Grain, Light, Lines, Organic) como base sutil
- Ícones Material Symbols **filled**, Weight 300
- Fotografia com profissionais usando tecnologia
- CTAs em pill quando o tom for "promocional/inscrição"
- Espaços generosos (`space-lg` ou maior entre seções)

### ❌ DON'T

- Vermelho `#E64444` fora de urgência editorial
- Logo em fundos sem contraste mínimo
- Logo com sombras, bordas decorativas, efeitos
- Ilustrações com feições infantilizadas
- Fotos com verde dominante (usar como acento)
- Material Symbols outlined (sempre filled)
- Cinza < `neutral-400` sobre branco para texto (contraste insuficiente)
- Bordas < 70px em peças amplas/desktop largo
- Botões com mais de 1 CTA primário visível por viewport

---

## 7. Mapeamento marca-aplicação no site

| Página | Cor dominante de seção | Por quê |
|---|---|---|
| `/` (Home) | Mix: hero claro/escuro + faixas brand-800 | Apresenta o range completo |
| `/enamed` (informacional) | `brand-25` + `brand-950` (texto) | Tom enciclopédico, leitura |
| `/prova-enamed` (técnico) | `brand-950` em hero + branco no corpo | Autoridade |
| `/simulados-enamed` | `brand-800` em hero + verde-acento em cards de área | Energia/prática |
| `/cursos` | `brand-800` (vendas) + `accent-500` em selos | Comercial sólido |
| `/cursos/[slug]` | `brand-800` em hero + `brand-500` no CTA principal | LP de conversão |
| `/ies` | `blue-500` como acento (institucional/MEC) + brand padrão | Diferenciação B2B |
| `/blog`, `/faq` | Branco + neutrals, accents da categoria | Legibilidade |

---

## 8. Quando o token muda

- Sempre que o manual oficial for atualizado, **versionar** este DS (semver).
- Mudança de token-base requer:
  1. Edit em `globals.css`
  2. Atualizar `docs/design-system/brand-tokens.md`
  3. PR com screenshot before/after de pelo menos 3 páginas
  4. Aprovação @ux-design-expert + @architect

> **Não hardcode cores em componentes.** Sempre via `bg-brand-800` / `text-neutral-700` etc. (Brad principle #7: zero hardcoded values.)
