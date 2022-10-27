import styles from "./Card.module.css"
import {Button} from "../Button/Button";

interface CardProps {
    viewStyle: 'seasonCard' | 'gameCard',
    text: string,
    imageSrc?: string,
}

const Card = ({
                  text,
                  imageSrc,
              }: CardProps) => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.titleArea}`}>
                {text}
            </div>
            <div className={`${styles.imageWrapper}`}>
                <img src={imageSrc} alt={"PreviewImage"}></img>
            </div>
            <Button pos={"seasonCard"} viewStyle={"default"} text={"Поиграть!"}></Button>
        </div>
    )
}

export {Card}