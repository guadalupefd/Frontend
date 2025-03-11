import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithCredential, getAdditionalUserInfo, GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import "../firebaseConfig";

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
            const result =  await signInWithPopup(auth, provider);
            console.log("resultado", result);
            const additionalInfo = getAdditionalUserInfo(result);
            console.log("Información adicional:", additionalInfo);
            const user = auth.currentUser;
            const isNewUser = additionalInfo.isNewUser
            console.log("usuario nuevo", isNewUser);
        } catch (error) {
            console.error("Error en autenticación con Google:", error);
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
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}