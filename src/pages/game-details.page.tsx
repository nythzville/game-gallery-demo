import { Card, Loader, Page } from '../common/components'
import { useGames, GameDetailsCard, GameScreenshotsCard } from '../game'
export const GameDetailsPage = () => {
  const { game, isLoading } = useGames()

  if (isLoading === true || !game) {
    return <Loader />
  }
  
  return (
    <Page>
      <h1>Find & track the best free-to-play games!</h1>
      <p>Search for what to play next!</p>
      <Card>
        <GameDetailsCard game={game} />
        <GameScreenshotsCard screenshots={game.screenshots} />
      </Card>
    </Page>
  )
}