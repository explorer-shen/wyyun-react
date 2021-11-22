import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LeftRankingWrapper, FratureWrapper, GlobalWrapper } from './style'
import { getTopLists, getRankingLists } from '../../store/actionCreate'
import SYQRankingLeftItem from '@/components/ranking-left-item'

interface iState {
  ranking: any
}
interface iprops {
  rightData: any
}

const SYQLeftRanking: React.FC<iprops> = (props) => {
  const { rightData } = props
  const [firstIn, setfirstIn] = useState(false)
  const dispatch = useDispatch()
  const TopList = useSelector((state: iState) => state.ranking.TopList)
  console.log(TopList)
  const showRight = (item: any, index: number) => {
    dispatch(getRankingLists(item.id))
    rightData(item.updateFrequency)
  }

  useEffect(() => {
    dispatch(getTopLists())
    if (!firstIn) {
      dispatch(getRankingLists(19723756))
      setfirstIn(true)
    }
    rightData('刚刚更新')
    // eslint-disable-next-line
  }, [dispatch, rightData])
  return (
    <LeftRankingWrapper>
      <FratureWrapper>
        <h2 className="title">云音乐特色榜</h2>
        {TopList[0] &&
          TopList.slice(0, 4).map((item: any, index: number) => {
            return (
              <div
                key={item.coverImgUrl}
                className="item-f"
                onClick={(e) => showRight(item, index)}
              >
                <SYQRankingLeftItem
                  picUrl={item.coverImgUrl}
                  name={item.name}
                  updateFrequency={item.updateFrequency}
                ></SYQRankingLeftItem>
              </div>
            )
          })}
      </FratureWrapper>
      <GlobalWrapper>
        <h2 className="title">全球媒体榜</h2>
        {TopList[0] &&
          TopList.slice(4, 34).map((item: any, index: number) => {
            return (
              <div key={item.coverImgUrl} className="item" onClick={(e) => showRight(item, index)}>
                <SYQRankingLeftItem
                  picUrl={item.coverImgUrl}
                  name={item.name}
                  updateFrequency={item.updateFrequency}
                ></SYQRankingLeftItem>
              </div>
            )
          })}
      </GlobalWrapper>
    </LeftRankingWrapper>
  )
}
export default SYQLeftRanking
