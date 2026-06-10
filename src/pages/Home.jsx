// pages/Home.jsx — Etapa 3
// Página principal: lista de produtos com busca e filtro.
// A lógica de fetch ficou aqui, na página, que é quem "sabe" o que exibir.

import { useState, useEffect } from "react";
import Vitrine from "../components/Vitrine";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => res.json())
      .then((dados) => {
        setProdutos(dados.products);
        const cats = [...new Set(dados.products.map((p) => p.category))];
        setCategorias(cats);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os produtos. Verifique sua conexão.");
        setCarregando(false);
      });
  }, []);

  // Lista derivada com busca + filtro aplicados
  const filtrados = produtos.filter((p) => {
    const buscaOk = p.title.toLowerCase().includes(busca.toLowerCase());
    const categoriaOk = categoria === "todas" || p.category === categoria;
    return buscaOk && categoriaOk;
  });

  if (carregando) {
    return (
      <div className="vitrine-estado">
        <div className="spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="vitrine-estado vitrine-estado--erro">
        <p>⚠️ {erro}</p>
      </div>
    );
  }

  return (
    <section className="vitrine">
      <div className="vitrine__controles">
        <div className="vitrine__cabecalho">
          <h2 className="vitrine__titulo">Nossos Produtos</h2>
          <p className="vitrine__subtitulo">
            {filtrados.length} produto{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="vitrine__filtros">
          <input
            className="input-busca"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="🔍 Buscar produto..."
          />
          <select
            className="select-categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="todas">Todas as categorias</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {filtrados.length === 0 ? (
        <div className="vitrine-estado">
          <p>Nenhum produto encontrado para "<strong>{busca}</strong>".</p>
        </div>
      ) : (
        <Vitrine produtos={filtrados} />
      )}
    </section>
  );
}

export default Home;
