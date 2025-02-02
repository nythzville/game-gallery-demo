import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { apiService, utilService } from '../common/services'
import { BASE_FILTER, IGame, IGameDetails, GamesFilter } from './games.constants'

import type { RootState, AppDispatch } from '../store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useGames = () => {
  const { gameId } = useParams<{ gameId: string }>()
  const [games, setGames] = useState<IGame[]>([]);
  const [game, setGame] = useState<IGameDetails| null>(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>()
  const gameFilter = useAppSelector((state) => state.games)

  const fetchGames = async (filter?: GamesFilter) => {
    const query =  utilService.objectToQueryString(filter ? filter : BASE_FILTER)

    try {
      setIsLoading(true)
      const gameList = await apiService.get({ endpoint: 'games' + (query ? `?${query}` : '') }) as IGame[];
      setGames(gameList)
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      setError(error as Error)
    }
  }

  const getGameByGameId = async (gameId: string) => {
    try {
      setIsLoading(true)
      const game = await apiService.get({ endpoint: `games/${gameId}` }) as IGameDetails;
      setIsLoading(false)
      setGame(game)
    } catch (error) {
      setIsLoading(false)
      setError(error as Error)
    }
  }

  useEffect(() => {
    fetchGames(gameFilter)
  }, [gameFilter])

  useEffect(() => {
    if (gameId) {
      getGameByGameId(gameId)
    }
  }, [gameId])

  return { games, game, fetchGames, getGameByGameId, isLoading, error }
}