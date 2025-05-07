import { useState } from "react";
import { service } from "../services/api.js";
import "../styles/SelectorEmocional.css";

const emociones = [
  { id: 1, name: "Alegre" },
  { id: 2, name: "Triste" },
  { id: 3, name: "Enojado" },
  { id: 4, name: "Miedo" },
  { id: 5, name: "Sorprendido" },
  { id: 8, name: "Confuso" }
];
export default function SelectorEmocional({ onSelect }) {
  const [desplegado, setDesplegado] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);

const handleSelectEmotion = (emocion) => {
  setSeleccionada(emocion);
  setDesplegado(false);
  const user = JSON.parse(localStorage.getItem("user"));
  localStorage.setItem("emotion", JSON.stringify({ id: emocion.id, name: emocion.name }));
  service.changeEmotion(parseInt(user.userId), emocion.name);
};

  return (
    <div className="contenedor-flex">
      <button className="boton" onClick={() => setDesplegado(!desplegado)}>
        {desplegado
          ? "ocultar seleccion"
          : seleccionada
          ? seleccionada.name
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
                {emocion.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
