import {
  getBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
  getArtistList
} from '@/services/recommend'

import Type from './constants'

function getBannerAciton(res: any) {
  return {
    type: Type.CHANGE_TOP_BNNAER,
    banners: res.data.banners
  }
}
function getHotRecommendAction(res: any) {
  return {
    type: Type.CHANGE_HOT_RECOMMEND,
    hotRecommend: res.data.result
  }
}
function getNewAlbumsAction(res: any) {
  return {
    type: Type.CHANGE_NEW_DISC,
    newDisc: res.data.albums
  }
}
function getTopListsNewAction(res: any) {
  return {
    type: Type.CHANGE_RANKING_LIST_NEW,
    rankingListNew: res.data.playlist
  }
}
function getTopListsHotAction(res: any) {
  return {
    type: Type.CHANGE_RANKING_LIST_HOT,
    rankingListHot: res.data.playlist
  }
}
function getTopListsOriginAction(res: any) {
  return {
    type: Type.CHANGE_RANKING_LIST_ORIGIN,
    rankingListOrgin: res.data.playlist
  }
}
function getRightListData(res: any) {
  return {
    type: Type.CHANGE_RIGHT_LIST,
    rightListData: res.data.artists
  }
}

export function getBanner() {
  return (dispatch: any) => {
    getBanners().then((res) => {
      dispatch(getBannerAciton(res))
    })
  }
}

export function getHotRecommend() {
  return (dispatch: any) => {
    getHotRecommends().then((res) => {
      dispatch(getHotRecommendAction(res))
    })
  }
}

export function getNewAlbums() {
  return (dispatch: any) => {
    getNewAlbum(10, 0).then((res) => {
      dispatch(getNewAlbumsAction(res))
    })
  }
}

export function getTopLists(id: number) {
  return (dispatch: any) => {
    getTopList(id).then((res) => {
      switch (id) {
        case 0:
          dispatch(getTopListsNewAction(res))
          break
        case 2:
          dispatch(getTopListsHotAction(res))
          break
        case 3:
          dispatch(getTopListsOriginAction(res))
          break
        default:
          break
      }
    })
  }
}
export function getArtistLists() {
  return (dispatch: any) => {
    getArtistList(5, 5001).then((res) => {
      dispatch(getRightListData(res))
    })
  }
}
