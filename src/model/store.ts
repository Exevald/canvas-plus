import {legacy_createStore as createStore} from 'redux'
import {EditorType, GameCollectionType, GameType} from "../core/types/types";
import snake from "../view/images/season-2021/snake.png"

import {editorReducer} from "./entity/editor";
import {gameReducer} from "./entity/game";
import {gameCollectionReducer} from "./entity/gameCollection";

let initialState: EditorType = {
    collections: [
        {
            games: [
                {
                    id: "0",
                    imageSrc: snake,
                    author: 'Долгирев Алексей',
                    title: 'Creado Snake',
                    info: '',
                    countOfLikes: 1
                },
                {
                    id: "1",
                    imageSrc: snake,
                    author: 'Красильников Богдан',
                    title: 'Freedomcactus',
                    info: '',
                    countOfLikes: 0
                },
            ],
            selectedGameId: "0",
            season: "2021",
            searchingGameTitle: "",
        },
        {
            games: [
                {
                    id: "2",
                    imageSrc: snake,
                    author: 'Калинин Константин',
                    title: 'Helltaker',
                    info: '',
                    countOfLikes: 0
                }
            ],
            selectedGameId: "2",
            season: "2022",
            searchingGameTitle: ""
        },
        {
            games: [],
            selectedGameId: "0",
            season: "2023",
            searchingGameTitle: "",
        },
    ],
    currentSeason: "2021"
}

type ActionType = {
    type: string,
    addGame?: string,
    setLike?: string,
    swipeLeft?: string,
    swipeRight?: string,
    gameId?: string,
    gameTitle?: string,
    newSeason?: string,
    newSearchingGameTitle?: string,
}

function mainReducer(state: EditorType, action: ActionType) {
    const newState: EditorType = editorReducer(state, action);
    const selectedGameCollectionIndex: number = state.collections.findIndex(collection => collection.season === state.currentSeason);
    const selectedGameCollectionState: GameCollectionType = newState.collections[selectedGameCollectionIndex];
    const selectedGameIndex: number = selectedGameCollectionState.games.findIndex(game => game.id === selectedGameCollectionState.selectedGameId);
    const selectedGameState: GameType = selectedGameCollectionState.games[selectedGameIndex];
    newState.collections.splice(selectedGameCollectionIndex, 1, gameCollectionReducer(selectedGameCollectionState, action));
    gameReducer(selectedGameState, action);
    return newState;
}

// @ts-ignore
let store = createStore(mainReducer, initialState);

export type AppDispatch = typeof store.dispatch

export {initialState, store}
export type {ActionType}