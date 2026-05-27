// Cabecalho.jsx
// Topo da loja com o nome/título recebido via prop.

function Cabecalho({ titulo }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho__inner">
        {/* Logo/ícone da loja */}
        <div className="cabecalho__logo">
          <span className="cabecalho__icone">⚡</span>
          <h1 className="cabecalho__titulo">{titulo}</h1>
        </div>

        {/* Slogan da loja */}
        <p className="cabecalho__slogan">Tecnologia que transforma o seu dia a dia</p>

        {/* Navegação simples */}
        <nav className="cabecalho__nav">
          <a href="#" className="nav-link">Início</a>
          <a href="#" className="nav-link">Produtos</a>
          <a href="#" className="nav-link">Ofertas</a>
          <a href="#" className="nav-link">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
