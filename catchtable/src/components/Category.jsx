import React from 'react'
import { FlexCol, FlexRow, PaddingY } from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
function Category() {
    return (
        <div className={`${FlexCol} w-full h-[1000px] relative justify-center items-center ${PaddingY}`}>
            <img className='absolute top-0 -z-1 h-[1000px]' src="./images/category.png" alt="" />
            <Jump>

                <div className='grid grid-cols-3 z-0 gap-8'>
                    <CategoryCard title="파티세리밀" image="choco" />
                    <CategoryCard title="파티세리밀" image="choco" />
                    <CategoryCard title="파티세리밀" image="choco" />
                    <CategoryCard title="파티세리밀" image="choco" />
                    <CategoryCard title="파티세리밀" image="choco" />
                    <CategoryCard title="파티세리밀" image="choco" />
                </div>
            </Jump>

        </div>
    )
}


function CategoryCard({ title, image }) {
    return (
        <div className='overflow-hidden rounded-2xl'>
            <div className={`relative z-0 ${FlexCol} w-[320px] h-[300px] py-16 p-8 bg-gray-400 justify-start items-start bg-${image} bg-cover 
        transition-transform duration-300 ease-in-out hover:transform hover:scale-110
        `}>
                <div className='absolute inset-0 bg-black opacity-50' />
                <h1 className='text-left text-[56px] font-extrabold text-white tracking-wide z-10 leading-[55px]'>
                    CATCH<span className="text-[52px] inline-block align-middle"> </span>TABLE
                </h1>
                <p className='mt-8 text-left text-lg font-bold text-white tracking-wide z-10'>{title}</p>
                <span className='text-white z-10'>이제 <span class="font-bold">캐치테이블</span>에서 <span class="font-bold">예약</span>하세요</span>

            </div>
        </div>
    )
}

export default Category