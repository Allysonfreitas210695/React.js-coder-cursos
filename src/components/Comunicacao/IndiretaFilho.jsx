import React from 'react';

export default function IndiretaPai(props){
  return(
    <div>

      <button onClick={() => {
        props.Check('jose', 20, 'Verdadeiro')
      }}>
        Fonecer Imformacao
        </button>
    </div>
  )
}