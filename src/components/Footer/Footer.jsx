import '../../styles/footer.css'
import {socialNetworks} from '../../data/SocialNetworks.jsx'
import {mainSocialNetworks} from '../../data/SocialNetworks.jsx'
import {LogoMain} from '../LogoMain.jsx'
export const Footer=()=>{
    return(
        <footer>
            <section className='footerTop'>
                <div className="footerTop__main">
                    <LogoMain/>
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