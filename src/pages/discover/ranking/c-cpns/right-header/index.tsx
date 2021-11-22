import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

import { SYQRightHeaderWrapper } from './style'

interface iState {
  ranking: any
}
interface iprops {
  updateFrequency: string
}
const SYQRightHeader: React.FC<iprops> = (props) => {
  const { updateFrequency } = props
  const RankingListData = useSelector((state: iState) => state.ranking.RankingList)
  console.log(RankingListData, 'RankingListData')

  return (
    <SYQRightHeaderWrapper>
      <div className="left-img">
        <img src={RankingListData.coverImgUrl} alt="图片" className="cover-img"></img>
      </div>
      <div className="right-content">
        <div className="name">{RankingListData.name}</div>
        <div className="content-bottom">
          <i className="sprite_icon2 icon"></i>
          <span className="upData">最近更新:</span>
          <span className="time">{moment(RankingListData.updateTime).format('MM月DD日')}</span>
          <span className="upData-e">{`(${updateFrequency})`}</span>
        </div>
        <div className="buttom">
          <div className="sprite_button button1">
            <p className="button-text">播放</p>
          </div>
          <div className="sprite_button button2"></div>
          <div className="sprite_button button3">
            <span className="button3-text">{`(${RankingListData.subscribedCount})`}</span>
          </div>
          <div className="sprite_button button_3"></div>
          <div className="sprite_button button4">
            <span className="button4-text">{`(${RankingListData.shareCount})`}</span>
          </div>
          <div className="sprite_button button_4"></div>
          <div className="sprite_button button5">
            <span className="button5-text">下载</span>
          </div>
          <div className="sprite_button button_5"></div>
          <div className="sprite_button button6">
            <span className="button6-text">{`(${RankingListData.commentCount})`}</span>
          </div>
          <div className="sprite_button button_6"></div>
        </div>
      </div>
    </SYQRightHeaderWrapper>
  )
}
export default SYQRightHeader
