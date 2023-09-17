import { ImgCard } from '../ImgCard';
import style from './styles.module.scss';
import img from '../../assets/images/laura-heimann-iCxCNJvmBTU-unsplash.jpg';
import img1 from '../../assets/images/svgbg.svg';
import img2 from '../../assets/images/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg';
import img3 from '../../assets/images/product-school-zFBVxClB2I8-unsplash.jpg';
import img4 from '../../assets/images/wonderlane-w1s5H_3Zn48-unsplash.jpg';

export const ImgCard3 = () => {
    return (
        <div className={style['wrapper']}>
            <ImgCard
                title='PARTICIPANTES'
                content='+15.000'
                img={[img, img2]}
                tag='#networking'
            />
            <ImgCard
                content='+500'
                title='EMPRESAS'
                img={[img3, img4]}
                tag='#futuro'
                invert
            />
            <ImgCard
                content='+10'
                title='TRILHAS DE ESTUDO'
                img={[img1]}
                tag='#conteúdo'
            />
        </div>
    )
}
