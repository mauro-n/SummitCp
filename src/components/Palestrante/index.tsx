import style from './styles.module.scss';
import defaultProfilePic from '../../assets/images/default-profile-min.jpg';
import { Spacing } from '../Spacing';

type Palestrante = {
    name: string,
    title: string,
    skills?: string[],
    img: string,
    description: string
}


export const Palestrante = ({ name, title, skills, img, description }: Palestrante) => {
    return (
        <div className={style['wrapper']}>
            <div className={style['img-wrapper']}>
                <img src={img ? img : defaultProfilePic} className={style['img']} alt={name} />
                <p className={style['description']}>
                    <span className={style["desc-text"]}>
                        {description}
                    </span>
                </p>
            </div>
            <Spacing size="sm"></Spacing>
            <h3 className={style['name']}>{name}</h3>
            <p className={style['title']}>{title}</p>
            <Spacing size="sm"></Spacing>
            <div className={style['skills-wrapper']}>
                {skills?.map((el, index) => {
                    return <span key={index} className={style['skill']}>{el}</span>
                })}
            </div>
        </div>
    )
}
