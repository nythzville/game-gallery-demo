import { IGame } from '../games.constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
interface SearchProps {
  games: IGame[]
  setGames: (games: IGame[]) => void
}

export const GameSearch = ({ games, setGames }: SearchProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase()
    const filteredGames = games.filter((game) => game.title.toLowerCase().includes(query))
    setGames(filteredGames)
  }

  return (
    <div className="game-search-container">
      <FontAwesomeIcon icon={faSearch} size="lg" className="search-icon" height={16}/>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search by Name"
        className="game-search"
      />
    </div>
  )
}
