import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react'
import Calendar from 'react-calendar';
import './Date.css'

export default function Date({getDate}) {
  const [value, onChange] = useState('2023-07-06');
  const handleDateChange = (date) => {
    onChange(date);
    getDate(date);
  };

  return (
    <Fade>
      <div>
        <div className={`${FlexRow} gap-2 items-center px-20 py-12`}>
            <div className={`w-10 h-10 bg-primary rounded opacity-70`}></div>
            <h1 className={`px-12 basis-5/6 text-white text-2xl font-bold`}>방문 날짜</h1>
        </div>
        <div className={`flex justify-center pb-16`}>
          <Calendar 
            onChange={handleDateChange} 
            value={value} 
            className={`p-4`}
            formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}/>
        </div>
      </div>
    </Fade>
  )
}

