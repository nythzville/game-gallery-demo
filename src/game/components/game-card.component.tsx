import { Link } from "react-router"
import { Card, LazyImg } from "../../common/components"
import { IGame } from "../games.constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface GameCardProps {
    game: IGame
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="game-card-container">
      <Card className="game-card">
        <h2>{game.title}</h2>
        <div className="game-card-content">
          <LazyImg src={game.thumbnail} alt="Game thumbnail" className="game-card-thumbnail"/>
          <div className="game-card-description">
            <p>{game.shortDescription}</p>
            <Link to={`/games/${game.id}`} className="read-more-link">
              View more
              <FontAwesomeIcon icon={faChevronRight} size="sm" className="read-more-icon"/>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}