import { useEffect, useState } from "react";
import { service } from "../services/api";
import router from "../router/router";

export default function DiaryInput({ onSubmit }) {
    const [entry, setEntry] = useState("");

    useEffect(() => {
        if (localStorage.getItem("userType") === "consultant") {
            router.navigate("/home");
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (entry.trim() === "") return;
        onSubmit(entry);
        service.writeDiary(JSON.parse(localStorage.getItem("user")).userId, entry).then((response) => {
            console.log(response);
        })
        setEntry("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
                className="border rounded p-2 w-full h-40 resize-none"
                placeholder="Escribe tu entrada aquí..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded self-end"
            >
                Enviar
            </button>
        </form>
    );
}
