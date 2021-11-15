import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HotRecommendHWrapper } from './style'

export interface iprops {
  title: string
  titleKey?: string[]
  moreLink: string
  clickItem?: any
}

const SYQRecommendHeader: React.FC<iprops> = (props) => {
  const { title, titleKey, moreLink, clickItem } = props
  const history = useHistory()
  const showline = (index: number) => {
    if (index !== 4) {
      return <span>|</span>
    }
  }
  const clickTitle = () => {
    history.push(moreLink)
  }
  return (
    <HotRecommendHWrapper className="sprite_02">
      <div className="left">
        <h2 className="title" onClick={(e) => clickTitle()}>
          {title}
        </h2>
        <div className="items">
          {titleKey?.map((item, index) => {
            return (
              <div key={item}>
                <span className="item" onClick={(e) => clickItem(item)}>
                  {item}
                </span>
                {showline(index)}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="moreButton">
          更多
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </HotRecommendHWrapper>
  )
}

export default SYQRecommendHeader
