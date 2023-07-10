import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX } from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import { useState } from 'react';
import MyTabSection from './MyTabSection';

export default function MyTabMenu() {
    const [tab, setTab] = useState(['회원 정보', '나의 PICK', '예약 내역', '나의 리뷰']);
    const [active, setActive] = useState('나의 PICK');
    return (
        <div className={`${FlexCol} gap-2 justify-center items-center w-full`}>
            <div className={`${FlexRow} w-full items-center justify-around gap-12 
                            pt-4 border-t-8 border-b-2 border-gray-200/50`}>
                {tab.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(item)}
                        className={`text-3xl px-2 py-4 font-bold text-stone-500 hover:text-black
                        transition-all duration-100 ease-in
                        ${active === item && 'text-black border-black border-b-4'}`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <MyTabSection active={active} />
        </div>
    )
}
