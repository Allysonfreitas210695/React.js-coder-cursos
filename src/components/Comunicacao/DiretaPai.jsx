import React from 'react';
import DiretaFilho from './DiretaFilho';


export default function DiretaPai(){
  return(
    <div>
     <DiretaFilho nome="Allyson" idade={25} nerd={true}/>
     <DiretaFilho/>
    </div>
  )
}