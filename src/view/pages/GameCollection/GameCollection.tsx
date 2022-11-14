import styles from "./GameCollection.module.css"
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {Search} from "../../components/Search/Search";
import {GamePreviewCard} from "../../components/GamePreviewCard/GamePreviewCard";
import {Button, ButtonIcon} from "../../components/Button/Button";

import krasilnikovImage from "../../images/season-2021/krasilnikov30.png"
import snake from "../../images/season-2021/snake.png"


const GameCollection = () => {

    const DEFAULT_GAME_PREVIEW_CARD = {
        imageSrc: snake,
        author: 'Долгирев Алексей',
        gameTitle: 'Creado Snake',
        info: '',
        countOfLikes: 10,
    }

    return (
        <div>
            <TopPanel viewStyle={"gameCollection"}></TopPanel>
            <div className={styles.gameCollectionArea}>
                <div className={styles.searchAreaWrapper}>
                    <div className={styles.searchArea}>
                        <p className={styles.inputDescription}>Введите название игры или имя автора:</p>
                        <Search></Search>
                    </div>
                </div>
                <div className={styles.sliderAreaWrapper}>
                    <ButtonIcon viewStyle={"default"} iconType={"goLeft"} onClick={() => {
                    }}></ButtonIcon>
                    <div className={styles.gameCardWrapper}>
                        <GamePreviewCard
                            imageSrc={DEFAULT_GAME_PREVIEW_CARD.imageSrc}
                            author={DEFAULT_GAME_PREVIEW_CARD.author}
                            gameTitle={DEFAULT_GAME_PREVIEW_CARD.gameTitle}
                            info={DEFAULT_GAME_PREVIEW_CARD.info}
                            countOfLikes={DEFAULT_GAME_PREVIEW_CARD.countOfLikes}
                        ></GamePreviewCard>
                    </div>
                    <ButtonIcon viewStyle={"default"} iconType={"goRight"} onClick={() => {}}></ButtonIcon>
                </div>
            </div>
            <div className={styles.gameCollectionButton}>
                <Button onClick={() => {
                }} viewStyle={"default"} text={"Полный список игр"}></Button>
            </div>
        </div>
    )
}

export {GameCollection}