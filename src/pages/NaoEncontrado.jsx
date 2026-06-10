// pages/NaoEncontrado.jsx — Etapa 3
// Página 404: aparece quando o usuário acessa uma rota não mapeada.
// useNavigate permite voltar para a home por código.

import { useNavigate } from "react-router-dom";

function NaoEncontrado() {
  const navigate = useNavigate();

  return (
    <div className="nao-encontrado">
      <h1 className="nao-encontrado__codigo">404</h1>
      <p className="nao-encontrado__titulo">Página não encontrada</p>
      <p className="nao-encontrado__sub">
        O endereço que você acessou não existe na TechHub Store.
      </p>
      <button className="btn btn-primaria nao-encontrado__btn" onClick={() => navigate("/")}>
        ← Voltar para a loja
      </button>
    </div>
  );
}

export default NaoEncontrado;
