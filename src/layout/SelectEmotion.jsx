import { useState } from "react";
import "./SelectorEmocional.css";
import { service } from "../services/api.js";

const emociones = [
    { nombre: "Alegría"},
    { nombre: "Tristeza"},
    { nombre: "Ira"},
];

const handleSelectEmotion = (emocion) => {
    setseleccionada(emocion)
    setDesplegado(false);
    const userId = JSON.parse(localStorage.getItem("user")).userId;
    service.chargeEmotion(userId,emocion)
}

export default function SelectorEmocional() {
  const [desplegado, setDesplegado] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);
  return (
    <div className="contenedor-flex">
        <button className="boton" onClick={() => setDesplegado(!desplegado)}>
        {desplegado ?  "ocultar seleccion":(seleccionada ? seleccionada.nombre : "Seleccionar emoción")}
      </button>
      {desplegado && (
        <ul className="ul-emociones">           
         {emociones.map((emocion, index) => (
                <li key={index}>
                    <button
                        onClick={handleSelectEmotion}
                        className="boton-emocion">
                        {emocion.nombre}
                        
                    </button>
                </li>
            ))}
        </ul>
      )}
    </div>
  );
}
