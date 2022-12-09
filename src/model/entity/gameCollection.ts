import {ActionType} from "../store";
import {GameCollectionType} from "../../core/types/types";
import {deepClone} from "../../core/functions/deepClone";

function swipeGameLeftReducer(gameCollection: GameCollectionType, gameId: number): GameCollectionType {
    let newGameId = gameId - 1;
    if (gameId === 0) {
        newGameId = gameCollection.games.length - 1;
    }
    return {
        ...gameCollection,
        selectedGameId: newGameId,
    }
}

function swipeGameRightReducer(gameCollection: GameCollectionType, gameId: number): GameCollectionType {
    let newGameId = gameId + 1;
    if (gameId === gameCollection.games.length - 1) {
        newGameId = 0;
    }
    return {
        ...gameCollection,
        selectedGameId: newGameId,
    }
}

function gameCollectionReducer(state: GameCollectionType, action: ActionType): GameCollectionType {
    switch (action.type) {
        case 'SWIPE_LEFT':
            // @ts-ignore
            return swipeGameLeftReducer(state, action.gameId)
        case 'SWIPE_RIGHT':
            // @ts-ignore
            return swipeGameRightReducer(state, action.gameId)
        default:
            return deepClone(state) as GameCollectionType
    }
}

export {gameCollectionReducer}
