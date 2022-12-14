import styles from "./Button.module.css"
import {Link} from "react-router-dom";

interface ButtonProps {
    viewStyle: 'default' | 'secondary',
    pos?: 'seasonCard' | 'gameCard' | 'gamePreviewCard',
    iconType?: 'like' | 'info' | 'goLeft' | 'goRight' | 'lens'
    text?: string,
    onClick: () => void,
    to?: string
}

const linkStyle = {
    color: 'white',
}

const Button = ({
                    viewStyle,
                    text,
                    pos,
                    onClick,
                    to,
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
                onClick={onClick}
                className={`${styles.button} ${buttonStyle}`}
            >
                <div className={styles.text_default}>
                    {
                        to !== undefined ? <Link to={to} style={linkStyle}>{text}</Link> : <>{text}</>
                    }
                </div>
            </button>
        </div>
    )
}

interface ButtonIconProps {
    iconType?: 'like' | 'info' | 'goLeft' | 'goRight' | 'lens'
    onClick: () => void,
    to?: string
}


const ButtonIcon = ({
                        iconType,
                        onClick,
                        to,
                    }: ButtonIconProps) => {
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
            {
                to !== undefined ? <Link to={to}></Link> : <></>
            }
        </button>
    )
}

export {Button, ButtonIcon}