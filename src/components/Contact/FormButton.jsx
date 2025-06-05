import { BsFillSendFill as SendIcon } from "react-icons/bs";
import '../../styles/formButton.css'
export const FormButton=()=>{
    return(
        <button className='formButton'>
            <p>Send</p>
            <SendIcon className='formButton__icon'/>
        </button>
    )
}