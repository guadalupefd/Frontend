import React, { useRef, useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { service } from "../services/api";
import { base64toBlob } from "../services/webcamScript";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";


const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: "user",
};

export default function WebcamCapture() {
  const webcamRef = React.useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [detecting, setDetecting] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();


    useEffect(() => {
        const loadModels = async () => {
            await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
            setModelsLoaded(true);
        };
        loadModels();
    }, []);

    const detectFace = async () => {
        const video = webcamRef.current.video;
        const detection = await faceapi.detectSingleFace(
            video,
            new faceapi.TinyFaceDetectorOptions()
        );
        return detection;
    }

    const handleCaptureAndSend = useCallback(async () => {
        if (!webcamRef.current) return ;

        setDetecting(true);

        const detection = await detectFace();

        if (!detection) {
            setDetecting(false);
            throw new Error("No face detected");
            return;
        }

        const imageSrc = webcamRef.current.getScreenshot();
        const blob = base64toBlob(imageSrc);


        const usuario = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");
        console.log("Usuario:", usuario);
        console.log("Token:", token);

        const formData = new FormData();
        formData.append("image", blob);
        formData.append("username", usuario.username);
        formData.append("mail", usuario.mail);
        formData.append("password", usuario.password);
        formData.append("token", token);

        console.log("FormData:", formData.entries());

        try {
            const response = await service.registerConsultant(formData);
            console.log("Respuesta del backend:", response);
            if (response){
              auth.setIsAuthenticated(true);
              navigate('/home-consultant');
            }
            throw new Error(response.data);
        } catch (err) {
            console.error("Error subiendo imagen:", err);
        } finally {
            setDetecting(false);
        }
    }, []);

    return (
        <div>
          <Webcam
            ref={webcamRef}
            audio={false}
            height={480}
            width={640}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={handleCaptureAndSend} disabled={!modelsLoaded || detecting}>
            {detecting ? "Detectando..." : "Registrar rostro"}
          </button>
        </div>
      );
}