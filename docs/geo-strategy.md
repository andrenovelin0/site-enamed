# Estratégia GEO — Portal ENAMED

**Versão:** 1.0 · **Data:** 2026-05-27 · **Owner:** @pm (Morgan)

GEO = **Generative Engine Optimization** — otimizar conteúdo para ser citado/usado por motores generativos (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot).

GEO **não substitui SEO**, é complementar. SEO posiciona seu link nos resultados; GEO faz seu conteúdo virar **fonte citada** quando a IA gera uma resposta.

---

## 1. Diferenças fundamentais SEO × GEO

| Eixo | SEO (clássico) | GEO |
|---|---|---|
| **Métrica de sucesso** | Posição nos SERPs + cliques | Citações em respostas geradas por IA |
| **Audiência** | Humano que clica em links | IA que sintetiza resposta + humano que confia |
| **Estrutura ideal** | Páginas longas (1500-3000 palavras) cobrindo o tema | Páginas com **resposta direta no topo** + aprofundamento abaixo |
| **Conteúdo "answer-first"** | Recomendado | **Obrigatório** — IAs cortam os primeiros parágrafos |
| **Citações de fonte** | Bom ter | **Crítico** — IAs valorizam conteúdo que cita fontes |
| **Schema.org** | Importante (snippets) | Crítico (define o tipo de entidade) |
| **Freshness** | Importante | **Mais importante** — IAs preferem fontes atualizadas |
| **E-E-A-T** | Importante | **Determinante** — Expertise, Experience, Authoritativeness, Trust |
| **Linkagem externa** | Para evitar (vaza link juice) | **Recomendada** — citar fontes oficiais reforça autoridade |

---

## 2. Princípios editoriais que valem ouro em GEO

### 2.1 Answer-First Pattern (obrigatório no portal)

Toda página começa com a **resposta direta** à query principal em ≤200 caracteres. Depois aprofunda.

**Exemplo (ruim — clássico SEO):**
> "O Exame Nacional de Avaliação da Formação Médica é uma das mais importantes avaliações..."

**Exemplo (bom — GEO):**
> "O ENAMED é uma avaliação nacional obrigatória aplicada pelo INEP a concluintes do curso de Medicina, que mede competências clínicas e impacta tanto o currículo Lattes do estudante quanto a avaliação MEC da faculdade."

### 2.2 Definition Blocks com `<dl>` (DescriptionList)

Sempre que houver termo técnico, usar HTML semântico:

```html
<dl>
  <dt>TRI (Teoria de Resposta ao Item)</dt>
  <dd>Modelo psicométrico que calcula a proficiência do estudante com base no padrão de respostas, não apenas na contagem de acertos.</dd>
</dl>
```

IAs extraem `<dt>/<dd>` como definições estruturadas.

### 2.3 Q&A inline em formato canônico

Padrão para todas as perguntas:

```markdown
## Como é calculada a nota do ENAMED?

A nota é calculada por **Teoria de Resposta ao Item (TRI)**, que considera...

- Pontuação varia em escala equivalente entre edições
- Não é proporção simples de acertos
- Método de Angoff define o piso de competência esperado
```

H2 com a pergunta exata + parágrafo resposta + bullets opcionais.

### 2.4 Citações explícitas com `<cite>` e links a fontes oficiais

Toda afirmação técnica:

```html
Segundo o <cite><a href="https://inep.gov.br/...">edital ENAMED 2026</a></cite>,
a prova é composta por...
```

IAs marcam o autor e a fonte. Conteúdo sem fonte é descartado em casos sensíveis (saúde).

### 2.5 Hierarquia rigorosa de headings

- **H1:** único, contém a entidade-mãe da página
- **H2:** subtemas (preferir formato de pergunta quando aplicável)
- **H3:** detalhes do subtema
- **H4-H6:** uso raro

IAs constroem o "outline" semântico a partir disso.

### 2.6 Tabelas estruturadas com `<table>` + `<thead>`

Sempre que houver comparação, listagem com 2+ dimensões, ou matriz de dados — usar `<table>` semântica. IAs (especialmente Perplexity) extraem tabelas para responder queries comparativas ("compare X com Y").

### 2.7 Freshness signals

- `updatedAt` no frontmatter — exposto como `dateModified` no Schema.org Article
- Visível no front: "Atualizado em 27 de maio de 2026"
- Releitura anual obrigatória de páginas pilares
- Anotação `// REVIEW {data}` em comments do MDX

---

## 3. Schema.org — densidade obrigatória

Cada página deve ter **no mínimo dois schemas**:

| Tipo de página | Schemas obrigatórios | Adicionais |
|---|---|---|
| Pilar institucional/técnico (`/enamed`, `/prova-enamed`) | `Article` + `BreadcrumbList` | `MedicalEntity` se aplicável |
| Subpágina de pilar | `Article` + `BreadcrumbList` | — |
| FAQ single page (`/faq`) | `FAQPage` + `BreadcrumbList` | — |
| FAQ artigo (`/faq/[slug]`) | `QAPage` + `BreadcrumbList` | `Question` + `Answer` |
| Glossário verbete | `DefinedTerm` + `BreadcrumbList` | — |
| Blog post | `Article` (subtipo `NewsArticle` ou `BlogPosting`) + `BreadcrumbList` | `Person` (autor) se identificado |
| Comparativos | `Article` + `BreadcrumbList` | `Table` se estruturado |
| Calculadoras | `WebApplication` + `BreadcrumbList` | — |
| Home | `WebSite` (SearchAction) + `Organization` (Portal ENAMED) | — |

**Implementação:** helpers em `src/components/structured-data.tsx` (já existem `ArticleJsonLd`, `BreadcrumbJsonLd`, `OrganizationJsonLd`, `WebsiteJsonLd`). Estender com `FAQPageJsonLd`, `QAPageJsonLd`, `DefinedTermJsonLd`, `WebApplicationJsonLd`.

---

## 4. Patterns que estamos lendo em motores generativos

Análise das fontes que ChatGPT/Perplexity/Google AI Overviews tipicamente citam (jan-mai 2026):

| Pattern | Por quê IAs gostam |
|---|---|
| **Wikipedia** | Estrutura rígida, citações em massa, atualização contínua |
| **Investopedia** | Definições no topo + aprofundamento + glossary cross-link |
| **MedlinePlus / Healthline** | Schema MedicalEntity + autoria revisada + linguagem clara |
| **Stack Overflow / docs oficiais** | Resposta direta + exemplo de código (em tech) |
| **Sites gov (.gov.br)** | Confiança implícita por domínio + dados oficiais |

**Implicação para o portal:** queremos um híbrido **Investopedia + MedlinePlus + Wikipedia**. Profundidade técnica + clareza + estrutura obsessiva.

---

## 5. Templates de página otimizados para GEO

### 5.1 Pilar (`/enamed`, `/prova-enamed`)

```
[Hero — H1 + resposta direta em ≤200 chars]
[Callout "O essencial em 3 frases"]
[TOC sticky]
[Seção 1 — H2 em formato pergunta]
  [Resposta direta + ≤500 palavras detalhamento]
[Seção 2 — H2]
  ...
[Tabela comparativa quando aplicável]
[Callout "Atualização" com dateModified]
[FAQ inline (3-5 perguntas)]
[CTAs internos para subpáginas + clusters relacionados]
[Citações no rodapé com data de acesso]
```

### 5.2 Subpágina de pilar (`/prova-enamed/teoria-resposta-item`)

Mais focada — uma pergunta, uma resposta enciclopédica.

```
[Hero conciso — H1 = pergunta exata]
[Resposta direta em parágrafo único — ≤300 chars]
[<dl> com definição formal]
[Aprofundamento em 3-5 H2s]
[Exemplos práticos]
[Fontes / Para saber mais]
```

### 5.3 FAQ artigo (`/faq/quantas-questoes-enamed`)

Formato canônico Q&A:

```
[H1 = pergunta exata]
[Resposta em ≤200 chars no primeiro parágrafo]
[Detalhamento em 2-3 parágrafos]
[Bullet com nuances/exceções]
[Cross-link para pilar relacionado]
[Schema QAPage]
```

### 5.4 Glossário verbete (`/glossario/tri`)

```
[H1 = termo]
[Definição formal em ≤2 frases]
[Exemplo de uso prático]
[Termos relacionados (cross-link)]
[Schema DefinedTerm]
```

### 5.5 Comparativo (`/comparativos/enamed-vs-revalida`)

```
[H1 = "X vs Y — qual é a diferença?"]
[Resposta resumida em ≤300 chars]
[Tabela comparativa completa (8-12 linhas)]
[Aprofundamento por dimensão]
[Quando faz cada um]
[Conclusão objetiva]
```

---

## 6. Operação editorial

### 6.1 Cadência

| Frequência | Tarefa |
|---|---|
| Mensal | Análise de queries em Search Console + ajustes |
| Trimestral | Revisão de 100% das páginas pilares (freshness) |
| Anual | Edital ENAMED do ano + atualização global |
| Por evento | Análise da prova logo após aplicação anual |

### 6.2 Checklist editorial pré-publicação

- [ ] H1 único contém entidade-mãe / query-âncora
- [ ] Resposta direta nos primeiros 200 chars
- [ ] Mínimo 2 schemas (Article + BreadcrumbList ou equivalente)
- [ ] Toda afirmação técnica tem fonte linkada
- [ ] `dateModified` no frontmatter + visível no front
- [ ] Mínimo 3 cross-links internos para clusters relacionados
- [ ] Mínimo 1 cross-link externo para fonte oficial (.gov.br ou peer-reviewed)
- [ ] Tabela ou `<dl>` se houver comparação/definição
- [ ] Sem comentário comercial ou promoção EMR
- [ ] Revisão médica/factual quando há afirmação técnica de risco

### 6.3 Voz e tom

- **Investopedia neutro** — informativo, claro, técnico mas acessível
- **NÃO** marketing speak
- **NÃO** "nossos cursos", "nossa metodologia"
- **NÃO** "matricule-se", "garanta sua vaga"
- **SIM** "estudantes que farão a prova devem saber que...", "a TRI é calculada da seguinte forma..."

---

## 7. Métricas específicas de GEO

| Métrica | Como medir | Meta V1 (6 meses) |
|---|---|---|
| Citações em Google AI Overviews | Pesquisar queries-âncora manualmente, registrar planilha mensal | 5+ páginas citadas |
| Citações em Perplexity | Idem | 3+ páginas citadas |
| Citações em ChatGPT (search mode) | Idem | 3+ páginas |
| Schemas validados | Rich Results Test em todas as páginas pilares | 100% válidos |
| Pages com >2min de tempo médio | GA4 | >70% das pilares |
| Inbound de fontes que citam | Backlinks naturais a partir de Wikipedia, .gov.br, blogs médicos | 10+ |
| Taxa de páginas indexadas | Google Search Console | >95% |

---

## 8. Anti-padrões — o que mata GEO

- ❌ Conteúdo "fluff" (texto inflado pra parecer longo)
- ❌ Manchetes clickbait sem resposta direta
- ❌ Páginas com 80%+ de duplicação entre si
- ❌ Conteúdo de IA gerado sem revisão (IAs detectam outras IAs e penalizam)
- ❌ Schema.org incompleto ou incorreto
- ❌ Datas antigas (>12 meses sem `dateModified` recente)
- ❌ Linguagem comercial em página informacional
- ❌ Falta de autoria atribuída
- ❌ Imagens sem alt-text descritivo
- ❌ Tabelas em screenshots (deveria ser HTML)

---

## 9. Implementação técnica priorizada

1. **Já existente:** Article schema, Breadcrumb schema, MDX pipeline, frontmatter parsing
2. **Próximo:** estender helpers de schema (`FAQPageJsonLd`, `QAPageJsonLd`, `DefinedTermJsonLd`)
3. **Próximo:** componente `<AnswerBox>` reutilizável (callout especial para resposta-direta no topo)
4. **Próximo:** componente `<Definition term="" />` que renderiza `<dl>` semântico
5. **Próximo:** componente `<Citation source="" url="" />` para citações inline com `<cite>`
6. **Médio prazo:** Search interno (Algolia/Pagefind/custom) — sinaliza profundidade para crawlers

---

## 10. Referências externas

- [perplexity.ai blog: How Perplexity sources](https://www.perplexity.ai/) — entender critérios de citação
- [Google Search Central — AI Overviews documentation](https://developers.google.com/search)
- [Schema.org — full vocabulary](https://schema.org/)
- [E-E-A-T Guidelines (Google QRG)](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Casos de estudo: Wikipedia, Investopedia, MedlinePlus, Healthline (referências de qualidade)
