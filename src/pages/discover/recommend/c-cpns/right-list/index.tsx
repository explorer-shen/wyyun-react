import React, { memo, useEffect } from 'react'

import { RightListWrapper } from './style'
import { getArtistLists } from '../../store/actionCreate'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'

interface iState {
  recommend: any
}
export default memo(function SYQRightList() {
  const dispatch = useDispatch()
  const rightListData = useSelector((state: iState) => state.recommend.rightListData)
  console.log(rightListData)
  useEffect(() => {
    dispatch(getArtistLists())
  }, [dispatch])
  return (
    <RightListWrapper>
      <div className="top-img sprite_02">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href="/#" className="sprite_02 top-button">
          用户登录
        </a>
      </div>
      <div className="singer">
        <div className="singer-header">
          <div className="singer-info">入驻歌手</div>
          <div className="chrek-info">查看全部&gt;</div>
        </div>
        <div className="singer-content">
          {rightListData[0] &&
            rightListData.map((item: any, index: number) => {
              return (
                <div className="singer-content-item">
                  <img src={item.picUrl} alt="图片"></img>
                  <span className="singer-content-name">{item.name}</span>
                </div>
              )
            })}
          <Button className="button">申请成为网易音乐人</Button>
        </div>
      </div>
    </RightListWrapper>
  )
})
