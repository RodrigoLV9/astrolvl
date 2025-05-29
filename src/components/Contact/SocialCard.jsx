import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import '../../styles/socialCard.css'
export const SocialCard=({name,info,icon})=>{
    return(
        <div className='socialCard'>
            {icon}
            <div className='socialCard__text'>
                <h4>{name}: </h4>
                <p>{info}</p>
            </div>
        </div>
    )
}