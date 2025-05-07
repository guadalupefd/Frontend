import FetchDashboard from "../components/FetchDashboard";


export default function Dashboard() {

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Dashboard</h1>
            <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
                Aquí puedes ver tu progreso y estadísticas.
            </p>
            <FetchDashboard />
        </div>
    );


}