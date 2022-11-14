import styles from "./Button.module.css"

interface ButtonProps {
    viewStyle: 'default' | 'secondary',
    pos?: 'seasonCard' | 'gameCard' | 'gamePreviewCard',
    iconType?: 'like' | 'info' | 'goLeft' | 'goRight' | 'lens'
    text?: string,
    onClick: () => void,
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
        case "gamePreviewCard": {
            posStyle = styles.gamePreviewCard;
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

const ButtonIcon = ({
                        iconType,
                        onClick,
                    }: ButtonProps) => {
    let buttonStyle;

    switch (iconType) {
        case "like":
            buttonStyle = styles.buttonLike;
            break;
        case "info":
            buttonStyle = styles.buttonEllipsis;
            break;
        case "goLeft":
            buttonStyle = styles.buttonGoLeft;
            break;
        case "goRight":
            buttonStyle = styles.buttonGoRight;
            break;
        case "lens":
            buttonStyle = styles.buttonLens;
            break;
    }
    return (
        <button
            type="button"
            className={`${styles.iconButton} ${buttonStyle}`}
            onClick={onClick}
        >
        </button>
    )
}

export {Button, ButtonIcon}