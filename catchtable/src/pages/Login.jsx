import React, { useState } from 'react'
import { Fade, Slide } from 'react-reveal'
import { FlexCol, FlexRow, PaddingX } from '../constants/style'
import { useAuthContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [LoginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();
    const { user, setUser, isLogin, setIsLogin } = useAuthContext();
    const handleLogin = (e) => {
        e.preventDefault();
        const userExists = user.some((item) => item.username === LoginInfo.username && item.password === LoginInfo.password);
        if (userExists) {
            setIsLogin(true);
            navigate('/');
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
    }
    return (
        <Fade top>
            <div className={`w-full ${FlexRow} ${PaddingX} gap-[5%]`}>

                <section className={`w-2/5 ${FlexCol} justify-center items-center gap-8`}>
                    <h1 className='text-4xl font-bold'>로그인</h1>
                    <form className={`w-full ${FlexCol} gap-4`} onSubmit={handleLogin}>
                        <input onChange={(e) => {
                            setLoginInfo({ ...LoginInfo, username: e.target.value })
                        }} className='w-full p-4 border-2 border-gray-200 rounded-lg' value={LoginInfo.username} type="text" placeholder='아이디' />
                        <input onChange={(e) => {
                            setLoginInfo({ ...LoginInfo, password: e.target.value })
                        }} className='w-full p-4 border-2 border-gray-200 rounded-lg' value={LoginInfo.password}
                            type="password" placeholder='비밀번호' />
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
            w-[55%] h-[600px] p-16 mt-5
            gap-12
            rounded-xl
             bg-gradient-to-br from-[#FA6F38] via-[#FD571D] to-primary shadow-xl`}>
                    <h1 className='text-[60px] text-white font-bold leading-[70px]'>캐치테이블 WEB<br /> 정식 OPEN!</h1>

                    <p className='w-fit text-white rounded-xl py-2'>
                        <span className='text-2xl'>이제 전화 없이 편리하게 예약하세요!</span>
                    </p>
                    <p className='text-white text-2xl font-bold leading-10'>
                        #전화없이 #핸드폰으로<br />
                        #검색과 예약이 실시간으로!<br />
                        #인스타그램맛집 #지역별 맛집<br />
                        #가격대별 #상황별 #음식종류별
                    </p>

                    <span className='text-center text-xl font-bold text-white'>CATCH TABLE</span>
                </section>
            </div>
        </Fade>
    )
}
