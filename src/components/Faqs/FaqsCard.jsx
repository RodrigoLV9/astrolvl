import { IoIosArrowDown as SelectIcon } from "react-icons/io";
import '../../styles/faqsCard.css'
import {useState} from 'react'
export const FaqsCard=({question, answer})=>{
    const [select, setSelect]=useState(false)
    const handleSelect=()=>{
        setSelect(!select)
    }
    return(
        <div className="faqsCard">
            <div className="faqsCard__header" onClick={handleSelect}>
                <h3>{question}</h3>
                <SelectIcon className={select ? "faqsCard__header-icon" : "faqsCard__header-icon--select"}/>
            </div>
            <div className={select ? 'faqsCard__content-select' : 'faqsCard__content'}>
                <p>{answer}</p>
            </div>
        </div>
    )
}