import LogoutButton from "../components/LogoutButton.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
import "../styles/Signup-Login.css"

export default function Home(){
    return (
        <DefaultLayout>
            <div className="Signup-card">
                <h1>Desea cerrar sesión?</h1>
                <p>clickee aquí si es el caso</p>

                <LogoutButton/>
            </div>
        </DefaultLayout>
    );
}