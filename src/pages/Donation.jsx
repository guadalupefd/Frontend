import DonationInput from "../components/DonationInput";
import DefaultLayout from "../layout/DefaultLayout";
import "../styles/Donations.css"

export default function Donation() {
    return (
        <DefaultLayout>
            <div className="donation-content">
                <h1> Donaciones </h1>
                <p> Tu colaboración nos ayuda a seguir mejorando Vudip y poder ofrecerte muchos más recursos para el bienestar emocional. </p>
                
                <div className= "donation-card">
                    <h4> Para realizar la donación inserte el monto: </h4>
                    <DonationInput />
                </div>

                <div>
                    <h4 className="titulo"> Cuando donás nos estas ayudando a: </h4>
                    <ul className="custom-list">
                        <li> ¡A que creemos mas ejercicios y otras funciones que ayuden a tu bienestar emocional! </li>
                        <li> ¡Contribuir a mejorar nuestros programas de capacitación para que puedas tener la mejor experiencia! </li>
                        <li> ¡A que podamos seguir desarrollando de nuevas funcionalidades! </li>
                    </ul>
                </div>
            </div>
        </DefaultLayout>
    )
}