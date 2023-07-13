import React, { useState } from 'react'
import { BASEURL, useAuthContext } from '../context/context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password1: '',
    });
    const { user, isLogin, setIsLogin } = useAuthContext();
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASEURL}/rest-auth/registration/`, { ...loginInfo, "password2": loginInfo.password1 })
            .then((res) => {
                console.log(res);
                alert('회원가입이 완료되었습니다.');
                setIsLogin(true);
                navigate('/');
            }
            )
            .catch((err) => {
                console.log(err);
                alert('회원가입에 실패하였습니다.');
            }
            )
    }
    return (
        <div className='flex flex-col w-[50%] h-[30vh] rounded-2xl border-2 border-primary mx-auto  items-center justify-center gap-4 mt-20 shadow-xl'>
            <h1 className='text-4xl font-bold mb-10'>회원가입</h1>
            <form onSubmit={(e) => HandleSubmit(e)}>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <input
                        className='w-[500px] h-[50px] border-2 border-gray-300 rounded-md px-4' type='text' placeholder='아이디' value={loginInfo.username}
                        onChange={(e) => {
                            setLoginInfo({ ...loginInfo, username: e.target.value })
                        }}
                    />
                    <input className='w-[500px] h-[50px] border-2 border-gray-300 rounded-md px-4' type='password' placeholder='비밀번호'
                        value={loginInfo.password1}
                        onChange={(e) => {
                            setLoginInfo({ ...loginInfo, password1: e.target.value })
                        }}
                    />
                    <button className='w-[500px] h-[50px] font-bold text-xl bg-orange-500 text-white rounded-md'>회원가입</button>

                </div>
            </form>

        </div>

    )
}
