
export interface IGame {
    id: number
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
    platform: PLATFORM | null
    category: CATEGORY | null
    sortBy: SORT | null
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

export type SelectOption = {
    readonly value: string
    readonly label: string
}

export const PLATFORM_OPTIONS = [
    { value: 'pc', label: 'PC' },
    { value: 'browser', label: 'Browser' }
]
export const PLATFORM_NAMES = ['pc', 'browser']

export const CATEGORY_NAMES = [
    'mmorpg',
    'rpg',
    'action',
    'adventure',
    'shooter',
    'strategy',
    'moba',
    'racing', 
    'sports'
]
export const CATEGORY_OPTIONS: SelectOption[] = [
    {value: 'mmorpg', label: 'MMORPG'},
    {value: 'rpg', label: 'RPG'},    
    {value: 'action', label: 'Action'},
    {value: 'adventure', label: 'Adventure'},    
    {value: 'shooter', label: 'Shooter'},
    {value: 'strategy', label: 'Strategy'},
    {value: 'moba', label: 'MOBA'},
    {value: 'racing', label: 'Racing'},
    {value: 'sports', label: 'Sports'},
]

export const SORT_OPTIONS = [
    { value: 'release-date', label: 'Release Date' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'relevance', label: 'Relevance' }
]
export const SORT_NAMES = ['release-date', 'alphabetical', 'relevance']

export type CATEGORY = (typeof CATEGORY_NAMES)[number]
export type PLATFORM = (typeof PLATFORM_NAMES)[number]
export type SORT = (typeof SORT_NAMES)[number]


export const BASE_FILTER: GamesFilter = {
    platform: 'browser',
    category: 'mmorpg',
    sortBy: 'release-date'
}
