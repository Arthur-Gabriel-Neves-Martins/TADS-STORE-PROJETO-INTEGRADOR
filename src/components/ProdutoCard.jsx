// ProdutoCard.jsx — Etapa 2
// Adaptado para os campos da API DummyJSON: title, price, thumbnail, category.
// Agora também inclui o BotaoFavorito (useState local por card).

import Botao from "./Botao";
import Selo from "./Selo";
import BotaoFavorito from "./BotaoFavorito";

function ProdutoCard({ produto }) {
  // A API DummyJSON usa nomes em inglês — desestruturamos com os nomes corretos
  const { title, price, thumbnail, category, rating, stock, discountPercentage } = produto;

  // Formata o preço em Real Brasileiro
  const precoFormatado = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      {/* Imagem do produto vinda da API */}
      <div className="produto-card__imagem-wrapper">
        <img
          src={thumbnail}
          alt={title}
          className="produto-card__imagem"
        />
        {/* Selo de desconto condicional */}
        {discountPercentage >= 10 && (
          <span className="produto-card__desconto">
            -{Math.round(discountPercentage)}%
          </span>
        )}
      </div>

      {/* Categoria */}
      <div className="produto-card__categoria">{category}</div>

      {/* Título do produto */}
      <h3 className="produto-card__nome">{title}</h3>

      {/* Avaliação */}
      <div className="produto-card__avaliacao">
        {"★".repeat(Math.floor(rating))}
        {"☆".repeat(5 - Math.floor(rating))}
        <span className="avaliacao-numero"> {rating}</span>
      </div>

      {/* Preço */}
      <p className="produto-card__preco">{precoFormatado}</p>

      {/* Selos condicionais */}
      <div className="produto-card__selos">
        {stock === 0 && <Selo texto="Esgotado" cor="vermelho" />}
        {stock > 0 && stock <= 5 && <Selo texto="Últimas unidades" cor="laranja" />}
      </div>

      {/* Ações do card */}
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
