import React, { memo } from 'react'

import { HotPlayerWrapper } from './style'
import { hotRadios } from '@/services/local-data'

export default memo(function SYQHotPlayer() {
  return (
    <HotPlayerWrapper>
      <div className="header">热门主播</div>
      <div className="content">
        {hotRadios.map((item: any, index: number) => {
          return (
            <div className="content-item" key={index}>
              <img src={item.picUrl} alt="图片"></img>
              <span className="name">{item.name}</span>
              <span className="position">{item.position}</span>
            </div>
          )
        })}
      </div>
    </HotPlayerWrapper>
  )
})
