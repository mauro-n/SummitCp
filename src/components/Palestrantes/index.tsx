import { Palestrante } from '../Palestrante';
import style from './styles.module.scss';
import p1 from '../../assets/images/portraits/min-hius-r-ii4jKDL6Y-unsplash-min.jpg';
import p2 from '../../assets/images/portraits/moises-alex-LkZRTThjBHA-unsplash-min.jpg';
import p3 from '../../assets/images/portraits/samsung-memory-7e5J2V80CDo-unsplash-min.jpg';
import p4 from '../../assets/images/portraits/yusron-el-jihan-rpn0cc7MtyQ-unsplash-min.jpg';
import p5 from '../../assets/images/portraits/michael-dam-mEZ3PoFGs_k-unsplash-min.jpg';
import p6 from '../../assets/images/portraits/ayo-ogunseinde-sibVwORYqs0-unsplash-min.jpg'
import { Spacing } from '../Spacing';

export const Palestrantes = () => {
    return (
        <div className={style['wrapper']}>
            <div className={style['head']}>
                <h2>
                    Palestrantes
                </h2>                
                <p className={style['text']}>
                    Um ecossistema de possibilidades para você transformar a sua carreira. São diversos palcos de conteúdo simultâneos, com mais de 500 palestrantes.
                </p>
            </div>

            <div className={style["content"]}>
                <Palestrante
                    name='Joseph John (JJ)'
                    title='Professional gamer at ubisoftware'
                    img={p1}
                    skills={['comunicador', 'coach']}
                    description='Gamer profissiional desde os 14 anos JJ ganha a vida fazendo streams e vai falar sobre o nicho no Brasil'
                />
                <Palestrante
                    name='Isabella Martins'
                    title='Digital influencer at Tiktok'
                    img={p2}
                    skills={['Influência', 'comunicadora']}
                    description='Isabella, graduada em psicologia nos conta por que o tik-tok funciona.'
                />
                <Palestrante
                    name='Rodrigo Figueira'
                    title='Programador de jogos indie'
                    img={p3}
                    skills={['Programador']}
                    description="Atualmente trabalha no desenvolvimento indie de jogos por paixão, Rodrigo participou ativamente da criação da série assassins's creed, e nos conta como são os batidores de uma super produção"
                />
                <Palestrante
                    name='Marcos Musk'
                    title='Engenheiro de Software'
                    img={p4}
                    skills={['Engenheiro de software']}
                    description='Marcos Musk é uma engenheiro de software apaixonado por tecnologia e inovação. Graduado em Ciência da Computação por uma das principais universidades do país, vai nos contar sobre sua trajetória'
                />
                <Palestrante
                    name='Júnior Tyrone'
                    title='Engenheiro de Software'
                    img={p6}
                    skills={['Especialista em CRUD']}
                    description='Júnior Tyrone é uma engenheira de software apaixonada por tecnologia e inovação. Graduada em Ciência da Computação por uma das principais universidades do país, vai-nos contar sobre sua trajetória'
                />
                <Palestrante
                    name='Ana Silva'
                    title='UX designer'
                    img={p5}
                    skills={['subir muro', 'afogar peixe']}
                    description='Ana Silva é uma engenheira de software apaixonada por tecnologia e inovação. Graduada em Ciência da Computação por uma das principais universidades do país, vai-nos contar sobre sua trajetória'
                />
            </div>
            <Spacing size='xlg' />
            <div className={style['footer']}>
                <span className={style['footer-line']}></span>
                <button className={style['footer-cta']}>
                    NOMES JÁ CONFIRMADOS
                </button>
            </div>
            <Spacing size='lg' />
        </div>
    )
}
