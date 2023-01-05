import styles from "./GamePreviewCard.module.css"
import {Button, ButtonIcon} from "../Button/Button";
import React from "react";
import {AppDispatch} from "../../../model/store";
import {setLike} from "../../../model/actionCreators";
import {connect, ConnectedProps} from "react-redux";
import {EditorType} from "../../../core/types/types";

function mapStateToProps(state: EditorType) {
    const selectedGameId = state.gameCollection.selectedGameId;
    return {
        countOfLikes: state.gameCollection.games[selectedGameId].countOfLikes,
        imageSrc: state.gameCollection.games[selectedGameId].imageSrc,
        author: state.gameCollection.games[selectedGameId].author,
        gameTitle: state.gameCollection.games[selectedGameId].title,
        info: state.gameCollection.games[selectedGameId].info,
    }
}

function mapDispatchToProps(dispatcher: AppDispatch) {
    return {
        setLike: () => dispatcher(setLike())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type GamePreviewCardProps = ConnectedProps<typeof connector>

const GamePreviewCard = (props: GamePreviewCardProps) => {
    return (
        <div className={styles.gamePreviewCard}>
            <div className={styles.gamePreviewCardTopWrapper}>
                <div className={styles.gameTopInfoArea}>
                    <ButtonIcon onClick={() => {}} iconType={"info"}></ButtonIcon>
                    <div className={styles.likeAreaWrapper}>
                        {props.countOfLikes !== 0 &&
                            <p className={styles.countOfLikesWrapper}>{props.countOfLikes}</p>
                        }
                        <ButtonIcon onClick={() => props.setLike()} iconType={"like"}></ButtonIcon>
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
                <Button onClick={() => {}} viewStyle={"default"} text={"Поиграть!"} pos={"gamePreviewCard"}></Button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePreviewCard)