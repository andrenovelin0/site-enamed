# Design System — Brand Tokens

**Versão:** 1.0 · **Data:** 2026-05-27 · **Fonte:** `MIV EMR 2025 - Versão 01.pdf` (48p)
**Marca:** Eu Médico Residente · **Owner do DS:** Uma (ux-design-expert)

Documento declarativo dos tokens. Implementação em `src/app/globals.css` via Tailwind v4 `@theme`. Quando manual e código divergirem, **manual ganha** — abrir issue e propagar.

---

## 1. Personalidade da marca (termômetro visual)

Posicionamento extraído de §"Termômetro visual" (p7). Pares opostos com nossa posição:

| Eixo | Polo distante | Polo de aproximação |
|---|---|---|
| Sério ←→ Descontraído | Sério (acadêmico) | mas **amigável** |
| Complexo ←→ Simples | (médio) | tende a **simples** |
| Conservador ←→ Moderno | — | **moderno** |
| Arcaico ←→ Digital | — | **digital** |
| Grosseiro ←→ Ousado | — | **ousado** (não bruto) |

**Implicação para o site:** linguagem visual clara e direta, espaços generosos, microinterações modernas. Público adulto profissional — **não** infantilizar (sem ilustrações com feições muito arredondadas).

---

## 2. Missão · Visão · Valores (informativo)

- **Missão:** Ajudar médicos, através da educação, a exercerem a medicina de excelência que sempre sonharam.
- **Visão:** Até 2027 nos tornaremos a melhor plataforma de ensino médico da América Latina.
- **Valores:** Foco total no aluno · Trabalho com propósito · Meritocracia · Aprendizado contínuo · Espírito de Equipe.

---

## 3. Tokens de Cor

### 3.1 Paleta Primária — Verdes (cor-âncora `#004F36`)

| Token | Hex | RGB | HSL | Uso recomendado | % visual |
|---|---|---|---|---|---|
| `brand-25` | `#F2FAFF` | 242,250,255 | 209 100 98 | Fundos amplos, backdrop hero | 10% |
| `brand-300` | `#6CFFBB` | 108,255,187 | 152 100 71 | Highlights, badges sucesso | 15% |
| `brand-500` | `#05FC89` | 5,252,137 | 152 97 50 | CTAs vibrantes, accents neon | 15% |
| `brand-600` | `#35BD78` | 53,189,120 | 148 56 47 | CTA secundário, links ativos | 30% |
| `brand-700` | `#005C31` | 0,92,49 | 151 100 18 | Hover de primária, contornos | (secundária) |
| **`brand-800`** | **`#004F36`** | **0,79,54** | **159 100 15** | **Cor-âncora · CTA primário · header** | **40%** |
| `brand-950` | `#001D19` | 0,29,25 | 170 100 6 | Backgrounds escuros, texto sobre claro | 20% |

**Tons interpolados** (50, 100, 200, 400, 900) gerados algoritmicamente para compor a escala 50–950 do Tailwind. Documentados no §3.7.

### 3.2 Paleta Secundária — Verdes complementares

| Token | Hex | Uso |
|---|---|---|
| `verde-100` (claro) | `#B5FF9A` | Tags, fundos sutis de blocos verdes |
| `verde-300` (médio) | `#93D07D` | Ícones, ilustrações flat |
| `verde-700` (escuro) | `#005C31` | Mesmo que `brand-700` (alias) |

### 3.3 Paleta Secundária — Amarelo destaque

| Token | Hex | Uso |
|---|---|---|
| `accent-50` | `#FFFFCC` | Backgrounds de avisos suaves |
| `accent-100` | `#FFEA9C` | Highlights, marca-texto |
| **`accent-500`** | **`#EAB904`** | **Destaque oficial · selos · medalhas** |

### 3.4 Paleta Secundária — Púrpura

| Token | Hex | Uso |
|---|---|---|
| `purple-100` | `#EEDAEE` | Backgrounds suaves |
| `purple-300` | `#D19BD0` | Tags categorizadoras |
| `purple-500` | `#841A81` | Categoria IES · diferenciação editorial |

### 3.5 Paleta Secundária — Azul

| Token | Hex | Uso |
|---|---|---|
| `blue-100` | `#DDEAF6` | Backgrounds suaves |
| `blue-300` | `#A6CAEC` | Tags informativas |
| `blue-500` | `#32578A` | Links informativos · selos institucionais |

### 3.6 Paleta Secundária — Coral / Vermelho (USO RESTRITO)

| Token | Hex | Uso |
|---|---|---|
| `coral-100` | `#FBE5D6` | Backgrounds suaves de alerta |
| `coral-300` | `#F49E86` | Tags de aviso |
| **`coral-500`** | **`#E64444`** | **⚠️ APENAS para urgência editorial (últimos dias, encerramento de campanha). NÃO usar como vermelho de erro semântico.** |

> **Regra do manual (p29):** *"Ícones vermelhos devem ser utilizados apenas para campanhas com fins de urgência."*

### 3.7 Escala neutra (calibrada para `#181717` preto da marca)

| Token | Hex aproximado | Uso |
|---|---|---|
| `neutral-50` | `#F4F8F5` | Backgrounds de seção |
| `neutral-100` | `#EBF1ED` | Divisores suaves |
| `neutral-200` | `#DCE2DE` | Bordas |
| `neutral-300` | **`#B8B8B8`** | Cinza oficial · placeholders · disabled |
| `neutral-400` | `#8C8C8C` | Texto secundário |
| `neutral-500` | `#6B6B6B` | Texto auxiliar |
| `neutral-600` | `#4D4E4C` | Texto de corpo (secundário) |
| `neutral-700` | `#383938` | Texto corpo |
| `neutral-800` | `#242524` | Títulos secundários |
| `neutral-900` | **`#181717`** | **Preto da marca · títulos** |
| `neutral-950` | `#001D19` | Mesmo que `brand-950` |

### 3.8 Aliases semânticos

| Alias | Token-base | Uso |
|---|---|---|
| `background` | `#FFFFFF` (light) / `brand-950` (dark) | Fundo de página |
| `foreground` | `neutral-900` | Texto principal |
| `muted` | `neutral-50` | Backgrounds sutis |
| `muted-foreground` | `neutral-500` | Texto auxiliar |
| `border` | `neutral-200` | Bordas/divisores |
| `success` | `brand-700` | Confirmações |
| `warning` | `accent-500` | Avisos |
| `info` | `blue-500` | Mensagens informativas |
| `urgency` | `coral-500` | Campanhas urgência (uso restrito) |
| `error` | `coral-500` | Erros de validação (compartilha com `urgency`) |

### 3.9 Hierarquia de uso (do manual)

```
40% brand-800 (verde âncora)
30% brand-600 (verde médio)
20% brand-950 (quase preto)
15% brand-500 + brand-300 (acentos vibrantes)
10% brand-25 + neutros (respiro)
```

Nas fotos: **verde não deve dominar** — usar como acento sutil (iluminação, detalhe de vestuário).

---

## 4. Tipografia

### 4.1 Famílias

| Token | Família | Subset | Pesos carregados |
|---|---|---|---|
| `--font-display` | **Poppins** | latin | 300, 400, 500, 600, 700, 800, 900 |
| `--font-sans` | **Poppins** (alias) | — | — |
| `--font-body` | **Raleway** | latin | 300, 400, 500, 600, 700 |

Carregadas via `next/font/google` em `src/app/layout.tsx` (já implementado). `display: swap`.

### 4.2 Pares de uso

| Contexto | Família | Peso recomendado |
|---|---|---|
| Display / Hero H1 | Poppins | 700–800 |
| Heading H2–H4 | Poppins | 600–700 |
| Heading H5–H6 | Poppins | 500–600 |
| Corpo de texto longo | Raleway | 400 |
| Texto destacado | Raleway | 600–700 |
| UI labels / buttons | Poppins | 600–700 |
| Caption / metadata | Raleway | 400–500 |

### 4.3 Escala tipográfica

| Token | Tamanho | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|
| `text-xs` | 0.75rem (12px) | 1.5 | 0 | Caption, metadata |
| `text-sm` | 0.875rem (14px) | 1.5 | 0 | Helper, small body |
| `text-base` | 1rem (16px) | 1.6 | 0 | Body padrão |
| `text-lg` | 1.125rem (18px) | 1.6 | 0 | Body destacado, lead |
| `text-xl` | 1.25rem (20px) | 1.4 | -0.005em | H6, subhead |
| `text-2xl` | 1.5rem (24px) | 1.3 | -0.01em | H5 |
| `text-3xl` | 1.875rem (30px) | 1.25 | -0.015em | H4 |
| `text-4xl` | 2.25rem (36px) | 1.2 | -0.02em | H3 |
| `text-5xl` | `clamp(2.5rem, 4vw, 3.5rem)` | 1.15 | -0.02em | H2 |
| `text-6xl` | `clamp(3rem, 5vw, 4.5rem)` | 1.1 | -0.025em | H1 |
| `text-display` | `clamp(3.5rem, 6vw, 6rem)` | 1.05 | -0.03em | Hero display |

> **Regra (já em globals.css):** todos os `h1-h6` herdam `font-family: var(--font-display)` (Poppins), `letter-spacing: -0.02em`, `font-weight: 700`. Override por classe utility quando necessário.

---

## 5. Espaçamento e Grid

### 5.1 Escala (base 4px)

Tailwind padrão é mantido (`p-1` = 4px). Tokens semânticos:

| Token | Valor | Uso |
|---|---|---|
| `space-xs` | 0.5rem (8px) | Gap entre elementos próximos |
| `space-sm` | 1rem (16px) | Gap padrão entre blocos pequenos |
| `space-md` | 1.5rem (24px) | Gap padrão de cards |
| `space-lg` | 2.5rem (40px) | Gap entre seções dentro de uma página |
| `space-xl` | 4.5rem (72px) | Gap entre grandes blocos |
| `space-2xl` | 6rem (96px) | Top/bottom de seções hero |
| `space-section` | `clamp(3rem, 6vw, 6rem)` | Padding vertical padrão de `<section>` |

### 5.2 Container

`.container-page` (já em globals.css):

| Breakpoint | Padding lateral | Max-width |
|---|---|---|
| < 640px | 1rem (16px) | 100% |
| ≥ 640px | 1.5rem (24px) | 100% |
| ≥ 1024px | 2rem (32px) | 80rem (1280px) |
| ≥ 1440px | **4.375rem (70px)** | 80rem (1280px) — **respeita o grid mínimo do manual (p44)** |

> **Regra do manual (p44):** *"Sempre respeitar o espaçamento mínimo de 70px x 70px para bordas."* Aplicável em peças impressas e layouts amplos; no web, replicado a partir de `≥1440px`. Em telas menores ajustamos para preservar legibilidade.

---

## 6. Bordas e radius

| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | 0.375rem (6px) | Inputs, badges |
| `radius-md` | 0.5rem (8px) | Cards menores |
| `radius-lg` | 0.75rem (12px) | Cards padrão, botões |
| `radius-xl` | 1rem (16px) | Painéis grandes |
| `radius-2xl` | 1.5rem (24px) | Modals, hero cards |
| `radius-pill` | 9999px | CTAs estilo "MATRICULE-SE JÁ!" (do manual p29) |

### 6.1 Bordas (espessura e cor)

- Padrão: `1px solid hsl(var(--border))`
- Forte: `1.5px solid hsl(var(--brand-800))`
- Underline link: `1px solid currentColor` com offset 2px

---

## 7. Sombras / Elevação

| Token | Valor | Uso |
|---|---|---|
| `shadow-soft` | `0 1px 2px rgb(0 0 0 / 0.05)` | Cards leves |
| `shadow-card` | `0 4px 12px hsl(var(--brand-950) / 0.08)` | Cards padrão |
| `shadow-popover` | `0 12px 32px hsl(var(--brand-950) / 0.15)` | Dropdowns, popovers |
| `shadow-cta` | `0 8px 24px hsl(var(--brand-800) / 0.25)` | CTA primário em hover |
| `shadow-focus` | `0 0 0 3px hsl(var(--brand-500) / 0.4)` | Focus ring de acessibilidade |

Sem sombras dramáticas em texto — o termômetro pede *simples + moderno*, não *complexo*.

---

## 8. Iconografia

### 8.1 Ícones funcionais — Material Symbols (Google)

Configuração obrigatória (p30 do manual):

| Parâmetro | Valor |
|---|---|
| Style | Filled (sempre com preenchimento) |
| Weight | 300 |
| Grade | 0 (normal) |
| Optical Size | 24 |

Implementação recomendada: `material-symbols` via `<link>` ou `next/font/google` com `Material_Symbols_Rounded`/`Outlined` configurado.

### 8.2 Ícones 3D (Material Design 3D)

| Regra do manual | Valor |
|---|---|
| Onde usar | Redes sociais, endomarketing, eventos |
| Onde NÃO usar | Tráfego pago em geral (apenas como elemento de apoio) |
| Redução máxima desktop | 110×110 px |
| Redução máxima mobile | 43×43 px |

**No site (V1):** evitar — priorizar Material Symbols filled (mais leve e adequado a UI). Reservar 3D para campanhas/peças promocionais futuras.

---

## 9. Fotografia (diretrizes editoriais)

### 9.1 Estilo Moderna

Profissionais com tecnologia (celular, tablet, TV, equipamentos). Evitar materiais físicos (cadernos, lápis) **exceto** em blog/orgânico onde o contexto justifica.

### 9.2 Estilo Humana

Capturas naturais, **não posadas**. Verde como acento sutil (iluminação, detalhe). **Verde nunca dominante**. Evitar excesso de manipulação visual.

### 9.3 Estilo Ousada (uso restrito)

Apenas para público **Bases** ou orgânico/endomarketing. NÃO usar em LP comerciais do site.

### 9.4 Ilustração

- Flat design simples
- Sem excesso de linhas, sombras, cores
- **Sem feições infantilizadas** (público adulto)

---

## 10. Backgrounds e texturas

Texturas oficiais (p32–37): **Grain 01**, **Light**, **Lines**, **Organic**. Usar como **base sutil**, nunca dominante. Especialmente em heros e CTAs grandes.

---

## 11. Componentes-padrão extraídos do manual

### 11.1 CTA pill ("MATRICULE-SE JÁ!" — p29)

- Forma: pill (radius 9999px) ou retangular com radius-xl
- Cor: `brand-500` (#05FC89) sobre `brand-950`, OU `brand-800` sobre branco
- Tipografia: Poppins Bold/Black, uppercase
- Padding: 0.75rem 1.75rem
- Hover: shadow-cta + leve `translateY(-1px)`

### 11.2 Logo + Inspirali

Usar apenas onde ambas as empresas convivem (eventos, materiais conjuntos). **No site público este lockup NÃO se aplica** — usar logo EMR puro.

---

## 12. Anti-padrões do manual

Do §"Não fazer" (p13):
- ❌ Logo em fundos sem contraste
- ❌ Logo com efeitos (sombras dramáticas, bordas)
- ❌ Verde dominante em fotos
- ❌ Ilustrações com feições infantilizadas
- ❌ Vermelho fora de contexto de urgência
- ❌ Bordas <70px em peças amplas (ver §5.2)

---

## 13. Implementação

| Arquivo | Status | Responsável |
|---|---|---|
| `src/app/globals.css` | ✅ atualizado pela story 001.1 (cores principais já alinhadas; estendido com escala completa, espaçamento, sombras, radius-pill) | @dev |
| `src/app/layout.tsx` | ✅ Poppins + Raleway via `next/font/google` | @dev |
| `tailwind` v4 `@theme` | ✅ definido em globals.css | @dev |
| Página `/design-system` (interna) para validação visual | 🔴 a criar (story 001.6 estendida) | @dev |

---

## 14. Referências

- Manual oficial: `MIV EMR 2025 - Versão 01.pdf` (Downloads do owner)
- Convenção do projeto: `AGENTS.md`
- PRD: `docs/prd.md`
- Arquitetura: `docs/architecture.md`
- Guia de uso prático: `docs/design-system/usage-guide.md`
- Specs de componentes: `docs/design-system/components-spec.md`
