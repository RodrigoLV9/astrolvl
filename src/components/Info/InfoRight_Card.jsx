import { FaRegHandshake, FaClipboardList, FaCode, FaRocket } from "react-icons/fa";
import '../../styles/InfoRight.css'
export const InfoRight_Card=({title,description,icon})=>{
    const icons={
        "handshake": <FaRegHandshake className='card__header-icon'/>,
        "clipboard": <FaClipboardList className='card__header-icon'/>,
        "code": <FaCode className='card__header-icon'/>,
        "rocket": <FaRocket className='card__header-icon'/>
    }
    const iconElement=icons[icon] || <FaRocket className='card__header-icon'/>;
    return(
        <div class="card">
            <div class="card__header">
                {iconElement}
                <h4>{title}</h4>
            </div>
            <p>{description}</p>
        </div>
    )
}
