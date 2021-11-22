import { memo, useState } from 'react'

import { SYQRankingWrapper, SYQRankingLeft, SYQRankingRight } from './style'
import SYQLeftRanking from './c-cpns/left-ranking'
import SYQRightHeader from './c-cpns/right-header'
import SYQSongList from './c-cpns/songs-list'
export default memo(function SYQRanking() {
  const [updateFrequency, setupdateFrequency] = useState('')
  const rightDataFc = (updateFrequency: string) => {
    setupdateFrequency(updateFrequency)
  }
  return (
    <SYQRankingWrapper>
      <SYQRankingLeft>
        <SYQLeftRanking rightData={rightDataFc} />
      </SYQRankingLeft>
      <SYQRankingRight>
        <SYQRightHeader updateFrequency={updateFrequency} />
        <SYQSongList />
      </SYQRankingRight>
    </SYQRankingWrapper>
  )
})
