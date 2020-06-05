import { combineReducers } from 'redux'

import entriesReducer from './entries'
import entryReducer from './entry'

const rootReducer = combineReducers({
  entries: entriesReducer,
  entry: entryReducer,
})

export default rootReducer
