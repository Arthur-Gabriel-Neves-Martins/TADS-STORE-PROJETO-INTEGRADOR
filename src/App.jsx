// App.jsx
// Componente raiz da aplicação.
// O Layout "embrulha" a Vitrine via props.children,
// garantindo que cabeçalho e rodapé apareçam em todas as telas.

import Layout from "./components/Layout";
import Vitrine from "./components/Vitrine";

function App() {
  return (
    <Layout>
      <Vitrine />
    </Layout>
  );
}

export default App;
