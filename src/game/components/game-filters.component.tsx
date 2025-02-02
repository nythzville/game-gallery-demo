
import { GamesFilter, PLATFORM_FILTER, SORT_FILTER } from "../games.constants"
import { updateFilter } from './../games.slice'
import { useAppSelector, useAppDispatch } from '../games.hooks'

export const GameFilterComponent = () => {
    const dispatch = useAppDispatch()
    const gameFilter = useAppSelector((state) => state.games)
    const { platform, category, sortBy } = gameFilter

    const onFilter = (filter: GamesFilter) => {
        dispatch(updateFilter(filter))
    }

    return (
        <div className="game-filters-container">
            <div>
                Filter by Platform
                <select onChange={(e) => onFilter({...gameFilter, platform: e.target.value})} value={platform}>
                    {PLATFORM_FILTER.map((platform => {
                        return (<option value={platform} key={platform}>{platform}</option>)
                    }))}
                </select>
            </div>
            <div>
                Filter by Category
                <select onChange={(e) => onFilter({...gameFilter, category: e.target.value})} value={category}>
                    <option value="pc">PC</option>
                    <option value="browser">Browser</option>
                </select>
            </div>
            <div>
                Sort By
                <select onChange={(e) => onFilter({...gameFilter, sortBy: e.target.value})} value={sortBy}>
                    {SORT_FILTER.map(order => {
                        return (<option value={order} key={order}>{order}</option>)
                    })}
                </select>
            </div>
        </div>
    )
}