import DefaultLayout from "../layout/DefaultLayout.jsx";
import "../styles/Home.css"

export default function Home(){
    return (
        <DefaultLayout>
            <div className="home-css">
                <h1>Bienvenido a Vudip</h1>
                <p className="texto-home">Bienvenido a este viaje de aprendizaje emocional?¿</p>
            </div>

        </DefaultLayout>
    );
}