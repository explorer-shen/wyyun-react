import React from 'react'

import { NewDiscItemWrapper } from './style'
interface iprops {
  picUrl: string
  size: number
  name: string
  artist: string
}

const SYQDiscItem: React.FC<iprops> = (props) => {
  const { picUrl, size, name, artist } = props
  return (
    <NewDiscItemWrapper size={size}>
      <div>
        <img src={picUrl} alt="图片"></img>
        <i className="icon sprite_icon"></i>
        <div className="covor sprite_covor"></div>
        <div className="name">{name}</div>
        <div className="artist">{artist}</div>
      </div>
    </NewDiscItemWrapper>
  )
}
export default SYQDiscItem
