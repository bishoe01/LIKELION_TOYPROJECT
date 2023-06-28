import React from 'react'
import { FlexCol } from '../constants/style'
import { BsTwitter, BsYoutube, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'

export default function BottomBanner() {
    return (
        <div className={`${FlexCol} w-full h-[350px] bg-[#202020] justify-center items-center py-[130px] text-white text-center gap-8
         bg-gradient-to-b from-[#202020] via-transparent to-[#636363]
        `}>
            <h1 className='text-[32px] font-bold'>미식가들의 필수템 캐치테이블</h1>
            <p className='text-xl w-[460px]'>
                이메일 SMS로 캐치테이블의 최신 소식을 <br />
                놓치지않고 받아보실 수 있어요!
            </p>
            <div className='flex items-center text-[50px] justify-around w-1/2 mt-5'>
                <BsFacebook />
                <BsInstagram />
                <BsYoutube />
                <BsTwitter />
                <BsLinkedin />


            </div>
        </div>
    )
}
