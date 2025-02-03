
import { Link } from "react-router"
import { Card, LazyImg } from "../../common/components"
import { IGameDetails } from "../games.constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface GameDetailsCardProps {
  game: IGameDetails
}
/**
 * A component that renders a card for a given game's details.
 *
 * It shows the game's title, thumbnail, description and a link to go back.
 *
 * @param {{ game: IGameDetails }} props
 * @prop {IGameDetails} game The game to render.
 *
 * @example
 * <GameDetailsCard game={game} />
 */
export const GameDetailsCard = ({ game }: GameDetailsCardProps) => {
  const minimumSystemRequirements = game.minimumSystemRequirements

  const renderRequirements = () => {
    if (!minimumSystemRequirements) {
      return null
    }
    return (
      <div className="game-requirements">
        <h3>Requirements</h3>
        <p>{minimumSystemRequirements.os}</p>
        <p>{minimumSystemRequirements.processor}</p>
        <p>{minimumSystemRequirements.memory}</p>
        <p>{minimumSystemRequirements.graphics}</p>
        <p>{minimumSystemRequirements.storage}</p>
      </div>
    )
  }
  return (
    <div className="game-details-container">
      <Card className="game-details-card">
        <div className="game-card-content">
          <LazyImg src={game.thumbnail} alt="Game thumbnail" className="game-card-thumbnail"/>
          <div className="game-details">
            {renderRequirements()}
            <div className="game-description">
              <h2>{game.title}</h2>
              {game.description}
              <br />
              <Link to="/" className="read-more-link">
                <FontAwesomeIcon icon={faChevronLeft} size="sm" className="read-more-icon"/>
                Back
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}