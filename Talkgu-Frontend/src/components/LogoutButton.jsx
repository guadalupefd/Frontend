import { useAuth } from "../auth/AuthProvider";

export default function LogoutButton() {
    const auth = useAuth();

    const handleLogout = async () => {
        await auth.logout();
    };

    return (
        <button onClick={handleLogout}>
            Cerrar Sesión
        </button>
    );
}