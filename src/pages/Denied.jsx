import DefaultLayout from "../layout/DefaultLayout.jsx";
import "../styles/Denied.css"
export default function Home(){
    console.log("Home renderizado");
    return (
        <DefaultLayout>
            <div className="denied-container">
                <h1>Acceso denegado.</h1>
                <p>Usted cuenta con reportes que no le permiten ingresar.</p>
            </div>
        </DefaultLayout>
    );
}