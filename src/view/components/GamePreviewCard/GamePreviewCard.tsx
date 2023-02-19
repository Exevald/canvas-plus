import styles from "./GamePreviewCard.module.css"
import { Button, ButtonIcon } from "../Button/Button";
import { AppDispatch } from "../../../model/store";
import { setLike } from "../../../model/actionCreators";
import { connect, ConnectedProps } from "react-redux";
import { EditorType } from "../../../core/types/types";

const GamePreviewCard = (props: GamePreviewCardProps) => {
    return (
        <div className={styles.gamePreviewCard}>
            <div className={styles.gamePreviewCardTopWrapper}>
                <div className={styles.gameTopInfoArea}>
                    <ButtonIcon onClick={() => { }} iconType={"info"}></ButtonIcon>
                    <div className={styles.likeAreaWrapper}>
                        {
                            props.countOfLikes !== 0 &&
                            <p className={styles.countOfLikesWrapper}>{props.countOfLikes}</p>
                        }
                        <ButtonIcon onClick={() => { }} iconType={"like"}></ButtonIcon>
                    </div>
                </div>
                <div className={`${styles.gameDescriptionArea}`}></div>
                <img src={props.imageSrc} alt={"gamePreviewImage"} className={styles.gamePreviewImage}></img>
            </div>
            <div className={styles.gameBottomInfoArea}>
                <div className={styles.textInfoWrapper}>
                    <p>Автор: {props.author}</p>
                    <p>Игра: {props.gameTitle}</p>
                </div>
                <Button onClick={() => { }} viewStyle={"default"} text={"Поиграть!"} pos={"gamePreviewCard"}></Button>
            </div>
        </div>
    )
}

function mapStateToProps(state: EditorType) {
    const currentSeason = state.currentSeason;
    const currentGameCollection = state.collections.find(collection => collection.season === currentSeason);
    const selectedGameIndex = currentGameCollection?.games.findIndex(game => game.id === currentGameCollection.selectedGameId);
    if (selectedGameIndex !== undefined) {
        return {
            countOfLikes: currentGameCollection?.games[selectedGameIndex].countOfLikes,
            imageSrc: currentGameCollection?.games[selectedGameIndex].imageSrc,
            author: currentGameCollection?.games[selectedGameIndex].author,
            gameTitle: currentGameCollection?.games[selectedGameIndex].title,
            info: currentGameCollection?.games[selectedGameIndex].info,
        }
    }
}

function mapDispatchToProps(dispatcher: AppDispatch) {
    return {
        setLike: () => dispatcher(setLike())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type GamePreviewCardProps = ConnectedProps<typeof connector>

export default connect(mapStateToProps, mapDispatchToProps)(GamePreviewCard)