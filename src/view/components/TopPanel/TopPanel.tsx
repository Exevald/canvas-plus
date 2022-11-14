import styles from "./TopPanel.module.css"
import logoImage from "../../images/main-menu/logo.svg"
import {Button} from "../Button/Button";

interface TopPanelProps {
    viewStyle: 'mainMenu' | 'gameCollection'
}

const TopPanel = (props: TopPanelProps) => {
    return (
        <div className={styles.topPanel}>
            <div className={styles.imageWrapper}>
                <img src={logoImage} className={styles.logoImage} alt={"logoImage"}></img>
            </div>
            {props.viewStyle === "gameCollection" &&
                <div className={styles.buttonWrapper}>
                    <Button onClick={() => {}} viewStyle={"default"} text={"Вернуться в главное меню"}></Button>
                </div>
            }
        </div>
    )
}

export {TopPanel}
