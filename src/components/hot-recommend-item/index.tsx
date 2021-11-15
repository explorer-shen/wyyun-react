import React from 'react'

import { HotrecommendItemWrapper } from './style'
import { handlePlayCount } from '@/utils/format-utils'
interface iprops {
  imgUrl: string
  size: number
  count: number
  text: string
}

const HotRecommendItem: React.FC<iprops> = (props) => {
  const { imgUrl, size, count, text } = props
  return (
    <HotrecommendItemWrapper size={size}>
      <div>
        <img src={imgUrl} alt="图片"></img>
        <div className="cover sprite_covor"></div>
      </div>

      <div className="bottom-shadow">
        <i className="sprite_icon icon"></i>
        <span className="count">{handlePlayCount(count)}</span>
        <i className="sprite_icon icon-play"></i>
        <span className="text">{text}</span>
      </div>
    </HotrecommendItemWrapper>
  )
}
export default HotRecommendItem
