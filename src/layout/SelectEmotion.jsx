import { useState } from "react";
import "./SelectorEmocional.css";
import { service } from "../services/api.js";

const emociones = [
  { id: 1, name: "Alegría" },
  { id: 2, name: "Tristeza" },
  { id: 3, name: "Ira" },
];

const handleSelectEmotion = (emocion) => {
  setSeleccionada(emocion);
  setDesplegado(false);
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  localStorage.setItem("emotion", JSON.stringify({ id: emocion.id, name: emocion.name }));
  service.changeEmotion(userId, emocion);
};

export default function SelectorEmocional() {
  const [desplegado, setDesplegado] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);
  return (
    <div className="contenedor-flex">
      <button className="boton" onClick={() => setDesplegado(!desplegado)}>
        {desplegado ? "ocultar seleccion" : (seleccionada ? seleccionada.name : "Seleccionar emoción")}
      </button>
      {desplegado && (
        <ul className="ul-emociones">
          {emociones.map((emocion, index) => (
            <li key={index}>
              <button
                onClick={() => handleSelectEmotion(emocion)}
                className="boton-emocion">
                {emocion.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
