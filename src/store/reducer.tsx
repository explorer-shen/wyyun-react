import { combineReducers } from 'redux'

import recommendReducer from '@/pages/discover/recommend/store'

export const reducer = combineReducers({
  recommend: recommendReducer
})
