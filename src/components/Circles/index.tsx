import style from './styles.module.scss';

export const Circles = () => {
    return (
        <div className={style['circle-wrapper']}>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
        </div>
    )
}
