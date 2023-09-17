import style from './styles.module.scss';

export const TextCard = () => {
    return (
        <div className={style['wrapper']}>
            <h2>
                Tech <i>summit</i> 2024
            </h2>
            <p>
                Nossa próxima edição reunirá as maiores referências quando o assunto é futuro. Durante três dias, você poderá se conectar, gerar negócios e aprender com especialistas do mercado corporativo.
            </p>
        </div>
    )
}
