import { useAuth } from "../auth/AuthProvider";

export default function FacebookLoginButton() {
    const { loginWithFacebook } = useAuth();

    return (
        <button onClick={loginWithFacebook}>
            Usar Facebook
        </button>
    );
}