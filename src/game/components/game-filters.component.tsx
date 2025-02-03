import { useMemo } from "react"

import { CATEGORY_OPTIONS, GamesFilter, PLATFORM_OPTIONS, SORT_OPTIONS } from "../games.constants"
import { updateFilter } from './../games.slice'
import { useAppSelector, useAppDispatch } from '../games.hooks'
import { GameFilterInput } from "./game-filter-input.component"

export const GameFilterComponent = () => {
    const dispatch = useAppDispatch()
    const gameFilter = useAppSelector((state) => state.games)
    const { selectedPlatform, selectedCategory, selectSortBy } = useMemo(() => {

        const [selectedPlatform] = PLATFORM_OPTIONS.filter(platform => platform.value === gameFilter.platform)
        const [selectedCategory] = CATEGORY_OPTIONS.filter(category => category.value === gameFilter.category)
        const [selectSortBy] = SORT_OPTIONS.filter(sortBy => sortBy.value === gameFilter.sortBy)
    
        return {
            selectedPlatform,
            selectedCategory,
            selectSortBy
        }
    }, [gameFilter])


    const onFilter = (filter: GamesFilter) => {
        dispatch(updateFilter(filter))
    }

    return (
        <div className="game-filters-container">
            <div>
                Filter by Platform
                <GameFilterInput
                    name="platform"
                    isSearchable={false}
                    selectedValue={selectedPlatform}
                    options={PLATFORM_OPTIONS}
                    onChange={(value) => {
                        if (!value) return
                        onFilter({...gameFilter, platform: value})
                    }}
                />
            </div>
            <div>
                Filter by Category
                <GameFilterInput
                    name="category"
                    isSearchable={true}
                    selectedValue={selectedCategory}
                    options={CATEGORY_OPTIONS}
                    onChange={(value) => {
                        if (!value) return
                        onFilter({...gameFilter, category: value})
                    }}
                />
            </div>
            <div>
                Sort By
                <GameFilterInput
                    name="sortBy"
                    isSearchable={false}
                    selectedValue={selectSortBy}
                    options={SORT_OPTIONS}
                    onChange={(value) => {
                        if (!value) return
                        onFilter({...gameFilter, sortBy: value})
                    }}
                />
            </div>
        </div>
    )
}