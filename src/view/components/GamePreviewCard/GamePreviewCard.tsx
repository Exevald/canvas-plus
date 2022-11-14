import styles from "./GamePreviewCard.module.css"
import {Button, ButtonIcon} from "../Button/Button";
import Like from "../Button/ButtonIcons/Like.svg"
import Ellipsis from "../Button/ButtonIcons/Ellipsis.svg"

interface GamePreviewCardProps {
    imageSrc: string,
    author: string,
    gameTitle: string,
    info: string,
    countOfLikes: number,
}

interface GameBottomAreaProps {
    author: string,
    gameTitle: string,
}

interface GameTopAreaProps {
    countOfLikes: number,
    info: string,
}

const GameTopInfoArea = (props: GameTopAreaProps) => {
    return (
        <div className={styles.gameTopInfoArea}>
            <ButtonIcon viewStyle={"default"} onClick={() => {}} iconType={"info"}></ButtonIcon>
            <div className={styles.likeAreaWrapper}>
                {props.countOfLikes !== 0 &&
                    <p className={styles.countOfLikesWrapper}>{props.countOfLikes}</p>
                }
                <ButtonIcon viewStyle={"default"} onClick={() => {}} iconType={"like"}></ButtonIcon>
            </div>
        </div>
    )
}

const GameBottomInfoArea = (props: GameBottomAreaProps) => {
    return (
        <div className={styles.gameBottomInfoArea}>
            <div className={styles.textInfoWrapper}>
                <p>Автор: {props.author}</p>
                <p>Игра: {props.gameTitle}</p>
            </div>
            <Button onClick={() => {
            }} viewStyle={"default"} text={"Поиграть!"} pos={"gamePreviewCard"}></Button>
        </div>
    )
}

const GamePreviewCard = (props: GamePreviewCardProps) => {
    return (
        <div className={styles.gamePreviewCard}>
            <div className={styles.gamePreviewCardTopWrapper}>
                <GameTopInfoArea countOfLikes={props.countOfLikes} info={props.info}></GameTopInfoArea>
                <img src={props.imageSrc} alt={"gamePreviewImage"} className={styles.gamePreviewImage}></img>
            </div>
            <GameBottomInfoArea gameTitle={props.gameTitle} author={props.author}></GameBottomInfoArea>
        </div>
    )
}

export {GamePreviewCard}