import styles from "./TopPanel.module.css"
import logoImage from "../../images/main-menu/logo.svg"
import { Button } from "../Button/Button";

interface TopPanelProps {
    viewStyle: 'mainMenu' | 'gameCollection'
}

const TopPanel = (props: TopPanelProps) => {
    return (
        <div className={styles.topPanel}>
            <div className={styles.logoWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={logoImage} alt={"logoImage"} className={styles.image}></img>
                </div>
                {
                    props.viewStyle === "gameCollection" &&
                    <div className={styles.buttonWrapper}>
                        <Button onClick={() => {
                        }} viewStyle={"default"} text={"Вернуться в главное меню"} to={"/"}></Button>
                    </div>
                }
            </div>
        </div>
    )
}

export { TopPanel }
