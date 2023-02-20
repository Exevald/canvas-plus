import {GameType, GameCollectionType, SearchType} from "../types/types"; // CR Лишние импорты
import {ActionType} from "../store";
import {deepClone} from "../../core/functions/deepClone";

function searchByGameTitleReducer(gameTitle: string) {
}

function searchReducer(state: SearchType, action: ActionType) /* CR return value type */ {
    // CR Дублирование deepClone
    switch (action.type) {
        case 'SEARCH_BY_GAME_TITLE':
            return action.gameTitle !== undefined ? searchByGameTitleReducer(action.gameTitle) : deepClone(state) as SearchType
        default:
            return deepClone(state) as SearchType
    }
}

export {searchReducer}