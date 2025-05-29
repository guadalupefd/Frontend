import { useAuth } from "../auth/AuthProvider";
import "../styles/Home.css"

export default function GoogleLoginButton() {
    const { loginWithGoogle } = useAuth();

    return (

        <button onClick={loginWithGoogle} className="button-google">
            <img src="../public/google-logo.png" alt="google-icon" className="image-icon" />
            Usar Google
        </button>
    );
}