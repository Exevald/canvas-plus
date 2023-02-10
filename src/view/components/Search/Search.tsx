import styles from "./Search.module.css"
import { ButtonIcon } from "../Button/Button";

const Search = () => {
    return (
        <div className={styles.inputWrapper}>
            <input
                type={"text"}
                className={styles.input}
            >
            </input>
            <ButtonIcon iconType={"lens"} onClick={() => { }}></ButtonIcon>
        </div>
    )
}

export { Search }