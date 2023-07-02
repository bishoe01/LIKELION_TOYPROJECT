import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react'

export default function Place({date, time, people}) {
  return (
    <div className={`${FlexCol}`}>
      <h1 className={`${FlexRow} gap-2 items-center px-20 pt-20 pb-12 basis-5/6 text-white text-3xl font-bold`}>예약이 가능한 곳</h1>
      <div className={`px-20 ${FlexRow} gap-4`}>
        <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
            날짜 : {date}
        </div>
        <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
            시간 : {time}
        </div>
        <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
            인원 : {people}
        </div>
      </div>
    </div>
  )
}

function PlaceCard(){
    
}