import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { service } from "../services/api";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Estado para manejar errores
    const navigate = useNavigate(); // Hook para navegar entre páginas
    const auth = useAuth(); // Hook para acceder al contexto de autenticación

  
    // 🔹 Función para manejar el login con email
    const handleLogin = async (e) => {
        e.preventDefault(); // Evita el envío del formulario por defecto
        setError(null); // Resetear error

        try {
            const user = await service.loginUser(mail, password)
            if (user) {
                auth.setIsAuthenticated(true); // Cambia el estado de autenticación
                navigate('/home'); // Redirige a la página de inicio
            }
        } catch (err) {
            setError("Error al iniciar sesión. Verifica tu correo y credencial.");
        }
    };

    return (
        <DefaultLayout>
            <div className="form">
              <form onSubmit={handleLogin}>
                <h1>Inicio de Sesión</h1>
                
                <label>Correo</label>
                <input
                    type="email"
                    name="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra error si hay */}
                
                <button type="submit">Iniciar Sesión</button>
            </form>

            <GoogleLoginButton />

            <Link to='/signup'><h6>¿No tienes una cuenta? Regístrate</h6></Link>  
            </div>
            
        </DefaultLayout>
    );
}