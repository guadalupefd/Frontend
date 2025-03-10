import { Navigate, useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { service } from "../services/api";

export default function Signup(){
    const { isAuthenticated } = useAuth();
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [token, setToken] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Nombre usuario: " + username + "Mail: " + mail + "Token: " + token ); // Verifica en consola antes de enviar
        const res = await service.registerConsultant(username, mail, token);
        console.log(res)
        if(res.data){
            auth.setIsAuthenticated(true);
            navigate("/home-consultant")
        }
    };

    return (
        <DefaultLayout>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Registrate</h1>

                    <label>Nombre de Usuario</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

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
                        name="token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        required
                    />

                    <button type="submit">Registrar</button>
                </form>

                <GoogleLoginButton />

                <Link to='/login-consultant'><h6>¿Ya tenés una cuenta? Inicia sesión</h6></Link>  
            </div>
        </DefaultLayout>
    );
}