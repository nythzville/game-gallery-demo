import { IGame } from '../game/games.constants'
export const generateMockGame = () => {
  return {
    id: Math.floor(Math.random() * 1000),
    title: 'Mock Game',
    platform: 'browser',
    thumbnail: 'https://via.placeholder.com/150',
    genre: 'MMORPG',
    publisher: 'Mock Publisher',
    developer: 'Mock Developer',
    releaseDate: '2022-01-01',
    shortDescription: 'Mock Description'
  } as IGame
}