import "./Card.css";
import React from "react";

export default function Card(props) {
  const estilo = {
    backgroundColor: props.color || '#ff3',
    borderColor: props.color || 'white'
  }

  return (
    <div className="Card" style={estilo}>
      <div className="Title"> {props.title}</div>
      <div className="Content"> {props.children}</div>
    </div>
  );
}
