import React from 'react'
import MyReview from './MyReview'
import MyPick from './MyPick'
import MyReservation from './MyReservation'
import MyProfile from './MyProfile'

export default function MyTabSection({active}) {
    return (
        <div className='mt-10 w-full mx-auto'>
            {active === '회원 정보' && <MyProfile />}
            {active === '나의 PICK' && <MyPick />}
            {active === '예약 내역' && <MyReservation />}
            {active === '나의 리뷰' && <MyReview />}
        </div>
    )
}
