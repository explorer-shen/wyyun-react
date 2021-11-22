import React from 'react'

import { SYQRankingListItemWrapper } from './style'

interface iprops {
  playcounts: number
  songs: number
}
const SYQrankingListHeader: React.FC<iprops> = (props) => {
  const { playcounts, songs } = props
  return (
    <SYQRankingListItemWrapper>
      <div>
        <span className="title">歌曲列表</span>
        <span className="songs">{`${songs}首歌`}</span>
      </div>
      <div className="right">
        播放：<span className="playcounts">{playcounts}</span>次
      </div>
    </SYQRankingListItemWrapper>
  )
}
export default SYQrankingListHeader
