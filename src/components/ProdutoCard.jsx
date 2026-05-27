// ProdutoCard.jsx
// Recebe um objeto "produto" inteiro como prop e o desestrutura internamente.
// É montado por composição: usa Selo e Botao como peças menores.

import Botao from "./Botao";
import Selo from "./Selo";

function ProdutoCard({ produto }) {
  // Desestruturando o objeto produto para acessar cada campo individualmente
  const { nome, preco, freteGratis, categoria, avaliacao, estoque } = produto;

  // Formata o preço em Real Brasileiro (ex: R$ 3.499,90)
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      {/* Cabeçalho do card com categoria */}
      <div className="produto-card__categoria">{categoria}</div>

      {/* Nome do produto */}
      <h3 className="produto-card__nome">{nome}</h3>

      {/* Avaliação em estrelas */}
      <div className="produto-card__avaliacao">
        {"★".repeat(Math.floor(avaliacao))}
        {"☆".repeat(5 - Math.floor(avaliacao))}
        <span className="avaliacao-numero"> {avaliacao}</span>
      </div>

      {/* Preço formatado */}
      <p className="produto-card__preco">{precoFormatado}</p>

      {/* Selos condicionais: só aparecem quando as condições são verdadeiras */}
      <div className="produto-card__selos">
        {freteGratis && <Selo texto="Frete grátis" cor="verde" />}
        {estoque <= 5 && estoque > 0 && <Selo texto="Últimas unidades" cor="laranja" />}
        {estoque === 0 && <Selo texto="Esgotado" cor="vermelho" />}
      </div>

      {/* Botão de ação — usa o componente genérico Botao */}
      <Botao texto={estoque === 0 ? "Indisponível" : "Comprar agora"} cor={estoque === 0 ? "desabilitado" : "primaria"} />
    </article>
  );
}

export default ProdutoCard;
