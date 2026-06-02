// BotaoFavorito.jsx
// Exemplo prático de useState: cada card guarda seu próprio estado de favorito,
// de forma independente dos outros cards.

import { useState } from "react";

function BotaoFavorito() {
  const [favorito, setFavorito] = useState(false);

  return (
    <button
      className={`btn-favorito ${favorito ? "btn-favorito--ativo" : ""}`}
      onClick={() => setFavorito(!favorito)}
      title={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {favorito ? "♥ Favorito" : "♡ Favoritar"}
    </button>
  );
}

export default BotaoFavorito;
