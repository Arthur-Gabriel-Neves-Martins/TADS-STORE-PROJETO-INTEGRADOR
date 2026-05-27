// Layout.jsx
// Componente "embrulho" que define a estrutura comum de todas as páginas.
// Usa props.children para receber e renderizar o conteúdo do miolo.
// Na Semana 14 (Rotas), cada página nova será só um <Layout> com outro miolo.

import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout({ children }) {
  return (
    <div className="layout">
      {/* Cabeçalho fixo em todas as telas */}
      <Cabecalho titulo="TechHub Store" />

      {/* O conteúdo específico de cada página entra aqui via children */}
      <main className="layout__conteudo">
        {children}
      </main>

      {/* Rodapé fixo em todas as telas */}
      <Rodape />
    </div>
  );
}

export default Layout;
