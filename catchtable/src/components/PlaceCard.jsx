import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'

export default function PlaceCard({title, image, detail, price, review, index, selectedCard, handleCardClick}){
    const isSelected = selectedCard === index;
    

    return (
        <div className={`${FlexCol} text-white text-xl rounded-[20px] 
            bg-placeCard h-[500px] gap-4 border `}
            style={{ borderColor: isSelected ? '#FE3F02' : '' }}
            onClick={() => handleCardClick(index)}>
            <img className={`rounded-t-[20px]`} src={image}/>
            <div className={`${FlexCol} px-4 gap-4`}>
                <div className={`${FlexRow} items-center relative`}>
                    <p className={`text-[26px]`}>{title}</p>
                    <img 
                        className={`ps-4 h-[32px] pb-2 absolute right-0`} 
                        src='../images/place_nextToTitle.png'/>
                </div>
                <div className={`${FlexRow} items-center`}>
                    <img src='../images/place_star.png'/>
                    <p className={`text-base opacity-50 ps-1`}>({review})</p>
                </div>
                <p className={`text-base tracking-wider pt-2 min-w-fit`}>
                    {detail}
                </p>
                <div className={`${FlexRow} gap-4 items-center pt-2`}>
                    <p className={`text-[26px]`}>{price}</p>
                    <p className={`text-base opacity-50 pt-2`}>점심 저녁 동일가</p>
                </div>
            </div>
        </div>
    )
}
