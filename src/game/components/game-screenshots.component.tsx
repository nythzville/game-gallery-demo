
import { Card, LazyImg } from "../../common/components"
import { IScreenshot } from "../games.constants"

interface GameScreenshotsCardProps {
  screenshots: IScreenshot[]
}

export const GameScreenshotsCard = ({ screenshots }: GameScreenshotsCardProps) => {
  return (
    <div className="game-screenshot-container">
      {
        screenshots.map((screenshot) => (
          <Card key={screenshot.id} className="game-screenshot-card">
            <LazyImg
              src={screenshot.image}
              alt="Game screenshot"
              className="game-screenshot"
              style={{ width: '100%', borderRadius: '5px' }}
            />
          </Card>
        ))
      }
    </div>
  )
}