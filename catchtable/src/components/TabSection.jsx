import React from 'react'
import Location from './Location'

export default function TabSection({ active }) {
    return (
        <div className='mt-4'>
            {active === '공지사항' && <div>공지사항</div>}
            {active === '지도' &&
                <Location lat={"37.30028202155746"} long={"126.8393026399596"} />
            }
        </div>
    )
}
