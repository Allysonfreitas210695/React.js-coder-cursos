import React from "react";
import If from "./if";

export default function Usuario(props) {
  const usuario =props.usuario || {};
  return (
    <div>
      <If test = {usuario && usuario.nome}>
        Seja Bem-vindo
        <strong> {usuario.nome} </strong>!
      </If>
      <If test = {usuario && !usuario.nome}>
        Seja Bem-vindo
        <strong> Amigao </strong>!
      </If>
    </div>
  );
}
