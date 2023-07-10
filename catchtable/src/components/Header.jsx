import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FlexRow, PaddingX } from '../constants/style';
import { Fade, Slide } from 'react-reveal';
import { useAuthContext } from '../context/context';

function Header() {
    const LINK_STYLE = "hover:text-primary transition duration-200 ease-in-out"
    const { user, setUser, isLogin, setIsLogin } = useAuthContext();
    const navigate = useNavigate();
    return (
        <Slide top cascade>
            <div className={`${FlexRow} justify-between items-center ${PaddingX}`}>
                <img className='cursor-pointer w-[180px] h-[80px] object-cover ' onClick={() => navigate('/')} src="./images/logo.png" alt="" />
                <div className='flex gap-32 text-xl'>
                    <ul className='flex gap-24 font-extrabold'>
                        <Link to='/region'>지역별</Link>
                        <Link to='/filter'>식당찾기</Link>
                        <Link to='/hotplace'>핫플레이스</Link>
                    </ul>
                    {isLogin &&
                        <ul className='flex gap-12'>
                            <button className={`${LINK_STYLE} font-bold`} onClick={() => setIsLogin(false)}>로그아웃</button>
                            <Link className={`${LINK_STYLE} font-bold`} to='/mypage'>마이페이지</Link>
                        </ul>
                    }
                    {!isLogin &&
                        <ul className='flex gap-12'>
                            <Link className={`${LINK_STYLE} font-bold`} to='/login'>로그인</Link>
                            <Link className={`${LINK_STYLE} font-bold`} to='/signup'>회원가입</Link>
                        </ul>
                    }
                </div>
            </div>
        </Slide>
    )
}

export default Header