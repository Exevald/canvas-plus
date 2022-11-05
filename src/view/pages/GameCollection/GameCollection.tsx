import styles from "./GameCollection.module.css"
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {Search} from "../../components/Search/Search";
import {GamePreviewCard} from "../../components/GamePreviewCard/GamePreviewCard";
import {Button} from "../../components/Button/Button";

const GameCollection = () => {
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
                <div className={styles.gameCardWrapper}>
                    <GamePreviewCard></GamePreviewCard>
                </div>
            </div>
            <div className={styles.gameCollectionButton}>
                <Button viewStyle={"default"} text={"Полный список игр"}></Button>
            </div>
        </div>
    )
}

export {GameCollection}