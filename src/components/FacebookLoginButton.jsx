import { useAuth } from "../auth/AuthProvider";
import "../styles/Home.css"

export default function FacebookLoginButton() {
    const { loginWithFacebook } = useAuth();

    return (
        <button onClick={loginWithFacebook} className="button-facebook">
            <img src="../public/facebook-logo.png" alt="facebook-icon" className="image-icon" />
            Usar Facebook
        </button>
    );
}