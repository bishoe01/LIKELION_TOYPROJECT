import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react'

export default function Time() {
  let data = [ "10:00","10:30", "11:00", "11:30", "12:00", "12:30"];

  return (
    <Fade>
      <div className={`${FlexCol}`}>
        <div className={`${FlexRow} gap-2 items-center px-20 py-12`}>
            <div className={`w-10 h-10 bg-primary rounded opacity-70`}></div>
            <h1 className={`px-12 basis-5/6 text-white text-2xl font-bold`}>시간 선택</h1>
            {/* <button type="button" className={`ms-10 relative right-0 w-12 h-12 items-center`}>
                <img className={`w-6 h-4`} src='./images/filter_button.png' alt=""/>
            </button> */}
        </div>
        <div className={`px-20 w-full ${FlexCol} justify-center items-center pb-10`}>
          <hr className={`border-timeBorder w-2/3`}/>
          <div 
            className={`text-white text-4xl w-2/3 height-[100px] text-center`} 
            style={{ overflowY: 'hidden' }}>
            <div style={{ height: 'fit-content', maxHeight: '100%' }}>
              {data.map((time, index) => (
                <React.Fragment key={index}>
                  {time}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
          <hr className={`border-timeBorder w-2/3`}/>
        </div>
      </div>
    </Fade>
  )
}
