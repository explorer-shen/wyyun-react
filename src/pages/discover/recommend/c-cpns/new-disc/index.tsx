import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'

import { NewDiscWrapper } from './style'
import SYQRecommendHeader from '@/components/hot-recommend-header'
import { getNewAlbums } from '../../store/actionCreate'
import SYQDiscItem from '@/components/new-disc-item'

interface istate {
  recommend: any
}
export default memo(function SYQNewDisc() {
  const dispatch = useDispatch()
  const Carouseref = useRef<CarouselRef>(null)
  const newDisc = useSelector((state: istate) => state.recommend.newDisc)
  const showNewDisc = (s: number, e: number) => {
    return (
      <div className="item">
        {newDisc &&
          newDisc.slice(s, e).map((item: any) => {
            return (
              <SYQDiscItem
                size={100}
                picUrl={item.picUrl}
                name={item.name}
                artist={item.artist.name}
                key={item.picUrl}
              ></SYQDiscItem>
            )
          })}
      </div>
    )
  }
  useEffect(() => {
    dispatch(getNewAlbums())
  }, [dispatch])
  return (
    <NewDiscWrapper>
      <div>
        <SYQRecommendHeader moreLink="/discover/album" title="新碟上架"></SYQRecommendHeader>
      </div>
      <Carousel dots={false} ref={Carouseref}>
        {showNewDisc(0, 5)}
        {showNewDisc(5, 10)}
      </Carousel>
      <i className="sprite_02 left-icon icony" onClick={(e) => Carouseref.current?.prev()}></i>
      <i className="sprite_02 right-icon icony" onClick={(e) => Carouseref.current?.next()}></i>
    </NewDiscWrapper>
  )
})
