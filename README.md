# ⚡ TechHub Store

Projeto Integrador · Desenvolvimento Front-End II · TADS 2º Período · IFES Campus de Alegre

---

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

---

## Funcionalidades

### Etapa 1 — Componentização (Semana 12)
- [x] Vite + React, componentes reutilizáveis
- [x] Layout com `props.children`, Cabecalho, Rodape, Vitrine, ProdutoCard, Botao, Selo
- [x] Composição, renderização condicional, `.map()` com `key`

### Etapa 2 — Estado, Hooks e API (Semana 13)
- [x] Produtos da API DummyJSON via `useEffect` + `fetch`
- [x] Loading spinner e tratamento de erro
- [x] Busca por nome e filtro por categoria
- [x] `BotaoFavorito` com `useState` local por card

### Etapa 3 — SPA e Rotas (Semana 14)
- [x] React Router instalado e configurado (`BrowserRouter`)
- [x] Rota `/` → página Home com lista de produtos
- [x] Rota `/produto/:id` → página de detalhe com galeria de imagens
- [x] Rota `*` → página 404
- [x] Clique no card navega para o detalhe sem recarregar
- [x] `useParams` para ler o id da URL
- [x] `useNavigate` para o botão voltar

### Etapa 4 — Autenticação (Semana 15)
- [ ] Em desenvolvimento

---

## Estrutura

```
tads-store/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Cabecalho.jsx
│   │   ├── Rodape.jsx
│   │   ├── Vitrine.jsx
│   │   ├── ProdutoCard.jsx
│   │   ├── BotaoFavorito.jsx
│   │   ├── Botao.jsx
│   │   └── Selo.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Detalhe.jsx
│   │   └── NaoEncontrado.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── README.md
```

---

**Arthur** · TADS 2º Período · IFES Campus de Alegre · 2026
