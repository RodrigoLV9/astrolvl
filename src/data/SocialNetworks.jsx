import { FaWhatsapp as WhatsappIcon, FaLinkedinIn as LinkedinIcon, FaFacebookF as FacebookIcon,FaTiktok as TiktokIcon, FaInstagram as InstagramIcon, FaYoutube as YoutubeIcon  } from "react-icons/fa";
import { SiGmail as MailIcon } from "react-icons/si";
import { FaThreads as ThreadsIcon, FaXTwitter as TwitterIcon } from "react-icons/fa6";
export const socialNetworks=[
    {
        'name':'Instagram',
        'link':'https://www.instagram.com/agenciaweb_astrolvl/',
        'icon': <InstagramIcon className="footer-icon" />
    },
    {
        'name':'Facebook',
        'link':'https://www.facebook.com/profile.php?id=61576484442808',
        'icon': <FacebookIcon className="footer-icon" />
    },
    {
        'name':'Tiktok',
        'link':'https://www.tiktok.com/@astrolvlagenciaweb',
        'icon': <TiktokIcon className="footer-icon" />
    },
    {
        'name':'Linkedin',
        'link':'https://www.linkedin.com/in/astro-lvl-agencia-de-desarrollo-digital-b19716368/',
        'icon': <LinkedinIcon className="footer-icon" />
    },
    {
        'name':'Youtube',
        'link':'https://www.youtube.com/@AstroLvLAgenciaWeb',
        'icon': <YoutubeIcon className="footer-icon" />
    },
    {
        'name':'X',
        'link':'https://x.com/webastrolvl',
        'icon': <TwitterIcon className="footer-icon" />
    },
    {
        'name':'Threads',
        'link':'https://www.threads.com/@agenciaweb_astrolvl',
        'icon': <ThreadsIcon className="footer-icon" />
    },
    

]

export const mainSocialNetworks=[
    {
        'name':'Whatsapp',
        'info':'+54 9 11 11111117',
        'link':'#',
        'icon1': <WhatsappIcon className="socialCard__icon" />,
        'icon2': <WhatsappIcon className="footer-icon" />
    },
    {
        'name':'Mail',
        'info':'astrolvl.dev@gmail.com',
        'link':'mailto:astrolvl.dev@gmail.com',
        'icon1': <MailIcon className="socialCard__icon" />,
        'icon2': <MailIcon className="footer-icon" />
    },
    {
        'name':'Instagram',
        'info':'agenciaweb_astrolvl',
        'link':'https://www.instagram.com/agenciaweb_astrolvl/',
        'icon1': <InstagramIcon className="socialCard__icon" />,
        'icon2': <InstagramIcon className="footer-icon" />
    },
    {
        'name':'Facebook',
        'info':'Astro LvL Agencia de Desarrollo Digital ',
        'link':'https://www.facebook.com/profile.php?id=61576484442808',
        'icon1': <FacebookIcon className="socialCard__icon" />,
        'icon2': <FacebookIcon className="footer-icon" />
    },
]