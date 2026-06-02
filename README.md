# ⚡ TechHub Store

Projeto Integrador da disciplina **Desenvolvimento Front-End II** — TADS 2º Período · IFES Campus de Alegre.

Uma loja virtual de tecnologia construída em React, desenvolvida ao longo de quatro semanas (Semanas 12 a 15).

---

## Como rodar o projeto

**Pré-requisito:** Node.js instalado (versão 16 ou superior).

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Funcionalidades implementadas

### Etapa 1 — Componentização (Semana 12)
- [x] Projeto criado com Vite + React
- [x] Componente `Layout` com `props.children`
- [x] Componentes `Cabecalho`, `Rodape`, `Vitrine`, `ProdutoCard`, `Botao`, `Selo`
- [x] Composição: `ProdutoCard` montado com `Selo` + `Botao`
- [x] Dados em array com `.map()` e `key`
- [x] Renderização condicional
- [x] Identidade visual própria (TechHub Store)

### Etapa 2 — Estado, Hooks e API (Semana 13)
- [x] Produtos carregados da API DummyJSON via `useEffect` + `fetch`
- [x] Estado de carregando (spinner animado)
- [x] Estado de erro com mensagem amigável
- [x] `ProdutoCard` exibindo `title`, `price` e `thumbnail` da API
- [x] Campo de busca controlado com `useState`
- [x] Filtro por categoria via `<select>`
- [x] Mensagem "Nenhum produto encontrado" quando busca não retorna resultados
- [x] `BotaoFavorito` com estado local por card

### Etapa 3 — Navegação SPA (Semana 14)
- [ ] Em desenvolvimento

### Etapa 4 — Autenticação (Semana 15)
- [ ] Em desenvolvimento

---

## Estrutura de pastas

```
tads-store/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Cabecalho.jsx
│   │   ├── Rodape.jsx
│   │   ├── Vitrine.jsx       ← useEffect + fetch + busca + filtro
│   │   ├── ProdutoCard.jsx   ← campos da API + BotaoFavorito
│   │   ├── BotaoFavorito.jsx ← useState local por card
│   │   ├── Botao.jsx
│   │   └── Selo.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
└── README.md
```

---

## API utilizada

[DummyJSON](https://dummyjson.com) — API REST pública, gratuita e sem necessidade de chave.

---

## Desenvolvedor

**Arthur** · TADS 2º Período · IFES Campus de Alegre · 2026
