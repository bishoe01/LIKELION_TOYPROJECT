import React from 'react'
import { FlexCol, PaddingX } from '../constants/style'
import { Fade, Slide } from 'react-reveal'

function Hero() {
    return (
        <div className={`flex ${PaddingX} gap-2 relative z-0`}>
            <Fade left>
                <section
                    id='left'
                    className={`w-3/5 h-[700px]
                ${FlexCol} items-start gap-4
                py-32
                `}
                >
                    <button
                        className='px-4 py-1
                    rounded-full bg-gray-200
                    tracking-wider
                    '
                    >ON THE MENU</button>
                    <h1 className='text-[64px] font-bold tracking-wide'>
                        시즌별로 <br />
                        즐겨보는 특선메뉴
                    </h1>
                    <p className=' text-2xl tracking-wide'>
                        통유리창, 테라스, 루프탑 레스토랑등 <br />
                        아름다운 경치로 소문난 다이닝 장소들을 소개할게요
                    </p>
                    <button className=' mt-14 px-8 p-4 bg-primary rounded-full text-white text-xl font-bold tracking-wider'>
                        장소 구경하기
                    </button>
                </section>
            </Fade>
            <Fade right>
                <img className='z-0 absolute right-0 top-10 w-[600px] h-[926px] object-cover' src="images/HeroImage.png" alt="" />
            </Fade>
        </div>
    )
}

export default Hero