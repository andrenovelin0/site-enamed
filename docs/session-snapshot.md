# Snapshot do Portal ENAMED — 28 de maio de 2026

Estado atual do projeto após sessão autônoma de execução do roadmap. Use este documento como referência rápida para retomar trabalho.

---

## Estado das páginas (build atual)

### Páginas estáticas com conteúdo MDX (53 arquivos)

| Cluster | Quantidade | Status |
|---|---|---|
| **Pilares** (`content/pilares/`) | 7 | ✅ todos com MDX seed (`enamed`, `prova-enamed`, `simulados-enamed`, `preparacao`, `ies`, `areas`, `carreira`) |
| **Blog** (`content/blog/`) | 20 | ✅ roadmap completo (5 categorias editoriais) |
| **Glossário** (`content/glossario/`) | 21 | ✅ cobertura A-T (faltam ~9 verbetes para 30 do sitemap) |
| **Comparativos** (`content/comparativos/`) | 5 | ✅ completo (5/5 do sitemap) |

### Rotas estáticas (sem MDX)

| Rota | Status |
|---|---|
| `/` (Home) | ✅ White-label, 7 cards, sem CTAs comerciais |
| `/faq` | ✅ 18 Q&A em 6 categorias com FAQ Page schema |
| `/sobre` | ✅ Inclui menção EMR breve (única no front) |
| `/contato` | 🟡 Existe (do scaffold) — sem formulário funcional, precisa decisão de backend |
| `/politica-de-privacidade` | ✅ LGPD-compliant (rascunho) |
| `/politica-de-cookies` | ✅ LGPD-compliant (rascunho) |
| `/termos-de-uso` | ✅ Rascunho institucional |
| `/design-system` | ✅ Galeria interna noindex |
| `/sitemap.xml`, `/robots.txt`, `/404` | ✅ |

### Removidas (v2.0)

| Rota antiga | Destino atual |
|---|---|
| `/cursos` | → `/preparacao` (301) |
| `/cursos/[slug]` | → `/preparacao` (301) |
| `/depoimentos` | → `/sobre` (301) |
| `/suporte` | → `/contato` (301) |

---

## 21 commits da sessão (cronologia)

```
6dfef48  content: páginas legais LGPD-compliant
346c7a7  chore: redirects 301 (follow-up cleanup)
deeb5dd  chore: remove /depoimentos e /suporte
6ce9eba  content: +13 verbetes glossário (8 → 21)
21ed9ed  feat: cluster /comparativos (5 SSG)
37d47e6  docs: marca todos os 20 posts no roadmap
3d6ce77  content: +10 blog posts (roadmap completo)
b74253d  content: +6 blog posts (Wave 6)
861ce5f  content: +2 verbetes + 1 blog post
4d67cd4  feat: /sobre + /faq + /glossario
19547c7  feat: GEO infrastructure (schemas + components)
9939abf  feat: 6 pilares MDX + PilarTemplate
3e784b4  feat: blog dynamic routes
6108829  feat: complete white-label pivot (follow-up)
35be4cf  feat: header/footer white-label + branding
508bead  feat: Home refactor — white-label pivot
385ff36  docs: pivot to white-label v2.0
785dcca  feat: MDX pipeline + /enamed pilot
f88b616  feat: implement Button atom
f9c676e  feat: kickoff site ENAMED
402ff48  Initial commit from Create Next App  (pré-sessão)
```

**Status remoto:** nenhum commit foi pushed. Tudo local, esperando autorização do owner para `@devops` executar `git push`.

---

## Estatísticas finais

| Métrica | Valor |
|---|---|
| **Arquivos MDX** | 53 |
| **Linhas de código produzidas (estimativa)** | ~10.000+ |
| **Palavras editoriais** | ~30.000-35.000 |
| **Páginas indexáveis** | ~75 |
| **Commits da sessão** | 20 (sem contar o initial create-next-app) |
| **Schemas implementados** | Article, BreadcrumbList, FAQPage, QAPage, DefinedTerm, Organization, WebSite |
| **Componentes MDX** | `<Callout>`, `<CTA>`, `<AnswerBox>`, `<Definition>`, `<Citation>` |

---

## ⚠️ TODO crítico antes de produção

### Editorial (urgência ALTA)

- [ ] **Revisão factual de TODO conteúdo seed** — números (pesos por área, datas, estatísticas), referências bibliográficas
- [ ] Verificar afirmações sobre **regulamentação** (Portaria MEC nº 2.435/2024, Edital ENAMED 2026 — alguns dados são placeholder demonstrativo)
- [ ] **Revisão por médico EMR** para garantir precisão clínica
- [ ] **Revisão jurídica** das 3 páginas legais

### Identidade visual

- [ ] **Logo neutro definitivo** — brief detalhado em `docs/design-system/logo-brief.md` com 4 direções para Uma
- [ ] **Favicon** e **OG image** alinhados ao logo final
- [ ] Substituir wordmark provisório atual ("Portal ENAMED" tipográfico)

### Funcionalidades pendentes

- [ ] **Formulário de contato funcional** — `/contato` existe mas sem backend (decidir: server action local? Formspree? HubSpot?)
- [ ] **Banner LGPD de consentimento** — pendente (Epic 009.2 do v1, ainda não retomado em v2)
- [ ] **GA4/GTM** — env vars já planejadas, integração não feita ainda
- [ ] **TOC sticky** nos pilares — `<Toc>` foi spec'ado em `components-spec.md` mas não implementado

### Subpáginas dos pilares (Epic 005 — não iniciado)

Cada pilar tem links para subpáginas que **ainda não existem**:
- `/enamed/historia`, `/enamed/elegibilidade`, etc. (~11 subpáginas)
- `/prova-enamed/teoria-resposta-item`, `/prova-enamed/metodo-angoff`, etc. (~14)
- `/areas/clinica-medica/*` (~8 subtemas) + outras áreas (~35 total)
- `/simulados-enamed/por-area/[area]` (~6)
- `/preparacao/*` (~10)
- `/ies/*` (~10)
- `/carreira/*` (~10)

**Total estimado: ~80-100 subpáginas pendentes** — escopo grande, distribuir em ondas futuras.

### Lançamento (Epic 012)

- [ ] Deploy decision (Vercel? alternativa?)
- [ ] Domínio + cert
- [ ] Submissão sitemap ao GSC + Bing
- [ ] Lighthouse audit final
- [ ] axe audit final

---

## Estrutura do código (referência rápida)

```
src/
├── app/
│   ├── (home/pilares/blog/glossario/comparativos/faq/sobre/legals)
│   └── design-system/  (galeria interna noindex)
├── components/
│   ├── ui/              (Button + barrel)
│   ├── mdx/             (Callout, CTA, AnswerBox, Definition, Citation)
│   ├── pilar-template.tsx
│   ├── page-hero.tsx
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── brand-mark.tsx
│   └── structured-data.tsx
├── lib/
│   ├── blog.ts
│   ├── glossario.ts
│   ├── comparativos.ts
│   ├── faq.ts
│   ├── navigation.ts
│   ├── site-config.ts
│   └── cn.ts
├── mdx-components.tsx
└── types/mdx.d.ts

content/
├── pilares/      (7 arquivos)
├── blog/         (20 arquivos)
├── glossario/    (21 arquivos)
└── comparativos/ (5 arquivos)

docs/
├── prd.md                          (v2.0)
├── sitemap.md                      (v2.0)
├── geo-strategy.md                 (estratégia GEO)
├── architecture.md
├── design-system/
│   ├── brand-tokens.md
│   ├── usage-guide.md
│   ├── components-spec.md
│   └── logo-brief.md
├── content/
│   └── blog-seed-roadmap.md        (20/20 marcados)
└── stories/
    ├── README.md                    (12 epics v2.0)
    ├── 001.6a-button-atom.md
    ├── 002.1-home-refactor-white-label.md
    └── 003.1-mdx-pipeline-enamed-pilot.md
```

---

## Recomendações para próxima sessão

Em ordem de impacto:

1. **Revisão editorial dos 20 blog posts + 7 pilares** — usar copywriter/médico EMR pra refinar tom e factual
2. **Decidir backend de `/contato`** — antes de banner LGPD/GA4 fazerem sentido
3. **Story 002.5 (logo)** — Uma desenha as 4 direções
4. **Subpáginas dos pilares por onda** — começar por `/enamed/elegibilidade` e `/prova-enamed/teoria-resposta-item` (queries-âncora mais buscadas)
5. **Mais ~9 verbetes do glossário** — chegar a 30 conforme sitemap
6. **FAQ artigos individuais** (`/faq/[slug]`) — para queries específicas
7. **Calculadoras** — quando houver decisão sobre escopo interativo
8. **Deploy** — quando conteúdo factual revisado

---

## Como verificar o site

- `npm run dev` em terminal local
- Visitar [http://localhost:3000](http://localhost:3000)
- Páginas-chave: `/`, `/enamed`, `/prova-enamed`, `/blog`, `/glossario`, `/comparativos`, `/faq`, `/sobre`
- Galeria interna: `/design-system` (noindex)

---

**Snapshot gerado em 28/05/2026 ao fim de sessão autônoma de ~10h de execução do roadmap.**
