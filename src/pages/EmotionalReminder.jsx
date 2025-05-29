import EmotionalReminderPhoto from "../components/UploadEmotionalPhoto.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
import "../styles/emotionalReminder.css";
import SelectorEmocional from "../layout/SelectEmotion";
export default function EmotionalReminder() {
    return (
        <DefaultLayout>
            <div className="emotional-container">
                <h2 className="emotional-title">Recordatorio emocional</h2>
                <p className="emotional-description">¿Cómo te sientes hoy? Sube una foto para recordar este día.</p>
                <EmotionalReminderPhoto />
            </div>
        <SelectorEmocional/>
        </DefaultLayout>
    );
}