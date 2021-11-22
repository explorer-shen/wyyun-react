import { combineReducers } from 'redux'

import recommendReducer from '@/pages/discover/recommend/store'
import rankingReducer from '@/pages/discover/ranking/store'

export const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer
})
