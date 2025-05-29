import '../../styles/footer.css'
import {socialNetworks} from '../../data/SocialNetworks.jsx'
import {mainSocialNetworks} from '../../data/SocialNetworks.jsx'
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
                        {
                            mainSocialNetworks.map((item,index)=>(
                                <li key={index}>
                                    {item.icon2}
                                    <p>{item.info}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='footerTop__follow'>
                    <h2>Follow us</h2>
                    <ul>
                        {
                            socialNetworks.map((social,index)=>(
                                <li key={index}>
                                    <a href={social.link} target="_blank">
                                        {social.icon}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <p className='footerBottom'>© 2025 Astro LvL | Agencia de desarrollo web en Argentina</p>
        </footer>
    )
}