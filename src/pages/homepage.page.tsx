import { useEffect, useState } from 'react'
import { Page } from '../common/components'
import { GameCard } from '../game/components/game-card.component'
import { useGames } from '../game/games.hooks'
import { BASE_FILTER, GamesFilter, GameFilterComponent, IGame } from '../game'

export const HomePage = () => {
  const { games, fetchGames, isLoading } = useGames()
  const [ filter, setFilter ] = useState<GamesFilter>(BASE_FILTER)

  useEffect(() => {;(async () => {
    await fetchGames(filter)
  })}), [filter]

  const renderGames = (games: IGame[]) => {
    if (isLoading === true) {
      return <div>Loading...</div>
    }

    if (games.length === 0) {
      return <div>No games found</div>
    }
    return (
      <div className='game-gallery-container'>
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />
        })}
      </div>
    )
  }

  return (
    <Page>
      <h1>Find & track the best free-to-play games!</h1>
      <GameFilterComponent gameFilter={filter} setFilter={setFilter} />
      {renderGames(games)}
    </Page>
  )
}