import styles from "./GameCollection.module.css"
import {TopPanel} from "../../components/TopPanel/TopPanel";
import GamePreviewCard from "../../components/GamePreviewCard/GamePreviewCard";
import {Button, ButtonIcon} from "../../components/Button/Button";

import {EditorType} from "../../../model/types/types";
import {connect, ConnectedProps} from "react-redux";

import {AppDispatch} from "../../../model/store";
import {setSearchingGameTitle, swipeGameLeft, swipeGameRight, findCurrentGame} from "../../../model/actionCreators";
import {useState} from "react";
import TextArea from "../../components/TextArea/TextArea";

function mapStateToProps(state: EditorType) { // CR Перенсти вниз
    const currentSeason = state.currentSeason;
    const currentGameCollection = state.collections.find(collection => collection.season === currentSeason);
    // CR "?" заменять явными проверками (if или тернарный оператор)
    const selectedGameIndex = currentGameCollection?.games.findIndex(game => game.id === currentGameCollection.selectedGameId)
    if (selectedGameIndex !== undefined /* CR: !selectedGameIndex */) {
        return {
            selectedGameId: currentGameCollection?.games[selectedGameIndex].id, // CR: Убрать ?
            searchingGameTitle: currentGameCollection?.searchingGameTitle, // CR: Убрать ?
        }
    }
}

function mapDispatchToProps(dispatcher: AppDispatch) {
    return {
        swipeLeft: (gameId: string) => dispatcher(swipeGameLeft(gameId)),
        swipeRight: (gameId: string) => dispatcher(swipeGameRight(gameId)),
        setSearchingGameTitle: (searchingGameTitle: string) => dispatcher(setSearchingGameTitle(searchingGameTitle)),
        findCurrentGame: (searchingGameTitle: string) => dispatcher(findCurrentGame(searchingGameTitle)),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type GameCollectionProps = ConnectedProps<typeof connector>

const GameCollection = (props: GameCollectionProps) => {
    const [find, startFind] = useState(false);
    return (
        <div>
            <TopPanel viewStyle={"gameCollection"} /* CR почему двойные теги? */></TopPanel>
            <div className={styles.gameCollectionArea}>
                <div className={styles.searchAreaWrapper}>
                    <div className={styles.searchArea}>
                        <p className={styles.inputDescription}>Введите название игры:</p>
                        <div className={styles.findContainer}>
                            {
                                find ?
                                    <TextArea
                                        placeholder={"Название игры"}
                                        onKeyUp={(value: string) => {
                                            props.setSearchingGameTitle(value);
                                            startFind(false);
                                            props.findCurrentGame(value);
                                        }}
                                    /> /* CR Форматирование тернарного оператора */
                                    : <p className={styles.name}>{props.searchingGameTitle}</p>
                            }
                            <ButtonIcon onClick={() => startFind(!find)} iconType={"lens"}></ButtonIcon>
                        </div>

                    </div>

                </div>
                <div className={styles.sliderAreaWrapper} /* CR форматирование */>
                    <ButtonIcon iconType={"goLeft"}
                                onClick={() => props.selectedGameId !== undefined /* CR !var */ ? props.swipeLeft(props.selectedGameId) : {}}></ButtonIcon>
                    <div className={styles.gameCardWrapper}>
                        <GamePreviewCard></GamePreviewCard>
                    </div>
                    <ButtonIcon iconType={"goRight"}
                                onClick={() => props.selectedGameId !== undefined /* CR !var */ ? props.swipeRight(props.selectedGameId) : {}}></ButtonIcon>
                </div>
            </div>
            <div className={styles.gameCollectionButton}>
                <Button onClick={() => {
                }} viewStyle={"default"} text={"Полный список игр"}></Button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCollection)