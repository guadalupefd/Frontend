import FetchDashboard from "../components/FetchDashboard";
import DefaultLayout from "../layout/DefaultLayout";
import SelectorEmocional from "../layout/SelectEmotion";

export default function Dashboard() {

    return (
        <DefaultLayout>
            <div>
                <h1>Dashboard</h1>
                <p> Aquí puedes ver tu progreso y estadísticas. </p>
                <FetchDashboard />
            </div>
        <SelectorEmocional/>
        </DefaultLayout>
    );
}