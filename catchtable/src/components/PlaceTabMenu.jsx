import React, { useState } from 'react'
import { FlexCol, FlexRow } from '../constants/style';
import TabSection from './TabSection';

export default function PlaceTabMenu() {
    const [tab, setTab] = useState(['공지사항', '리뷰', '사진', '전화', '지도']);
    const [active, setActive] = useState('공지사항');
    return (
        <div className={`${FlexCol} gap-2 justify-center items-center mt-4 w-full`}>
            <div className={`${FlexRow} w-2/3 items-center justify-between `}>
                {tab.map((item, index) => (
                    <button
                        onClick={() => setActive(item)}
                        className={`text-2xl px-2 py-4 font-bold text-gray-500 hover:text-primary
                        transition-all duration-100 ease-in
                    ${active === item && 'text-primary border-primary border-b-4'}
                    `}
                    >{item}</button>
                ))}
            </div>
            <TabSection active={active} />

        </div>
    )
}
