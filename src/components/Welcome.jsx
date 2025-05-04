import { useNavigate } from "react-router-dom";

export default function Welcome(){
    const navigate = useNavigate();
    
    function user(){
        localStorage.setItem("userType", "user");
        console.log(localStorage.getItem("userType"));
        navigate("/login");
    }
    
    function consultant(){
        localStorage.setItem("userType", "consultant");
        console.log(localStorage.getItem("userType"));
        navigate("/login-consultant");
    }

    return(
        <>
            <h1>Bienvenido a Vudip</h1>
            <button onClick={user}>Quiero hablar</button>
            <button onClick={consultant}>Soy consultor</button>
        </>
    );
}