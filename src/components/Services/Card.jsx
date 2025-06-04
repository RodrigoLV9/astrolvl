import { FaCheck } from "react-icons/fa6";
import '../../styles/services.css'
import {ButtonContact} from '../ButtonContact'
export const Card=({title,description,price, features})=>{
    return(
        <div className='servicesCard'>
            <h4>{title}</h4>
            <h2>{price}</h2>
            <p className="servicesCard__text">{description}</p>
            <ul className="servicesCard__list">
                {
                    features.map((feature,index)=>(
                         <li className='servicesCard__list-item' key={index}>
                            <FaCheck className="servicesCard__list-iconCheck"/>
                            <p>{feature}</p>
                         </li>
                    ))
                }
            </ul>
            <ButtonContact/>
        </div>
    )
}