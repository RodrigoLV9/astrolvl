import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import '../styles/buttonContact.css'

export const ButtonContact = () => {
  return (
    <button className='buttonContact'>
      <div className='buttonContact__border'></div>
      <div className='buttonContact__content'>
        <WhatsappIcon className='buttonContact__icon'/>
        <p>Contactar</p>
      </div>
    </button>
  )
}
