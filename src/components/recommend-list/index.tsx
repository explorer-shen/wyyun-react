import React from 'react'

import { RecommendListHeaderWrapper } from './style'

interface iprops {
  playList: any
}

const RecommendListHeader: React.FC<iprops> = (props) => {
  const { playList } = props
  const showContentList = (item: any, index: number) => {
    if (index < 3) {
      return (
        <React.Fragment>
          <span className="list-no first">{index + 1}</span>
          <span className="list-name">{item.name}</span>
        </React.Fragment>
      )
    } else
      return (
        <React.Fragment>
          <span className="list-no">{index + 1}</span>
          <span className="list-name">{item.name}</span>
        </React.Fragment>
      )
  }
  return (
    <RecommendListHeaderWrapper>
      <div className="header">
        <img src={playList.coverImgUrl} alt="图片"></img>
        <div className="header-name">{playList.name}</div>
        <div className="sprite_02 play-icon icon"></div>
        <div className="sprite_02 collect-icon icon"></div>
      </div>
      <div className="content-list">
        {playList.tracks &&
          playList.tracks.slice(0, 10).map((item: any, index: number) => {
            return (
              <div key={item.name} className="list-text">
                {showContentList(item, index)}
                <div className="hover-div">
                  <i className="hover-play hover-icon sprite_02"></i>
                  <i className="hover-add hover-icon sprite_icon2"></i>
                  <i className="hover-collect hover-icon sprite_02"></i>
                </div>
              </div>
            )
          })}
        <div className="cherk-all">查看全部&gt;</div>
      </div>
    </RecommendListHeaderWrapper>
  )
}
export default RecommendListHeader
