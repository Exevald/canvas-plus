import styles from "./Card.module.css"
import {Button} from "../Button/Button";
import {CardType} from "../../../core/types/types";
import { useNavigate } from "react-router-dom";

const Card = ({
                  text,
                  imageSrc,
              }: CardType) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("click")
        navigate("/game_collection", {replace: true});
    };
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.titleArea}`}>
                {text}
            </div>
            <div className={`${styles.imageWrapper}`}>
                <img src={imageSrc} alt={"PreviewImage"}></img>
            </div>
            <Button onClick={() => {}} to={"/game_collection"} pos={"seasonCard"} viewStyle={"default"} text={"Поиграть!"}></Button>
        </div>
    )
}

export {Card}