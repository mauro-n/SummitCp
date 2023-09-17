import style from './styles.module.scss';

export const Navlink = ({ value, href, active }: Props.Navlink) => {
    return (
        <a
            className={`
            ${style['navlink']}
            ${active ? style['active'] : ''}
            `}
            href={href}
        >
            {value}
        </a>
    )
}
