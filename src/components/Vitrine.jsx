// Vitrine.jsx
// Contém o array de produtos com dados fixos (Etapa 1).
// Na Etapa 2, esse array será substituído por dados vindos da API DummyJSON.
// Renderiza um ProdutoCard para cada item usando .map().

import ProdutoCard from "./ProdutoCard";

// Array de produtos com dados fixos — cada item segue o formato definido na apostila
const produtos = [
  {
    id: 1,
    nome: "Notebook UltraSlim Pro",
    preco: 4299.90,
    freteGratis: true,
    categoria: "Informática",
    avaliacao: 5,
    estoque: 8,
  },
  {
    id: 2,
    nome: "Smartphone Galaxy X12",
    preco: 2799.99,
    freteGratis: true,
    categoria: "Celulares",
    avaliacao: 4,
    estoque: 3,
  },
  {
    id: 3,
    nome: "Fone de Ouvido Bluetooth ANC",
    preco: 349.90,
    freteGratis: false,
    categoria: "Áudio",
    avaliacao: 4,
    estoque: 15,
  },
  {
    id: 4,
    nome: "Monitor 27'' Full HD 144Hz",
    preco: 1599.00,
    freteGratis: true,
    categoria: "Monitores",
    avaliacao: 5,
    estoque: 0,
  },
  {
    id: 5,
    nome: "Teclado Mecânico RGB",
    preco: 289.90,
    freteGratis: false,
    categoria: "Periféricos",
    avaliacao: 4,
    estoque: 5,
  },
  {
    id: 6,
    nome: "Mouse Gamer 16000 DPI",
    preco: 199.90,
    freteGratis: false,
    categoria: "Periféricos",
    avaliacao: 4,
    estoque: 20,
  },
];

function Vitrine() {
  return (
    <section className="vitrine">
      <div className="vitrine__cabecalho">
        <h2 className="vitrine__titulo">Nossos Produtos</h2>
        <p className="vitrine__subtitulo">
          {produtos.length} produtos disponíveis para você
        </p>
      </div>

      {/* .map() gera um ProdutoCard para cada item do array */}
      {/* A prop key é obrigatória e usa o id único de cada produto */}
      <div className="vitrine__grid">
        {produtos.map((p) => (
          <ProdutoCard key={p.id} produto={p} />
        ))}
      </div>
    </section>
  );
}

export default Vitrine;
