import React from 'react'
import Location from './Location'
import Notice from './Notice'

export default function TabSection({ active }) {
    return (
        <div className='mt-10 w-2/3 mx-auto'>
            {active === '공지사항' && <Notice />}
            {active === '리뷰' && <div>리뷰</div>}
            {active === '사진' && <div>사진</div>}
            {active === '전화' && <div>전화</div>}
            {active === '지도' &&
                <Location lat={"37.30028202155746"} long={"126.8393026399596"} />
            }
        </div>
    )
}
