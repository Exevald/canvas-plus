import styles from "./Button.module.css"

interface ButtonProps {
    viewStyle: 'default' | 'secondary',
    pos?: 'seasonCard' | 'gameCard',
    text?: string
}

const Button = ({
                    viewStyle,
                    text,
                    pos
                }: ButtonProps) => {
    let buttonStyle = styles.button_default;
    let posStyle
    switch (viewStyle) {
        case "default": {
            buttonStyle = styles.button_default;
            break;
        }
        case "secondary": {
            buttonStyle = styles.button_secondary
        }
    }
    switch (pos) {
        case "seasonCard": {
            posStyle = styles.seasonCard;
            break;
        }
    }
    return (
        <div className={`${posStyle}`}>
            <button
                type="button"
                className={`${styles.button} ${buttonStyle}`}
            >
                <div className={styles.text_default}>
                    {text}
                </div>
            </button>
        </div>
    )
}

export {Button}