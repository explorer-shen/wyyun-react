import React from "react";


import {RankingLeftWrapper} from './style'
interface iProps{
    picUrl:string,
    name:string,
    updateFrequency:string
}

const SYQRankingLeftItem:React.FC<iProps>=(props)=>{
    const {picUrl,name,updateFrequency}=props
    return(
     <RankingLeftWrapper>
         <img src={picUrl} alt="图片"></img>
         <span className="name">{name}</span>
         <span className="updateFrequency">{updateFrequency}</span>
     </RankingLeftWrapper>
    )
}
export default SYQRankingLeftItem