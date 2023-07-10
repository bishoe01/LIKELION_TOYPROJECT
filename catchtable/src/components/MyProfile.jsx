import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';

export default function MyProfile() {
  return (
    <div className={`${FlexCol} px-20 gap-12`}>
      <div className={`${FlexCol}`}>
        <p className={`text-3xl font-extrabold`}>닉네임</p>
        <div className={`${FlexRow} mt-8 w-full`}>
            <form className={`rounded-[12px] h-16 w-[500px]`}>
                <input 
                  className={`rounded-[12px] h-16 border-gray-400 border-2 p-4 w-[500px] text-2xl`}
                  type="text">
                </input>
            </form>
            <button className={`text-2xl rounded-full bg-gray-200 w-36 h-16 ml-4`}>수정</button>
        </div>
      </div>
      <div className={`${FlexCol}`}>
        <p className={`text-3xl font-extrabold`}>아이디</p>
        <div className={`${FlexRow}  mt-8  `}>
            <form className={`rounded-[12px] h-16 w-[500px]`}>
                <input className={`rounded-[12px] h-16 border-gray-400 border-2 w-[500px] p-4 text-2xl`}
                    type="text"></input>
            </form>
            <button className={`text-2xl rounded-full bg-gray-200 w-36 h-16 ml-4`}>수정</button>
        </div>
      </div>
      <div className={`${FlexCol}`}>
        <p className={`text-3xl font-extrabold`}>비밀번호</p>
        <div className={`${FlexRow}  mt-8  `}>
            <form className={`rounded-[12px] h-16 w-[500px]`}>
                <input className={`rounded-[12px] h-16 border-gray-400 border-2 w-[500px] p-4 text-2xl`}
                type="password"></input>
            </form>
            <button className={`text-2xl rounded-full bg-gray-200 w-36 h-16 ml-4`}>수정</button>
        </div>
      </div>
    </div>
  )
}
