import FetchDashboard from "../components/FetchDashboard";
import DefaultLayout from "../layout/DefaultLayout";


export default function Dashboard() {

    return (
        <DefaultLayout>
            <div>
                <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Dashboard</h1>
                <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
                    Aquí puedes ver tu progreso y estadísticas.
                </p>
                <FetchDashboard />
            </div>
        </DefaultLayout>
    );
}