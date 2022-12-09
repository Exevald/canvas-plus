import {legacy_createStore as createStore} from 'redux'
import {EditorType} from "../core/types/types";
import snake from "../view/images/season-2021/snake.png"

import {editorReducer} from "./entity/editor";
import {gameReducer} from "./entity/game";
import {gameCollectionReducer} from "./entity/gameCollection";

let initialState: EditorType = {
    gameCollection: {
        games: [
            {
                id: 0,
                imageSrc: snake,
                author: 'Долгирев Алексей',
                title: 'Creado Snake',
                info: '',
                season: "2021",
                countOfLikes: 1
            },
            {
                id: 1,
                imageSrc: snake,
                author: 'Красильников Богдан',
                title: 'Freedomcactus',
                info: '',
                season: "2021",
                countOfLikes: 0
            },
            {
                id: 2,
                imageSrc: snake,
                author: 'Калинин Константин',
                title: 'Helltaker',
                info: '',
                season: "2022",
                countOfLikes: 0
            }
        ],
        selectedGameId: 0
    }
}

type ActionType = {
    type: string,
    addGame?: string,
    setLike?: string,
    swipeLeft?: string,
    swipeRight?: string,
    gameId?: number,
    gameTitle?: string
}

function mainReducer(state: EditorType, action: ActionType) {
    const newState: EditorType = editorReducer(state, action);
    newState.gameCollection = gameCollectionReducer(newState.gameCollection, action)
    let selectedGameState = newState.gameCollection.games[newState.gameCollection.selectedGameId]
    gameReducer(selectedGameState, action)
    return newState;
}

// @ts-ignore
let store = createStore(mainReducer, initialState);

export type AppDispatch = typeof store.dispatch

export {initialState, store}
export type {ActionType}