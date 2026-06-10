// ProdutoCard.jsx — Etapa 3
// Adicionado Link para a página de detalhe do produto.
// Clicar no card agora navega para /produto/:id

import { Link } from "react-router-dom";
import Botao from "./Botao";
import Selo from "./Selo";
import BotaoFavorito from "./BotaoFavorito";

function ProdutoCard({ produto }) {
  const { id, title, price, thumbnail, category, rating, stock, discountPercentage } = produto;

  const precoFormatado = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      {/* Imagem clicável que leva ao detalhe */}
      <Link to={`/produto/${id}`} className="produto-card__link">
        <div className="produto-card__imagem-wrapper">
          <img src={thumbnail} alt={title} className="produto-card__imagem" />
          {discountPercentage >= 10 && (
            <span className="produto-card__desconto">
              -{Math.round(discountPercentage)}%
            </span>
          )}
        </div>

        <div className="produto-card__categoria">{category}</div>
        <h3 className="produto-card__nome">{title}</h3>
      </Link>

      <div className="produto-card__avaliacao">
        {"★".repeat(Math.floor(rating))}
        {"☆".repeat(5 - Math.floor(rating))}
        <span className="avaliacao-numero"> {rating}</span>
      </div>

      <p className="produto-card__preco">{precoFormatado}</p>

      <div className="produto-card__selos">
        {stock === 0 && <Selo texto="Esgotado" cor="vermelho" />}
        {stock > 0 && stock <= 5 && <Selo texto="Últimas unidades" cor="laranja" />}
      </div>

      <div className="produto-card__acoes">
        <Botao
          texto={stock === 0 ? "Indisponível" : "Comprar agora"}
          cor={stock === 0 ? "desabilitado" : "primaria"}
        />
        <BotaoFavorito />
      </div>
    </article>
  );
}

export default ProdutoCard;
