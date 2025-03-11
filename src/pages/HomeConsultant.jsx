import LogoutButton from "../components/LogoutButton.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";


export default function Home(){
    return (
        <DefaultLayout>
            <h1>Bienvenido a TalkGu</h1>
            <h1>Sesión Iniciada</h1>
            <LogoutButton/>
        </DefaultLayout>
    );
}