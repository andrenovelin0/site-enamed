# Brief — Logo do Portal ENAMED

**Para:** Uma (@ux-design-expert)
**De:** Morgan (@pm)
**Data:** 2026-05-27 · **Story relacionada:** EPIC-002 · 002.5

---

## Contexto

Após pivô estratégico ([PRD v2.0](../prd.md)), o site se posiciona como **portal informacional white-label** sobre o ENAMED. O wordmark atual no header — apenas a palavra "ENAMED" com um M circular — não comunica adequadamente:

- É genérico demais (qualquer site sobre ENAMED poderia usar)
- O "M" circular pode ser lido como uma marca específica
- Falta identidade própria que sinalize "portal de referência"

Precisamos de um **logo neutro porém com personalidade**, que conviva com o Design System EMR (verde escuro, Poppins/Raleway) **sem evocar a marca EMR**.

## Princípios

1. **Neutro mas não genérico** — não pode parecer placeholder. Tem que ter caráter editorial-acadêmico (pense: The Conversation, JAMA, Investopedia)
2. **Comprimível** — funciona de 16px (favicon) até hero (160px+)
3. **Coerente com o DS** — pode usar verde-âncora `#004F36` ou neutro escuro `#181717`. **Não** usar verde-neon ou amarelo destaque (são acentos, não identidade)
4. **Bem em mono e cor** — versão monocromática preto/branco sem perder reconhecimento
5. **Aceita o nome "Portal ENAMED"** — pode ser wordmark, monograma + wordmark, ou monograma puro com texto ao lado
6. **Tipografia coerente** — se houver wordmark, Poppins (família já carregada). Sem fontes adicionais

## O que evitar

- ❌ Estetoscópio, cruz médica, caduceu (clichê do nicho)
- ❌ Engrenagens, foguetes, "tech-forward" abstrato
- ❌ Verde-neon `#05FC89` na identidade (pode aparecer como acento, não como base)
- ❌ Letra "M" estilizada (evoca EMR, evita)
- ❌ Brasão acadêmico literal (laurel, coroa) — soa caricato
- ❌ Animações/gradientes complexos (logo precisa funcionar em PDF, favicon, etc.)

## Direções a explorar (3-4 propostas)

### Direção 1 — Monograma "PE" com cap inicial

"Portal ENAMED" com um monograma "PE" estilizado à esquerda. PE pode ser:
- Letras sobrepostas elegante (similar ao The Atlantic, NYT)
- Bigeometria sutil (P contendo E ou vice-versa)
- Em verde-âncora ou neutro-900

### Direção 2 — Símbolo de "ponto de referência"

Ícone abstrato que evoca **fonte/referência/marcador** (similar a pin, asterisco refinado, ou estrela cartográfica). Acompanhado de wordmark "Portal ENAMED" em Poppins Bold ao lado.

A ideia é evocar "este é o lugar onde se sabe" — leitor encontra a referência aqui.

### Direção 3 — Wordmark puro

Apenas "Portal ENAMED" com tratamento tipográfico distintivo — talvez um letterspacing único, um corte sutil no "O" formando uma sutil "lupa" (referência à busca/investigação), ou diferenciação de peso entre as duas palavras (Portal em Light + ENAMED em Black).

Vantagem: máxima neutralidade, foco no nome.

### Direção 4 — Iconograma de ondas/conhecimento (mais ousado)

Símbolo abstrato de "informação fluindo" ou "ondas de conhecimento" + wordmark. Mais arrojado mas requer cuidado para não virar genérico tech.

## Outputs esperados

- **3-4 propostas** em formato visual (Figma, SVG, ou HTML/CSS no `/design-system` página)
- Cada proposta em:
  - Cor primária (sobre branco e sobre verde-âncora)
  - Monocromático preto
  - Favicon 32×32px (versão reduzida)
- **Justificativa de cada direção** em 3-5 linhas
- **Recomendação Uma** — qual fica como default

## Constraints técnicos

- SVG inline preferível (já estamos com `<BrandMark>` em `src/components/brand-mark.tsx` — substituir conteúdo)
- Favicon em `src/app/favicon.ico` precisa ser atualizado pós-aprovação
- Open Graph image (`public/og-image.png`) deve usar o novo logo
- Versão dark (se aplicável) para sections com bg escuro (gradient-brand, brand-950)

## Como apresentar

Sugestão: criar uma rota interna em `/design-system/logo-options` (noindex, igual à galeria existente) renderizando as 4 propostas lado a lado em diferentes contextos (header, footer, favicon, OG mock). Eu @pm e o owner aprovam.

## Próximos passos

1. Uma explora as 4 direções (~1 dia)
2. Apresenta em `/design-system/logo-options`
3. Owner aprova 1 das 4
4. Uma + @dev integram no `<BrandMark>` + favicon + OG image
5. Story 002.5 fechada

## Inspirações de referência

- **The Conversation** — wordmark institucional, sem ícone, alta autoridade percebida
- **STAT News** — monograma + wordmark, paleta limpa
- **JAMA Network** — wordmark sério, tipografia distinta
- **Investopedia** — wordmark + cor-âncora, balanço entre acessível e técnico
- **Vox Magazine** — wordmark com personalidade tipográfica forte
