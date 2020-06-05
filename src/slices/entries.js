import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  entries: [],
}

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    getEntries: state => {
      state.loading = true
    },
    getEntriesSuccess: (state, { payload }) => {
      state.entries = payload.entries
      state.loading = false
      state.hasErrors = false
    },
    getEntriesFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getEntries, getEntriesSuccess, getEntriesFailure } = entriesSlice.actions
export const entriesSelector = state => state.entries
export default entriesSlice.reducer

export function fetchEntries() {
  return async dispatch => {
    dispatch(getEntries())

    try {
      const response = await fetch('http://localhost:3000/api/entries')
      const data = await response.json()

      dispatch(getEntriesSuccess(data))
    } catch (error) {
      console.log(error);
      dispatch(getEntriesFailure())
    }
  }
}
