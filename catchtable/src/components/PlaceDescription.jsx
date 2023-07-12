import React, { useEffect, useState } from 'react'
import { FlexCol } from '../constants/style'
import axios from 'axios';


import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



export default function PlaceDescription() {
    const navigate = useNavigate();
    const BUTTON_STYLE = "flex items-center text-xl rounded-full my-2 py-3 px-4 font-bold";
    const [placedata, setPlacedata] = useState();
    useEffect(() => {
        axios.get('/data/placedata.json')
            .then((res) => {
                setPlacedata(res.data);
            })
    }, [placedata]);
    if (!placedata) {
        return <div>Loading data...</div>;
    }
    const { name, description, location, rating, review } = placedata;

    return (
        <section className={`${FlexCol} text-center items-center`}>
            <article className={`${FlexCol} w-[700px] mx-auto gap-2`}>
                <h1 className='text-[40px] font-bold'>{name}</h1>
                <span className='text-3xl'>⭐️ {rating} ({review})</span>

                <span className='text-xl text-gray-500'>{description}</span>
                <div className='flex my-2 w-full items-center justify-between'>
                    <p
                        className={`${BUTTON_STYLE} bg-gray-200 text-black`} >
                        <span className='font-bold text-xl px-2'>평균 5,500 </span> <span className='text-sm text-gray-500'>점심 저녁 동일가</span>
                    </p>

                    <button
                        className={`${BUTTON_STYLE} w-[200px] gap-2 bg-orange-400 text-white`}
                    >
                        <div className='rounded-full bg-white p-1 -z-1'>
                            <AiFillStar className='z-99  text-orange-400 text-2xl' />
                        </div>
                        <span className='w-full'>
                            먹킷리스트
                        </span>
                    </button>

                    <button
                        onClick={() => navigate(`/reserve/${name}`)}
                        className={`${BUTTON_STYLE} w-[200px] gap-2 bg-primary text-white`}
                    >
                        <div className='rounded-full bg-white p-1 -z-1'>
                            <BsCheck className='z-99  text-primary text-2xl' />
                        </div>
                        <span className='w-full'>
                            예약하기
                        </span>
                    </button>

                </div>
            </article>
        </section>
    )
}
