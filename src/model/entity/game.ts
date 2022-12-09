import {GameType} from "../../core/types/types";
import {ActionType} from "../store";
import {deepClone} from "../../core/functions/deepClone";

function setLikeReducer(game: GameType): GameType {
    return {
        ...game,
        countOfLikes: game.countOfLikes++
    }
}

function gameReducer(state: GameType, action: ActionType): GameType {
    switch (action.type) {
        case 'LIKE':
            return setLikeReducer(state)
        default:
            return deepClone(state) as GameType
    }
}

export {gameReducer}