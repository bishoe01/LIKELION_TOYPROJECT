import React from 'react'
import { FlexCol, PaddingX, PaddingY } from '../constants/style'
import { Fade } from 'react-reveal'

function Banner() {
    return (
        <Fade>
            <div
                className={`${FlexCol} ${PaddingX} py-16 
            relative w-full justify-center items-center gap-6
             opacity-90
            bg-[#202020] text-white z-40`}>
                <h1 className='text-[40px] font-bold'>즐거운 미식 생활의 시작, 캐치테이블</h1>
                <p className='text-lg text-center'>캐치테이블에서 고객님을 위해 추천하는 레스토랑 리스트!<br />
                    캐치테이블 On!을 통해 다양한 레스토랑을 방문예약해보세요</p>
            </div>
        </Fade>
    )
}

export default Banner