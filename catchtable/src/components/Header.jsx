import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FlexRow, PaddingX } from '../constants/style';
import { Fade, Slide } from 'react-reveal';

function Header() {
    const LINK_STYLE = "hover:text-primary transition duration-200 ease-in-out"
    const navigate = useNavigate();
    return (
        <Slide top cascade>
            <div className={`${FlexRow} justify-between items-center ${PaddingX}`}>
                <img className='cursor-pointer w-[180px] h-[80px] object-cover ' onClick={() => navigate('/')} src="./images/logo.png" alt="" />
                <div className='flex gap-32 text-xl'>
                    <ul className='flex gap-24 font-extrabold'>
                        <Link className={LINK_STYLE} to='/region'>지역별</Link>
                        <Link className={LINK_STYLE} to='/choice'>메뉴선정</Link>
                        <Link className={LINK_STYLE} to='/hotplace'>핫플레이스</Link>
                    </ul>
                    <ul className='flex gap-12'>
                        <Link className={`${LINK_STYLE} font-bold`} to='/login'>로그인</Link>
                        <Link className={`${LINK_STYLE} font-bold`} to='/signup'>회원가입</Link>
                    </ul>
                </div>
            </div>
        </Slide>
    )
}

export default Header