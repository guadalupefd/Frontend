import { useState } from "react";
import SelectEmotion from "../layout/SelectEmotion";

const ejerciciosPorEmocion = {
  tristeza: [
    {
      titulo: "Respiración profunda",
      descripcion: "Inhalá 4s, sostené 4s, exhalá 4s...",
    },
    {
      titulo: "Escribir tus pensamientos",
      descripcion: "Escribí lo que sentís sin juzgarte.",
    },
  ],
  alegria: [
    {
      titulo: "Compartí tu felicidad",
      descripcion: "Mandá un mensaje a alguien importante.",
    },
  ],
  ira: [
    {
      titulo: "Liberación controlada",
      descripcion: "Golpeá un almohadón o apretá una toalla con fuerza para canalizar la tensión.",
    },
    {
      titulo: "Respiración consciente",
      descripcion: "Respirá profundamente durante un minuto. Enfocate solo en el aire que entra y sale.",
    },
    {
      titulo: "Pausa y reflexión",
      descripcion: "Tomá distancia de la situación. Contá hasta 10 antes de actuar o responder.",
    },
  ],
};

export default function PaginaEjercicios() {
  const [emotion, setEmotion] = useState(null);
  
  const ejercicios = ejerciciosPorEmocion[emotion] || [];

  return (
    <div>
      {!emotion ? alert("ingrese una emocion para poder ver sus ejercicios correspondientes"): null}
      {!emotion ? 
        <SelectEmotion onSelect={setEmotion} />
       : 
        <h2>Ejercicios para: {emotion}</h2>
      }
      {ejercicios.length > 0 && (
        <ul>
          {ejercicios.map((emocion__, idx) => (
            <li key={idx}>
              <h4>{emocion__.titulo}</h4>
              <p>{emocion__.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
