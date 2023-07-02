import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Search from '../components/Search';
import Date from '../components/Date';
import Time from '../components/Time';
import People from '../components/People';
import Request from '../components/Request';
import Notice from '../components/Notice';
import Place from '../components/Place';
import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

export default function Filter() {

  const [date, setDate] = useState("미설정");
  const [time, setTime] = useState("미설정");
  const [people, setPeople] = useState("미설정");

  const getDate = (x) => {
    setDate(x)
  }
  const getTime = (x) => {
    setTime(x)
  }
  const getPeople = (x) => {
    setPeople(x+"명")
  }
  const getRequest = (x) => {
    console.log(x);
  }
  // const onSubmit = () =>{
  //   axios.post(`${API_URL}/`)
  // }
  // const onClick = () =>{
  //   setDate(getDate);
  //   setTime(getTime);
  //   setPeople(getPeople);
  // }
  
  
  return (
    <div className={`${FlexCol} relative z-0 `}>
        
        <img className=' w-full absolute top-0 -z-10 my-2' src="./images/filter.png" alt=""/> 
        <Search apiUrl={API_URL}/>
        <Date getDate={getDate}/>
        <Time getTime={getTime}/>
        <People getPeople={getPeople}/>
        <Request getRequest={getRequest}/>
        {/* <div className={` ${FlexCol} justify-center items-center`}>
            <button 
              className='w-1/7 px-8 py-4 bg-primary 
                  rounded-full text-white font-bold tracking-wider text-thin'
              onClick={onClick}>
                  조건 설정 
            </button>
        </div> */}
        <Place 
          date={date}
          time={time}
          people={people}/>
        <Notice />
        <div className={`my-[160px] ${FlexCol} justify-center items-center`}>
            <button 
              className='w-1/7 px-8 py-4 bg-primary 
                  rounded-full text-white font-bold tracking-wider text-thin'>
                  예약 및 결제  
            </button>
            <p className={` py-4 tracking-wider text-white text-thin`}>예약하신 정보를 확인해주시고 다음 단계로 넘어가주세요</p>
        </div>
    </div>
  )
}
