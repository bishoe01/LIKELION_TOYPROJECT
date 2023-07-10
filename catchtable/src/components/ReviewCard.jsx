import React, { useState } from 'react'
import { FlexCol, PaddingX } from '../constants/style'
import { CgProfile } from 'react-icons/cg'

export default function ReviewCard() {
    const [userReview, setUserReview] = useState([
        {
            id: 1,
            name: '김철수',
            date: '2021-08-01',
            content: '맛있어요',
            rating: 5,
        },
        {
            id: 2,
            name: '이영희',
            date: '2021-08-02',
            content: '가격도 적당하고 맛도 좋아요',
            rating: 4,
        },
        {
            id: 3,
            name: '박민수',
            date: '2021-08-03',
            content: '분위기도 좋고 음식도 훌륭했어요',
            rating: 5,
        },
        {
            id: 4,
            name: '최지원',
            date: '2021-08-04',
            content: '친절한 서비스와 맛있는 음식이 인상적이었습니다',
            rating: 4,
        },
        {
            id: 5,
            name: '김예진',
            date: '2021-08-05',
            content: '매장이 아늑하고 메뉴가 다양해서 좋았어요',
            rating: 5,
        },
    ]);

    return (
        <div className={`${FlexCol} items-start gap-4 mt-10`}>
            {userReview.map((review) => (
                <div key={review.id} className='flex w-full  items-center py-4 gap-4 border-b-4 border-gray-2'>
                    <CgProfile className='w-[75px] h-[75px] rounded-full text-orange-500' />
                    <div className='flex flex-col justify-center gap-2'>
                        <h1 className='text-2xl font-bold'>{review.name}</h1>
                        <span className='text-xl tracking-widest'>{review.content}</span>
                    </div>
                </div>
            ))}

        </div>
    )
}
