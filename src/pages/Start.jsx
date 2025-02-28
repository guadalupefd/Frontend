import DefaultLayout from "../layout/DefaultLayout";

import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import Welcome from "../components/Welcome";

export default function Start(){
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to='/home'/>
    }
    return (
        <DefaultLayout>
            <Welcome/>
        </DefaultLayout>
    );
}