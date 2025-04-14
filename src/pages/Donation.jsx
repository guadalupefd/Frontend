import DonationInput from "../components/DonationInput";
import DefaultLayout from "../layout/DefaultLayout";

export default function Donation() {
    return (
        <DefaultLayout>
            <h2> Para realizar la donación inserte el monto </h2>
            <DonationInput />
        </DefaultLayout>
    )
}