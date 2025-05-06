import { useState } from "react";
import { service } from "../services/api";

export default function EmotionalReminderPhoto() {
    const [image, setImage] = useState(null);

    const handleSend = () => {
        if (image === null) return;
        const usuario = JSON.parse(localStorage.getItem("user"));
        const emocion = JSON.parse(localStorage.getItem("emotion"));
        const formData = new FormData();
        formData.append("file", image);
        formData.append("userId", usuario.userId);
        formData.append("emotion", emocion.id)
        setImage(null);
        
        try {
            service.uploadEmotionalImage(formData)
                .then((response) => {
                    console.log("Imagen enviada con éxito:", response.data);
                    return response.data
                })
        } catch (error) {
            console.error("Error al enviar la imagen:", error);
        }
    };

    return (
        <div>
            <video id="webcam" autoPlay playsInline style={{ display: image ? "none" : "block" }}></video>
            <canvas id="canvas" style={{ display: "none" }}></canvas>
            {image && <img src={image} alt="Captured" />}
            <div>
                <button
                    onClick={() => {
                        const video = document.getElementById("webcam");
                        const canvas = document.getElementById("canvas");
                        const context = canvas.getContext("2d");
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        context.drawImage(video, 0, 0, canvas.width, canvas.height);
                        const dataUrl = canvas.toDataURL("image/png");
                        setImage(dataUrl);
                    }}
                >
                    Capture Photo
                </button>
                <button onClick={handleSend} disabled={!image}>
                    Send Photo
                </button>
            </div>
        </div>
    );
}