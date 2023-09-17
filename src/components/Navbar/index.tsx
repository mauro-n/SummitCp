import { NavMenu } from '../NavMenu';
import { Navlink } from '../Navlink';
import style from './styles.module.scss';
import { NavLogo } from '../NavLogo';

export const Navbar = () => {
    return (
        <div className={style['wrapper']}>
            <NavLogo />
            <div className={style['links-wrapper']}>
                <Navlink value='Página Inicial' href='#' active />
                <Navlink value='Comprar Ingresso' href='#' />
                <Navlink value='Ver Nomes Confirmados' href='#' />
                <Navlink value='Quero ser Patrocinador' href='#' />
            </div>
            <NavMenu text='menu' href='#' />
        </div>
    )
}
