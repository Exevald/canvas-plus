import styles from "./TopPanel.module.css"
import logoImage from "../../images/main-menu/logo.svg"
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

interface TopPanelProps {
    viewStyle: 'mainMenu' | 'gameCollection'
}

const TopPanel = (props: TopPanelProps) => {
    return (
        <div className={styles.topPanel}>
            <div className={styles.logoWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={logoImage} className={styles.logoImage} alt={"logoImage"}></img>
                </div>
                {props.viewStyle === "gameCollection" &&
                    <div className={styles.buttonWrapper}>
                        <Button onClick={() => {
                        }} viewStyle={"default"} text={"Вернуться в главное меню"} to={"/"}></Button>
                    </div>
                }
            </div>
        </div>
    )
}

export {TopPanel}
