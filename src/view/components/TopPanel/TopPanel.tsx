import styles from "./TopPanel.module.css"
import logoImage from "../../images/main-menu/logo.svg"
import {Button} from "../Button/Button";

interface TopPanelProps {
    viewStyle: 'mainMenu' | 'gameCollection'
}

const TopPanel = (props: TopPanelProps) => {
    return (
        <div className={styles.topPanel}>
            <p className={styles.imageWrapper}>
                <img src={logoImage} className={styles.topPanel__logoImage} alt={"logoImage"}></img>
            </p>
            {props.viewStyle === "gameCollection" &&
                <div className={styles.topPanel__buttonWrapper}>
                    <Button viewStyle={"default"} text={"Вернуться в главное меню"}></Button>
                </div>
            }
        </div>
    )
}

export {TopPanel}
