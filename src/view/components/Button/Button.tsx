import styles from "./Button.module.css"
import {Link} from "react-router-dom";

// CR Все "|" перенести в enum
// iconType можно переделать и передавать сюда непосредсивенно React компонент с свг кодом изображения
// плюсом такого решения будет уменьшение количества стилей и переиспользование
// ButtonIcons лучше перенести в папку с изображениями

interface ButtonProps {
    viewStyle: 'default' | 'secondary',
    pos?: 'seasonCard' | 'gameCard' | 'gamePreviewCard', // CR Пишите названия полностью
    iconType?: 'like' | 'info' | 'goLeft' | 'goRight' | 'lens'
    text?: string,
    onClick: () => void,
    to?: string // CR Плохое название
}

const linkStyle = { // CR почему это объект?
    color: 'white',
}

const Button = ({
                    viewStyle,
                    text,
                    pos,
                    onClick,
                    to,
                }: ButtonProps) => { // CR Форматирование
    let buttonStyle = styles.button_default;
    let posStyle // CR Инициализировать и сменить наименование
    // CR Надо посмотреть как можно упростить
    switch (viewStyle) {
        case "default": {
            buttonStyle = styles.button_default;
            break;
        }
        case "secondary": {
            buttonStyle = styles.button_secondary
            // CR: break
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
                        to !== undefined /* CR Упростить до !to */ ? <Link to={to} style={linkStyle}>{text}</Link> : <>{text}</>
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
    let buttonStyle; // CR В чем различие от Button и добавить инициализацию
    
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
                to !== undefined /* CR читай выше аналогично */ ? <Link to={to}></Link> : <></> /* CR заменить на null */
            }
        </button>
    )
}

export {Button, ButtonIcon}