import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { service } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Token(){

     const [token, setToken] = useState('');
     const [error, setError] = useState(null);

     const navigate = useNavigate();

    const handleToken = async (e) => {
            e.preventDefault(); // Evita el envío del formulario por defecto
            if (localStorage.getItem("userType") == "user"){
                try {
                    //const tokenB = await service.verifyToken(token);
                    //CAMBIAR EL IF
                    if (true) {
                        localStorage.setItem("token",token)
                        navigate('/Login');
                    }
                } catch (err) {
                    setError("Error al verificar token. Verifica que el token ingresado sea correcto.");
                }
            }
            else if (localStorage.getItem("userType") == "consultant"){
                try {
                    //const tokenB = await service.verifyToken(token);
                    //CAMBIAR EL IF
                    if (true) {
                        localStorage.setItem("token",token)
                        navigate('/login-consultant');
                    }
                } catch (err) {
                    setError("Error al verificar token. Verifica que el token ingresado sea correcto.");
                }
            }

        };

    return (
        <DefaultLayout>
            <h1>Ingrese su Token</h1>
            <form onSubmit={handleToken}>
            <input
                    type="text"
                    name="token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
            <button>Validar</button>
            </form>
        </DefaultLayout>
    );
}