// Botao.jsx
// Componente genérico de botão — não sabe nada sobre "produto".
// Pode ser usado em qualquer parte da aplicação.

function Botao({ texto = "Comprar", cor = "primaria", aoClicar }) {
  return (
    <button className={`btn btn-${cor}`} onClick={aoClicar}>
      {texto}
    </button>
  );
}

export default Botao;
