import  { useEffect, useState } from 'react'
import { apiService, utilService } from '../common/services';
import { BASE_FILTER, IGame, GamesFilter } from './games.constants';


export const useGames = () => {
    const [games, setGames] = useState<IGame[]>([]);
    // const [selectedGame, setSelectedGame] = useState<IGame | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>()

    const fetchGames = async (filter?: GamesFilter) => {
        const query =  utilService.objectToQueryString(filter ? filter : BASE_FILTER)

        try {
            setIsLoading(true);
            const gameList = await apiService.get({ endpoint: 'games' + (query ? `?${query}` : '') });
            setGames(gameList);
            setIsLoading(false);
            
        } catch (error) {
            setIsLoading(false);
            setError(error as Error)
        }
    }

    useEffect(() => {
        fetchGames()
    }, [])

    return { games, fetchGames, isLoading, error }
}