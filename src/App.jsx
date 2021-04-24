import React from "react";
import Primeiro from "./components/basico/Primeiro";
import ComParametros from "./components/basico/ComParametros";
import Fragment from "./components/basico/Fragment";
import DesafioAleatorio from "./components/basico/DesafioAleatorio";
import Card from "./components/Layout/Card";
import Familiar from "./components/basico/Familiar";
import MembroFamilia from './components/basico/FamiliarMenbro'
import AlunosLista from "./components/Repeticao/ListAlunos";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <div className="Cards">

        <Card title="#01 Exemplo de Card" color="#f00">
          <Primeiro />
        </Card>

        <Card title="#02 Exemplo de Card">
          <ComParametros title="Primeiro" subtitle="segundo"></ComParametros>
        </Card>

        <Card title="#03 Exemplo de Card">
          <Fragment />
        </Card>

        <Card title="#04 Exemplo de Card">
          <DesafioAleatorio max={10} min={5} />
        </Card>

        <Card title="#05 Componente filho" color="glue">
            <Familiar sobrenome="ferreiro">
                 <MembroFamilia nome="Pedro "/>
                 <MembroFamilia nome="Ana "/>
            </Familiar>
        </Card>
        
        <Card title="#06 Lista aluno com laco de repeticao">
          <AlunosLista></AlunosLista>
        </Card>

      </div>
    </div>
  );
}
