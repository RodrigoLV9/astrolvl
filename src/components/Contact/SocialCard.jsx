import '../../styles/socialCard.css'
export const SocialCard=({name,info,icon,link})=>{
    return(
        <a href={link} className='socialCard' target='_blank'>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2d7ec5" />
                        <stop offset="100%" stopColor="#4a2c81" />
                    </linearGradient>
                </defs>
            </svg>
            {icon}
            <div className='socialCard__text'>
                <h4>{name}: </h4>
                <p>{info}</p>
            </div>
        </a>
    )
}