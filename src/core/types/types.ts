type EditorType = {
    collections: Array<GameCollectionType>,
    currentSeason: string,
}

type GameCollectionType = {
    games: Array<GameType>,
    selectedGameId: string,
    season: string,
    searchingGameTitle: string,
}

type GameType = {
    id: string,
    imageSrc: string,
    author: string,
    title: string,
    info?: string,
    countOfLikes: number,
}

type SearchType = {
    input?: string
}

enum Actions {
    SET_CURRENT_SEASON = "SET_CURRENT_SEASON",
    SWIPE_LEFT = "SWIPE_LEFT",
    SWIPE_RIGHT = "SWIPE_RIGHT",
    SET_SEARCHING_GAME_TITLE = "SET_SEARCHING_GAME_TITLE",
    FIND_CURRENT_GAME = "FIND_CURRENT_GAME",
}

export type {GameType, EditorType, GameCollectionType, SearchType}
export {Actions}