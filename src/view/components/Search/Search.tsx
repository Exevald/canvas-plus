import styles from "./Search.module.css"
import LensIcon from "./Lens.svg"

const Search = () => {
    return (
        <div className={styles.inputWrapper}>
            <input
                type={"text"}
                className={styles.input}
            >
            </input>
            <img className={styles.imageArea} src={LensIcon} alt={"LensIcon"}></img>
        </div>
    )
}

export {Search}