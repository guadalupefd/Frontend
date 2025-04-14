import DiaryInput from "../components/DiaryInput.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";

export default function Diary(){
    console.log("Diario renderizado");
    return (
        <DefaultLayout>
            <h1>Proceda a escribir su diario aqui!</h1>
            <DiaryInput onSubmit={(data) => {
                console.log("Datos enviados desde el componente hijo:", data);
                }
            }/>
        </DefaultLayout>
    );
}