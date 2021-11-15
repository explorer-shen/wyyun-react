import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RankingListWrapper } from './style'
import SYQRecommendHeader from '@/components/hot-recommend-header'
import bgk from '@/assets/img/recommend-top-bg.png'
import { getTopLists } from '../../store/actionCreate'
import RecommendList from '@/components/recommend-list'

interface iState {
  recommend: any
}
export default memo(function SYQRankingList() {
  const dispatch = useDispatch()
  const rankingListNew = useSelector((state: iState) => state.recommend.rankingListNew)
  const rankingListHot = useSelector((state: iState) => state.recommend.rankingListHot)
  const rankingListOrigin = useSelector((state: iState) => state.recommend.rankingListOrigin)
  useEffect(() => {
    dispatch(getTopLists(0))
    dispatch(getTopLists(2))
    dispatch(getTopLists(3))
  }, [dispatch])
  return (
    <RankingListWrapper>
      <div>
        <SYQRecommendHeader title="榜单" moreLink="/discover/ranking"></SYQRecommendHeader>
      </div>
      <div className="content">
        <div className="content-img">
          <img src={bgk} alt="背景图片"></img>
        </div>
        <div className="show-content">
          <RecommendList playList={rankingListNew}></RecommendList>
          <RecommendList playList={rankingListHot}></RecommendList>
          <RecommendList playList={rankingListOrigin}></RecommendList>
        </div>
      </div>
    </RankingListWrapper>
  )
})
