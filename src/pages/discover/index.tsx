import React, { Fragment } from 'react'

import { DiscoverWrapper } from './style'
import { dicoverMenu, iheaderLinks } from '@/services/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

interface iprops {
  route?: any
}
const SYQdiscover: React.FC<iprops> = (props) => {
  const showItem = (item: iheaderLinks, index: number) => {
    return <NavLink to={item.link}>{item.title}</NavLink>
  }
  const { route } = props
  return (
    <Fragment>
      <DiscoverWrapper>
        <ul className="wrap-v1 list">
          {dicoverMenu.map((item: iheaderLinks, index: number) => {
            return (
              <li className="item" key={item.link}>
                {showItem(item, index)}
              </li>
            )
          })}
        </ul>
      </DiscoverWrapper>
      {renderRoutes(route.routes)}
    </Fragment>
  )
}
export default SYQdiscover
