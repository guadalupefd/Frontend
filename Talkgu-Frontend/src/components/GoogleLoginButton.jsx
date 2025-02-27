import { useAuth } from "../auth/AuthProvider";

export default function GoogleLoginButton() {
    const { loginWithGoogle } = useAuth();

    return (
        <button onClick={loginWithGoogle}>
            Usar Google
        </button>
    );
}