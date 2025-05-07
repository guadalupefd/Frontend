import { Link } from "react-router-dom";
import SelectorEmocional from "./SelectEmotion";

export default function DefaultLayout({ children }) {
    const userRole = localStorage.getItem("userType")

    return (
        <>
            <header>
                <nav style={{width: "15%"}}>
                    <h1 className="text-xl font-bold">Vudip</h1>
                    <ul className="flex gap-4">
                        <li>
                            <Link to="/home">Inicio</Link>
                        </li>

                        {userRole === "user" && (
                            <ul>
                                <li>
                                    <Link to="/diary">Diario</Link>
                                </li>
                                <li>
                                    <Link to="/EjerciceScreen">Ver ejercicios</Link>
                                </li>
                                <li>
                                    <Link to="/emotionalReminder">Recordatorio emocional</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>
                        )}

                        <li>
                            <Link to="/donation">Donaciones</Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>

            <main className="p-4 max-w-4xl mx-auto">{children}</main>
            <SelectorEmocional />
        </>
    );
}
