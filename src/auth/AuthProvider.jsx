import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithCredential, getAdditionalUserInfo, GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../firebaseConfig";

const AuthContext = createContext();
const navigate = useNavigate();

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
            const additionalInfo = getAdditionalUserInfo(result);
            console.log("Información adicional:", additionalInfo);
            const googleUser = auth.currentUser;
            const isNewUser = additionalInfo.isNewUser
            console.log("usuario nuevo", isNewUser);

            if (isNewUser){
                const usuario = {
                    "username": googleUser.displayName,
                    "mail": googleUser.email,
                    "password": googleUser.uid,
                }
                localStorage.setItem("user",JSON.stringify(usuario))
                navigate('/token')
            }
            else if (!isNewUser){
                if (localStorage.getItem("userType") == "consultant"){
                    try {
                        const user = await service.loginConsultant(googleUser.email, googleUser.uid);
                        console.log("usuario de google", user);
                            if (user) {
                                if (user.data.reported){ //hay que ver como es en el back y cambiarlo bien
                                    navigate('/denied');
                                    }
                                else{
                                    auth.setIsAuthenticated(true); // Cambia el estado de autenticación
                                    navigate('/home-consultant'); // Redirige a la página de inicio  
                                }
                            }
                        } catch (err) {
                                setError("Error al iniciar sesión");
                        }
                }
                if (localStorage.getItem("userType") == "user"){
                    try {
                        const user = await service.loginUser(googleUser.email, googleUser.uid);
                        console.log("usuario de google", user);
                        if (user) {
                            auth.setIsAuthenticated(true); // Cambia el estado de autenticación
                            navigate('/home'); // Redirige a la página de inicio  
                        }
                        
                        } catch (err) {
                                setError("Error al iniciar sesión");
                        }
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