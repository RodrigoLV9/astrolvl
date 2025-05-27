import { IoIosArrowDown as SelectIcon } from "react-icons/io";
import '../../styles/faqsCard.css'
import {useState} from 'react'
export const FaqsCard=()=>{
    const [select, setSelect]=useState(false)
    const handleSelect=()=>{
        console.log("click")
        setSelect(!select)
    }
    return(
        <div className="faqsCard">
            <div className="faqsCard__header">
                <h3>What is the purpose of this project?</h3>
                <button onClick={handleSelect} className='faqsCard__header-button'>
                    <SelectIcon className={select ? "faqsCard__header-icon" : "faqsCard__header-icon--select"}/>
                </button>
                
            </div>
            <div className={select ? 'faqsCard__content-select' : 'faqsCard__content'}>
                <p>This project is designed to provide a comprehensive overview of the features and functionalities of our application.</p>
            </div>
        </div>
    )
}