import React from 'react'
import Location from './Location'
import Notice from './Notice'
import Menu from './Menu'
import Review from './Review'
import Photos from './Photos'

export default function TabSection({ active }) {
    return (
        <div className='mt-10 w-full mx-auto'>
            {active === '공지사항' && <Notice />}
            {active === '메뉴' && <Menu />}
            {active === '리뷰' && <Review />}
            {active === '지도' &&
                <Location lat={"37.30028202155746"} long={"126.8393026399596"} />
            }
        </div>
    )
}
