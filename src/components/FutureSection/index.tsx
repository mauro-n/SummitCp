import style from './styles.module.scss';
import { useState } from 'react'
/* IMGS */
import img1 from '../../assets/images/desola-lanre-ologun-IgUR1iX0mqM-unsplash-min.jpg';
import img2 from '../../assets/images/laura-heimann-iCxCNJvmBTU-unsplash-min.jpg';
import img3 from '../../assets/images/wonderlane-w1s5H_3Zn48-unsplash-min.jpg';
import { Spacing } from '../Spacing';

type FutureSection = {
    btnLabel1: string,
    btnLabel2: string,
    btnLabel3: string,
    img1: string,
    img2: string,
    img3: string
}

export const FutureSection = () => {
    const [selectedBtn, setSelectedBtn] = useState('');

    return (
        <div className={style['wrapper']}>
            <div className={style['texts']}>
                <h2>
                    Encontre o <br />
                    seu futuro
                </h2>

                <button
                    className={`
                        ${style['btn1']}
                        ${style['texts-btn']}
                        ${style[`${selectedBtn}--selected`]}
                    `}
                    onMouseEnter={() => setSelectedBtn("btn1")}
                >
                    <span className={style['btn-line']}></span>
                    Participante
                </button>

                <button
                    className={`
                    ${style['btn2']}
                    ${style['texts-btn']}
                    ${style[`${selectedBtn}--selected`]}
                `}
                    onMouseEnter={() => setSelectedBtn("btn2")}
                >
                    <span className={style['btn-line']}></span>
                    Startup
                </button>

                <button
                    className={`
                    ${style['btn3']}
                    ${style['texts-btn']}
                    ${style[`${selectedBtn}--selected`]}
                `}
                    onMouseEnter={() => setSelectedBtn("btn3")}
                >
                    <span className={style['btn-line']}></span>
                    Patrocinador
                </button>

            </div>
            <div className={style['imgs']}>
                <div className={style['img-container']}>
                    <div className={`
                            ${style['img-wrapper']}
                            ${style['active']}                            
                        `}
                    >
                        <div className={style['img-overlay']}>
                            <div className={style['overlay-content']}>
                                <Spacing size='xlg' />
                                <Spacing size='xlg' />
                                <h4>PARTICIPANTE</h4>
                                <p>Um lugar em que os sonhos e as oportunidades se encontram. Venha pensar, conectar e fazer o futuro acontecer.</p>
                                <Spacing size='md' />
                                <button>COMPRAR INGRESSO</button>
                            </div>
                        </div>
                        <img src={img1} alt="" />
                    </div>
                    <div className={`
                            ${style['img-wrapper']}
                            ${selectedBtn === 'btn2' ?
                            style['active'] : ''
                        }
                        `}
                    >
                        <div className={style['img-overlay']}>
                            <div className={style['overlay-content']}>
                                <Spacing size='xlg' />
                                <Spacing size='xlg' />
                                <h4>STARTUP</h4>
                                <p>Um ecossistema de oportunidades, investidores e clientes para o seu negócio.</p>
                                <Spacing size='md' />
                                <button>EXPOR MINHA STARTUP</button>
                            </div>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                    <div
                        className={`
                            ${style['img-wrapper']}
                            ${selectedBtn === 'btn3' ?
                                style['active'] : ''
                            }
                        `}
                    >
                        <div className={style['img-overlay']}>
                            <div className={style['overlay-content']}>
                                <Spacing size='xlg' />
                                <Spacing size='xlg' />
                                <h4>PATROCINADOR</h4>
                                <p>
                                    Encontre o que faltava para liderar a transformação do seu negócio. Sua marca em destaque no Festival do Futuro.
                                </p>
                                <Spacing size='md' />
                                <button>
                                    TENHO INTERESSE
                                </button>
                            </div>
                        </div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>

        </div >
    )
}
