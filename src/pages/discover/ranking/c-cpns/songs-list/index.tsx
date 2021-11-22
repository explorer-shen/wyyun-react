import React, { memo } from 'react'

import { SYQSongsListWrapper } from './style'
import SYQrankingListHeader from '@/components/ranking-list-header'
import { useSelector } from 'react-redux'

interface istate {
  ranking: any
}
export default memo(function SYQSongList() {
  const RankingList = useSelector((state: istate) => state.ranking.RankingList)

  return (
    <SYQSongsListWrapper>
      <SYQrankingListHeader songs={RankingList.trackCount} playcounts={RankingList.playCount} />
      <table>
        <thead>
          <tr>
            <th className="ranking"></th>
            <th className="title">标题</th>
            <th className="duration">时长</th>
            <th className="singer">歌手</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </SYQSongsListWrapper>
  )
})
