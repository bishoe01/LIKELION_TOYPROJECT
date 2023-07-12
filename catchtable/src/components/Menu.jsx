import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import { FlexCol } from '../constants/style'

export default function Menu() {
    const [menu, setMenu] = useState([
        {
            name: '치킨 감자',
            price: '5,500원',
        },
        {
            name: '치킨 라이스',
            price: '5,500원',
        },
        {
            name: '소고기 감자',
            price: '5,500원',
        },
        {
            name: '소고기 라이스',
            price: '5,500원',
        },
    ])
    return (
        <Fade>
            <div className='flex flex-col justify-center px-12 mb-12'>
                <div className={`${FlexCol} justify-center items-center py-4 px-4 border-2 border-gray-400 rounded-xl shadow-lg`}>
                    {
                        menu.map((item, index) => (
                            <div className={`flex justify-between items-center w-[90%] h-[70px] border-b-[1px] border-gray-300 relative`}>
                                <p className={`text-2xl font-bold`}>{item.name}</p>
                                <p className={`text-xl font-bold text-gray-700`}>{item.price}</p>
                            </div>
                        ))
                    }
                </div>
                <button className='
            w-full text-2xl font-bold text-white bg-gray-500 p-4 rounded-xl mt-4
            '>전체 메뉴 보기</button>
            </div>
        </Fade>
    )
}
