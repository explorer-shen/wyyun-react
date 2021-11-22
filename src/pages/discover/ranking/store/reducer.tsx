import Type from './constants'

const defaultState={
    TopList:[],
    RankingList:{}
}

function reducer(state=defaultState,action:any){
    switch (action.type) {
        case Type.CHANGE_GET_TOP_LIST:
            return {...state,TopList:action.TopList}
        case Type.CHANGE_RANKING_LIST:
            return {...state,RankingList:action.RankingList}
        default:
            return state
    }

}
export default reducer


