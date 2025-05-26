import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";

export const Footer=()=>{
    return(
        <footer>
            <section className='footerTop'>
                <div className="footerTop__main">
                    <div className="footerTop__main-header">
                        <img src="/public/images/astrolvl-logo.png" alt='logo-main' width={50} height={50}/>
                        <h2>ASTRO LvL</h2>
                    </div>
                    <p>Agencia de diseño web. Brindamos soluciones personalizadas para impulsar tu presencia online.</p>
                </div>
                <div className="footerTop__contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <WhatsappIcon/>
                            <p>+54 9 11 77111777</p>
                        </li>
                        <li>
                            <WhatsappIcon/>
                            <p>+54 9 11 77111777</p>
                        </li>
                        <li>
                            <WhatsappIcon/>
                            <p>+54 9 11 77111777</p>
                        </li>
                    </ul>
                </div>
                <div className='footerTop__follow'>
                    <h2>Follow us</h2>
                    <ul>
                        <li>
                            <a href='#'><WhatsappIcon/></a>
                        </li>
                        <li>
                            <a href='#'><WhatsappIcon/></a>
                        </li>
                        <li>
                            <a href='#'><WhatsappIcon/></a>
                        </li>
                        <li>
                            <a href='#'><WhatsappIcon/></a>
                        </li>
                        <li>
                            <a href='#'><WhatsappIcon/></a>
                        </li>
                    </ul>
                </div>
            </section>
            <p className='footerBottom'>© 2025 Disew | Agencia de diseño web en Argentina</p>
        </footer>
    )
}