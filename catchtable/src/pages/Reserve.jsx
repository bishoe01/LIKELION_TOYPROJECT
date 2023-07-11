import React, { useEffect, useState } from 'react'
import Time from '../components/Time';
import Date from '../components/Date';
import People from '../components/People';
import Request from '../components/Request';
import { FlexCol } from '../constants/style';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/context';

export default function Reserve() {
    const [month, setMonth] = useState("7");
    const [day, setDay] = useState("13");
    const [time, setTime] = useState("미설정");
    const [people, setPeople] = useState("미설정");
    const getDate = (selectedDate) => {
        const selectedMonth = selectedDate.getMonth() + 1;
        const selectedDay = selectedDate.getDate();
        setMonth(selectedMonth);
        setDay(selectedDay);
    };
    const navigate = useNavigate();
    const { isLogin } = useAuthContext();
    useEffect(() => {
        !isLogin && navigate('/login');
    })
    const getTime = (selectedTime) => {
        const [hour, minute] = selectedTime.replace(/\s/g, "").split(":");
        const formattedTime = `${hour}시${minute}분`;
        setTime(formattedTime);
    };
    const getPeople = (selectedPeople) => {
        setPeople(selectedPeople + "명")
    };
    const getRequest = (x) => {
    };


    return (
        <div className={`${FlexCol} relative z-0 bg-guidebook rounded-2xl`}>

            <Date getDate={getDate} />
            <Time getTime={getTime} />
            <People getPeople={getPeople} />
            <Request getRequest={getRequest} />
            <div className={`my-[120px] ${FlexCol} justify-center items-center`}>
                <button
                    onClick={() => navigate('/mypage')}
                    className='w-1/5 px-8 py-4 bg-primary  text-2xl border-8 border-gray-500
                  rounded-full text-white font-bold tracking-wider text-thin'>
                    예약 및 결제
                </button>
                <p className={` py-6 tracking-wider text-white text-thin`}>예약하신 정보를 확인해주시고 다음 단계로 넘어가주세요</p>
            </div>
        </div>
    )
}
