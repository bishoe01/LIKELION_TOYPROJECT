import React from 'react'
import { FlexCol } from '../constants/style'


const placedata = {
    name: 'Plan B',
    description: '브리또 핫도그 감자튀김 전문점 - 가성비 좋은 혼밥 맛집',
    location: '브리또 | 안산',
    rating: '4.2',
    review: '123',
    price: ['5000', '8000']
}

export default function PlaceDescription() {
    return (
        <section className={`${FlexCol} items-start`}>
            <h1 className='text-[40px] font-bold'>{placedata.name}</h1>
            <span className='text-2xl'>브리또 핫도그 감자튀김 전문점 - 가성비 좋은 혼밥 맛집</span>
            <span className='text-2xl'>브리또 | 안산</span>
            <span>⭐️</span>
        </section>
    )
}
