import SYQRequest from './axios'

export function getTopList() {
  return SYQRequest({
    url: '/toplist'
  })
}

// 获取榜单详情
export function getRankingList(id: number) {
  return SYQRequest({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
