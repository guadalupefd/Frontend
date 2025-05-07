import EmotionalReminderPhoto from "../components/UploadEmotionalPhoto.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";

export default function EmotionalReminder() {
    return (
        <DefaultLayout>
            <div>
                <h2>Recordatorio emocional</h2>
                <p>¿Cómo te sientes hoy? Sube una foto para recordar este dia</p>
                <EmotionalReminderPhoto />
            </div>
        </DefaultLayout>
    );
}