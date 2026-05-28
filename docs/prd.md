# PRD — Site ENAMED

**Versão:** 1.0 · **Data:** 2026-05-27 · **Owner:** @pm (Morgan) · **Autor original:** Orion (aiox-master)

## 1. Visão de Produto

Portal especializado no **Exame Nacional de Avaliação da Formação Médica (ENAMED)** desenhado sob três pilares:

1. **SEO Semântico** — Topic Clusters interligados estabelecendo autoridade temática.
2. **UX informacional → comercial** — fluxo Home → Pilar → Suporte → CTA.
3. **Conversão estruturada** — captura de tráfego informativo (topo de funil) e roteamento para cursos preparatórios (fundo de funil).

Posicionamento orgânico-alvo: "Exame Nacional de Avaliação da Formação Médica", "Prova Enamed", "Preparatório Enamed", "cursos enamed", "simulados enamed" e cauda-longa institucional (IES/MEC).

## 2. Público-Alvo

| Persona | Necessidade primária | Página de entrada esperada |
|---|---|---|
| Estudante de medicina (último ano) | Entender o que é, como se prepara, onde treinar | `/enamed`, `/prova-enamed`, `/simulados-enamed` |
| Médico recém-formado | Validar obrigatoriedade, impacto na carreira | `/enamed`, `/blog` |
| Coordenador de IES | Medir impacto institucional, MEC, plano de melhoria | `/ies` |
| Pesquisador/imprensa | Definições, contexto histórico, comparativos | `/enamed`, `/faq` |

## 3. Escopo

### 3.1 In-scope (V1)

- 14 páginas estáticas (12 já com scaffold + 2 dinâmicas):
  - **Home** (`/`)
  - **Pilares de cluster**: `/enamed`, `/prova-enamed`, `/simulados-enamed`, `/cursos`, `/ies`
  - **Dinâmicos**: `/blog`, `/blog/[slug]`, `/cursos/[slug]`, `/simulados-enamed/[area]`
  - **Suporte/FAQ**: `/faq`, `/suporte`
  - **Institucionais**: `/sobre`, `/depoimentos`, `/contato`
  - **Legais**: `/politica-de-privacidade`, `/politica-de-cookies`, `/termos-de-uso`
- Conteúdo via **MDX local** versionado em `content/`
- Design system fornecido pelo cliente (referência: Eu Médico Residente)
- SEO técnico: `sitemap.xml`, `robots.txt`, schema.org (Organization, FAQPage, Article, Course, BreadcrumbList), Open Graph, metadata por rota
- Acessibilidade WCAG 2.1 AA
- Tracking básico (placeholder GA4/GTM via env)

### 3.2 Out-of-scope (V1)

- **Aplicativo de simulado funcional** (questões interativas, timer, dashboard) — apenas landing/SEO neste site; o app real fica em produto externo.
- **`/conteudos-enamed`** (cluster de áreas médicas) — descartado por briefing: já coberto pelo Guia de Especialidades do Eu Médico Residente.
- Auth de usuário, checkout, área do aluno, integração de pagamento.
- CMS headless (decisão: MDX local; reavaliar quando volume >100 posts).
- i18n (português apenas).

### 3.3 Diferido (V2+)

- Migração de MDX para CMS headless se editorial escalar.
- Página `/cursos/[slug]` evoluindo para LP com checkout integrado.
- Dashboard de desempenho B2B IES (depende do app externo de simulado).

## 4. Arquitetura de Topic Clusters

```
                          Home (Pilar Central)
                                  │
   ┌────────────┬─────────────┬───┴────┬────────────┬───────────┐
   ▼            ▼             ▼        ▼            ▼           ▼
/enamed   /prova-enamed  /simulados   /cursos     /ies       /blog
  │           │              │           │           │          │
  │           │              ├─/[area]   ├─/[slug]   │          ├─/[slug]
  │           │              │           │           │          │
  └───────────┴──────────────┴─────┬─────┴───────────┴──────────┘
                                   │
                                  /faq
                          (long-tail, snippets)
```

**Regra de interconectividade:** todo artigo técnico → linka para o simulado da respectiva área **e** para a página de curso correspondente.

## 5. Funcionalidades Requeridas (FR)

| ID | Funcionalidade | Prioridade |
|---|---|---|
| FR-01 | Home renderiza hero, hub de clusters, prova social e CTAs comerciais | P0 |
| FR-02 | Páginas pilares servem conteúdo MDX com TOC, breadcrumb e CTAs cruzados | P0 |
| FR-03 | Blog lista posts MDX ordenados por data + paginação + categorias | P0 |
| FR-04 | Detalhe de post (`/blog/[slug]`) com schema.org Article, breadcrumb, related | P0 |
| FR-05 | `/cursos/[slug]` renderiza LP individual com schema.org Course | P0 |
| FR-06 | `/simulados-enamed/[area]` renderiza landing por especialidade médica | P0 |
| FR-07 | `/faq` em página única com schema FAQPage para featured snippets | P0 |
| FR-08 | `sitemap.xml` e `robots.txt` gerados automaticamente | P0 |
| FR-09 | Metadata dinâmica por rota (title, description, OG, canonical) | P0 |
| FR-10 | Navegação primária + footer com 4 seções (já em `src/lib/navigation.ts`) | P0 ✅ |
| FR-11 | Componentes compartilhados: Header, Footer, Hero, CTA, BreadcrumbList | P0 ⚠️ parcial |
| FR-12 | Página `/depoimentos` com schema Review/AggregateRating | P1 |
| FR-13 | Formulário de contato (server action ou serviço externo — definir) | P1 |
| FR-14 | Banner de consentimento de cookies (LGPD) | P1 |
| FR-15 | Tracking GA4/GTM via variáveis de ambiente | P2 |

## 6. Requisitos Não-Funcionais (NFR)

| ID | Requisito | Métrica-alvo |
|---|---|---|
| NFR-01 | Performance Web Vitals | LCP < 2.5s, INP < 200ms, CLS < 0.1 (mobile 4G) |
| NFR-02 | Lighthouse SEO | ≥ 95 em todas as páginas pilares |
| NFR-03 | Acessibilidade | WCAG 2.1 AA; auditoria axe limpa |
| NFR-04 | SSG/ISR por padrão | Todas as páginas estáticas ou ISR (revalidate ≥ 1h) |
| NFR-05 | Bundle JS no cliente | < 90kb gzip por rota crítica |
| NFR-06 | Build reproduzível | `pnpm build` < 90s em CI |
| NFR-07 | TypeScript strict | Zero `any` implícito; `strict: true` |
| NFR-08 | Mobile-first | Breakpoints validados em 360px, 768px, 1280px, 1920px |

## 7. Constraints (CON)

- **CON-01** Stack fixa: Next.js 16.2.6 + React 19.2.4 + Tailwind v4 (já em `package.json`).
- **CON-02** Esta versão do Next.js tem mudanças quebrando — qualquer código deve consultar `node_modules/next/dist/docs/` antes (regra em `AGENTS.md`).
- **CON-03** Sem CMS, sem banco de dados, sem auth na V1.
- **CON-04** Design system será fornecido pelo cliente — implementação inicial usa tokens placeholder em `globals.css` que serão substituídos.
- **CON-05** Português brasileiro como única língua.
- **CON-06** Cluster `/conteudos-enamed` está fora do escopo (descartado em briefing).

## 8. Métricas de Sucesso

| Métrica | Janela | Meta V1 |
|---|---|---|
| Posicionamento orgânico para 5 keywords-âncora top-3 | 6 meses pós-lançamento | "preparatório enamed", "prova enamed", "simulados enamed", "enamed" (com modificadores), "cursos enamed" |
| Sessões orgânicas/mês | 3 meses pós-lançamento | Baseline + crescimento mensal positivo |
| Conversão visitante → lead em `/cursos` | mensal | ≥ 3% (clique em CTA de plano) |
| Bounce rate em páginas pilares | mensal | < 60% |
| Tempo médio nas páginas de cluster | mensal | > 2min |

## 9. Roadmap de Entrega (epics)

Ver `docs/stories/README.md` para o detalhamento por story. Resumo:

| Epic | Escopo | Prioridade |
|---|---|---|
| **EPIC-001** Fundação técnica & Design System | Tokens, layout shell, navegação, SEO base, sitemap/robots | P0 |
| **EPIC-002** Home & Pilares informacionais | `/`, `/enamed`, `/prova-enamed` | P0 |
| **EPIC-003** Camada de conteúdo MDX | Loader, schemas, frontmatter, TOC, componentes MDX | P0 |
| **EPIC-004** Blog dinâmico | `/blog` + `/blog/[slug]` + paginação + categorias | P0 |
| **EPIC-005** Hub Simulados & subáreas | `/simulados-enamed` + `/simulados-enamed/[area]` | P0 |
| **EPIC-006** Hub Cursos & páginas individuais | `/cursos` + `/cursos/[slug]` | P0 |
| **EPIC-007** Hub IES | `/ies` + artigos de suporte | P1 |
| **EPIC-008** FAQ + páginas institucionais | `/faq`, `/sobre`, `/depoimentos`, `/contato`, `/suporte` | P1 |
| **EPIC-009** Conformidade legal | `/politica-de-privacidade`, `/politica-de-cookies`, `/termos-de-uso`, banner LGPD | P1 |
| **EPIC-010** Analytics & lançamento | GA4/GTM, validações finais Lighthouse/axe, deploy | P1 |

## 10. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Next.js 16 sem documentação amplamente disponível | Alto | Consultar `node_modules/next/dist/docs/` antes de cada feature; manter changelog interno |
| Design system não chegar a tempo | Médio | Camada de tokens isolada (`globals.css` + `@theme`); permite swap sem refator |
| Volume de conteúdo MDX explodir | Médio | Estrutura por categoria desde dia 1; plano de migração para CMS documentado |
| App externo de simulado não pronto no lançamento | Baixo | CTAs apontam para waitlist/placeholder até o produto estar disponível |
| LGPD/consentimento mal implementado | Alto | Banner + `/politica-de-cookies` antes de habilitar GA/GTM |

## 11. Decisões Tomadas

| Data | Decisão | Por quê |
|---|---|---|
| 2026-05-27 | MDX local em `content/` (não CMS) | Volume inicial cabe em git; reduz custo e setup; reavaliar em V2 |
| 2026-05-27 | Simulados como landing/SEO; app externo | Escopo de produto separado; mantém este site como hub informacional/SEO |
| 2026-05-27 | `/conteudos-enamed` descartado | Briefing: já existe Guia de Especialidades no Eu Médico Residente |
| 2026-05-27 | Português apenas | Audiência exclusivamente BR |
| 2026-05-27 | SSG/ISR (sem SSR puro) | Performance + SEO + simplicidade de deploy |

## 12. Referências

- Briefing original: `Proposta Estrutural e Estratégica (Site ENAMED).pdf` (no Downloads do owner)
- Sitemap detalhado: `docs/sitemap.md`
- Arquitetura técnica: `docs/architecture.md`
- Epics & stories: `docs/stories/README.md`
- Convenção Next.js 16: `AGENTS.md` → `node_modules/next/dist/docs/`
