// App.jsx — Etapa 3
// Configuração do React Router: BrowserRouter envolve tudo,
// Routes define as rotas disponíveis na aplicação.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Rota principal: lista de produtos */}
          <Route path="/" element={<Home />} />

          {/* Rota dinâmica: detalhe do produto — :id vem da URL */}
          <Route path="/produto/:id" element={<Detalhe />} />

          {/* Rota 404: qualquer caminho não mapeado */}
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
