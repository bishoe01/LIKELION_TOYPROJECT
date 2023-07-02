import React, { useEffect, useState } from 'react'
import { FlexCol } from '../constants/style'
import axios from 'axios';




export default function PlaceDescription() {
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
            <article className={`${FlexCol} w-[600px] mx-auto gap-2`}>
                <h1 className='text-[40px] font-bold'>{name}</h1>
                <span className='text-2xl'>{description}</span>
                <div className='flex my-2 w-full items-center justify-around'>
                    <span className=' text-xl self-center w-fit rounded-full my-2 py-2 px-3 font-bold bg-primary text-white' >{location}</span>
                    <span className='text-3xl'>⭐️{rating} ({review})</span>
                </div>
            </article>
        </section>
    )
}
