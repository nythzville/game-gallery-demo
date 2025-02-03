import { useEffect, useState } from 'react'
import { Loader, Page } from '../common/components'
import { GameCard } from '../game/components/game-card.component'
import { useGames } from '../game/games.hooks'
import { GameFilterComponent, GameSearch, IGame } from '../game'

/**
 * The Home Page component renders the list of games,
 * a search bar to filter the games, and a filters component
 * to filter the games by category and platform.
 */
export const HomePage = () => {
  /**
   * The initial list of games
   */
  const { games, isLoading } = useGames()
  /**
   * The filtered list of games
   */
  const [ filteredGames, setFilteredGames ] = useState<IGame[]>(games)

  /**
   * Renders the list of games
   * @param {IGame[]} filteredGames The filtered list of games
   */
  const renderGames = (filteredGames: IGame[]) => {
    if (isLoading || !games) {
      return <Loader />
    }

    if (filteredGames.length === 0) {
      return <div>No games found</div>
    }

    return (
      <div className='game-gallery-container'>
        {filteredGames.map((game) => {
          return <GameCard key={game.id} game={game} />
        })}
      </div>
    )
  }

  /**
   * Updates the filtered list of games when the list of games changes
   */
  useEffect(() => {
    setFilteredGames(games)
  }, [games])

  return (
    <Page>
      <h1>Find & track the best free-to-play games!</h1>
      <p>Search for what to play next!</p>
      <div className="row">
        <GameSearch games={games} setGames={setFilteredGames} />
      </div>
      <GameFilterComponent />
      {renderGames(filteredGames)}
    </Page>
  )
}
