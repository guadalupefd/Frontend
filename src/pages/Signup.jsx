import { Navigate, useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";
import SelectEmotion from "../layout/SelectEmotion.jsx";
export default function Signup(){
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            "username": username,
            "mail": mail,
            "password": password,
        }
        localStorage.setItem("user", JSON.stringify(usuario));
        navigate("/token")
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
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Registrar</button>
                </form>
                <SelectEmotion/>
                <GoogleLoginButton />

                <Link to='/login'><h6>¿Ya tenés una cuenta? Inicia sesión</h6></Link>  
            </div>
        </DefaultLayout>
    );
}