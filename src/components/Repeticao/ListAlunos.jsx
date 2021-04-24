import React from 'react';
import alunos from '../data/alunos'

const estilo = {
  listStyle: 'none'
}

export default function AlunosLista(){

  const liAlunos = alunos.map((aluno, index)=>{
        return (
          <li key={index} style={estilo}>
            {aluno.id}) {aluno.nome} = {aluno.nota}
          </li>
        )
  }) 


  return(
    <div>
      <ul>
        {liAlunos}
      </ul>
    </div>
  )
}