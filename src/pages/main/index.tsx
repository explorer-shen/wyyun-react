import { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import SYQAppHeader from '@/components/app-header'
import routes from '@/router'

export default memo(function SYQMain() {
  return (
    <HashRouter>
      <SYQAppHeader />
      <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense>
    </HashRouter>
  )
})
