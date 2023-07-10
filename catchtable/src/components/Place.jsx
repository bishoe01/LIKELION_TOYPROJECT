import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX} from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';

export default function Place({date, time, people, searchedPlace}) {
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (index) => {
        setSelectedCard(index);
    };
    const placeData = [
        { title: '투파인드피터', image: "../images/place_ToFindPeter.jpg",  price:"평균 18,000", review:"121", detail:"다양하고 가성비 높은 파스타, 스테이크, 필라프, 음료로 유명한 레스토랑입니다."},
        { title: '한우궁', image: "../images/place_Hanugoong.jpg", review:"85", price:"평균 7,000", detail:"육개장 칼국수와 곰탕 그리고 만두로 유명한 식당입니다." },
        { title: '이서식당', image: "../images/place_Eseo.jpg", review:"90", price:"평균 13,000", detail:"삼겹살과 김치찌개 그리고 제육볶음으로 유명한 고기집입니다." },
        { title: '유메식당', image: "../images/place_Umme.jpg", review:"101", price:"평균 8,000", detail:"유라멘과 메라멘 그리고 차슈덮밥으로 유명한 일식집입니다." },
        { title: '밀플랜비', image: "../images/place_PlanB.jpg", review:"97", price:"평균 5,000", detail:"부리또와 핫도그가 가성비 좋고 맛있기로 유명합니다." },
        { title: '포지타노', image: "../images/place_Positano.jpg", review:"64", price:"평균 15,000", detail:"스테이크와 파스타가 맛있는 분위기 좋은 식당입니다." },
        { title: '앤의식탁', image: "../images/place_Ann.jpg", review:"60", price:"평균 10,000", detail:"앤의 식탁만의 덮밥이 맛있고, 파스타 또한 맛있는 분위기 맛집입니다." },
    ];

    const filteredPlaceData = searchedPlace ? placeData.filter(place => place.title === searchedPlace) : placeData;

  return (
    <div className={`${FlexCol}`}>
      <h1 className={`${FlexRow} gap-2 items-center px-20 pt-20 pb-12 basis-5/6 text-white text-3xl font-bold`}>예약이 가능한 곳</h1>
      <div className={`px-20 ${FlexRow} gap-4`}>
        <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
            날짜 : {date}
        </div>
        <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
            시간 : {time}
        </div>
        <div className={`text-white text-xl rounded-full border py-2 px-8 w-fit`}>
            인원 : {people}
        </div>
        </div>
        <Fade>
            <div className='grid grid-cols-3 z-0 gap-12 px-20 py-16'>
                {filteredPlaceData.map((place, index) => (
                <Pulse when={selectedCard === index}>
                    <PlaceCard
                        key={index}

                        title={place.title}
                        image={place.image}
                        detail={place.detail}
                        price={place.price}
                        review={place.review}

                        index={index}
                        selectedCard={selectedCard}
                        handleCardClick={handleCardClick}
                        />
                </Pulse>
            ))}
            </div>
        </Fade>
    </div>
  )
}

function PlaceCard({title, image, detail, price, review,
    index, selectedCard, handleCardClick}){

    const isSelected = selectedCard === index;

    return (
        <div className={`${FlexCol} text-white text-xl rounded-[20px] 
            bg-placeCard h-[500px] gap-4 border`}
            style={{ borderColor: isSelected ? '#FE3F02' : 'transparent' }}
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