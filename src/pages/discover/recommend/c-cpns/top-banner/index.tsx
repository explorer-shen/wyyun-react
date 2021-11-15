import React, { memo, useEffect, useState, useCallback, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { TopBannerWrapper } from './style'
import { getBanner } from '../../store/actionCreate'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CarouselRef } from 'antd/lib/carousel'

interface iState {
  recommend: any
}

export default memo(function SYQTopBanner() {
  const dispatch = useDispatch()
  const [currentIndex, setcurrentIndex] = useState(0)
  const bannersRef = useRef<CarouselRef>(null)
  const showBanners = () => {
    return banners.map((item: any, index: number) => {
      return (
        <div key={item.imageUrl}>
          <img src={item.imageUrl} alt="轮播图"></img>
        </div>
      )
    })
  }
  const onChange = useCallback((form: number, to: number) => {
    setTimeout(() => {
      setcurrentIndex(to)
    }, 100)
  }, [])
  const banners = useSelector((state: iState) => state.recommend.banners, shallowEqual)
  const bgImage = banners
    ? banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20'
    : []
  useEffect(() => {
    async function foo() {
      await dispatch(getBanner())
    }
    foo()
  }, [dispatch])

  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className="left-carousel">
        <Carousel effect="fade" autoplay beforeChange={onChange} ref={bannersRef}>
          {showBanners()}
        </Carousel>
        <div className="tabControl">
          <LeftOutlined className="left-control" onClick={(e) => bannersRef.current?.prev()} />
          <RightOutlined className="right-control" onClick={(e) => bannersRef.current?.next()} />
        </div>
      </div>
      <div className="right-download">
        <a href="https://music.163.com/#/download" className="button-img">
          {' '}
        </a>
        <span className="download-text">PC 安卓 iPhone WP iPad Mac 六大客户端</span>
      </div>
    </TopBannerWrapper>
  )
})
