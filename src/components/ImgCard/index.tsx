import style from './styles.module.scss';

type ImgCard = {
    img: string[],
    content?: string,
    title?: string,
    tag?: string,
    invert?: boolean
}

export const ImgCard = ({ img, title, content, tag, invert }: ImgCard) => {
    return (
        <div
            className={`
            ${style['wrapper']}
            ${invert ? style['invert'] : ''}
            `}
        >
            <div className={style['img-wrapper']}>
                {img.map((el, index) => {
                    return (
                        <img
                            key={index}
                            src={el}
                            className={`
                                ${style['img']}
                                ${style[`img-${index}`]}
                            `}
                        />
                    )
                })}
            </div>
            <p className={style['content']}>
                <span className={style['content-main']}>
                    {content}
                </span>
                <span className={style['content-title']}>{title}</span>
                <span className={style['content-tag']}>{tag}</span>
            </p>
        </div>
    )
}
