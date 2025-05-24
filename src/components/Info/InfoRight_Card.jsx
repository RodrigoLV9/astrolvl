import { IoRocketOutline } from "react-icons/io5";
import '../../styles/InfoRight.css'
export const InfoRight_Card=()=>{
    return(
        <div class="card">
            <div class="card__header">
                <IoRocketOutline class='card__header-icon'/>
                <h4>Entendemos tu proyecto</h4>
            </div>
            <p>Nos reunimos para conocer tus ideas, objetivos y necesidades.</p>
        </div>
    )
}
