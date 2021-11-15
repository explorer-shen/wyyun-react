import { Fragment, memo } from 'react'

import SYQTopBanner from './c-cpns/top-banner'
import SYQHotRecommend from './c-cpns/hot-recommend'
import SYQNewDisc from './c-cpns/new-disc'
import SYQRankingList from './c-cpns/ranking-list'
import SYQRightList from './c-cpns/right-list'
import SYQHotPlayer from './c-cpns/hot-player'
import { RecommendContentWrapper, RecommendContentLeft, RecommendContentRight } from './style'

export default memo(function SYQRecommend() {
  return (
    <Fragment>
      <SYQTopBanner />
      <RecommendContentWrapper>
        <RecommendContentLeft>
          <SYQHotRecommend />
          <SYQNewDisc />
          <SYQRankingList />
        </RecommendContentLeft>
        <RecommendContentRight>
          <SYQRightList />
          <SYQHotPlayer />
        </RecommendContentRight>
      </RecommendContentWrapper>
    </Fragment>
  )
})
