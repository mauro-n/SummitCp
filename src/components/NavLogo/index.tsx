import style from './styles.module.scss';
import icon from '../../assets/images/logo2.png';

export const NavLogo = () => {
    return (
        <a className={style['wrapper']} href='#'>
            <span className={style['tech']}>
                Tech
            </span>
            <span className={style['summit']}>
                summit
                <img src={icon} className={style['icon']} />
            </span>
        </a>
    )
}
