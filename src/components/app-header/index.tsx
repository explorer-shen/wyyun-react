import { NavLink } from 'react-router-dom'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { memo, useState } from 'react'

import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks, iheaderLinks } from '@/services/local-data'

export default memo(function SYQAppHeader() {
  const [placeholderName, setplaceholderName] = useState('音乐/视频/电台/用户')
  const showItem = (item: iheaderLinks, index: Number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      if (index === 5) {
        return (
          <a href={item.link}>
            {' '}
            {item.title}
            <i className="sprite_01 hot-icon"></i>
          </a>
        )
      } else return <a href={item.link}> {item.title}</a>
    }
  }
  const isShowText = () => {
    setplaceholderName('音乐/视频/电台/用户')
  }
  const notShowText = () => {
    setplaceholderName('')
  }
  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="sprite_01 logo" href="#/">
            网易云音乐
          </a>
          <div className="titleList">
            {headerLinks.map((item, index) => {
              return (
                <div className="listItem" key={item.title}>
                  {showItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder={placeholderName}
            prefix={<SearchOutlined />}
            onBlur={isShowText}
            onFocus={notShowText}
          ></Input>
          <Button shape="round" className="center">
            创作者中心
          </Button>
          <a href="#/" className="login">登录</a>
        </HeaderRight>
      </div>
    </AppHeaderWrapper>
  )
})
