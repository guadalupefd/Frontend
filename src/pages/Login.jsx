import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { service } from "../services/api";
import { useAuth } from "../auth/AuthProvider";
import FacebookLoginButton from "../components/FacebookLoginButton";
import "../styles/Home.css"
import "../styles/Signup-Login.css"

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
                if (user.data.reported){ //hay que ver como es en el back y cambiarlo bien
                    navigate('/denied');
                }
                else{
                    localStorage.setItem("user", JSON.stringify(user.data)); // Guarda el usuario en localStorage
                    auth.setIsAuthenticated(true); // Cambia el estado de autenticación
                    navigate('/home-consultant'); // Redirige a la página de inicio  
                }
            }
        } catch (err) {
            setError("Error al iniciar sesión. Verifica tu correo y credencial.");
        }
    };

    return (
        <DefaultLayout>
            <div className="Login-card">
                <h1>Inicio de Sesión</h1>
                <p className="texto-donation">¡Bienvenido de nuevo! Por favor ingresa tus datos.</p>
                <form onSubmit={handleLogin}>
                    <label className="formulario__label">Correo electrónico</label>
                    <div className="formulario__grupo-input">
                        <input
                            type="email"
                            name="mail"
                            className="formulario__input"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="correo@correo.com"
                            required
                        />
                    </div>


                    <label className="formulario__label">Contraseña</label>
                    <div className="formulario__grupo-input">
                        <input
                            type="password"
                            name="password"
                            className="formulario__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div clasName="separador-form"><img src="../public/Separador.png" alt="Separador" /></div>
                    <GoogleLoginButton />
                    <FacebookLoginButton />

                    {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra error si hay */}
                    <button type="submit" className="button-inicioSesion">Iniciar Sesión</button>
                    
                </form>
            <div>
            </div>

            <h6>¿No tienes una cuenta?<Link to='/signup'> Regístrate</Link></h6>
            </div>
        </DefaultLayout>
    );
}