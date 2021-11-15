import Type from './constants'

interface Iaciton {
  type: string
  banners?: []
  hotRecommend?: []
  newDisc?: []
  rankingListNew?: []
  rankingListHot?: []
  rankingListOrgin?: []
  rightListData?: []
}
const defaultState = {
  banners: sessionStorage.getItem('banners') ? JSON.parse(sessionStorage.getItem('banners')!) : [],
  hotRecommend: sessionStorage.getItem('hotRecommend')
    ? JSON.parse(sessionStorage.getItem('hotRecommend')!)
    : [],
  rankingListNew: {},
  rankingListHot: {},
  rankingListOrigin: {},
  rightListData: {}
}
// eslint-disable-next-line
export default (state = defaultState, action: Iaciton) => {
  switch (action.type) {
    case Type.CHANGE_TOP_BNNAER:
      sessionStorage.setItem('banners', JSON.stringify(action.banners))
      return { ...state, banners: action.banners }
    case Type.CHANGE_HOT_RECOMMEND:
      sessionStorage.setItem('hotRecommend', JSON.stringify(action.hotRecommend))
      return { ...state, hotRecommend: action.hotRecommend }
    case Type.CHANGE_NEW_DISC:
      return { ...state, newDisc: action.newDisc }
    case Type.CHANGE_RANKING_LIST_NEW:
      return { ...state, rankingListNew: action.rankingListNew }
    case Type.CHANGE_RANKING_LIST_HOT:
      return { ...state, rankingListHot: action.rankingListHot }
    case Type.CHANGE_RANKING_LIST_ORIGIN:
      return { ...state, rankingListOrigin: action.rankingListOrgin }
    case Type.CHANGE_RIGHT_LIST:
      return { ...state, rightListData: action.rightListData }
    default:
      return state
  }
}
