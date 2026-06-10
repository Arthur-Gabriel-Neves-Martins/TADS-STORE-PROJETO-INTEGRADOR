// Vitrine.jsx — Etapa 3
// Componente de grade de produtos, usado dentro da página Home.

import ProdutoCard from "./ProdutoCard";

function Vitrine({ produtos }) {
  return (
    <div className="vitrine__grid">
      {produtos.map((p) => (
        <ProdutoCard key={p.id} produto={p} />
      ))}
    </div>
  );
}

export default Vitrine;
