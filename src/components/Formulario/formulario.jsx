import React, { useState } from "react";

export default function Formulario() {
  const [value, setValue] = useState("digite");

  function handleSubmit(event) {
    console.log(event.target.value);
    setValue(event.target.value)
  }

  return (
    <div style={{ 
      display:'flex', flexDirection:'column'
    }}>
      <h2>{value}</h2>
      <input value={value} onChange={handleSubmit} />
      <input value={value} readOnly/>
      <input value={undefined} />
    </div>
  );
}
