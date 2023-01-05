function addGame() {
    return {
        type: 'ADD_GAME'
    }
}

function swipeGameLeft(gameId: number) {
    return {
        type: 'SWIPE_LEFT',
        gameId
    }
}

function swipeGameRight(gameId: number) {
    return {
        type: 'SWIPE_RIGHT',
        gameId
    }
}

function setLike() {
    return {
        type: 'LIKE',
    }
}

export {addGame, swipeGameRight, swipeGameLeft, setLike}