import React from "react";
import Primeiro from "./components/basico/Primeiro";
import ComParametros from "./components/basico/ComParametros";
import Fragment from "./components/basico/Fragment";
import DesafioAleatorio from "./components/basico/DesafioAleatorio";
import Card from "./components/Layout/Card";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <div className="Cards">
        <Card title="Exemplo de Card">
          <Primeiro />
        </Card>
        <Card title="Exemplo de Card">
          <ComParametros title="Primeiro" subtitle="segundo"></ComParametros>
        </Card>
        <Card title="Exemplo de Card">
          <Fragment />
        </Card>
        <Card title="Exemplo de Card">
          <DesafioAleatorio max={10} min={5} />
        </Card>
      </div>
    </div>
  );
}
