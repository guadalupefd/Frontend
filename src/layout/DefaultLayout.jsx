import { Link } from "react-router-dom";

export default function DefaultLayout({ children }) {
    const userRole = localStorage.getItem("userType")

    return (
        <>
            <header className="bg-gray-100 shadow-md p-4">
                <nav className="flex justify-between items-center max-w-4xl mx-auto">
                    <h1 className="text-xl font-bold">Vudip</h1>
                    <ul className="flex gap-4">
                        <li>
                            <Link to="/home">Inicio</Link>
                        </li>

                        {userRole === "user" && (
                            <li>
                                <Link to="/diary">Diario</Link>
                            </li>
                        )}

                        <li>
                            <Link to="/donation">Donaciones</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="p-4 max-w-4xl mx-auto">{children}</main>
        </>
    );
}
