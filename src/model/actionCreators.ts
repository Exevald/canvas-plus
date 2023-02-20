import {Actions} from "./types/types";

// CR Посмотреть можно ли указать тип возвращаемого значения и имеет ли это смысл
function swipeGameLeft(gameId: string) {
    return {
        type: Actions.SWIPE_LEFT,
        gameId: gameId,
        // CR можно не указывать поле, если название совпадает с названием аттрибута
    }
}

function swipeGameRight(gameId: string) {
    return {
        type: Actions.SWIPE_RIGHT,
        gameId: gameId,
    }
}

function setLike() {
    return {
        type: 'LIKE'
    }
}

function setCurrentSeason(newSeason: string) {
    return {
        type: Actions.SET_CURRENT_SEASON,
        newSeason: newSeason,
    }
}

function setSearchingGameTitle(newSearchingGameTitle: string) {
    return {
        type: Actions.SET_SEARCHING_GAME_TITLE,
        newSearchingGameTitle: newSearchingGameTitle,
    }
}

function findCurrentGame(newSearchingGameTitle: string) {
    return {
        type: Actions.FIND_CURRENT_GAME,
        newSearchingGameTitle: newSearchingGameTitle,
    }
}

// CR Разнести по строкам
export {swipeGameRight, swipeGameLeft, setLike, setCurrentSeason, setSearchingGameTitle, findCurrentGame}