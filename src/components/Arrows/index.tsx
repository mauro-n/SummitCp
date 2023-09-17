import style from './styles.module.scss';
import arrow from '../../assets/images/arrow-up-right-svgrepo-com.svg';
import { useAppContext } from '../../hooks/useAppContext';

export const Arrows = () => {
    const lineWidth = 16;
    const { context } = useAppContext();
    const { isHoveringCTA } = context;

    const Line = () => {
        const content = [];
        for (let i = 0; i < lineWidth; i++) {
            content.push(
                <img src={arrow}
                    className={`
                    ${style['icon']}
                    ${isHoveringCTA ? style['hovering'] : ''}
                    `}
                    draggable={false}
                />
            );
        }
        return <div className={style['wrapper']}>{...content}</div>
    }

    return (
        <>
            <Line />
            <Line />
            <Line />
            <Line />
        </>
    )
}
