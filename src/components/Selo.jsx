// Selo.jsx
// Componente genérico de etiqueta/selo — também não sabe nada sobre "produto".
// Recebe texto e cor; a cor define a classe CSS aplicada.

function Selo({ texto, cor = "verde" }) {
  return (
    <span className={`selo selo-${cor}`}>
      {texto}
    </span>
  );
}

export default Selo;
