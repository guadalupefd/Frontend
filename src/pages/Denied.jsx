import DefaultLayout from "../layout/DefaultLayout.jsx";

export default function Home(){
    console.log("Home renderizado");
    return (
        <DefaultLayout>
            <h1>Acceso denegado.</h1>
            <h1>Usted cuenta con reportes que no le permiten ingresar.</h1>
        </DefaultLayout>
    );
}