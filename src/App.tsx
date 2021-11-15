import { memo } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import SYQMain from '@/pages/main'
export default memo(function App() {
  return (
    <Provider store={store}>
      <SYQMain />
    </Provider>
  )
})
