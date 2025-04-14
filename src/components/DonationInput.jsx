import { useState } from "react";
import { service } from "../services/api";

export default function DonationInput() {
    const [unitPrice, setUnitPrice] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (unitPrice < 1000) {
            setError("El monto mínimo de donación es de 1000");
            return;
        }
        setError("");

        service.registerDonation(unitPrice)
            .then((response) => {
                console.log("Donación registrada con éxito:", response);
                const donationLink = response.data.res.init_point;
                window.open(donationLink);
            })
            .catch((error) => {
                console.error("Error al registrar la donación:", error);
            });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setUnitPrice(value);

        if (value < 1000) {
            setError("El monto mínimo de donación es de 1000");
        } else {
            setError("");
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="donation" className="block text-lg font-medium mb-2">
                    Monto de la donación
                </label>
                <input
                    type="number"
                    name="unitPrice"
                    value={unitPrice}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'}`}
                />
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-all"
                >
                    Donar
                </button>
            </form>
        </div>
    );
}
