import React, { useState }  from 'react';
import IndiretaFilho from './IndiretaFilho';


export default function IndiretaPai(){
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function passarInformacoes(nome, idade, nerd){
    setNome(nome);
    setIdade(idade);
    setNerd(nerd)
    console.log(nome);
  }

  return(
    <div>
      <IndiretaFilho Check={passarInformacoes} nome={nome} idade={idade} nerd={nerd}/>   
    </div>
  )
}