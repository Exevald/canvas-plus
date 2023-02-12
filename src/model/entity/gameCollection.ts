import {ActionType} from "../store";
import {Actions, GameCollectionType} from "../../core/types/types";
import {deepClone} from "../../core/functions/deepClone";

function swipeGameLeftReducer(gameCollection: GameCollectionType, gameId: string): GameCollectionType {
    const gameIndex = gameCollection.games.findIndex(game => game.id === gameId);
    let newGameIndex = gameIndex;
    if (newGameIndex === 0) {
        newGameIndex = gameCollection.games.length - 1;
    } else {
        newGameIndex = gameIndex - 1;
    }
    const newGameId = gameCollection.games[newGameIndex].id;
    return {
        ...gameCollection,
        selectedGameId: newGameId,
    }
}

function swipeGameRightReducer(gameCollection: GameCollectionType, gameId: string): GameCollectionType {
    const gameIndex = gameCollection.games.findIndex(game => game.id === gameId);
    let newGameIndex = gameIndex;
    if (newGameIndex === gameCollection.games.length - 1) {
        newGameIndex = 0;
    } else {
        newGameIndex = gameIndex + 1;
    }
    const newGameId = gameCollection.games[newGameIndex].id;
    return {
        ...gameCollection,
        selectedGameId: newGameId,
    }
}

function setSearchingGameTitleReducer(gameCollection: GameCollectionType, gameTitle: string): GameCollectionType {
    return {
        ...gameCollection,
        searchingGameTitle: gameTitle,
    }
}

function findCurrentGameReducer(gameCollection: GameCollectionType, gameTitle: string): GameCollectionType {
    let currentGameIndex = gameCollection.games.findIndex(game => game.title === gameTitle);
    if (currentGameIndex === -1) {
        currentGameIndex = 0;
    }
    let currentSelectedGameId = gameCollection.games[currentGameIndex].id;
    return {
        ...gameCollection,
        selectedGameId: currentSelectedGameId,
    }
}

function gameCollectionReducer(state: GameCollectionType, action: ActionType): GameCollectionType {
    switch (action.type) {
        case Actions.SWIPE_LEFT:
            return action.gameId !== undefined ? swipeGameLeftReducer(state, action.gameId) : deepClone(state) as GameCollectionType;
        case Actions.SWIPE_RIGHT:
            return action.gameId !== undefined ? swipeGameRightReducer(state, action.gameId) : deepClone(state) as GameCollectionType;
        case Actions.SET_SEARCHING_GAME_TITLE:
            return action.newSearchingGameTitle !== undefined ? setSearchingGameTitleReducer(state, action.newSearchingGameTitle) : deepClone(state) as GameCollectionType;
        case Actions.FIND_CURRENT_GAME:
            return action.newSearchingGameTitle !== undefined ? findCurrentGameReducer(state, action.newSearchingGameTitle) : deepClone(state) as GameCollectionType;
        default:
            return deepClone(state) as GameCollectionType
    }
}

export {gameCollectionReducer}
