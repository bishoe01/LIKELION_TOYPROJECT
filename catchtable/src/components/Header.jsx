import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FlexRow, PaddingX } from '../constants/style';
import { Fade } from 'react-reveal';

function Header() {
    const navigate = useNavigate();
    return (
        <Fade>
            <div className={`${FlexRow} justify-between items-center ${PaddingX}`}>
                <img className='cursor-pointer w-[180px] h-[80px] object-cover ' onClick={() => navigate('/')} src="./images/logo.png" alt="" />
                <div className='flex gap-32 text-xl'>
                    <ul className='flex gap-24 font-extrabold'>
                        <Link to='/region'>지역별</Link>
                        <Link to='/choice'>메뉴선정</Link>
                        <Link to='/hotplace'>핫플레이스</Link>
                    </ul>
                    <ul className='flex gap-12'>
                        <Link to='/login'>로그인</Link>
                        <Link to='/signup'>회원가입</Link>
                    </ul>
                </div>
            </div>
        </Fade>
    )
}

export default Header