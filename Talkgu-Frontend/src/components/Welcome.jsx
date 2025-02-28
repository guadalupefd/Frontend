import { Link } from "react-router-dom";

export default function Welcome(){
    return(
        <>
            <h1>Bienvenido a TalkGu</h1>
            <Link to='/login'><button>Iniciar Sesión</button></Link>
            <Link to='signup'><h6>¿No tienes una cuenta? Registrate</h6></Link>
        </>
    );
}