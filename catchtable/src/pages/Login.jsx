import React from 'react'
import { Slide } from 'react-reveal'
import { FlexCol, FlexRow, PaddingX } from '../constants/style'

export default function Login() {
    return (
        <div className={`w-full ${FlexRow} ${PaddingX} gap-[5%]`}>
            <section className={`w-2/5 ${FlexCol} justify-center items-center gap-8`}>
                <h1 className='text-4xl font-bold'>로그인</h1>
                <form className={`w-full ${FlexCol} gap-4`}>
                    <input className='w-full p-4 border-2 border-gray-200 rounded-lg' type="text" placeholder='아이디' />
                    <input className='w-full p-4 border-2 border-gray-200 rounded-lg' type="password" placeholder='비밀번호' />
                    <button className='w-full p-4 
                    bg-gradient-to-r from-[#FA6F38] via-[#FD571D] to-primary
                    rounded-lg text-white font-bold tracking-wider text-xl'>로그인</button>
                </form>
                <div className={`w-full ${FlexRow} justify-between`}>
                    <p>아이디 찾기</p>
                    <p>비밀번호 찾기</p>
                </div>
                <div className={`w-full ${FlexRow} justify-between`}>
                    <p>회원가입</p>
                    <p>비회원 주문조회</p>
                </div>
            </section>
            <section className={`
            ${FlexCol}
            bg-login w-[55%] h-[750px] p-16 mt-5
            gap-12
            rounded-xl
             bg-gradient-to-br from-[#FA6F38] via-[#FD571D] to-primary`}>
                <h1 className='text-[60px] text-white font-bold leading-[65px]'>캐치테이블 WEB <br /> 정식 OPEN!</h1>

                <p className='w-fit text-white rounded-xl py-2'>
                    <span className='text-2xl'>이제 전화 없이 편리하게 예약하세요!</span>
                </p>

            </section>

        </div>
    )
}
