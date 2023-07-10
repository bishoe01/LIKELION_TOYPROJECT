import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';

export default function PlaceCard({title, image, detail, price, review, star, index, selectedCard, handleCardClick}){
    const isSelected = selectedCard === index;
    const renderStars = (numStars) => {
        const stars = [];
        const fullStars = Math.floor(numStars);
        const hasHalfStar = numStars % 1 !== 0;
        console.log(numStars);
        console.log(fullStars);
        console.log(hasHalfStar);
    
        for (let i = 0; i<fullStars; i++) {
          stars.push(<ImStarFull key={`full_${i}`} />);
        }
      
        if (hasHalfStar) {
          stars.push(<ImStarHalf key={`half`} />);
        }
      
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<ImStarEmpty key={`empty_${i}`} />);
        }
      
        return stars;
    }; 

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
                    {renderStars(star)}
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
