import React from 'react'
import { FlexCol, FlexRow, PaddingX } from '../constants/style'
import { planb, planb1, planb2, planb3, planb4 } from '../assets/image';
import MultiCarousel from '../components/MultiCarousel';
import PlaceDescription from '../components/PlaceDescription';
export default function HotPlace() {
    const IMAGE_STYLE = (width, height, imageUrl) => { return `w-${width} h-[${height}px] bg-${imageUrl} bg-orange-400 bg-cover brightness-75` };
    const IMAGE_ANIMATE = "cursor-pointer w-full bg-cover h-[250px] relative hover:scale-110 transition-all duration-300 ease-in-out"
    return (
        <div className={`${FlexCol} ${PaddingX} mt-10 gap-8 `}>
            <div className={`${FlexRow} gap-4`}>
                <div className='w-[65%] h-[750px] border-2'>
                    <img src={planb} alt="" className='w-full object-cover h-full' />
                </div>
                <div className='w-[35%] h-[750px] overflow-hidden'>
                    <img src={planb3} alt="" className={`${IMAGE_ANIMATE}`} />
                    <img src={planb2} alt="" className={`${IMAGE_ANIMATE}`} />
                    <div className={`${IMAGE_ANIMATE} bg-planb1`}>
                        <div className='bg-black opacity-[35%] w-full h-full text-white flex justify-center items-center text-center text-[60px]' />
                        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[70px]'>+4</h1>
                    </div>
                </div>
            </div>
            <PlaceDescription />

        </div>
    )
}
