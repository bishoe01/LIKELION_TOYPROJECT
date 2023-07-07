import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import { useState } from 'react'

export default function Time({getTime}) {
  const time = ["10 : 00", "10 : 30", "11 : 00", "11 : 30",
                "12 : 00", "12 : 30", "13 : 00", "13 : 30", "14 : 00", "14 : 30",
                "15 : 00", "15 : 30", "16 : 00", "16 : 30", "17 : 00", "17 : 30",
                "18 : 00", "18 : 30", "19 : 00", "19 : 30", "20 : 00", "20 : 30",
                "21 : 00", "21 : 30", "22 : 00", "22 : 30", "23 : 00", "23 : 30", "24 : 00",];
  
  const [selectedTime, setSelectedTime] = useState(time[0]);
  const handleSlideChange = (swiper) => {
      const activeSlideIndex = swiper.realIndex;
      const activeTime = time[activeSlideIndex];
      setSelectedTime(activeTime);
      getTime(activeTime);
  };  

  return (
    <Fade>
      <div className={`${FlexCol}`}>
        <div className={`${FlexRow} gap-2 items-center px-20 py-12`}>
            <div className={`w-10 h-10 bg-primary rounded opacity-70`}></div>
            <h1 className={`px-12 basis-5/6 text-white text-2xl font-bold`}>시간 선택</h1>
        </div>
        <div className ={`${FlexRow} bg-gradient-to-r from-transparent via-white/20 to-transparent mx-52 pt-8`}>
          <Swiper
            className={`h-60 w-50 text-right align-middle`}
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={2}
            loop={true}
            loopAdditionalSlides={5}
            slideToClickedSlide={true}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            >
            {time.map(no => 
              <SwiperSlide key={no}>{({ isActive }) => (
                <div className={`text-white text-4xl center text-right text-center align-middle` + (isActive? '' : 'text-gray')}>{no}</div>)}
              </SwiperSlide>
            )}
          </Swiper>
        </div>
     
      </div>
    </Fade>
  )
}
