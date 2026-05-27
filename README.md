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
- [x] Componente `Layout` com `props.children` (Cabeçalho + miolo + Rodapé)
- [x] Componente `Cabecalho` recebendo `titulo` via prop
- [x] Componente `Rodape` com nome do desenvolvedor e ano dinâmico
- [x] Componente `Vitrine` com array de 6 produtos renderizados via `.map()`
- [x] Componente `ProdutoCard` montado por composição (`Selo` + `Botao`)
- [x] Componente `Botao` genérico com valores padrão (`texto`, `cor`)
- [x] Componente `Selo` genérico com valores padrão (`cor`)
- [x] Renderização condicional: selo "Frete grátis", "Últimas unidades" e "Esgotado"
- [x] Preços formatados em Real Brasileiro com `toLocaleString`
- [x] Prop `key` em todos os itens do `.map()`
- [x] Identidade visual própria (tema escuro, acento ciano, nome "TechHub Store")

### Etapa 2 — Estado, Hooks e API (Semana 13)
- [ ] Em desenvolvimento

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
│   │   ├── Layout.jsx       # Embrulho com children: Cabeçalho + main + Rodapé
│   │   ├── Cabecalho.jsx    # Topo da loja (recebe prop "titulo")
│   │   ├── Rodape.jsx       # Rodapé com nome do dev e ano
│   │   ├── Vitrine.jsx      # Lista de produtos com .map()
│   │   ├── ProdutoCard.jsx  # Card composto por Selo e Botao
│   │   ├── Botao.jsx        # Botão genérico e reutilizável
│   │   └── Selo.jsx         # Etiqueta genérica e reutilizável
│   ├── App.jsx              # <Layout><Vitrine /></Layout>
│   ├── App.css              # Estilos com variáveis CSS (tema TechHub)
│   └── main.jsx             # Ponto de entrada do React
├── index.html
├── vite.config.js
├── .gitignore
└── README.md
```

---

## Tecnologias utilizadas

- [React 18](https://react.dev/)
- [Vite 4](https://vitejs.dev/)
- CSS com variáveis customizadas (`--cor-acento`, `--cor-fundo`, etc.)

---

## Desenvolvedor

**Arthur** · TADS 2º Período · IFES Campus de Alegre · 2026
