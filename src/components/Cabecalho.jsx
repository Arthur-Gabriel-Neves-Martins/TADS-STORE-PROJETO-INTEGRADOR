// Cabecalho.jsx — Etapa 3
// Usa Link do React Router em vez de <a href>,
// para navegar sem recarregar a página.

import { Link } from "react-router-dom";

function Cabecalho({ titulo }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho__inner">
        <div className="cabecalho__logo">
          <span className="cabecalho__icone">⚡</span>
          {/* Link leva para a home sem recarregar */}
          <Link to="/" className="cabecalho__titulo-link">
            <h1 className="cabecalho__titulo">{titulo}</h1>
          </Link>
        </div>

        <p className="cabecalho__slogan">Tecnologia que transforma o seu dia a dia</p>

        <nav className="cabecalho__nav">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/" className="nav-link">Produtos</Link>
          <a href="#" className="nav-link">Ofertas</a>
          <a href="#" className="nav-link">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
