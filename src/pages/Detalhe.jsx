// pages/Detalhe.jsx — Etapa 3
// Página de detalhe de um produto.
// useParams lê o :id da URL e busca os dados desse produto na API.

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Botao from "../components/Botao";
import Selo from "../components/Selo";
import BotaoFavorito from "../components/BotaoFavorito";

function Detalhe() {
  // useParams captura o :id que está na URL (ex: /produto/5 → id = "5")
  const { id } = useParams();

  // useNavigate permite navegar por código (ex: voltar para a home)
  const navigate = useNavigate();

  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [imagemAtiva, setImagemAtiva] = useState(0);

  useEffect(() => {
    // Busca o produto pelo id que veio da URL
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produto não encontrado");
        return res.json();
      })
      .then((dados) => {
        setProduto(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Produto não encontrado.");
        setCarregando(false);
      });
  }, [id]);

  if (carregando) {
    return (
      <div className="vitrine-estado">
        <div className="spinner"></div>
        <p>Carregando produto...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="vitrine-estado vitrine-estado--erro">
        <p>⚠️ {erro}</p>
        <Botao texto="← Voltar para a loja" aoClicar={() => navigate("/")} />
      </div>
    );
  }

  const precoFormatado = produto.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="detalhe">
      {/* Botão voltar */}
      <button className="detalhe__voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="detalhe__conteudo">
        {/* Galeria de imagens */}
        <div className="detalhe__galeria">
          <img
            src={produto.images[imagemAtiva]}
            alt={produto.title}
            className="detalhe__imagem-principal"
          />
          <div className="detalhe__thumbnails">
            {produto.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${produto.title} ${i + 1}`}
                className={`detalhe__thumb ${i === imagemAtiva ? "detalhe__thumb--ativa" : ""}`}
                onClick={() => setImagemAtiva(i)}
              />
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div className="detalhe__info">
          <span className="produto-card__categoria">{produto.category}</span>
          <h1 className="detalhe__titulo">{produto.title}</h1>

          {/* Avaliação */}
          <div className="produto-card__avaliacao">
            {"★".repeat(Math.floor(produto.rating))}
            {"☆".repeat(5 - Math.floor(produto.rating))}
            <span className="avaliacao-numero"> {produto.rating} — {produto.stock} em estoque</span>
          </div>

          {/* Preço com desconto */}
          <div className="detalhe__preco-wrapper">
            <p className="detalhe__preco">{precoFormatado}</p>
            {produto.discountPercentage >= 10 && (
              <Selo texto={`-${Math.round(produto.discountPercentage)}% OFF`} cor="vermelho" />
            )}
          </div>

          {/* Descrição */}
          <p className="detalhe__descricao">{produto.description}</p>

          {/* Marca */}
          {produto.brand && (
            <p className="detalhe__marca">Marca: <strong>{produto.brand}</strong></p>
          )}

          {/* Ações */}
          <div className="detalhe__acoes">
            <Botao
              texto={produto.stock === 0 ? "Indisponível" : "Comprar agora"}
              cor={produto.stock === 0 ? "desabilitado" : "primaria"}
            />
            <BotaoFavorito />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalhe;
