import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import SYQRecommendHeader from '@/components/hot-recommend-header'
import { SYQHotRecommendWrapper } from './style'
import { getHotRecommend } from '../../store/actionCreate'
import HotRecommendItem from '@/components/hot-recommend-item'

interface istate {
  recommend: any
}

export default memo(function SYQHotRecommend() {
  const history = useHistory()
  const dispatch = useDispatch()
  const hotRecommend = useSelector((state: istate) => state.recommend.hotRecommend, shallowEqual)

  const clickItem = (item: string) => {
    history.push(`/discover/songs/?cat=${item}`)
  }
  useEffect(() => {
    async function foo() {
      dispatch(await getHotRecommend())
    }
    foo()
  }, [dispatch])
  return (
    <SYQHotRecommendWrapper>
      <div>
        <SYQRecommendHeader
          title="热门推荐"
          titleKey={['华语', '流行', '摇滚', '民谣', '电子']}
          moreLink="/discover/songs"
          clickItem={clickItem}
        ></SYQRecommendHeader>
        <div className="content-item">
          {hotRecommend &&
            hotRecommend.slice(0, 8).map((item: any) => {
              return (
                <HotRecommendItem
                  key={item.picUrl}
                  imgUrl={item.picUrl}
                  size={140}
                  count={item.playCount}
                  text={item.name}
                ></HotRecommendItem>
              )
            })}
        </div>
      </div>
    </SYQHotRecommendWrapper>
  )
})
