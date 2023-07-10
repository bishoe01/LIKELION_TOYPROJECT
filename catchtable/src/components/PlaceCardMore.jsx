import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'

export default function PlaceCardMore() {

  return (
    <div className={`${FlexCol} text-white text-2xl text-center justify-center 
    font-bold rounded-[20px] bg-placeCard h-[500px] gap-4 border relative`}>
        <p>더 찾아보기</p>  
        <img 
        className={`w-[76px] h-[76px] absolute end-4 bottom-4`}
        src='../images/PlaceCardMore.png'/>
    </div>
  )
}
