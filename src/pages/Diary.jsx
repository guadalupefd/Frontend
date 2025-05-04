import { useState } from "react";
import DiaryInput from "../components/DiaryInput.jsx";
import UploadImage from "../components/UploadImage.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
import { service } from "../services/api.js";
export default function Diary() {
  const [entry, setEntry] = useState(""); // estado para el texto
  const [image, setImage] = useState(null); // estado para la imagen

  const handleSend = () => {
    if (entry.trim() === "") return;
    const data = {
      Texto: entry,
      Imagen: image,
    };
    setEntry("");
    setImage(null);
    console.log(data)
      service.uploadDiary(JSON.parse(localStorage.getItem("user")).userId,data).then((response) => {console.log(response)});
  };
  return (
    <DefaultLayout>
      <div>
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Diario</h1>
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
          Aquí puedes escribir tus pensamientos y reflexiones.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          <DiaryInput
            entry={entry}
            setEntry={setEntry}
          />
          <UploadImage
            image={image}
            setImage={setImage} 
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              marginTop: "2rem",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={handleSend}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#45a049";
            }}
          >
            Enviar diario :D
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}
