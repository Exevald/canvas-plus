// CR Типы относятся к модели, следовательно должны находится в соответсвуйющей папке

type EditorType = {
    collections: Array<GameCollectionType>,
    currentSeason: string, // CR Это что-то типо selectedSeason? Если да, то может быть null
}

type GameCollectionType = {
    // CR лучще завести ID, тк. указанная в season строка не гаранитрует уникальности
    // (season можно переименовать в seasonName)
    games: Array<GameType>,
    selectedGameId: string, // CR может быть null
    // CR Почему selectedGameId находится в GameCollectionType? У нас может быть выбранно несколько одновременно?
    season: string,
    searchingGameTitle: string, // CR аналогично предыдущему
}

type GameType = {
    id: string,
    imageSrc: string,
    author: string,
    title: string,
    info?: string,
    countOfLikes: number,
}
// CR Это что..?
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