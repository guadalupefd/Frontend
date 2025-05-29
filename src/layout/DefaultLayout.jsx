import { Link } from "react-router-dom";
import "../styles/Default_layout.css";

export default function DefaultLayout({ children }) {
    const userRole = localStorage.getItem("userType");

    return (
        <div>
        <nav>
            <ul>
            <li>
                <Link className="logo" to="/home">
                <img src="public/Vudip.jpg" alt="Logo" />
                <span className="nav-item">Inicio</span>
                </Link>
            </li>

            {userRole === "user" && (
                <>
                <li>
                    <Link className="link" to="/diary">
                    <i class="fas fa-book"></i>
                    <span className="nav-item">Diario</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/EjerciceScreen">
                    <i class="fas fa-brain"></i>
                    <span className="nav-item">Ver ejercicios</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/emotionalReminder">
                    <i class="fas fa-bell"></i>
                    <span className="nav-item">Recordatorio emocional</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/dashboard">
                    <i class="fas fa-chart-pie"></i>
                    <span className="nav-item">Dashboard</span>
                    </Link>
                </li>
                </>
            )}

            <li>
                <Link className="link" to="/donation">
                <i class="fas fa-hands-helping"></i>
                <span className="nav-item">Donaciones</span>
                </Link>
            </li>

            <li>
                <Link className="link" to="/nosotros">
                <i className="fas fa-users"></i>
                <span className="nav-item">Acerca de Vudip</span>
                </Link>
            </li>
            </ul>

            <Link className="logout" to="/logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="nav-item">Logout</span>
            </Link>
        </nav>
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
        <footer className="footer">
            <div className="footer-content">
            <p>&copy; 2025 Vudip. Todos los derechos reservados.</p>
            <div className="footer-links">
                <a href="/privacidad">Privacidad</a>
                <a href="/terminos">Términos</a>
                <a href="mailto:soporte@vudip.com">Contacto</a>
            </div>
        </div>
            </footer>
        </div>
    );
}
