import React from 'react';

export default function MenbroFamilia(props){
  return(
    <div>
      {props.nome}<strong>{props.sobrenome}</strong>
    </div>
  )
}