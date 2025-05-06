import { useState } from "react";
import { service } from "../services/api.js";
import "./SelectorEmocional.css";

const emociones = [
  { id: 1, name: "Alegría" },
  { id: 2, name: "Tristeza" },
  { id: 3, name: "Ira" },
];
export default function SelectorEmocional({ onSelect }) {
  const [desplegado, setDesplegado] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);

const handleSelectEmotion = (emocion) => {
  setSeleccionada(emocion);
  setDesplegado(false);
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  localStorage.setItem("emotion", JSON.stringify({ id: emocion.id, name: emocion.name }));
  service.changeEmotion(userId, emocion);
};

  return (
    <div className="contenedor-flex">
      <button className="boton" onClick={() => setDesplegado(!desplegado)}>
        {desplegado
          ? "ocultar seleccion"
          : seleccionada
          ? seleccionada.nombre
          : "Seleccionar emoción"}
      </button>
      {desplegado && (
        <ul className="ul-emociones">
          {emociones.map((emocion, index) => (
            <li key={index}>
              <button
                onClick={() => handleSelectEmotion(emocion)}
                className="boton-emocion"
              >
                {emocion.nombre}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
