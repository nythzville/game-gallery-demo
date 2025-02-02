import { Card } from "../../common/components"
import { IGame } from "../games.constants"

interface GameCardProps {
    game: IGame
}
export const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card className="game-card">
            <h2>{game.title}</h2>
            <div>{game.id}</div>
        </Card>
    )
}