import React from 'react'
import { FlexRow, PaddingX } from '../constants/style'

export default function HotPlace() {
    const IMAGE_STYLE = (width, height, imageUrl) => { return `w-${width} h-[${height}px] bg-${imageUrl} bg-orange-400 bg-cover brightness-75` };
    return (
        <div className={`${FlexRow} ${PaddingX} mt-10 gap-4`}>
            <div className={IMAGE_STYLE("3/5", "600", "planb")}>

            </div>
            <div className={IMAGE_STYLE("2/5", "300", "planb1")}></div>

        </div>
    )
}
