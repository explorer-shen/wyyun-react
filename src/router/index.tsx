import React from 'react'
import { Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

const SYQdiscover = React.lazy(() => import('../pages/discover'))

const SYQrecommend = React.lazy(() => import('../pages/discover/recommend'))

const SYQalbum = React.lazy(() => import('../pages/discover/album'))

const SYQartist = React.lazy(() => import('../pages/discover/artist'))

const SYQdjradio = React.lazy(() => import('../pages/discover/djradio'))

const SYQranking = React.lazy(() => import('../pages/discover/ranking'))

const SYQsongs = React.lazy(() => import('../pages/discover/songs'))

const SYQfriend = React.lazy(() => import('../pages/friend'))

const SYQmy = React.lazy(() => import('../pages/my'))

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: SYQdiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: SYQrecommend
      },
      {
        path: '/discover/songs',
        component: SYQsongs
      },
      {
        path: '/discover/ranking',
        component: SYQranking
      },
      {
        path: '/discover/album',
        component: SYQalbum
      },
      {
        path: '/discover/artist',
        component: SYQartist
      },
      {
        path: '/discover/djradio',
        component: SYQdjradio
      }
    ]
  },
  {
    path: '/friend',
    component: SYQfriend
  },
  {
    path: '/mine',
    component: SYQmy
  }
]
// eslint-disable-next-line
export default routes
