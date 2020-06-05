import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  entry: {},
}

const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    getEntry: state => {
      state.loading = true
    },
    getEntrySuccess: (state, { payload }) => {
      state.entry = payload.entry
      state.loading = false
      state.hasErrors = false
    },
    getEntryFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getEntry, getEntrySuccess, getEntryFailure } = entrySlice.actions
export const entrySelector = state => state.entry
export default entrySlice.reducer

export function fetchEntry(id) {
  return async dispatch => {
    dispatch(getEntry())

    try {
      const response = await fetch(
        `http://localhost:3000/api/entries/${id}`
      )
      const data = await response.json()

      dispatch(getEntrySuccess(data))
    } catch (error) {
      dispatch(getEntryFailure())
    }
  }
}
