import {LogoMain} from '../LogoMain.jsx'
import '../../styles/header.css'
import {useState} from 'react'
export const Header=()=>{
    const [isMenu, setIsMenu]=useState(false)
    const handleMenu=()=>{
        console.log(isMenu)
        setIsMenu(!isMenu)
        
    }
    return(
        <header className="header" id="home">
            <LogoMain/>
            <nav className="header__nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#faqs">FaQs</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className='menuToggle' onClick={handleMenu}>
                <span className={`menuToggle__line ${isMenu ? 'menuToggle__line-actived' : ''}`}></span>
                <span className={`menuToggle__line ${isMenu ? 'menuToggle__line-actived' : ''}`}></span>
                <span className={`menuToggle__line ${isMenu ? 'menuToggle__line-actived' : ''}`}></span>
                {/* <span className={`menuToggle__line ${isMenu ? 'menuToggle__line-actived' : ''}`} ></span> */}
                {/* <span className="menuToggle__line"></span>
                <span className="menuToggle__line"></span> */}
            </button>
        </header>
    )
}

