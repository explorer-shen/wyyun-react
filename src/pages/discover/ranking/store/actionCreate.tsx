import { getTopList, getRankingList } from '@/services/ranking'
import Type from './constants'

function getTopListsAction(res: any) {
  return {
    type: Type.CHANGE_GET_TOP_LIST,
    TopList: res.data.list
  }
}
function getRankingListAction(res: any) {
  return {
    type: Type.CHANGE_RANKING_LIST,
    RankingList: res.data.playlist
  }
}

export function getTopLists() {
  return (dispatch: any) => {
    getTopList().then((res) => {
      dispatch(getTopListsAction(res))
    })
  }
}

export function getRankingLists(id: number) {
  return (dispatch: any) => {
    getRankingList(id).then((res) => {
      console.log(res)
      dispatch(getRankingListAction(res))
    })
  }
}
