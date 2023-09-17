import style from './styles.module.scss';

type Container = {
    children?: React.JSX.Element,
    bkgImg?: string
}

export const Container = ({ children, bkgImg }: Container) => {
    return (
        <div
            className={style['container']}
        >
            {bkgImg ?
                <img src={bkgImg} className={style['bkgImg']} /> :
                ''
            }
            {children}
        </div>
    )
}
