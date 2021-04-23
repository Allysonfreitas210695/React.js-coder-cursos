import React from "react";
import Primeiro from './components/basico/Primeiro';
import ComParametros from './components/basico/ComParametros';
import Fragment from './components/basico/Fragment';
import DesafioAleatorio from "./components/basico/DesafioAleatorio";

export default function App(){
  return (
    <div>
      <DesafioAleatorio max={10} min={5}/>
      <Fragment />
      <Primeiro />
      <ComParametros title="Primeiro" subtitle="segundo"></ComParametros>
    </div>
  );
}

