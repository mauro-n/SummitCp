import { Spacing } from '../Spacing';
import { TextCard } from '../TextCard';
import style from './styles.module.scss';

export const TransformWrld = () => {
    return (
        <div className={style['container']}>
            <div className={style['wrapper']}>
                <span className={style['aqui']}>
                    Aqui
                    <br />
                    <span className={style['transform']}>
                        transformamos
                    </span>
                </span>
                <span className={style['mundo']}>
                    O mundo
                </span>
            </div>
            <Spacing size='md'></Spacing>
            <TextCard />
        </div>
    )
}
