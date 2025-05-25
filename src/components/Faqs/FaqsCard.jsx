import { IoIosArrowDown as SelectIcon } from "react-icons/io";

export const FaqsCard=()=>{
    return(
        <div className="faqsCard">
            <div className="faqsCard__header">
                <h3>What is the purpose of this project?</h3>
                <SelectIcon className="faqsCard__header-icon" />
            </div>
            <div className="faqsCard__content">
                <p>This project is designed to provide a comprehensive overview of the features and functionalities of our application.</p>
            </div>
        </div>
    )
}