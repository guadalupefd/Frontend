import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import "../firebaseConfig"; // Asegúrate de importar tu configuración de Firebase

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    // Escuchar cambios de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user); // Si hay usuario, isAuthenticated será true
            setLoading(false); // Finaliza la carga cuando Firebase responde
        });

        return () => unsubscribe(); // Limpieza al desmontar
    }, []);

    // Login con Google
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error en autenticación con Google:", error);
        }
    };

    //  Login con email y contraseña
    const loginWithEmail = async (email, credential) => {
        try {
            
        } catch (error) {
            console.error("Error al iniciar sesión con email:", error);
        }
    };

    // 🔹 Logout (cerrar sesión)
    const logout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loginWithGoogle, loginWithEmail, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}