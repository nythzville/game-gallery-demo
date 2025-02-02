
export interface IGame {
    id: string
    title: string
    platform: string
    thumbnail: string
    genre: string
    publisher: string
    developer: string
    releaseDate: string
    shortDescription: string
}

export type GamesFilter = {
    platform: PLATFORM
    category: string
    sortBy: SORT
}

export interface IScreenshot {
    id: number
    image: string
}
interface MinimumSystemRequirements {
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
}
export interface IGameDetails extends IGame {
    screenshots: IScreenshot[]
    description: string
    minimumSystemRequirements: MinimumSystemRequirements
    status: string
}


export const SORT_FILTER = ['release-date', 'alphabetical', 'relevance']
export type SORT = (typeof SORT_FILTER)[number]
export const PLATFORM_FILTER = ['pc', 'browser']
export type PLATFORM = (typeof PLATFORM_FILTER)[number]

export const BASE_FILTER: GamesFilter = {
    platform: 'browser',
    category: 'mmorpg',
    sortBy: 'release-date'
}
