import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

export default function Login() {
    const [mail, setMail] = useState('');
    const [credential, setCredential] = useState('');
    const [error, setError] = useState(null); // Estado para manejar errores
    const auth = useAuth();

    if (auth.isAuthenticated) {
        return <Navigate to='/home' />;
    }

    // 🔹 Función para manejar el login con email
    const handleLogin = async (e) => {
        e.preventDefault(); // Evita el envío del formulario por defecto
        setError(null); // Resetear error

        try {
            await auth.loginWithEmail(mail, credential);
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
                    name="credencial"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra error si hay */}
                
                <button type="submit">Iniciar Sesión</button>
            </form>


            <div className="flex">
                <GoogleLoginButton />
                <button>Usar Facebook</button>
            </div>

            <Link to='/signup'><h6>¿No tienes una cuenta? Regístrate</h6></Link>  
            </div>
            
        </DefaultLayout>
    );
}