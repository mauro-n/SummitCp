import style from './style.module.scss';

type Spacing = {
    size?: 'sm' | 'md' | 'lg' | 'xlg'
}

export const Spacing = ({ size }: Spacing) => {

    return (
        <div className={`${style[`${size}`]}`}></div>
    )
}
