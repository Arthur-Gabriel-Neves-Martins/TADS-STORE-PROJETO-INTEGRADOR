// Rodape.jsx
// Rodapé fixo com nome do desenvolvedor e ano.

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__inner">
        <p className="rodape__texto">
          © {new Date().getFullYear()} <strong>TechHub Store</strong> — Desenvolvido por Arthur
        </p>
        <p className="rodape__sub">
          Projeto Integrador · Desenvolvimento Front-End II · TADS — IFES Campus de Alegre
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
