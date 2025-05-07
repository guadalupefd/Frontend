import { useEffect, useState } from "react";
import { service } from "../services/api";
import "../styles/FetchDashboard.css";

export default function FetchDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.userId) {
      service.getDashboard(user.userId)
        .then((res) => {
          setDashboard(res.data?.emotions);
        })
        .catch((err) => console.error("Error fetching dashboard:", err));
    }
  }, []);

  if (!dashboard) return null;

  return (
    <>
      <button className="boton-dashboard" onClick={() => setShowModal(true)}>
        Ver estadísticas emocionales
      </button>

      {showModal && (
        <div className="modal-dashboard">
          <div className="contenido-modal">
            <button className="cerrar-modal" onClick={() => setShowModal(false)}>
              ✖
            </button>

            <h2>Estado emocional de {dashboard.userName}</h2>

            <div className="bloque-seccion">
              <h3>🧠 Emociones registradas</h3>
              <ul>
                {dashboard.userEmotionalState.map((emo, idx) => (
                  <li key={idx}>
                    <span className="nombre-emocion">{emo.name}</span>
                    <span className="fecha-emocion">{emo.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bloque-seccion">
              <h3>📘 Ejercicios realizados</h3>
              {dashboard.userWorkout.length > 0 ? (
                <ul>
                  {dashboard.userWorkout.map((work, idx) => (
                    <li key={idx}>
                      <strong>{work.name}</strong> <br />
                      Inicio: {new Date(work.createdAt).toLocaleString()} <br />
                      Fin: {work.endedAt ? new Date(work.endedAt).toLocaleString() : "En curso"}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay ejercicios aún.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
