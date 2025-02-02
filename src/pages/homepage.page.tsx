import { useEffect, useState } from 'react'
import { Page } from '../common/components'
import { GameCard } from '../game/components/game-card.component'
import { useGames } from '../game/games.hooks'
import { GameFilterComponent, GameSearch, IGame } from '../game'

export const HomePage = () => {
  const { games, isLoading } = useGames()
  const [ filteredGames, setFilteredGames ] = useState<IGame[]>(games)

  const renderGames = (filteredGames: IGame[]) => {
    if (isLoading === true) {
      return <div>Loading...</div>
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