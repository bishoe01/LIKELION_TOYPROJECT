import React, {useEffect} from 'react'
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

  const [month, setMonth] = useState("7");
  const [day, setDay] = useState("13");
  const [time, setTime] = useState("미설정");
  const [people, setPeople] = useState("미설정");
  const [searchedPlace, setSearchedPlace] = useState(null);

  const getDate = (selectedDate) => {
    const selectedMonth = selectedDate.getMonth() + 1;
    const selectedDay = selectedDate.getDate();
    setMonth(selectedMonth);
    setDay(selectedDay);
  };
  const getTime = (selectedTime) => {
    const [hour, minute] = selectedTime.replace(/\s/g, "").split(":");
    const formattedTime = `${hour}시${minute}분`;
    setTime(formattedTime);
  };
  const getPeople = (selectedPeople) => {
    setPeople(selectedPeople+"명")
  };
  const getRequest = (x) => {
    
  };
  const getSearchedPlace = (x) => {
    setSearchedPlace(x);
  };
  useEffect(() => {}, [searchedPlace]);
  // const onSubmit = () =>{
  //   axios.post(`${API_URL}/`)
  // }
  // const onClick = () =>{
  //   setDate(getDate);
  //   setTime(getTime);
  //   setPeople(getPeople);
  // }
  
  
  return (
    <div className={`${FlexCol} relative z-0 bg-guidebook`}>
        
        <Search 
          apiUrl={API_URL}
          getSearchedPlace={getSearchedPlace}/>
        <Date getDate={getDate}/>
        <Time getTime={getTime}/>
      
        <People getPeople={getPeople}/>
        <Request getRequest={getRequest}/>
        <Place 
          date={`${month}월 ${day}일`}
          time={time}
          people={people}
          searchedPlace={searchedPlace}/>
        <Notice />
        {/* <div className={`my-[120px] ${FlexCol} justify-center items-center`}>
            <button 
              className='w-1/7 px-8 py-4 bg-primary 
                  rounded-full text-white font-bold tracking-wider text-thin'>
                  예약 및 결제  
            </button>
            <p className={` py-6 tracking-wider text-white text-thin`}>예약하신 정보를 확인해주시고 다음 단계로 넘어가주세요</p>
        </div> */}
    </div>
  )
}
