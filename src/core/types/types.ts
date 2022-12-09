type EditorType = {
    gameCollection: GameCollectionType
}

type CardType = {
    viewStyle: 'seasonCard' | 'gameCard',
    text: string,
    imageSrc?: string,
}

type GameCollectionType = {
    games: Array<GameType>
    selectedGameId: number
}

type GameType = {
    id: number,
    season: string,
    imageSrc: string,
    author: string,
    title: string,
    info?: string,
    countOfLikes: number,
}

type SearchType = {
    input?: string
}

export type {CardType, GameType, EditorType, GameCollectionType, SearchType}