import SYQrequest from './axios'

export function getBanners() {
  return SYQrequest({
    url: '/banner'
  })
}

export function getHotRecommends() {
  return SYQrequest({
    url: '/personalized'
  })
}

export function getNewAlbum(limit: number, offset: number) {
  return SYQrequest({
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}
export function getTopList(idx: number) {
  return SYQrequest({
    url: '/top/list',
    params: {
      idx
    }
  })
}

export function getArtistList(limit:any, cat:any) {
  return SYQrequest({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}
