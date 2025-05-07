import EmotionalReminderPhoto from "../components/UploadEmotionalPhoto.jsx";

export default function EmotionalReminder() {
    return (
        <div>
            <h2>Recordatorio emocional</h2>
            <p>¿Cómo te sientes hoy? Sube una foto para recordar este dia</p>
            <EmotionalReminderPhoto />
        </div>
    );
}