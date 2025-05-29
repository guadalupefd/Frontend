import WebcamCapture from "../components/WebcamCapture";
import "../styles/webcam.css"
export default function Webcam() {
    return (
        <div className="webcam-container">
          <h2>Registro con reconocimiento facial</h2>
          <WebcamCapture />
        </div>
    );
}