import styles from "./GameCollection.module.css"
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {Search} from "../../components/Search/Search";
import GamePreviewCard from "../../components/GamePreviewCard/GamePreviewCard";
import {Button, ButtonIcon} from "../../components/Button/Button";

import {EditorType} from "../../../core/types/types";
import {connect, ConnectedProps} from "react-redux";

import {AppDispatch} from "../../../model/store";
import {swipeGameLeft, swipeGameRight} from "../../../model/actionCreators";

function mapStateToProps(state: EditorType) {
    return {
        games: state.gameCollection.games,
        gameId: state.gameCollection.selectedGameId,
    }
}

function mapDispatchToProps(dispatcher: AppDispatch) {
    return {
        swipeLeft: (gameId: number) => dispatcher(swipeGameLeft(gameId)),
        swipeRight: (gameId: number) => dispatcher(swipeGameRight(gameId))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type GameCollectionProps = ConnectedProps<typeof connector>

const GameCollection = (props: GameCollectionProps) => {

    return (
        <div>
            <TopPanel viewStyle={"gameCollection"}></TopPanel>
            <div className={styles.gameCollectionArea}>
                <div className={styles.searchAreaWrapper}>
                    <div className={styles.searchArea}>
                        <p className={styles.inputDescription}>Введите название игры:</p>
                        <Search></Search>
                    </div>
                </div>
                <div className={styles.sliderAreaWrapper}>
                    <ButtonIcon iconType={"goLeft"} onClick={() => props.swipeLeft(props.gameId)}></ButtonIcon>
                    <div className={styles.gameCardWrapper}>
                        <GamePreviewCard></GamePreviewCard>
                    </div>
                    <ButtonIcon iconType={"goRight"} onClick={() => props.swipeRight(props.gameId)}></ButtonIcon>
                </div>
            </div>
            <div className={styles.gameCollectionButton}>
                <Button onClick={() => {}} viewStyle={"default"} text={"Полный список игр"}></Button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCollection)