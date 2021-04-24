import React from 'react';

export default function DiretaFilho(props){
  return(
    <div>
      <span>{props.nome ? props.nome : ''} </span>
      <span><strong> {props.idade ? props.idade : ''}</strong> </span>
      <span>{props.nerd ? 'Verdade' : 'False'}</span>
    </div>
  )
}