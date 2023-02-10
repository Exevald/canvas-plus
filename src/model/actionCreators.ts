import {Actions} from "../core/types/types";

function swipeGameLeft(gameId: string) {
    return {
        type: Actions.SWIPE_LEFT,
        gameId: gameId,
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

export {swipeGameRight, swipeGameLeft, setLike, setCurrentSeason}