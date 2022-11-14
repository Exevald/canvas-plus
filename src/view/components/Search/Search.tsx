import styles from "./Search.module.css"
import LensIcon from "./Lens.svg"
import {ButtonIcon} from "../Button/Button";

const Search = () => {
    return (
        <div className={styles.inputWrapper}>
            <input
                type={"text"}
                className={styles.input}
            >
            </input>
            <ButtonIcon viewStyle={"default"} iconType={"lens"} onClick={() => {}}></ButtonIcon>
        </div>
    )
}

export {Search}