import React from "react";

export default function Aleariório({ max, min }) {
  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  return (
    <div>
      <p>Valores Aleatório:</p>
      <p>Valor mim:{max}</p>
      <p>Valor Máximo{min}</p>
      <p>O numero aleatório é {getRandomArbitrary(min, max)}</p>
      <br />
      
    </div>
  );
}
