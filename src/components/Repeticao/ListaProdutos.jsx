import React from "react";
import Produtos from "../data/Produtos";
import './ListaProdutos.css'

export default function ProdutosLista() {
  const tableFr = Produtos.map((produto, i) => {
    return (
      <tr key={produto.idProdutos} className={i % 2 === 0 ? 'Impar' : 'Par'}>
        <td>{produto.idProdutos}</td>
        <td>{produto.nome}</td>
        <td>R${produto.valor.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TableProdutos">
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{tableFr}</tbody>
      </table>
    </div>
  );
}
