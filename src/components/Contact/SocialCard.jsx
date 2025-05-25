import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";

export const SocialCard=()=>{
    return(
        <div className='socialCard'>
            <WhatsappIcon className='socialCard__icon'></WhatsappIcon>
            <div className='socialCard__text'>
                <h4>Whatsapp:</h4>
                <p>+54 9 11 7777777</p>
            </div>
        </div>
    )
}