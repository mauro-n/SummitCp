import style from './styles.module.scss';

export const PageMainText = () => {
    return (
        <section className={style['wrapper']}>
            <div className={style['text-wrapper']}>
                <p className={style['main-text']}>
                    14 a 23 de setembro 2023
                </p>
                <br />
                <p className={style['sec-text']}>
                    North Avant / Fortal CE
                    <span className={style['line']}></span>
                </p>
            </div>
        </section>
    )
}
