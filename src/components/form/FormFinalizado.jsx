import React from "react";
import { Link } from "react-router-dom";

const FormFinalizado = ({ nombre, email, ordenId }) => {
  return (
    <div className="mainForm">
      <div className="contenedorForm">
        <div className="tituloForm">
          <h1>Formulario</h1>
        </div>
        <form className="form">
          <input
            className="campoForm"
            type="text"
            name="inputname"
            value={nombre}
            readonly
          />
          <input
            className="campoForm"
            type="text"
            name="inputname"
            value={email}
            readonly
          />

          <button className="enviarForm2" disabled>
            Enviar
          </button>
        </form>
        <div className="idForm">
          <h3>ID de la compra: </h3>
          <p className="id"> {ordenId} </p>
        </div>
        <button className="volverProduct">
          <Link to={"/"}>Volver a productos</Link>
        </button>
      </div>
    </div>
  );
};

export default FormFinalizado;
