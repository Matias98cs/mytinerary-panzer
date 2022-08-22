import React from "react";


export default function Arrow(props) {
  if (!props.icon) {
    throw new Error("se necesita una icono");
  }
  if (!props.click) {
    throw new Error("Se requiere una funcion");
  }
  return (
    <button className="btn-next-prev" onClick={props.click}>
      <img src={props.icon} alt={props.icon}  />
    </button>
  );
}
