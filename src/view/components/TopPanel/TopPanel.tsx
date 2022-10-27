import styles from "./TopPanel.module.css"
import logoImage from "../../images/main-menu/logo.svg"

const TopPanel = () => {
    return (
        <div className={`${styles.topPanel}`}>
            <div className={`${styles.topPanel__wrapper}`}>
                <div className={`${styles.topPanel__imageArea}`}>
                    <img src={logoImage} className={`${styles.topPanel__logoImage}`} alt={"logoImage"}></img>
                </div>
            </div>
        </div>
    )
}

export {TopPanel}
