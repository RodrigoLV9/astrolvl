import { FaCheck } from "react-icons/fa6";
import '../../styles/services.css'
export const Card=()=>{
    return(
        <div className='servicesCard'>
            <h4>LANDING PAGE</h4>
            <h2>USD 150 - 400</h2>
            <p className="servicesCard__text">Diseño ideal para comenzar tu presencia online.</p>
            <ul className="servicesCard__list">
                <li className="servicesCard__list-item">
                    <FaCheck className="servicesCard__list-iconCheck"/>
                    <p>Certificado SSL</p>
                </li>
                <li className="servicesCard__list-item">
                    <FaCheck className="servicesCard__list-iconCheck"/>
                    <p>Certificado SSL</p>
                </li>
                <li className="servicesCard__list-item">
                    <FaCheck className="servicesCard__list-iconCheck"/>
                    <p>Certificado SSL</p>
                </li>
                <li className="servicesCard__list-item">
                    <FaCheck className="servicesCard__list-iconCheck"/>
                    <p>Certificado SSL</p>
                </li>
                <li className="servicesCard__list-item">
                    <FaCheck className="servicesCard__list-iconCheck"/>
                    <p>Certificado SSL</p>
                </li>
                <li className="servicesCard__list-item">
                    <FaCheck className="servicesCard__list-iconCheck"/>
                    <p>Certificado SSL</p>
                </li>
            </ul>
            <button className="servicesCard__button">
                Solicitar ahora
            </button>
        </div>
    )
}