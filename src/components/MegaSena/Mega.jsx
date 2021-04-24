import React, { useState } from "react";

export default function NumerosMegaSena(props) {

  function NumerosmegaSena(qtd) {
    const vet = [];
    while (vet.length === 0 || vet.length < qtd) {
      let num = parseInt(Math.random() * 60);
      if (vet.indexOf(num) !== -1) {
        continue;
      } else {
        vet.push(num);
      }
    }
    return vet.sort((a, b) => a - b);
  }

  const [qtd, setQtd] = useState(props.qtd || 6);
  const Total = Array(qtd).fill(0); //inicializar em 0 na tela
  const [numeros, setNumeros] = useState(Total);

  return (
    <div>
      <h1>Mega sena</h1>
      <h2>{numeros.join(" ")}</h2>
      <div>
        <label htmlFor="number">Qtd de numeros: </label>
        <input
          min="6"
          max="17"
          type="number"
          value={qtd}
          onChange={(e) =>{
            setQtd(+e.target.value)
          }}
        />
      </div>
      <button
        onClick={() => {
          setNumeros(NumerosmegaSena(Total.length));
        }}
      >
        Gerar Numeros
      </button>
    </div>
  );
}
