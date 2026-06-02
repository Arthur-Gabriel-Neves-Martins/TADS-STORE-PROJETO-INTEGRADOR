// Vitrine.jsx — Etapa 2
// Substituímos o array fixo pela API DummyJSON.
// Adicionamos: useState, useEffect, fetch, busca e filtro por categoria.

import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
  // Estado principal: lista de produtos vinda da API
  const [produtos, setProdutos] = useState([]);

  // Estados auxiliares de UX
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Estados de busca e filtro
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [categorias, setCategorias] = useState([]);

  // Busca os produtos da API — [] garante que roda só uma vez, ao montar
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => res.json())
      .then((dados) => {
        setProdutos(dados.products);

        // Extrai categorias únicas para montar o filtro
        const cats = [...new Set(dados.products.map((p) => p.category))];
        setCategorias(cats);

        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os produtos. Verifique sua conexão.");
        setCarregando(false);
      });
  }, []);

  // Lista derivada: aplica busca e filtro de categoria antes do .map()
  const filtrados = produtos.filter((p) => {
    const buscaOk = p.title.toLowerCase().includes(busca.toLowerCase());
    const categoriaOk = categoria === "todas" || p.category === categoria;
    return buscaOk && categoriaOk;
  });

  // Tela de carregamento
  if (carregando) {
    return (
      <div className="vitrine-estado">
        <div className="spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  // Tela de erro
  if (erro) {
    return (
      <div className="vitrine-estado vitrine-estado--erro">
        <p>⚠️ {erro}</p>
      </div>
    );
  }

  return (
    <section className="vitrine">
      {/* Cabeçalho com controles de busca e filtro */}
      <div className="vitrine__controles">
        <div className="vitrine__cabecalho">
          <h2 className="vitrine__titulo">Nossos Produtos</h2>
          <p className="vitrine__subtitulo">
            {filtrados.length} produto{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="vitrine__filtros">
          {/* Campo de busca controlado */}
          <input
            className="input-busca"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="🔍 Buscar produto..."
          />

          {/* Filtro por categoria */}
          <select
            className="select-categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="todas">Todas as categorias</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensagem quando nenhum produto é encontrado */}
      {filtrados.length === 0 ? (
        <div className="vitrine-estado">
          <p>Nenhum produto encontrado para "<strong>{busca}</strong>".</p>
        </div>
      ) : (
        // .map() na lista FILTRADA, não na original
        <div className="vitrine__grid">
          {filtrados.map((p) => (
            <ProdutoCard key={p.id} produto={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Vitrine;
