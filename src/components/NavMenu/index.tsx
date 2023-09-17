import style from './styles.module.scss';
import arrowUpRight from '../../assets/images/arrow-up-right-svgrepo-com.svg';

export const NavMenu = ({ text, href }: Props.NavMenu) => {
    return (
        <a href={href} className={style['wrapper']}>
            <img className={style['icon']} src={arrowUpRight} />
            <span className={style['text']}>
                {text}
            </span>
        </a>
    )
}
