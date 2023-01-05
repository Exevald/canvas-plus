import {GameType, GameCollectionType, SearchType} from "../../core/types/types";
import {ActionType} from "../store";
import {deepClone} from "../../core/functions/deepClone";

function searchByGameTitleReducer(gameTitle: string) {
}

function searchReducer(state: SearchType, action: ActionType) {
    switch (action.type) {
        case 'SEARCH_BY_GAME_TITLE':
            return action.gameTitle !== undefined ? searchByGameTitleReducer(action.gameTitle) : deepClone(state) as SearchType
        default:
            return deepClone(state) as SearchType
    }
}

export {searchReducer}