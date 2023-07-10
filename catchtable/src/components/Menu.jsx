import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import { FlexCol } from '../constants/style'

export default function Menu() {
    const [menu, setMenu] = useState([
        {
            name: '960 숙성 뼈등심',
            price: '45,000원',
        },
        {
            name: '960 숙성 뼈목살',
            price: '45,000원',
        },
        {
            name: '720 숙성 삼겹살',
            price: '35,000원',
        },
        {
            name: '720 숙성 목살',
            price: '35,000원',
        },
    ])
    return (
        <Fade>
            <div className='flex flex-col justify-center px-12'>
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
