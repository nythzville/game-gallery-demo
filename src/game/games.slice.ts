import { createSlice } from '@reduxjs/toolkit'
import { BASE_FILTER, GamesFilter } from './games.constants'

const initialState: GamesFilter = BASE_FILTER

export const gameSlice = createSlice({
  name: 'game-filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state = action.payload
      return state
    }
  },
})
export const selectFilter = (state: GamesFilter) => state

export const {updateFilter} = gameSlice.actions

export const gameReducer = gameSlice.reducer
