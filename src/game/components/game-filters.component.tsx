
import { GamesFilter, PLATFORM_FILTER, SORT_FILTER } from "../games.constants"
interface GameFiltersProps {
    gameFilter: GamesFilter
    setFilter: (gameFilter: GamesFilter) => void
}


export const GameFilterComponent = ({ gameFilter, setFilter }: GameFiltersProps) => {
    const { platform, category, sortBy } = gameFilter

    return (
        <div className="game-filters-container">
            <div>
                Filter by Platform
                <select onChange={(e) => setFilter({...gameFilter, platform: e.target.value})} value={platform}>
                    {PLATFORM_FILTER.map((platform => {
                        return (<option value={platform} key={platform}>{platform}</option>)
                    }))}
                </select>
            </div>
            <div>
                Filter by Category
                <select onChange={(e) => setFilter({...gameFilter, category: e.target.value})} value={category}>
                    <option value="pc">PC</option>
                    <option value="browser">Browser</option>
                </select>
            </div>
            <div>
                Sort By
                <select onChange={(e) => setFilter({...gameFilter, sortBy: e.target.value})} value={sortBy}>
                    <option value="release-date">Release Date</option>
                    {SORT_FILTER.map(order => {
                        return (<option value={order} key={order}>{order}</option>)
                    })}
                </select>
            </div>
        </div>
    )
}