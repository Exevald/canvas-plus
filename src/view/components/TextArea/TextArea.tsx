import styles from "./TextArea.module.css"
import {connect} from "react-redux";

interface TextAreaProps {
    placeholder?: string;
    value?: string;
    onKeyUp: (value: string) => void;
}

// CR Форматирование

const TextArea = ({
                      placeholder = "",
                      onKeyUp,
                  }: TextAreaProps) => {
    return (
        <input type="text"
               placeholder={placeholder}
               className={styles.inputDefault}
               onKeyUp={(event) => {
                   if (event.key === "Enter") {
                       onKeyUp(event.currentTarget.value)
                   }
               }}
        />
    )
}


export default connect()(TextArea)