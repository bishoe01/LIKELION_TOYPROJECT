import React from 'react'
import { FlexCol, FlexRow, PaddingY, PaddingX } from '../constants/style'
import { Fade, Flip, Slide } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import { useState } from 'react';
import PlaceCard from './PlaceCard';
import PlaceCardMore from './PlaceCardMore';
import { useNavigate } from 'react-router-dom';


export default function MyReservation() {
  const movePage = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (index) => {
    setSelectedCard(index);
    if (placeData[index].title === '밀플랜비') {
      setTimeout(() => {
        movePage('/hotplace');
      }, 1000);
    }
  };

  const placeData = [
    { title: '유메식당', image: "../images/place_Umme.jpg", review: "101", price: "평균 8,000", star: 4.8, detail: "유라멘과 메라멘 그리고 차슈덮밥으로 유명한 일식집입니다." },
    { title: '밀플랜비', image: "../images/place_PlanB.jpg", review: "97", price: "평균 5,000", star: 4.2, detail: "부리또와 핫도그가 가성비 좋고 맛있기로 유명합니다." },
    { title: '포지타노', image: "../images/place_Positano.jpg", review: "64", price: "평균 15,000", star: 5, detail: "스테이크와 파스타가 맛있는 분위기 좋은 식당입니다." },
    { title: '앤의식탁', image: "../images/place_Ann.jpg", review: "60", price: "평균 10,000", star: 4, detail: "앤의 식탁만의 덮밥이 맛있고, 파스타 또한 맛있는 분위기 맛집입니다." },
    { title: '밀플랜비', image: "../images/place_PlanB.jpg", review: "97", price: "평균 5,000", star: 4.2, detail: "부리또와 핫도그가 가성비 좋고 맛있기로 유명합니다." },
    { title: '한우궁', image: "../images/place_Hanugoong.jpg", review: "85", price: "평균 7,000", star: 3.5, detail: "육개장 칼국수와 곰탕 그리고 만두로 유명한 식당입니다." },
  ];

  const [showAllPlaces, setShowAllPlaces] = useState(false);
  const handleShowAllPlaces = () => {
    setShowAllPlaces(true);
  };
  const visiblePlaces = showAllPlaces ? placeData : placeData.slice(0, 5);

  return (
    <div className={`${FlexCol} px-20`}>
      <div className={`${FlexRow} items-center place-content-end gap-2`}>
        <p className={`text-2xl font-extrabold `}>최근 추가순</p>
        <button>
          <img className={`w-[16px] h-[10px]`} src='../images/MyPageArrow.png' />
        </button>
      </div>
      <p className={`text-3xl font-extrabold m-2 mb-12`}>내 정보</p>
      <Fade>
        <div className='grid grid-cols-3 z-0 gap-8 mb-20'>
          {visiblePlaces.map((place, index) => (
            <Pulse when={selectedCard === index} key={index}>
              <Fade>
                <PlaceCard
                  title={place.title}
                  image={place.image}
                  detail={place.detail}
                  price={place.price}
                  star={place.star}
                  review={place.review}

                  index={index}
                  selectedCard={selectedCard}
                  handleCardClick={handleCardClick}
                />
              </Fade>
            </Pulse>
          ))}
          {!showAllPlaces && visiblePlaces.length >= 5 && (
            <Fade>
              <button
                onClick={handleShowAllPlaces}>
                <PlaceCardMore />
              </button>
            </Fade>
          )}
        </div>
      </Fade>
    </div>
  )
}
