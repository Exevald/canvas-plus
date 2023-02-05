import {ActionType} from "../store";
import {GameCollectionType} from "../../core/types/types";
import {deepClone} from "../../core/functions/deepClone";

function swipeGameLeftReducer(gameCollection: GameCollectionType, gameId: string): GameCollectionType {
    const gameIndex = gameCollection.games.findIndex(game => game.id === gameId);
    console.log("lllll")
    let newGameIndex = gameIndex - 1;
    if (newGameIndex === 0) {
        newGameIndex = gameCollection.games.length - 1;
    }
    const newGameId = gameCollection.games[newGameIndex].id;
    return {
        ...gameCollection,
        selectedGameId: newGameId,
    }
}

function swipeGameRightReducer(gameCollection: GameCollectionType, gameId: string): GameCollectionType {
    console.log("rrrr")
    const gameIndex = gameCollection.games.findIndex(game => game.id === gameId);
    let newGameIndex = gameIndex + 1;
    if (newGameIndex === gameCollection.games.length - 1) {
        newGameIndex = 0;
    }
    const newGameId = gameCollection.games[newGameIndex].id;
    return {
        ...gameCollection,
        selectedGameId: newGameId,
    }
}

function gameCollectionReducer(state: GameCollectionType, action: ActionType): GameCollectionType {
    console.log("reducer")
    switch (action.type) {
        case 'SWIPE_LEFT': {
            console.log("r l")
            return action.gameId !== undefined ? swipeGameLeftReducer(state, action.gameId) : deepClone(state) as GameCollectionType
        }
        case 'SWIPE_RIGHT': {
            console.log("r r")
            return action.gameId !== undefined ? swipeGameRightReducer(state, action.gameId) : deepClone(state) as GameCollectionType
        }
        default:
            return deepClone(state) as GameCollectionType
    }
}

export {gameCollectionReducer}
