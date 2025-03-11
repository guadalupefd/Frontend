import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import router from "../router/router";
import { service } from "../services/api";
import "../firebaseConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const auth = getAuth();

    // Login con Google
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result =  await signInWithPopup(auth, provider);
            console.log("resultado", result);
            const googleUser = auth.currentUser;

                if (localStorage.getItem("userType") == "consultant"){
                    try {
                        const user = await service.loginConsultant(googleUser.email, googleUser.uid);
                        console.log("usuario de google", user);
                            if (user) {
                                if (user.data.reported){
                                    router.navigate('/denied');
                                    }
                                else{
                                    setIsAuthenticated(true); // Cambia el estado de autenticación
                                    router.navigate('/home-consultant'); // Redirige a la página de inicio  
                                }
                            }
                            else if (!user){
                                const usuario = {
                                    "username": googleUser.displayName,
                                    "mail": googleUser.email,
                                    "password": googleUser.uid,
                                };
                                console.log("datos guardados del usuario", usuario);
                                localStorage.setItem("user",JSON.stringify(usuario));
                                router.navigate('/token');
                            }
                            
                        } catch (err) {
                                setError("Error al iniciar sesión");
                        }
                }
                if (localStorage.getItem("userType") == "user"){
                    try {
                        const user = await service.loginUser(googleUser.email, googleUser.uid);
                        if (user) {
                            if (user.data.reported){
                                navigate('/denied');
                            }
                            else{
                                setIsAuthenticated(true); // Cambia el estado de autenticación
                                navigate('/home'); // Redirige a la página de inicio  
                            }
                        }
                        else if (!user){
                            const usuario = {
                                "username": googleUser.displayName,
                                "mail": googleUser.email,
                               "password": googleUser.uid,
                            };
                            console.log("datos guardados del usuario", usuario);
                            localStorage.setItem("user",JSON.stringify(usuario));
                            router.navigate('/token');
                        }
                    } catch (err) {
                        setError("Error al iniciar sesión.");
                    }
                }
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