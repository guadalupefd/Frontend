import { useState } from "react";
import DiaryInput from "../components/DiaryInput.jsx";
import UploadImage from "../components/UploadImage.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
import { service } from "../services/api.js";
import "../styles/diary.css"
import SelectorEmocional from "../layout/SelectEmotion";

export default function Diary() {
  const [entry, setEntry] = useState("");
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (entry.trim() === "" && !image) {return};
    const usuario = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData();
    formData.append("file", image);
    formData.append("userId", usuario.userId);
    formData.append("content", entry);
    
    console.log(formData)
    service.uploadDiary(formData).then((response) => {console.log(response)});
    console.log(localStorage)
    setEntry("");
    setImage(null);
  };
  
  return (
    <DefaultLayout>
      <div className="diary-container">
        <h1>Mi Diario Emocional</h1>
        <p >¿Cómo te sentiste hoy? Escribilo en tu diario!</p>
        <DiaryInput setEntry={setEntry} entryText={entry}/>
        <UploadImage setImage={setImage} image={image} />
        <button className="submit-button" onClick={handleSend}>
          Guardar Entrada
        </button>
      </div>
    <SelectorEmocional/>
    </DefaultLayout>
    );
}