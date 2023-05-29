import React from "react";
// import "../assets/css/Boton.css";

const Boton = ({ texto, esBotondeClic, manejarClic }) => {
  return (
    <button
      className={esBotondeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
};

export default Boton;
