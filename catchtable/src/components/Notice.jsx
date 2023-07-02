import React from 'react'
import { FlexCol } from "../constants/style";
import {
    AiFillBell,
    AiOutlineHome
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

import { BiPhoneCall } from "react-icons/bi";
export default function Notice() {
    return (
        <div className={`${FlexCol} w-full gap-4`}>
            <div className='flex text-2xl justify-between bg-[#e1e2e4] p-4 my-2'>
                <span><span className='font-bold'>이벤트, 혜택</span> 알림을 받아보세요!</span>
                <span className='text-black font-bold flex items-center gap-2'>
                    <AiFillBell /> 알림받기
                </span>
            </div>
            <div className='flex items-center justify-start text-2xl gap-2 py-2'>
                <IoLocationOutline />
                <span>경기 안산시 상록구 학사2길 11-1 1층 밀플랜비</span>
            </div>
            <Divide />
            <div className='flex items-center justify-start text-2xl gap-2 py-2'>
                <AiOutlineClockCircle />
                <span className='flex items-center justify-around gap-8'>
                    <span className='font-bold'>
                        영업 중
                    </span>
                    오전 11:00 - 오후 10:00
                </span>
            </div>
            <Divide />
            <div className='flex items-center justify-start text-2xl gap-2 py-2'>
                <BiPhoneCall />
                <span className='flex items-center justify-around gap-8'>
                    <span className='font-bold'>
                        010-5761-7061
                    </span>
                </span>
            </div>
            <Divide />
            <div className='flex items-center justify-start text-2xl gap-2 py-2'>
                <AiOutlineHome />
                <span className='flex items-center justify-around gap-8 text-blue-500'>
                    <span className='font-bold'>
                        http://www.wavecompany.co.kr/
                    </span>
                </span>
            </div>
            <Divide />


        </div>
    )
}

function Divide() {
    return (
        <div className='w-full bg-[#e1e2e4] h-[2px] my-2' />
    )
}