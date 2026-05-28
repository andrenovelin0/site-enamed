# PRD — Portal ENAMED (white-label EMR)

**Versão:** 2.0 · **Data:** 2026-05-27 · **Pivô estratégico registrado** · **Owner:** @pm (Morgan)

> ⚠️ **Atenção — substitui PRD v1.0.** A v1.0 tratava o site como portal comercial da EMR. A v2.0 reposiciona como **portal de autoridade temática white-label**: o conteúdo constrói topical authority sobre o ENAMED para que a EMR colha valor indireto (SEO equity, geração de demanda passiva, branding setorial), **sem que o site mostre marca EMR no front nem ofereça venda direta de cursos EMR**.

---

## 1. Visão de Produto

**O Portal ENAMED** é o destino orgânico de referência sobre o **Exame Nacional de Avaliação da Formação Médica** — desenhado para liderar resultados de busca tradicional (Google) e de busca generativa (ChatGPT, Perplexity, AI Overviews, Claude) em qualquer pergunta relacionada ao exame.

**O que o site é:**
- Enciclopédia online sobre o ENAMED (tom Investopedia/Healthline, não comercial)
- Hub de calculadoras, simulados informativos, comparativos técnicos
- Plataforma editorial de notícias, editais e análises sobre o exame

**O que o site NÃO é:**
- Loja de cursos
- Funil de captura agressivo para EMR
- Página de marca da EMR

**Princípio editorial:** se o conteúdo não fizesse sentido em uma enciclopédia gratuita, ele não entra. Toda página existe pra responder uma dúvida real do público — não pra "vender".

---

## 2. Modelo de Negócio

| Camada | Como funciona |
|---|---|
| **Visível** | Site puramente informacional. Sem CTAs de venda EMR, sem captura agressiva. |
| **Indireto** | Autoridade construída no portal alimenta indiretamente: (a) SEO equity setorial; (b) brand awareness do nicho ENAMED como categoria; (c) demanda passiva — leitores que descobrem o assunto e mais tarde procuram preparatórios; (d) dados agregados de comportamento de busca/leitura |
| **Menções pontuais EMR** | Discretas e editoriais. Permitidas: footer "Conteúdo desenvolvido em parceria com Eu Médico Residente"; créditos em artigos ("Revisado por Dra. Fulana, mentora EMR"); página `/sobre` cita organização mantenedora. **Não permitido:** CTAs comerciais, logo EMR no header, banners "Conheça nossos cursos" |
| **Tracking** | Analytics agregado (GA4) para entender quais conteúdos performam, sem captura PII no fluxo principal |

---

## 3. Público-Alvo

| Persona | Necessidade primária | Resposta GEO típica que devemos liderar |
|---|---|---|
| Estudante de medicina (3º-6º ano) | Entender o exame; preparar-se | "como funciona a TRI no enamed", "quantas questões tem o enamed" |
| Médico recém-formado | Compreender impacto na carreira | "nota do enamed conta para residência?" |
| Coordenador IES | Avaliar impacto institucional | "como o enamed afeta a nota do MEC?", "sanções do MEC por desempenho ruim" |
| Pesquisador/imprensa | Definições, dados, histórico | "o que é o enamed", "diferença entre enamed e revalida" |
| Familiar leigo | Entender por que filho(a) está estudando isso | "o que é o enamed em termos simples" |

---

## 4. Estratégia SEO + GEO

Ver documento dedicado: [docs/geo-strategy.md](./geo-strategy.md)

**Resumo de cinco linhas:**
- **Buscas informacionais long-tail** dominam o tráfego — escopo enciclopédico com ~100-150 páginas
- **GEO** (Generative Engine Optimization) exige: resposta direta no topo, schema.org rico, citações de fontes oficiais (INEP/MEC), estrutura de Q&A
- **Topical authority** sobre o ENAMED como entidade — cobertura exaustiva sinaliza expertise para AI crawlers
- **Sem competir** com sites comerciais por keywords transacionais (eles têm vantagem); **competir e dominar** as keywords informacionais
- **Atualização editorial constante** — edital anual + análises de prova recente + glossário vivo

---

## 5. Escopo (V1)

### 5.1 In-scope

**Estrutura informacional principal (~7 pilares + subpáginas):**

| Pilar | Slug | Sub-rotas previstas |
|---|---|---|
| **O Exame** | `/enamed` | + 8-12 artigos suporte (definição, história, edital, etc.) |
| **A Prova** | `/prova-enamed` | + 10-15 artigos (TRI, Angoff, notas, áreas, tempo, formato) |
| **Áreas e Conteúdos** | `/areas` (NOVO) | 6 áreas pilares + 30-40 subtemas (cardio, pneumo, cirurgia, etc.) |
| **Simulados (informacional)** | `/simulados-enamed` | + 6 sub-áreas + guia "como interpretar resultado" |
| **Como se preparar** | `/preparacao` (era `/cursos`) | + 8-12 artigos (cronogramas, técnicas, livros, mentores, sem promover marca) |
| **Para IES** | `/ies` | + 10-12 artigos (MEC, CPC, sanções, casos) |
| **Carreira e Pós** | `/carreira` (NOVO) | + 10-15 artigos (residência, R+, mercado, salários, especialidades) |

**Estrutura editorial:**
- `/blog` — fresh content (notícias, editais, análises de provas recentes)
- `/faq` — central de perguntas (mas cada Q também vira artigo próprio em `/faq/[slug]` para snippets)
- `/glossario` (NOVO) — A-Z de termos do exame e da prática médica

**Ferramentas (microferramentas SEO/GEO):**
- `/calculadoras/nota-final` — estimador de nota TRI
- `/calculadoras/tempo-prova` — distribuidor de tempo por área
- `/comparativos/enamed-vs-revalida` — tabela detalhada
- `/comparativos/enamed-vs-enade`
- `/comparativos/enamed-vs-residencia`

**Institucional/legal (minimalista):**
- `/sobre` — sobre o portal e parceria EMR (única menção visível à EMR)
- `/contato` — formulário neutro
- `/politica-de-privacidade`, `/termos-de-uso`, `/politica-de-cookies`

**Total estimado V1:** ~100-130 páginas estáticas + dinâmicas geradas via MDX.

### 5.2 Out-of-scope (V1)

- Loja/checkout/auth
- Simulado funcional interativo (este vive em produto externo da EMR, mas ESTE site não linka pra ele — só explica)
- CTAs comerciais
- Newsletter agressiva (pode ter um campo discreto em `/blog`)
- Identidade visual EMR-branded (mantém-se o **DS visual** mas SEM logo EMR)

### 5.3 Diferido (V2+)

- App de simulado integrado (se decidirem expor o produto EMR como branding)
- Newsletter com curadoria semanal
- Versão em espanhol (LatAm)

---

## 6. Identidade e Branding

| Aspecto | Decisão |
|---|---|
| Nome do site (header) | **"Portal ENAMED"** — descritivo, neutro, máxima clareza de propósito |
| Tagline | "Tudo sobre o Exame Nacional de Avaliação da Formação Médica" |
| Identidade visual | **Mantém Design System EMR** (verde #004F36, Poppins, Raleway) — visual interno do projeto, sem alusão à marca EMR |
| Logo | **Substituir o "ENAMED" do header por um logotipo neutro** — sugestão: monograma "PE" ou ícone abstrato + "Portal ENAMED" — designar story para Uma (ux-design-expert) |
| Footer | Discreto + linha "Conteúdo desenvolvido em parceria com Eu Médico Residente" (única menção visível) |

### 6.1 Copy proposta para `/sobre` (menção EMR breve)

A página `/sobre` é o **único lugar do site** onde a EMR aparece de forma textual. Decisão de copy:

> **Sobre o Portal ENAMED**
>
> O Portal ENAMED é uma fonte de referência independente sobre o **Exame Nacional de Avaliação da Formação Médica (ENAMED)**. Nosso compromisso editorial é entregar conteúdo factual, citável e atualizado — sem viés comercial — para estudantes de Medicina, médicos recém-formados, coordenações de IES e pesquisadores.
>
> Cobrimos o ENAMED em todas as suas dimensões: o que é, como funciona, como afetam estudantes e instituições, e como se preparar com base em evidência.
>
> **Quem está por trás**
>
> O Portal é mantido em parceria com a **[Eu Médico Residente](https://www.eumedicoresidente.com.br)**, organização brasileira referência em educação médica continuada. Profissionais médicos da EMR contribuem com revisão técnica e curadoria de conteúdo, garantindo precisão científica em todo o material publicado.
>
> Apesar dessa parceria operacional, o **conteúdo editorial é independente**: não veiculamos produtos, não fazemos propaganda comercial e não direcionamos o leitor a serviços específicos. Nossas únicas métricas de sucesso são acurácia, profundidade e utilidade para quem busca informação sobre o ENAMED.

(Tom: neutro, declarado, sem propaganda. EMR aparece exatamente uma vez no corpo + uma vez no footer global.)

---

## 7. Funcionalidades Requeridas (FR)

| ID | Funcionalidade | Prioridade |
|---|---|---|
| FR-01 | Home pivotada — hero informacional (NÃO comercial), hub de clusters, posts recentes, FAQ snippet | P0 |
| FR-02 | 7 páginas pilares com MDX + TOC + breadcrumb + Article schema | P0 |
| FR-03 | Sub-páginas dos pilares (rotas estáticas conhecidas) — total ~60-80 sub-páginas | P0 |
| FR-04 | Blog `/blog` + `/blog/[slug]` (~15-20 posts seed) | P0 |
| FR-05 | FAQ dual-mode: `/faq` (single page com schema FAQPage) + `/faq/[slug]` (cada Q como artigo próprio) | P0 |
| FR-06 | Glossário `/glossario` (lista A-Z) + `/glossario/[termo]` (~30 verbetes seed) | P1 |
| FR-07 | Calculadoras (`/calculadoras/*`) — 2-3 ferramentas mínimas | P1 |
| FR-08 | Comparativos (`/comparativos/*`) — 3-5 tabelas estruturadas | P1 |
| FR-09 | Refator da Home + Header — REMOVER CTAs comerciais ("Simulado grátis", "Ver cursos") | **P0 — crítico** |
| FR-10 | `sitemap.xml` + `robots.txt` indexando todas as ~100 rotas | P0 |
| FR-11 | Schema.org rico em TODA página: Article, FAQPage, HowTo, BreadcrumbList, MedicalEntity quando aplicável | P0 |
| FR-12 | Otimização para GEO: respostas diretas no topo da página, `<dl>` para defs, citações com `<cite>` | P0 |
| FR-13 | Newsletter discreta em `/blog` (footer do post) — opt-in genérico | P2 |
| FR-14 | Banner LGPD | P1 |

---

## 8. Requisitos Não-Funcionais (NFR)

Mantidos da v1.0 ([ver versão anterior](#)) com adições:

| ID | NFR | Métrica |
|---|---|---|
| NFR-09 | **GEO-readability** | Cada página tem resposta direta da query principal nos primeiros 200 caracteres |
| NFR-10 | **Schema density** | Mínimo 2 schemas por página (BreadcrumbList + tipo específico) |
| NFR-11 | **Citation hygiene** | Toda afirmação técnica linka para fonte oficial (INEP, MEC, CFM) |
| NFR-12 | **Page count** | V1 entrega 100+ páginas indexáveis |

---

## 9. Constraints (CON)

- **CON-01** Stack Next.js 16.2.6 + React 19 + Tailwind v4 + MDX — fixos
- **CON-02** Design System EMR mantido como visual interno
- **CON-03** Sem EMR-branded UI no front (footer único permitido)
- **CON-04** Sem comercialização direta
- **CON-05** Português apenas (V1)
- **CON-06** Conteúdo factual obrigatoriamente citável (linka para INEP/MEC/CFM)

---

## 10. Métricas de Sucesso

| Métrica | Janela | Meta V1 |
|---|---|---|
| Posicionamento orgânico Google top-3 | 6 meses pós-lançamento | 10+ keywords âncora informacionais |
| **Citações em AI Overviews (Google) / SGE** | 6 meses | 5+ páginas citadas como fonte |
| **Citações em ChatGPT/Perplexity para queries-âncora** | 6 meses | Aparecer como referência em 3+ queries |
| Sessões orgânicas/mês | 6 meses | Crescimento mensal positivo após mês 3 |
| Tempo médio na página | mensal | > 2min30s (sinal de leitura real) |
| Taxa de páginas/sessão | mensal | > 2.0 (sinal de exploração do cluster) |
| Indexação cobertura GSC | 3 meses | 95%+ das URLs submetidas |

**Não medimos** (intencional): conversões, vendas, leads. Estes ficam para o produto EMR consumir indiretamente.

---

## 11. Roadmap de Entrega (epics revisados v2.0)

| Epic | Escopo | Prioridade | Tamanho |
|---|---|---|---|
| **EPIC-001** Fundação técnica & DS | ✅ feito (story 001.6a) + ajustes (logo neutro pendente) | P0 | quase pronto |
| **EPIC-002** Pivô white-label | Refator da Home, Header, Footer; renomeia `/cursos` → `/preparacao`; logo neutro | **P0 — crítico** | M |
| **EPIC-003** MDX pipeline | ✅ feito (story 003.1) | P0 | feito |
| **EPIC-004** Pilares informacionais (7) | Todos os pilares com MDX + cross-links | P0 | L |
| **EPIC-005** Subpáginas dos pilares (~60-80) | Artigos de suporte de cada pilar | P0 | XL |
| **EPIC-006** Blog dinâmico + 15-20 posts seed | `/blog` + `/blog/[slug]` + content | P0 | L |
| **EPIC-007** FAQ dual-mode | `/faq` + `/faq/[slug]` + 30+ Q&As | P0 | M |
| **EPIC-008** Glossário | `/glossario` + 30+ verbetes | P1 | M |
| **EPIC-009** Ferramentas (calculadoras + comparativos) | 3 calculadoras + 4 comparativos | P1 | M |
| **EPIC-010** Institucional/legal + LGPD | `/sobre`, `/contato`, legais, banner cookies | P1 | S |
| **EPIC-011** GEO/schema avançado | Schema rico, citações, dl/dt patterns, optimização AI | P0 | M |
| **EPIC-012** Analytics & lançamento | GA4 com consent, GSC submission, Lighthouse audit | P1 | M |

---

## 12. Riscos (v2.0)

| Risco | Impacto | Mitigação |
|---|---|---|
| **Cliente acabar com pressão pra "monetizar"** o site, contradizendo white-label | Alto | Documento de governança editorial assinado — qualquer CTA comercial requer aprovação formal |
| Volume de conteúdo (100+ pgs) sobrecarrega capacidade editorial | Alto | Cronograma faseado; podemos lançar V1 com 40 pgs e expandir |
| Conteúdo médico impreciso pode prejudicar autoridade | Alto | Toda página técnica tem fonte INEP/MEC/CFM; revisão por médico EMR antes de publicar |
| AI Overviews podem mudar critérios de citação | Médio | Monitorar mensalmente; ajustar schema/estrutura conforme evolução |
| Concorrentes ranquearam primeiro nas keywords-âncora | Médio | Diferencial: profundidade enciclopédica + freshness editorial constante |
| White-label disfarçado pode ser percebido como "afiliado da EMR" | Médio | Tom editorial 100% neutro; revisores diversos não-EMR também |

---

## 13.1 Decisões operacionais (2026-05-28)

Confirmadas pelo owner após análise de status do roadmap:

| Item | Decisão | Status |
|---|---|---|
| **Backend de `/contato`** | RD Station Forms (integração posterior) | P1 — não bloqueia lançamento; placeholder atual aponta para e-mail direto |
| **Hospedagem** | Vercel | Default; @devops prepara deploy |
| **Domínio** | **provaenamed.com.br** | Aplicado em `site-config.ts`. DNS a configurar pelo @devops |
| **Revisor de conteúdo** | C-Level EMR | Validação após produção; não bloqueia execução |
| **Logo** | Manter wordmark atual ("Portal **ENAMED**") | OK; brief alternativo arquivado em `docs/design-system/logo-brief.md` |

**E-mails padrão (placeholders no domínio):**
- `contato@provaenamed.com.br` — redação
- `ies@provaenamed.com.br` — institucional

## 13. Decisões V2.0 (atualizadas em 2026-05-27)

| Tema | Decisão |
|---|---|
| Modelo | White-label disfarçado — autoridade institucional EMR, sem brand EMR no front |
| Visual | Mantém DS EMR (cor, tipografia) — visual interno |
| Escopo | Enciclopédico (~100-150 páginas) |
| Menção EMR | Pontual e editorial (footer discreto, créditos em artigos, página /sobre) |
| `/cursos` | Renomear para `/preparacao` — conteúdo informacional sobre preparação, sem ofertas |
| Header CTAs | REMOVER "Simulado grátis" e "Ver cursos" — substituir por nav neutra |
| Nome do site | "Portal ENAMED" |
| Logo | Substituir wordmark "ENAMED" por monograma neutro (story para @ux) |

### Decisões REVOGADAS da v1.0

- ❌ Cluster comercial `/cursos` como hub de vendas EMR — revogado
- ❌ CTAs "Matricule-se já!" / "Fazer simulado gratuito" comerciais — revogados
- ❌ Pages individuais de cursos (`/cursos/[slug]`) como LPs de venda — revogado (pode ser conteúdo neutro de comparação, não promocional)

---

## 14. Referências

- Manual de Identidade Visual EMR (apenas como referência visual): `MIV EMR 2025 - Versão 01.pdf`
- Estratégia GEO: [`docs/geo-strategy.md`](./geo-strategy.md)
- Sitemap detalhado v2.0: [`docs/sitemap.md`](./sitemap.md)
- Arquitetura técnica: [`docs/architecture.md`](./architecture.md)
- Epics & stories: [`docs/stories/README.md`](./stories/README.md)
- Convenção Next.js 16: `AGENTS.md` → `node_modules/next/dist/docs/`
